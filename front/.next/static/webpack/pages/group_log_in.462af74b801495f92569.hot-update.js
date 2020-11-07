webpackHotUpdate_N_E("pages/group_log_in",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-webcam */ "./node_modules/react-webcam/dist/react-webcam.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _showmember__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./showmember */ "./components/showmember.js");
/* harmony import */ var _node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../node_modules/react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\kota1\\Documents\\B_2003\\front\\components\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setRef", function (webcam) {
      _this.webcam = webcam;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "capture", function () {
      var img = _this.webcam.getScreenshot(); //console.log(img)


      var start = img.indexOf(',') + 1;
      var faceid = img.slice(start); //console.log(faceid)

      var method = "POST";
      var body1 = JSON.stringify({
        face_photo: faceid,
        facilityID: _this.props.facilityID
      });
      console.log(_this.props);
      var promise = new Promise(function (resolve) {
        fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/recognition/recognition', {
          method: "POST",
          body: body1
        }).then(function (response) {
          return response.json();
        }).then(function (responseJson) {
          //console.log(responseJson);
          if (responseJson.result == 0) {
            window.alert("再撮影してください");
          } else if (responseJson.result == 1) {
            window.alert("人数制限を超えています、管理者と相談してください");
          } else if (responseJson.result == 2) {
            window.alert("入場しました");
          } else if (responseJson.result == 3) {
            window.alert("退場しました");
          }

          resolve(responseJson); //location.href = "/log_in";
        })["catch"](function (error) {
          window.alert("認識時にエラーが起きました。もう一度入力してください。"); //location.href = "/log_in"
          //console.error('error');
        });
      });
      promise.then(function () {
        var body2 = JSON.stringify({
          name: _this.props.name,
          password_token: _this.props.password_token
        });
        var dom = document.getElementById('showmember');
        console.log(body2);
        fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/get_number/get_number', {
          method: "POST",
          body: body2
        }).then(function (response) {
          return response.json();
        }).then(function (responseJson) {
          if (responseJson.result == 1) {
            //メンバーリスト更新
            console.log(responseJson);
            console.log(responseJson.name);
            react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(__jsx(_showmember__WEBPACK_IMPORTED_MODULE_10__["default"], {
              memberlist: responseJson.name,
              __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 37
              }
            }), dom);
          } else {
            window.alert("グループ名またはグループパスワードが間違っています。もう一度入力してください。");
          }
        })["catch"](function (error) {
          window.alert("閲覧時にエラーが起きました。もう一度入力してください。"); //location.href = "/member_list"
          //console.error('error');
        });
      });
    });

    _this.doAction = _this.doAction.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "doAction",
    value: function doAction(e) {
      e.preventDefault();
      var dom = document.getElementById(whole);

      var element = __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, __jsx(Showcsv, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 18
        }
      }));

      react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(__jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }
      }), dom);
    }
  }, {
    key: "render",
    value: function render() {
      var videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      return __jsx("div", {
        className: "text-center",
        id: "whole",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 12
        }
      }, "Log in")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }
      }, "\u3000"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 12
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, "\u30AB\u30E1\u30E9\u306B\u9854\u3092\u6620\u3057\u3066\u3001\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }
      }, __jsx(react_webcam__WEBPACK_IMPORTED_MODULE_9___default.a, {
        audio: false,
        ref: this.setRef,
        screenshotFormat: "image/jpeg",
        videoConstraints: {
          videoConstraints: videoConstraints
        },
        onUserMediaError: function onUserMediaError() {
          return window.alert('cant access your camera');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 14
        }
      }), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "dark",
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        id: "showmember",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }
      })), __jsx("button", {
        onClick: this.doAction,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }
      }, "\u30E1\u30F3\u30D0\u30FC\u8A73\u7D30"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Login);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsInN0YXJ0IiwiaW5kZXhPZiIsImZhY2VpZCIsInNsaWNlIiwibWV0aG9kIiwiYm9keTEiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFjZV9waG90byIsImZhY2lsaXR5SUQiLCJjb25zb2xlIiwibG9nIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2giLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJib2R5MiIsIm5hbWUiLCJwYXNzd29yZF90b2tlbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvQWN0aW9uIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIndob2xlIiwiZWxlbWVudCIsInZpZGVvQ29uc3RyYWludHMiLCJ3aWR0aCIsImhlaWdodCIsImZhY2luZ01vZGUiLCJzZXRSZWYiLCJjYXB0dXJlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLEs7Ozs7O0FBRUYsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxpTkFlVixVQUFBQyxNQUFNLEVBQUk7QUFDZixZQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxLQWpCa0I7O0FBQUEsa05BbUJULFlBQU07QUFFWixVQUFNQyxHQUFHLEdBQUcsTUFBS0QsTUFBTCxDQUFZRSxhQUFaLEVBQVosQ0FGWSxDQUdaOzs7QUFFQSxVQUFNQyxLQUFLLEdBQUdGLEdBQUcsQ0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtLQUFMLENBQUgsQ0FIQSxFQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSyxNQUFDLG1EQUFEO0FBQ0QsYUFBSyxFQUFFLEtBRE47QUFFRCxXQUFHLEVBQUUsS0FBS0MsTUFGVDtBQUdELHdCQUFnQixFQUFDLFlBSGhCO0FBSUQsd0JBQWdCLEVBQUU7QUFBQ0osMEJBQWdCLEVBQWhCQTtBQUFELFNBSmpCO0FBS0Qsd0JBQWdCLEVBQUU7QUFBQSxpQkFBTWpCLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLHlCQUFiLENBQU47QUFBQSxTQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUwsRUFPQSxNQUFDLDZFQUFEO0FBQVEsZUFBTyxFQUFDLE1BQWhCO0FBQXVCLGVBQU8sRUFBSSxLQUFLcUIsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFQQSxFQVFBO0FBQUssVUFBRSxFQUFHLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJBLENBSkEsRUFlQTtBQUFRLGVBQU8sRUFBRSxLQUFLWCxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQWZBLENBREE7QUFtQkg7Ozs7RUFoSGVZLCtDOztBQWlIbkI7QUFFY2xELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwX2xvZ19pbi40NjJhZjc0YjgwMTQ5NWY5MjU2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJztcclxuaW1wb3J0IFNob3dtZW1iZXIgZnJvbSAnLi9zaG93bWVtYmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5kb0FjdGlvbiA9IHRoaXMuZG9BY3Rpb24uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0FjdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2hvbGUpO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gKFxyXG4gICAgICAgICAgICA8ZGl2PjxTaG93Y3N2Lz48L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcig8ZGl2PjwvZGl2Pixkb20pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZiA9IHdlYmNhbSA9PiB7XHJcbiAgICAgICAgdGhpcy53ZWJjYW0gPSB3ZWJjYW07XHJcbiAgICB9XHJcblxyXG4gICAgY2FwdHVyZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW1nID0gdGhpcy53ZWJjYW0uZ2V0U2NyZWVuc2hvdCgpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWcpXHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW1nLmluZGV4T2YoJywnKSArIDFcclxuICAgICAgICBjb25zdCBmYWNlaWQgPSBpbWcuc2xpY2Uoc3RhcnQpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmYWNlaWQpXHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkxID0gSlNPTi5zdHJpbmdpZnkoe2ZhY2VfcGhvdG86IGZhY2VpZCwgZmFjaWxpdHlJRDogdGhpcy5wcm9wcy5mYWNpbGl0eUlEfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3JlY29nbml0aW9uL3JlY29nbml0aW9uJyx7bWV0aG9kOiBcIlBPU1RcIixib2R5OiBib2R5MX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5YaN5pKu5b2x44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuS6uuaVsOWItumZkOOCkui2heOBiOOBpuOBhOOBvuOBmeOAgeeuoeeQhuiAheOBqOebuOirh+OBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLlhaXloLTjgZfjgb7jgZfjgZ9cIilcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6YCA5aC044GX44G+44GX44GfXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9sb2dfaW5cIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLoqo3orZjmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5MiA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOnRoaXMucHJvcHMubmFtZSxwYXNzd29yZF90b2tlbjp0aGlzLnByb3BzLnBhc3N3b3JkX3Rva2VuLH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd21lbWJlcicpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkyKTtcclxuICAgICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vOWRsc3FienkyNS5leGVjdXRlLWFwaS5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9nZXRfbnVtYmVyL2dldF9udW1iZXInLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHkyfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg7Pjg5Djg7zjg6rjgrnjg4jmm7TmlrBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uLm5hbWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcig8U2hvd21lbWJlciBtZW1iZXJsaXN0ID0ge3Jlc3BvbnNlSnNvbi5uYW1lfS8+LCBkb20pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLjgrDjg6vjg7zjg5flkI3jgb7jgZ/jga/jgrDjg6vjg7zjg5fjg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZnjgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLplrLopqfmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL21lbWJlcl9saXN0XCJcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIGNvbnN0IHZpZGVvQ29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoIDogMTI4MCxcclxuICAgICAgICAgICAgaGVpZ2h0IDogNzIwLFxyXG4gICAgICAgICAgICBmYWNpbmdNb2RlIDogXCJ1c2VyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBpZCA9ICd3aG9sZSc+XHJcbiAgICAgICAgPHA+PGgxPkxvZyBpbjwvaDE+PC9wPlxyXG4gICAgICAgIDxwPuOAgDwvcD5cclxuICAgICAgICA8cD48ZGl2PjxoND7jgqvjg6Hjg6njgavpoZTjgpLmmKDjgZfjgabjgIHjg63jgrDjgqTjg7Pjg5zjgr/jg7PjgpLmirzjgZfjgabjgY/jgaDjgZXjgYQ8L2g0PjwvZGl2PjwvcD5cclxuICAgICAgICA8ZGl2PjxXZWJjYW1cclxuICAgICAgICAgICAgYXVkaW89e2ZhbHNlfVxyXG4gICAgICAgICAgICByZWY9e3RoaXMuc2V0UmVmfVxyXG4gICAgICAgICAgICBzY3JlZW5zaG90Rm9ybWF0PVwiaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgIHZpZGVvQ29uc3RyYWludHM9e3t2aWRlb0NvbnN0cmFpbnRzfX1cclxuICAgICAgICAgICAgb25Vc2VyTWVkaWFFcnJvcj17KCkgPT4gd2luZG93LmFsZXJ0KCdjYW50IGFjY2VzcyB5b3VyIGNhbWVyYScpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFya1wiIG9uQ2xpY2sgPSB7dGhpcy5jYXB0dXJlfT7mkq7lvbE8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGlkID0gXCJzaG93bWVtYmVyXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259PuODoeODs+ODkOODvOips+e0sDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9