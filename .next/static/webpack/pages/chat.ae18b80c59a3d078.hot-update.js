"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM3Mzc3NCwiZXhwIjoxOTU4OTQ5Nzc0fQ.Hy_E7y91I_NVFGZBHNbSEb8_6SGvyTidgC-QVxOMKc4';\nvar SUPABASE_URL = 'https://xbpdygedadtomuloxmav.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_5__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction ChatPage() {\n    var handleNovaMensagem = /*\r\n    // Usuário\r\n    - Usuário digita no campo textarea\r\n    - Aperta enter para enviar\r\n    - Tem que adicionar o texto na listagem\r\n    \r\n    // Dev\r\n    - [X] Campo criado\r\n    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)\r\n    - [X] Lista de mensagens \r\n    */ function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            //id: listaDeMensagens.length + 1,\n            de: usuarioLogado,\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagens').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log('Criando mensagem: ', data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var usuarioLogado = roteamento.query.username;\n    console.log(roteamento.query);\n    console.log(usuarioLogado);\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        supabaseClient.from('mensagens').select('*').order('id', {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            console.log('Dados da consulta', data);\n            setListaDeMensagens(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                    lineNumber: 90,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                                lineNumber: 118,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                            lineNumber: 111,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n            lineNumber: 76,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"ihyXxdCk+cYMAef48fYFM0S3chI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                    lineNumber: 154,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                    lineNumber: 157,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n            lineNumber: 153,\n            columnNumber: 11\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de, \".png\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                                lineNumber: 201,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                                lineNumber: 211,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                                lineNumber: 214,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                        lineNumber: 196,\n                        columnNumber: 17\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n                lineNumber: 184,\n                columnNumber: 15\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Curso\\\\imersao\\\\pages\\\\chat.js\",\n        lineNumber: 171,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZEQUFBQSxDQUFTLHFEQUFDd0IsQ0FBRyxDQUFDO1lBQ25CLE1BQU07Z0JBR0ZGLEdBQUcsRUFBQztnQkFDSi9DLFVBQVUsRUFBRSxDQUFDO29CQUNYaUI7b0JBQ0FJLE9BQU8sRUFBRSxDQUFLO29CQUNkb0I7eUZBQ1E7d0JBQ05yQzs7Z0JBRUosQ0FBQzs7O3dCQUdDSjs0QkFDRXlDLFlBQVk7d0JBQ2QsQ0FBQzs7O2dDQUdDekMsU0FBQUEsb0VBQWE7Ozs7K0ZBSVhDLENBQUFBLHFEQUFTLENBQWM7b0NBQ3ZCdUM7Z0NBQ0YsQ0FBQzs7Ozs7OztrREFHRjNFLElBQUk7Z0NBQUNrRixHQUFHLEVBQUMsQ0FBUTswQ0FDZnBFLFFBQVEsQ0FBQ0MsRUFBRTs7Ozs7OztnQ0FHWm9CO29DQUNFb0QsTUFBQUEsNkRBQWdCO29DQUNoQkMsVUFBVTtvQ0FDVnpDLEtBQUssRUFBRTFDLFNBQVMsQ0FBQ21DO2dDQUNuQixDQUFDO2dDQUNEMEMsR0FBRyxFQUFDLENBQU07MENBRVIsR0FBRyxDQUFDTzs7Ozs7Ozs7Ozs7O29CQUdUM0UsUUFBUSxDQUFDRyxLQUFLOztlQXhDVkgsUUFBUSxDQUFDNkUsRUFBRTs7Ozs7UUEyQ3RCLENBQUM7Ozs7OztBQUdQLENBQUM7TUEvRFFoQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBTVVBBQkFTRV9BTk9OX0tFWSA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKeWIyeGxJam9pWVc1dmJpSXNJbWxoZENJNk1UWTBNek0zTXpjM05Dd2laWGh3SWpveE9UVTRPVFE1TnpjMGZRLkh5X0U3eTkxSV9OVkZHWkJITmJTRWI4XzZTR3Z5VGlkZ0MtUVZ4T01LYzQnO1xyXG5jb25zdCBTVVBBQkFTRV9VUkwgPSAnaHR0cHM6Ly94YnBkeWdlZGFkdG9tdWxveG1hdi5zdXBhYmFzZS5jbydcclxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBjcmVhdGVDbGllbnQoU1VQQUJBU0VfVVJMLCBTVVBBQkFTRV9BTk9OX0tFWSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xyXG4gICAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdXN1YXJpb0xvZ2FkbyA9IHJvdGVhbWVudG8ucXVlcnkudXNlcm5hbWU7XHJcbiAgICBjb25zb2xlLmxvZyhyb3RlYW1lbnRvLnF1ZXJ5KTtcclxuICAgIGNvbnNvbGUubG9nKHVzdWFyaW9Mb2dhZG8pO1xyXG4gICAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzdXBhYmFzZUNsaWVudFxyXG4gICAgICAgICAgICAuZnJvbSgnbWVuc2FnZW5zJylcclxuICAgICAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgICAgIC5vcmRlcignaWQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGFkb3MgZGEgY29uc3VsdGEnLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgIFtdKVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgLy8gVXN1w6FyaW9cclxuICAgIC0gVXN1w6FyaW8gZGlnaXRhIG5vIGNhbXBvIHRleHRhcmVhXHJcbiAgICAtIEFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxyXG4gICAgLSBUZW0gcXVlIGFkaWNpb25hciBvIHRleHRvIG5hIGxpc3RhZ2VtXHJcbiAgICBcclxuICAgIC8vIERldlxyXG4gICAgLSBbWF0gQ2FtcG8gY3JpYWRvXHJcbiAgICAtIFtYXSBWYW1vcyB1c2FyIG8gb25DaGFuZ2UgdXNhIG8gdXNlU3RhdGUgKHRlciBpZiBwcmEgY2FzbyBzZWphIGVudGVyIHByYSBsaW1wYXIgYSB2YXJpYXZlbClcclxuICAgIC0gW1hdIExpc3RhIGRlIG1lbnNhZ2VucyBcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XHJcbiAgICAgICAgY29uc3QgbWVuc2FnZW0gPSB7XHJcbiAgICAgICAgICAgIC8vaWQ6IGxpc3RhRGVNZW5zYWdlbnMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgZGU6IHVzdWFyaW9Mb2dhZG8sXHJcbiAgICAgICAgICAgIHRleHRvOiBub3ZhTWVuc2FnZW0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3VwYWJhc2VDbGllbnRcclxuICAgICAgICAgICAgLmZyb20oJ21lbnNhZ2VucycpXHJcbiAgICAgICAgICAgIC5pbnNlcnQoW1xyXG4gICAgICAgICAgICAgICAgbWVuc2FnZW1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JpYW5kbyBtZW5zYWdlbTogJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKFtcclxuICAgICAgICAgICAgICAgICAgZGF0YVswXSxcclxuICAgICAgICAgICAgICAgICAgLi4ubGlzdGFEZU1lbnNhZ2VucyxcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHNldE1lbnNhZ2VtKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ11cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxyXG4gICAgICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICczMnB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YURlTWVuc2FnZW5zfSAvPlxyXG4gICAgICAgICAgICAgIHsvKiB7bGlzdGFEZU1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtQXR1YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bWVuc2FnZW1BdHVhbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbUF0dWFsLmRlfToge21lbnNhZ2VtQXR1YWwudGV4dG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICovfVxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxCb3ggc3R5bGVTaGVldD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSA+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9J2hlYWRpbmc1Jz5cclxuICAgICAgICAgICAgICBDaGF0XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcclxuICAgICAgICAgICAgICBsYWJlbD0nTG9nb3V0J1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHByb3BzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBrZXk9e21lbnNhZ2VtLmlkfVxyXG4gICAgICAgICAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7bWVuc2FnZW0uZGV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbS5kZX1cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsImFwcENvbmZpZyIsImNyZWF0ZUNsaWVudCIsInVzZVJvdXRlciIsIlNVUEFCQVNFX0FOT05fS0VZIiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VDbGllbnQiLCJDaGF0UGFnZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiZGUiLCJ1c3VhcmlvTG9nYWRvIiwidGV4dG8iLCJmcm9tIiwiaW5zZXJ0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0TGlzdGFEZU1lbnNhZ2VucyIsImxpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInJvdGVhbWVudG8iLCJxdWVyeSIsInVzZXJuYW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInZhbG9yIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwid2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJsYWJlbCIsImhyZWYiLCJwcm9wcyIsInRhZyIsIm92ZXJmbG93IiwibWFwIiwiaG92ZXIiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});