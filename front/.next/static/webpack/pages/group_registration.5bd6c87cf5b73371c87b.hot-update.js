webpackHotUpdate_N_E("pages/group_registration",{

/***/ "./components/group_regi.js":
/*!**********************************!*\
  !*** ./components/group_regi.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Groupregistration; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_modules/react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _node_modules_react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../node_modules/react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/esm/InputGroup.js");






var _jsxFileName = "C:\\Users\\tsujishunya104\\Desktop\\shunya-s15\\jphacks\\B_2003\\front\\components\\group_regi.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Groupregistration = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Groupregistration, _Component);

  var _super = _createSuper(Groupregistration);

  function Groupregistration(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Groupregistration);

    _this = _super.call(this, props);
    _this.handlesubmit = _this.handlesubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Groupregistration, [{
    key: "handlesubmit",
    value: function handlesubmit(e) {
      e.preventDefault();
      var method = "POST";
      var body = JSON.stringify({
        name: information.name.value,
        email_address: information.email_address.value,
        password: information.password.value,
        limit: information.limit.value
      }); //console.log(body);

      fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/register_place/register_place', {
        method: "POST",
        body: body
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        //console.log(responseJson);
        if (responseJson.result == 2) {
          window.alert("あなたのトークンは" + responseJson.password_token + "です。必ずメモをとってください。");
        } else {
          window.alert("あなたの団体は登録済みです。ログインしてください。");
        }

        location.href = "/group_log_in";
      })["catch"](function (error) {
        window.alert("登録時にエラーが起きました。もう一度入力してください。");
        location.href = "/group_registration"; //console.error('error');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 16
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 16
        }
      }, "Group registration")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, "\u3000"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 16
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, "\"\u30B5\u30FC\u30D3\u30B9\u540D\"\u3078\u3088\u3046\u3053\u305D"))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, "\u767B\u9332\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx(_node_modules_react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mb-3",
        id: "information",
        onSubmit: this.handlesubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 16
        }
      }, __jsx(_node_modules_react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__["default"].Prepend, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, __jsx(_node_modules_react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__["default"].Text, {
        id: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }, "\u56E3\u4F53\u540D"), __jsx(FormControl, {
        type: "text",
        placeholder: "Enter your group name",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      })), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "email",
        name: "email_address",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, "\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "text",
        name: "password",
        minLength: "5",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, "\u540C\u6642\u306B\u6D3B\u52D5\u3067\u304D\u308B\u4EBA\u6570"), __jsx(_node_modules_react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
        type: "number",
        name: "limit",
        min: "1",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "info",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, "\u65B0\u898F\u767B\u9332"))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 16
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/group_log_in",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }, "\u30ED\u30B0\u30A4\u30F3"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, "Go Home")))));
    }
  }]);

  return Groupregistration;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/InputGroup.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/InputGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");






var InputGroupAppend = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group-append');
var InputGroupPrepend = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group-prepend');
var InputGroupText = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InputGroupText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InputGroupText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    type: "radio"
  }, props)));
};

/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["bsPrefix", "size", "className", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'input-group');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, size && bsPrefix + "-" + size)
  }));
});
InputGroup.displayName = 'InputGroup';

var InputGroupWithExtras = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox,
  Append: InputGroupAppend,
  Prepend: InputGroupPrepend
});

/* harmony default export */ __webpack_exports__["default"] = (InputGroupWithExtras);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncm91cF9yZWdpLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9JbnB1dEdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwcmVnaXN0cmF0aW9uIiwicHJvcHMiLCJoYW5kbGVzdWJtaXQiLCJiaW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiaW5mb3JtYXRpb24iLCJ2YWx1ZSIsImVtYWlsX2FkZHJlc3MiLCJwYXNzd29yZCIsImxpbWl0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VKc29uIiwicmVzdWx0Iiwid2luZG93IiwiYWxlcnQiLCJwYXNzd29yZF90b2tlbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsaUI7Ozs7O0FBRWpCLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUZlO0FBR2xCOzs7O2lDQUVZQyxDLEVBQUU7QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQWY7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLFlBQUksRUFBRUMsV0FBVyxDQUFDRCxJQUFaLENBQWlCRSxLQUF4QjtBQUE4QkMscUJBQWEsRUFBRUYsV0FBVyxDQUFDRSxhQUFaLENBQTBCRCxLQUF2RTtBQUE2RUUsZ0JBQVEsRUFBRUgsV0FBVyxDQUFDRyxRQUFaLENBQXFC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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDMUM7QUFDdEI7QUFDVjtBQUM0QjtBQUNEO0FBQ3JELHVCQUF1QixtRUFBa0I7QUFDekMsd0JBQXdCLG1FQUFrQjtBQUMxQyxxQkFBcUIsbUVBQWtCO0FBQ3ZDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHNCQUFzQiw0Q0FBSyxrREFBa0QsNENBQUssd0JBQXdCLGtGQUFRO0FBQ2xIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esc0JBQXNCLDRDQUFLLGtEQUFrRCw0Q0FBSyx3QkFBd0Isa0ZBQVE7QUFDbEg7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CLGNBQWMsa0JBQWtCO0FBQ2hDLGNBQWMsZUFBZTtBQUM3QixjQUFjLGdCQUFnQjtBQUM5QixjQUFjLG1CQUFtQjtBQUNqQztBQUNBLGlCQUFpQiw0Q0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1R0FBNkI7O0FBRTNDLGFBQWEseUVBQWtCO0FBQy9CLHNCQUFzQiw0Q0FBSywwQkFBMEIsa0ZBQVE7QUFDN0Q7QUFDQSxHQUFHO0FBQ0gsZUFBZSxpREFBVTtBQUN6QixHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBLDJCQUEyQixrRkFBUSxHQUFHO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLG1GQUFvQixFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwX3JlZ2lzdHJhdGlvbi41YmQ2Yzg3Y2Y1YjczMzcxYzg3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cHJlZ2lzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVzdWJtaXQgPSB0aGlzLmhhbmRsZXN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOiBpbmZvcm1hdGlvbi5uYW1lLnZhbHVlLGVtYWlsX2FkZHJlc3M6IGluZm9ybWF0aW9uLmVtYWlsX2FkZHJlc3MudmFsdWUscGFzc3dvcmQ6IGluZm9ybWF0aW9uLnBhc3N3b3JkLnZhbHVlLGxpbWl0OiBpbmZvcm1hdGlvbi5saW1pdC52YWx1ZSx9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3V6aThmZTF3dTQuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vcmVnaXN0ZXJfcGxhY2UvcmVnaXN0ZXJfcGxhY2UnLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHl9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMil7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLjgYLjgarjgZ/jga7jg4jjg7zjgq/jg7Pjga9cIityZXNwb25zZUpzb24ucGFzc3dvcmRfdG9rZW4rXCLjgafjgZnjgILlv4XjgZrjg6Hjg6LjgpLjgajjgaPjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLjgYLjgarjgZ/jga7lm6PkvZPjga/nmbvpjLLmuIjjgb/jgafjgZnjgILjg63jgrDjgqTjg7PjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvZ3JvdXBfbG9nX2luXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwi55m76Yyy5pmC44Gr44Ko44Op44O844GM6LW344GN44G+44GX44Gf44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL2dyb3VwX3JlZ2lzdHJhdGlvblwiXHJcbiAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPHA+PGgxPkdyb3VwIHJlZ2lzdHJhdGlvbjwvaDE+PC9wPlxyXG4gICAgICAgICAgICA8cD7jgIA8L3A+XHJcbiAgICAgICAgICAgIDxwPjxkaXY+PGgyPlwi44K144O844OT44K55ZCNXCLjgbjjgojjgYbjgZPjgZ08L2gyPjwvZGl2PjwvcD5cclxuICAgICAgICAgICAgPHA+PGRpdj48aDQ+55m76Yyy5oOF5aCx44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEPC9oND48L2Rpdj48L3A+XHJcbiAgICAgICAgICAgIDxwPjxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBpZD1cImluZm9ybWF0aW9uXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlc3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0IGlkID0gXCJuYW1lXCI+5Zuj5L2T5ZCNPC9JbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZ3JvdXAgbmFtZVwiIHJlcXVpcmVkPjwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+44Oh44O844Or44Ki44OJ44Os44K5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxfYWRkcmVzc1wiIHJlcXVpcmVkPjwvRm9ybS5Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPuODkeOCueODr+ODvOODiTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBtaW5MZW5ndGg9XCI1XCIgcmVxdWlyZWQ+PC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD7lkIzmmYLjgavmtLvli5XjgafjgY3jgovkurrmlbA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibGltaXRcIiBtaW49XCIxXCIgcmVxdWlyZWQ+PC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2luZm8nIHR5cGU9XCJzdWJtaXRcIj7mlrDopo/nmbvpjLI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwPjwvcD5cclxuICAgICAgICAgICAgPHA+PGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9ncm91cF9sb2dfaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT7jg63jgrDjgqTjg7M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkdvIEhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PjwvcD5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVdpdGhCc1ByZWZpeCBmcm9tICcuL2NyZWF0ZVdpdGhCc1ByZWZpeCc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xudmFyIElucHV0R3JvdXBBcHBlbmQgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2lucHV0LWdyb3VwLWFwcGVuZCcpO1xudmFyIElucHV0R3JvdXBQcmVwZW5kID0gY3JlYXRlV2l0aEJzUHJlZml4KCdpbnB1dC1ncm91cC1wcmVwZW5kJyk7XG52YXIgSW5wdXRHcm91cFRleHQgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2lucHV0LWdyb3VwLXRleHQnLCB7XG4gIENvbXBvbmVudDogJ3NwYW4nXG59KTtcblxudmFyIElucHV0R3JvdXBDaGVja2JveCA9IGZ1bmN0aW9uIElucHV0R3JvdXBDaGVja2JveChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRHcm91cFRleHQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9LCBwcm9wcykpKTtcbn07XG5cbnZhciBJbnB1dEdyb3VwUmFkaW8gPSBmdW5jdGlvbiBJbnB1dEdyb3VwUmFkaW8ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0R3JvdXBUZXh0LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICB0eXBlOiBcInJhZGlvXCJcbiAgfSwgcHJvcHMpKSk7XG59O1xuXG4vKipcbiAqXG4gKiBAcHJvcGVydHkge0lucHV0R3JvdXBBcHBlbmR9IEFwcGVuZFxuICogQHByb3BlcnR5IHtJbnB1dEdyb3VwUHJlcGVuZH0gUHJlcGVuZFxuICogQHByb3BlcnR5IHtJbnB1dEdyb3VwVGV4dH0gVGV4dFxuICogQHByb3BlcnR5IHtJbnB1dEdyb3VwUmFkaW99IFJhZGlvXG4gKiBAcHJvcGVydHkge0lucHV0R3JvdXBDaGVja2JveH0gQ2hlY2tib3hcbiAqL1xudmFyIElucHV0R3JvdXAgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJic1ByZWZpeFwiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIiwgXCJhc1wiXSk7XG5cbiAgYnNQcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdpbnB1dC1ncm91cCcpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCwgc2l6ZSAmJiBic1ByZWZpeCArIFwiLVwiICsgc2l6ZSlcbiAgfSkpO1xufSk7XG5JbnB1dEdyb3VwLmRpc3BsYXlOYW1lID0gJ0lucHV0R3JvdXAnO1xuXG52YXIgSW5wdXRHcm91cFdpdGhFeHRyYXMgPSBfZXh0ZW5kcyh7fSwgSW5wdXRHcm91cCwge1xuICBUZXh0OiBJbnB1dEdyb3VwVGV4dCxcbiAgUmFkaW86IElucHV0R3JvdXBSYWRpbyxcbiAgQ2hlY2tib3g6IElucHV0R3JvdXBDaGVja2JveCxcbiAgQXBwZW5kOiBJbnB1dEdyb3VwQXBwZW5kLFxuICBQcmVwZW5kOiBJbnB1dEdyb3VwUHJlcGVuZFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0R3JvdXBXaXRoRXh0cmFzOyJdLCJzb3VyY2VSb290IjoiIn0=