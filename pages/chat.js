import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM3Mzc3NCwiZXhwIjoxOTU4OTQ5Nzc0fQ.Hy_E7y91I_NVFGZBHNbSEb8_6SGvyTidgC-QVxOMKc4';
const SUPABASE_URL = 'https://xbpdygedadtomuloxmav.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function escutaMensagensEmTempoReal(adicionaMensagem) {
    return supabaseClient
    .from('mensagens')
    .on('INSERT', (respostaLive) => {
      adicionaMensagem(respostaLive.new);
    })
    .subscribe();
}
export default function ChatPage() {
    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username;
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

    React.useEffect(() => {
        supabaseClient
            .from('mensagens')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                console.log('Dados da consulta', data)
                setListaDeMensagens(data)
            })
            const subscription = escutaMensagensEmTempoReal((novaMensagem) => {
            console.log(novaMensagem)
            setListaDeMensagens((valorAtualDaLista) => {
                return [
                    novaMensagem,
                    ...valorAtualDaLista,
                ]
            })
        });
        return () => {
            subscription.unsubscribe();
          }
        }, []);


    /*
    // Usuário
    - Usuário digita no campo textarea
    - Aperta enter para enviar
    - Tem que adicionar o texto na listagem
    
    // Dev
    - [X] Campo criado
    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
    - [X] Lista de mensagens 
    */
    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            //id: listaDeMensagens.length + 1,
            de: usuarioLogado,
            texto: novaMensagem,
        };

        supabaseClient
            .from('mensagens')
            .insert([
                mensagem
            ])
            .then(({ data }) => {
                console.log('Criando mensagem: ', data);
             //   setListaDeMensagens([
              //    data[0],
             //     ...listaDeMensagens,
             //   ]);
            });
        setMensagem('');
    }

    return (
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: `url(https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-38.gif)`,
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            color: appConfig.theme.colors.neutrals['000']
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              borderRadius: '5px',
              backgroundColor: '#13262f',
              height: '100%',
              maxWidth: '95%',
              maxHeight: '95vh',
              padding: '32px',
            }}
          >
            <Header />
            <Box
              styleSheet={{
                position: 'relative',
                display: 'flex',
                flex: 1,
                height: '80%',
                backgroundColor: '#213d4a',
                flexDirection: 'column',
                borderRadius: '5px',
                padding: '16px',
              }}
            >
              <MessageList mensagens={listaDeMensagens} />
              {/* {listaDeMensagens.map((mensagemAtual) => {
                            return (
                                <li key={mensagemAtual.id}>
                                    {mensagemAtual.de}: {mensagemAtual.texto}
                                </li>
                            )
                        })} */}
              <Box
                as="form"
                styleSheet={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <TextField
                  value={mensagem}
                  onChange={(event) => {
                    const valor = event.target.value;
                    setMensagem(valor);
                  }}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      handleNovaMensagem(mensagem);
                    }
                  }}
                  placeholder="Insira sua mensagem aqui..."
                  type="textarea"
                  styleSheet={{
                    width: '100%',
                    border: '0',
                    resize: 'none',
                    borderRadius: '5px',
                    padding: '6px 8px',
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                    marginRight: '12px',
                    color: appConfig.theme.colors.neutrals[200],
                  }}
                />
                <Button 
                styleSheet={{
                    borderRadius: '50%',
                    padding: '0px 0px 3px 0px',
                    minWidth: '50px',
                    minHeight: '50px',
                    fontSize: '20px',
                    marginBottom: '8px',
                    lineHeight: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.neutrals[300],
                    marginRight: '5px'
                  }}
                    label='Enviar'
                    onClick={(event) => {
                        event.preventDefault();
                        handleNovaMensagem(mensagem);
                    }} 
                />
                <ButtonSendSticker 
                    onStickerClick={(sticker) => {
                        console.log('Sticker no banco')
                        handleNovaMensagem(':sticker:' + sticker)
                    }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )
    }
    
    function Header() {
      return (
        <>
          <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
            <Text variant='heading5'>
              Chat
            </Text>
            <Button
              variant='tertiary'
              colorVariant='neutral'
              label='Logout'
              href="/"
            />
          </Box>
        </>
      )
    }
    
    function MessageList(props) {
        // console.log(props);
        return (
          <Box
            tag="ul"
            styleSheet={{
              overflow: 'scroll',
              display: 'flex',
              flexDirection: 'column-reverse',
              flex: 1,
              color: appConfig.theme.colors.neutrals["000"],
              marginBottom: '16px',
            }}
          >
            {props.mensagens.map((mensagem) => {
              return (
                <Text
                  key={mensagem.id}
                  tag="li"
                  styleSheet={{
                    borderRadius: '5px',
                    padding: '6px',
                    marginBottom: '12px',
                    hover: {
                      backgroundColor: '#13262f',
                    }
                  }}
                >
                  <Box
                    styleSheet={{
                      marginBottom: '8px',
                    }}
                  >
                    <Image
                      styleSheet={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        display: 'inline-block',
                        marginRight: '8px',
                      }}
                      src={`https://github.com/${mensagem.de}.png`}
                    />
                    <Text tag="strong">
                      {mensagem.de}
                    </Text>
                    <Text
                      styleSheet={{
                        fontSize: '10px',
                        marginLeft: '8px',
                        color: appConfig.theme.colors.neutrals[300],
                      }}
                      tag="span"
                    >
                      {(new Date().toLocaleDateString())}
                    </Text>
                  </Box>
                  {/* [Declarativo] */}
                  {/* Condicional: {mensagem.texto.startsWith(':sticker:').toString()} */}
                  {mensagem.texto.startsWith(':sticker:')
                    ? (
                      <Image src={mensagem.texto.replace(':sticker:', '')} />
                    )
                    : (
                      mensagem.texto
                    )}
                  {/* if mensagem de texto possui stickers:
                                 mostra a imagem
                              else 
                                 mensagem.texto */}
                  {/* {mensagem.texto} */}
                </Text>
              );
            })}
          </Box>
        )
    }