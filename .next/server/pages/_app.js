/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__]);\n([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n__webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\nconst App = ({ Component , pageProps  })=>{\n    /* \n    //function declaration -> the setCandyMachine function determines the candyMachine variable\n    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();\n     \n    // takes the wallet variable initialised above and creates an anchorWallet i.e. a Wallet usable by Anchor client\n    \n    // set the host to Devnet\n    const rpcHost = 'https://api.devnet.solana.com'\n     \n    // establish a new connection to the solana devnet\n     const connection = new anchor.web3.Connection(rpcHost\n      ? rpcHost\n      : anchor.web3.clusterApiUrl('devnet')); \n*/ // Can be set to 'devnet', 'testnet', or 'mainnet-beta'\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet;\n    // custom RPC endpoint\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.clusterApiUrl)(network)\n    , [\n        network\n    ]);\n    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --\n    // Only the wallets you configure here will be compiled into your application, and only the dependencies\n    // of wallets that your users connect to will be loaded\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolflareWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.TorusWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.LedgerWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolletWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolletExtensionWalletAdapter({\n                network\n            }), \n        ]\n    , [\n        network\n    ]);\n    // The WalletProvider & WalletModalProvider components ensure that the moment you reach the website, asked to connect wallet\n    // if remove them, then login would only occur via the buttons \n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletModalProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/louis/Desktop/GravityRun/reactapp/pages/_app.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/home/louis/Desktop/GravityRun/reactapp/pages/_app.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/louis/Desktop/GravityRun/reactapp/pages/_app.tsx\",\n                lineNumber: 77,\n                columnNumber: 15\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/louis/Desktop/GravityRun/reactapp/pages/_app.tsx\",\n            lineNumber: 76,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/louis/Desktop/GravityRun/reactapp/pages/_app.tsx\",\n        lineNumber: 75,\n        columnNumber: 7\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDakI7QUFDYztBQUdiO0FBQ047QUFTUjtBQVN2Q2MsbUJBQU8sQ0FBQyw2R0FBNEM7QUFDcERBLG1CQUFPLENBQUMsbURBQXVCO0FBSy9CLEtBQUssQ0FBQ0MsR0FBRyxJQUFrQixDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBRXBELEVBYUg7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUlBLEVBQXVEO0lBQ3ZELEtBQUssQ0FBQ0MsT0FBTyxHQUFHZixvRkFBMkI7SUFFM0MsRUFBc0I7SUFDdEIsS0FBSyxDQUFDaUIsUUFBUSxHQUFHbEIsOENBQU8sS0FBT0ksOERBQWEsQ0FBQ1ksT0FBTztNQUFHLENBQUNBO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBRWhFLEVBQXlHO0lBQ3pHLEVBQXdHO0lBQ3hHLEVBQXVEO0lBQ3ZELEtBQUssQ0FBQ0csT0FBTyxHQUFHbkIsOENBQU8sS0FDYixDQUFDO1lBQ0gsR0FBRyxDQUFDTSxnRkFBb0I7WUFDeEIsR0FBRyxDQUFDQyw4RUFBa0I7WUFDdEIsR0FBRyxDQUFDQyxpRkFBcUI7WUFDekIsR0FBRyxDQUFDRyw4RUFBa0I7WUFDdEIsR0FBRyxDQUFDTiwrRUFBbUI7WUFDdkIsR0FBRyxDQUFDSywrRUFBbUIsQ0FBQyxDQUFDO2dCQUFDTSxPQUFPO1lBQUMsQ0FBQztZQUNuQyxHQUFHLENBQUNQLHdGQUE0QixDQUFDLENBQUM7Z0JBQUNPLE9BQU87WUFBQyxDQUFDO1FBQ2hELENBQUM7TUFDRCxDQUFDQTtRQUFBQSxPQUFPO0lBQUEsQ0FBQztJQUdiLEVBQTRIO0lBQzVILEVBQStEO0lBQy9ELE1BQU0sNkVBQ0RkLDRFQUFrQjtRQUFDZ0IsUUFBUSxFQUFFQSxRQUFROzhGQUNqQ2Ysd0VBQWM7WUFBQ2dCLE9BQU8sRUFBRUEsT0FBTztZQUFFQyxXQUFXO2tHQUN4Q3RCLGdGQUFtQjs7Z0dBQ2ZnQixTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7Z0dBQ3ZCTSxDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEIsQ0FBQztBQUVELGlFQUFlUixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0MS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2FsbGV0TW9kYWxQcm92aWRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcbmltcG9ydCB7XG4gIENvbm5lY3Rpb25Qcm92aWRlcixcbiAgV2FsbGV0UHJvdmlkZXJ9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCB7XG4gIExlZGdlcldhbGxldEFkYXB0ZXIsXG4gIFBoYW50b21XYWxsZXRBZGFwdGVyLFxuICBTbG9wZVdhbGxldEFkYXB0ZXIsXG4gIFNvbGZsYXJlV2FsbGV0QWRhcHRlcixcbiAgU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlcixcbiAgU29sbGV0V2FsbGV0QWRhcHRlcixcbiAgVG9ydXNXYWxsZXRBZGFwdGVyLFxufSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgKiBhcyBhbmNob3IgZnJvbSAnQHByb2plY3Qtc2VydW0vYW5jaG9yJ1xuXG5pbXBvcnQgVW5pdHksIHsgVW5pdHlDb250ZXh0IH0gZnJvbSBcInJlYWN0LXVuaXR5LXdlYmdsXCI7XG5pbXBvcnQgSG9tZSBmcm9tICcuJztcblxuXG5cbnJlcXVpcmUoJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzcycpO1xucmVxdWlyZSgnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJyk7XG5cblxuXG5cbmNvbnN0IEFwcDogRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuXG4gICAgIC8qIFxuICAgIC8vZnVuY3Rpb24gZGVjbGFyYXRpb24gLT4gdGhlIHNldENhbmR5TWFjaGluZSBmdW5jdGlvbiBkZXRlcm1pbmVzIHRoZSBjYW5keU1hY2hpbmUgdmFyaWFibGVcbiAgICBjb25zdCBbY2FuZHlNYWNoaW5lLCBzZXRDYW5keU1hY2hpbmVdID0gdXNlU3RhdGU8Q2FuZHlNYWNoaW5lQWNjb3VudD4oKTtcbiAgICAgXG4gICAgLy8gdGFrZXMgdGhlIHdhbGxldCB2YXJpYWJsZSBpbml0aWFsaXNlZCBhYm92ZSBhbmQgY3JlYXRlcyBhbiBhbmNob3JXYWxsZXQgaS5lLiBhIFdhbGxldCB1c2FibGUgYnkgQW5jaG9yIGNsaWVudFxuICAgIFxuICAgIC8vIHNldCB0aGUgaG9zdCB0byBEZXZuZXRcbiAgICBjb25zdCBycGNIb3N0ID0gJ2h0dHBzOi8vYXBpLmRldm5ldC5zb2xhbmEuY29tJ1xuICAgICBcbiAgICAvLyBlc3RhYmxpc2ggYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgc29sYW5hIGRldm5ldFxuICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IGFuY2hvci53ZWIzLkNvbm5lY3Rpb24ocnBjSG9zdFxuICAgICAgPyBycGNIb3N0XG4gICAgICA6IGFuY2hvci53ZWIzLmNsdXN0ZXJBcGlVcmwoJ2Rldm5ldCcpKTsgXG4qL1xuICBcbiAgXG5cbiAgLy8gQ2FuIGJlIHNldCB0byAnZGV2bmV0JywgJ3Rlc3RuZXQnLCBvciAnbWFpbm5ldC1iZXRhJ1xuICBjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuRGV2bmV0O1xuXG4gIC8vIGN1c3RvbSBSUEMgZW5kcG9pbnRcbiAgY29uc3QgZW5kcG9pbnQgPSB1c2VNZW1vKCgpID0+IGNsdXN0ZXJBcGlVcmwobmV0d29yayksIFtuZXR3b3JrXSk7XG5cbiAgLy8gQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzIGluY2x1ZGVzIGFsbCB0aGUgYWRhcHRlcnMgYnV0IHN1cHBvcnRzIHRyZWUgc2hha2luZyBhbmQgbGF6eSBsb2FkaW5nIC0tXG4gIC8vIE9ubHkgdGhlIHdhbGxldHMgeW91IGNvbmZpZ3VyZSBoZXJlIHdpbGwgYmUgY29tcGlsZWQgaW50byB5b3VyIGFwcGxpY2F0aW9uLCBhbmQgb25seSB0aGUgZGVwZW5kZW5jaWVzXG4gIC8vIG9mIHdhbGxldHMgdGhhdCB5b3VyIHVzZXJzIGNvbm5lY3QgdG8gd2lsbCBiZSBsb2FkZWRcbiAgY29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oXG4gICAgICAoKSA9PiBbXG4gICAgICAgICAgbmV3IFBoYW50b21XYWxsZXRBZGFwdGVyKCksXG4gICAgICAgICAgbmV3IFNsb3BlV2FsbGV0QWRhcHRlcigpLFxuICAgICAgICAgIG5ldyBTb2xmbGFyZVdhbGxldEFkYXB0ZXIoKSxcbiAgICAgICAgICBuZXcgVG9ydXNXYWxsZXRBZGFwdGVyKCksXG4gICAgICAgICAgbmV3IExlZGdlcldhbGxldEFkYXB0ZXIoKSxcbiAgICAgICAgICBuZXcgU29sbGV0V2FsbGV0QWRhcHRlcih7IG5ldHdvcmsgfSksXG4gICAgICAgICAgbmV3IFNvbGxldEV4dGVuc2lvbldhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxuICAgICAgXSxcbiAgICAgIFtuZXR3b3JrXVxuICApO1xuICBcbiAgLy8gVGhlIFdhbGxldFByb3ZpZGVyICYgV2FsbGV0TW9kYWxQcm92aWRlciBjb21wb25lbnRzIGVuc3VyZSB0aGF0IHRoZSBtb21lbnQgeW91IHJlYWNoIHRoZSB3ZWJzaXRlLCBhc2tlZCB0byBjb25uZWN0IHdhbGxldFxuICAvLyBpZiByZW1vdmUgdGhlbSwgdGhlbiBsb2dpbiB3b3VsZCBvbmx5IG9jY3VyIHZpYSB0aGUgYnV0dG9ucyBcbiAgcmV0dXJuIChcbiAgICAgIDxDb25uZWN0aW9uUHJvdmlkZXIgZW5kcG9pbnQ9e2VuZHBvaW50fT5cbiAgICAgICAgICA8V2FsbGV0UHJvdmlkZXIgd2FsbGV0cz17d2FsbGV0c30gYXV0b0Nvbm5lY3Q+XG4gICAgICAgICAgICAgIDxXYWxsZXRNb2RhbFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1dhbGxldE1vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgPC9XYWxsZXRQcm92aWRlcj5cbiAgICAgIDwvQ29ubmVjdGlvblByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VNZW1vIiwiV2FsbGV0QWRhcHRlck5ldHdvcmsiLCJDb25uZWN0aW9uUHJvdmlkZXIiLCJXYWxsZXRQcm92aWRlciIsImNsdXN0ZXJBcGlVcmwiLCJMZWRnZXJXYWxsZXRBZGFwdGVyIiwiUGhhbnRvbVdhbGxldEFkYXB0ZXIiLCJTbG9wZVdhbGxldEFkYXB0ZXIiLCJTb2xmbGFyZVdhbGxldEFkYXB0ZXIiLCJTb2xsZXRFeHRlbnNpb25XYWxsZXRBZGFwdGVyIiwiU29sbGV0V2FsbGV0QWRhcHRlciIsIlRvcnVzV2FsbGV0QWRhcHRlciIsInJlcXVpcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuZXR3b3JrIiwiRGV2bmV0IiwiZW5kcG9pbnQiLCJ3YWxsZXRzIiwiYXV0b0Nvbm5lY3QiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/styles.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();