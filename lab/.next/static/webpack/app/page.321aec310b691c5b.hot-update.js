"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/task/TaskForm.tsx":
/*!*******************************!*\
  !*** ./app/task/TaskForm.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst TaskForm = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"TaskForm.useEffect\": ()=>{\n            fetch('/api/users').then({\n                \"TaskForm.useEffect\": (res)=>res.json()\n            }[\"TaskForm.useEffect\"]).then({\n                \"TaskForm.useEffect\": (data)=>setUser(data)\n            }[\"TaskForm.useEffect\"]);\n        }\n    }[\"TaskForm.useEffect\"], []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch('/api/tasks', {\n                method: 'POST',\n                body: JSON.stringify({\n                    title,\n                    date,\n                    userId\n                }),\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n            if (!response.ok) throw new Error('Error creating task');\n        } catch (error) {\n            console.error('Failed to create task:', error);\n            alert('Failed to create task');\n        }\n        setTitle('');\n        setDate('');\n        setUserId('');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-lg w-full p-6 bg-white rounded-lg shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold text-gray-800 mb-6\",\n                    children: \"CREA UNA NUEVA TAREA\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value),\n                            placeholder: \"Inserta tu t\\xedtulo\",\n                            required: true,\n                            className: \"w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            value: date,\n                            onChange: (e)=>setDate(e.target.value),\n                            className: \"w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: userId,\n                            onChange: (e)=>setUserId(e.target.value),\n                            required: true,\n                            className: \"w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    children: \"Select a user\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                user.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: user.id,\n                                        children: user.name\n                                    }, user.id, false, {\n                                        fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition\",\n                            children: \"Create Task\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\crombie\\\\to-do\\\\lab\\\\app\\\\task\\\\TaskForm.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskForm, \"j/kqkntRkk90AJtVDsWawpGe6ok=\");\n_c = TaskForm;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskForm);\nvar _c;\n$RefreshReg$(_c, \"TaskForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90YXNrL1Rhc2tGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUQ7QUFFbkQsTUFBTUcsV0FBVzs7SUFDZixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQXNDLEVBQUU7SUFDeEUsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQTs4QkFBQztZQUNSVyxNQUFNLGNBQ0hDLElBQUk7c0NBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtxQ0FDdEJGLElBQUk7c0NBQUMsQ0FBQ0csT0FBU1gsUUFBUVc7O1FBQzVCOzZCQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1SLE1BQU0sY0FBYztnQkFDekNTLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRWQ7b0JBQU9GO29CQUFNRjtnQkFBTztnQkFDM0NtQixTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFDaEQ7WUFFQSxJQUFJLENBQUNMLFNBQVNNLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07UUFDcEMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQ3hDRSxNQUFNO1FBQ1I7UUFDQW5CLFNBQVM7UUFDVEYsUUFBUTtRQUNSRixVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ3dCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBd0M7Ozs7Ozs4QkFDdEQsOERBQUNFO29CQUFLQyxVQUFVbEI7b0JBQWNlLFdBQVU7O3NDQUN0Qyw4REFBQ0k7NEJBQ0NDLE1BQUs7NEJBQ0xDLE9BQU81Qjs0QkFDUDZCLFVBQVUsQ0FBQ3JCLElBQU1QLFNBQVNPLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7NEJBQ3hDRyxhQUFZOzRCQUNaQyxRQUFROzRCQUNSVixXQUFVOzs7Ozs7c0NBRVosOERBQUNJOzRCQUNDQyxNQUFLOzRCQUNMQyxPQUFPOUI7NEJBQ1ArQixVQUFVLENBQUNyQixJQUFNVCxRQUFRUyxFQUFFc0IsTUFBTSxDQUFDRixLQUFLOzRCQUN2Q04sV0FBVTs7Ozs7O3NDQUVaLDhEQUFDVzs0QkFDQ0wsT0FBT2hDOzRCQUNQaUMsVUFBVSxDQUFDckIsSUFBTVgsVUFBVVcsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDekNJLFFBQVE7NEJBQ1JWLFdBQVU7OzhDQUVWLDhEQUFDWTtvQ0FBT04sT0FBTTtvQ0FBR08sUUFBUTs4Q0FBQzs7Ozs7O2dDQUd6QnpDLEtBQUswQyxHQUFHLENBQUMsQ0FBQzFDLHFCQUNULDhEQUFDd0M7d0NBQXFCTixPQUFPbEMsS0FBSzJDLEVBQUU7a0RBQ2pDM0MsS0FBSzRDLElBQUk7dUNBREM1QyxLQUFLMkMsRUFBRTs7Ozs7Ozs7Ozs7c0NBS3hCLDhEQUFDRTs0QkFDQ1osTUFBSzs0QkFDTEwsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTNFTTdCO0tBQUFBO0FBNkVOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJFOlxcY3JvbWJpZVxcdG8tZG9cXGxhYlxcYXBwXFx0YXNrXFxUYXNrRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGFza0Zvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8QXJyYXk8eyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfT4+KFtdKTtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKCcvYXBpL3VzZXJzJylcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFVzZXIoZGF0YSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90YXNrcycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlLCBkYXRlLCB1c2VySWQgfSksXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBjcmVhdGluZyB0YXNrJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHRhc2s6JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgnRmFpbGVkIHRvIGNyZWF0ZSB0YXNrJyk7XHJcbiAgICB9XHJcbiAgICBzZXRUaXRsZSgnJyk7XHJcbiAgICBzZXREYXRlKCcnKTtcclxuICAgIHNldFVzZXJJZCgnJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgdy1mdWxsIHAtNiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi02XCI+Q1JFQSBVTkEgTlVFVkEgVEFSRUE8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IHTDrXR1bG9cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpyaW5nIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGF0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6cmluZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcklkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJJZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgU2VsZWN0IGEgdXNlclxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAge3VzZXIubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3VzZXIuaWR9IHZhbHVlPXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBUYXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhc2tGb3JtIiwidXNlciIsInNldFVzZXIiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJkYXRlIiwic2V0RGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImVycm9yIiwiY29uc29sZSIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInNlbGVjdCIsIm9wdGlvbiIsImRpc2FibGVkIiwibWFwIiwiaWQiLCJuYW1lIiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/task/TaskForm.tsx\n"));

/***/ })

});