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
/* harmony import */ var _showcsv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./showcsv */ "./components/showcsv.js");
/* harmony import */ var _node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../node_modules/react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__);







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
                lineNumber: 82,
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
      var dom1 = document.getElementById(whole);

      var element = __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, __jsx(_showcsv__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 18
        }
      }));

      react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(element, dom1);
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
          lineNumber: 104,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 12
        }
      }, "Log in")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }, "\u3000"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 12
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }, "\u30AB\u30E1\u30E9\u306B\u9854\u3092\u6620\u3057\u3066\u3001\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
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
          lineNumber: 108,
          columnNumber: 14
        }
      }), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "dark",
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        id: "showmember",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }
      })), __jsx("button", {
        onClick: this.doAction,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsInN0YXJ0IiwiaW5kZXhPZiIsImZhY2VpZCIsInNsaWNlIiwibWV0aG9kIiwiYm9keTEiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFjZV9waG90byIsImZhY2lsaXR5SUQiLCJjb25zb2xlIiwibG9nIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2giLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJib2R5MiIsIm5hbWUiLCJwYXNzd29yZF90b2tlbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvQWN0aW9uIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvbTEiLCJ3aG9sZSIsImVsZW1lbnQiLCJ2aWRlb0NvbnN0cmFpbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJmYWNpbmdNb2RlIiwic2V0UmVmIiwiY2FwdHVyZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxLOzs7OztBQUVGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsaU5BZVYsVUFBQUMsTUFBTSxFQUFJO0FBQ2YsWUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0gsS0FqQmtCOztBQUFBLGtOQW1CVCxZQUFNO0FBRVosVUFBTUMsR0FBRyxHQUFHLE1BQUtELE1BQUwsQ0FBWUUsYUFBWixFQUFaLENBRlksQ0FHWjs7O0FBRUEsVUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQWpDO0FBQ0EsVUFBTUMsTUFBTSxHQUFHSixHQUFHLENBQUNLLEtBQUosQ0FBVUgsS0FBVixDQUFmLENBTlksQ0FPWjs7QUFFQSxVQUFNSSxNQUFNLEdBQUcsTUFBZjtBQUNBLFVBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ0Msa0JBQVUsRUFBRU4sTUFBYjtBQUFxQk8sa0JBQVUsRUFBRSxNQUFLYixLQUFMLENBQVdhO0FBQTVDLE9BQWYsQ0FBZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLZixLQUFqQjtBQUVBLFVBQU1nQixPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUNyQ0MsYUFBSyxDQUFDLGdGQUFELEVBQWtGO0FBQUNYLGdCQUFNLEVBQUUsTUFBVDtBQUFnQlksY0FBSSxFQUFFWDtBQUF0QixTQUFsRixDQUFMLENBQ0NZLElBREQsQ0FDTSxVQUFDQyxRQUFEO0FBQUEsaUJBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsU0FETixFQUVDRixJQUZELENBRU0sVUFBQ0csWUFBRCxFQUFrQjtBQUN4QjtBQUNJLGNBQUdBLFlBQVksQ0FBQ0MsTUFBYixJQUF1QixDQUExQixFQUE0QjtBQUN4QkMsa0JBQU0sQ0FBQ0MsS0FBUCxDQUFhLFdBQWI7QUFDSCxXQUZELE1BRU0sSUFBR0gsWUFBWSxDQUFDQyxNQUFiLElBQXVCLENBQTFCLEVBQTRCO0FBQzlCQyxrQkFBTSxDQUFDQyxLQUFQLENBQWEsMEJBQWI7QUFDSCxXQUZLLE1BRUEsSUFBR0gsWUFBWSxDQUFDQyxNQUFiLElBQXVCLENBQTFCLEVBQTRCO0FBQzlCQyxrQkFBTSxDQUFDQyxLQUFQLENBQWEsUUFBYjtBQUNILFdBRkssTUFFQSxJQUFHSCxZQUFZLENBQUNDLE1BQWIsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDOUJDLGtCQUFNLENBQUNDLEtBQVAsQ0FBYSxRQUFiO0FBQ0g7O0FBQ0RULGlCQUFPLENBQUNNLFlBQUQsQ0FBUCxDQVhvQixDQVlwQjtBQUNILFNBZkQsV0FnQk8sVUFBQ0ksS0FBRCxFQUFVO0FBQ2JGLGdCQUFNLENBQUNDLEtBQVAsQ0FBYSw2QkFBYixFQURhLENBRWI7QUFDQTtBQUNILFNBcEJEO0FBcUJILE9BdEJlLENBQWhCO0FBMEJBWCxhQUFPLENBQUNLLElBQVIsQ0FBYSxZQUFNO0FBQ2YsWUFBTVEsS0FBSyxHQUFHbkIsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ21CLGNBQUksRUFBQyxNQUFLOUIsS0FBTCxDQUFXOEIsSUFBakI7QUFBc0JDLHdCQUFjLEVBQUMsTUFBSy9CLEtBQUwsQ0FBVytCO0FBQWhELFNBQWYsQ0FBZDtBQUNBLFlBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQVo7QUFDQXBCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYyxLQUFaO0FBQ0FWLGFBQUssQ0FBQyw4RUFBRCxFQUFnRjtBQUFDWCxnQkFBTSxFQUFFLE1BQVQ7QUFBZ0JZLGNBQUksRUFBRVM7QUFBdEIsU0FBaEYsQ0FBTCxDQUNDUixJQURELENBQ00sVUFBQ0MsUUFBRDtBQUFBLGlCQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLFNBRE4sRUFFQ0YsSUFGRCxDQUVNLFVBQUNHLFlBQUQsRUFBa0I7QUFDcEIsY0FBR0EsWUFBWSxDQUFDQyxNQUFiLElBQXVCLENBQTFCLEVBQTRCO0FBQ3hCO0FBQ0FYLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVMsWUFBWjtBQUNBVixtQkFBTyxDQUFDQyxHQUFSLENBQVlTLFlBQVksQ0FBQ00sSUFBekI7QUFFQUssNERBQVEsQ0FBQ0MsTUFBVCxDQUFnQixNQUFDLG9EQUFEO0FBQVksd0JBQVUsRUFBSVosWUFBWSxDQUFDTSxJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWhCLEVBQWdFRSxHQUFoRTtBQUVILFdBUEQsTUFPSztBQUNETixrQkFBTSxDQUFDQyxLQUFQLENBQWEseUNBQWI7QUFDSDtBQUNKLFNBYkQsV0FjTyxVQUFDQyxLQUFELEVBQVU7QUFDYkYsZ0JBQU0sQ0FBQ0MsS0FBUCxDQUFhLDZCQUFiLEVBRGEsQ0FFYjtBQUNBO0FBQ0gsU0FsQkQ7QUFtQkgsT0F2QkQ7QUF3QkgsS0FsRmtCOztBQUVmLFVBQUtVLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLHlHQUFoQjtBQUZlO0FBR2xCOzs7OzZCQUVRQyxDLEVBQUU7QUFDUEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsSUFBSSxHQUFHUixRQUFRLENBQUNDLGNBQVQsQ0FBd0JRLEtBQXhCLENBQWI7O0FBRUEsVUFBTUMsT0FBTyxHQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSyxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBTCxDQURKOztBQUdBUixzREFBUSxDQUFDQyxNQUFULENBQWdCTyxPQUFoQixFQUF3QkYsSUFBeEI7QUFDSDs7OzZCQXVFUTtBQUNMLFVBQU1HLGdCQUFnQixHQUFHO0FBQ3JCQyxhQUFLLEVBQUcsSUFEYTtBQUVyQkMsY0FBTSxFQUFHLEdBRlk7QUFHckJDLGtCQUFVLEVBQUc7QUFIUSxPQUF6QjtBQU1BLGFBQ0E7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsVUFBRSxFQUFHLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxDQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQSxFQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrS0FBTCxDQUFILENBSEEsRUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssTUFBQyxtREFBRDtBQUNELGFBQUssRUFBRSxLQUROO0FBRUQsV0FBRyxFQUFFLEtBQUtDLE1BRlQ7QUFHRCx3QkFBZ0IsRUFBQyxZQUhoQjtBQUlELHdCQUFnQixFQUFFO0FBQUNKLDBCQUFnQixFQUFoQkE7QUFBRCxTQUpqQjtBQUtELHdCQUFnQixFQUFFO0FBQUEsaUJBQU1sQixNQUFNLENBQUNDLEtBQVAsQ0FBYSx5QkFBYixDQUFOO0FBQUEsU0FMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFMLEVBT0EsTUFBQyw2RUFBRDtBQUFRLGVBQU8sRUFBQyxNQUFoQjtBQUF1QixlQUFPLEVBQUksS0FBS3NCLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEEsRUFRQTtBQUFLLFVBQUUsRUFBRyxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSQSxDQUpBLEVBZUE7QUFBUSxlQUFPLEVBQUUsS0FBS1osUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFmQSxDQURBO0FBbUJIOzs7O0VBaEhlYSwrQzs7QUFpSG5CO0FBRWNuRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cF9sb2dfaW4uODQ5NmFiZDFmOThkZjZhNzM3MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgV2ViY2FtIGZyb20gJ3JlYWN0LXdlYmNhbSc7XHJcbmltcG9ydCBTaG93bWVtYmVyIGZyb20gJy4vc2hvd21lbWJlcic7XHJcbmltcG9ydCBTaG93Y3N2IGZyb20gJy4vc2hvd2Nzdic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9BY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRvbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aG9sZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+PFNob3djc3YvPjwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKGVsZW1lbnQsZG9tMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVmID0gd2ViY2FtID0+IHtcclxuICAgICAgICB0aGlzLndlYmNhbSA9IHdlYmNhbTtcclxuICAgIH1cclxuXHJcbiAgICBjYXB0dXJlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbWcgPSB0aGlzLndlYmNhbS5nZXRTY3JlZW5zaG90KClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGltZylcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbWcuaW5kZXhPZignLCcpICsgMVxyXG4gICAgICAgIGNvbnN0IGZhY2VpZCA9IGltZy5zbGljZShzdGFydClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZhY2VpZClcclxuXHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgICAgICAgY29uc3QgYm9keTEgPSBKU09OLnN0cmluZ2lmeSh7ZmFjZV9waG90bzogZmFjZWlkLCBmYWNpbGl0eUlEOiB0aGlzLnByb3BzLmZhY2lsaXR5SUR9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vcmVjb2duaXRpb24vcmVjb2duaXRpb24nLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHkxfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZUpzb24pO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLlho3mkq7lvbHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5Lq65pWw5Yi26ZmQ44KS6LaF44GI44Gm44GE44G+44GZ44CB566h55CG6ICF44Go55u46KuH44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuWFpeWgtOOBl+OBvuOBl+OBn1wiKVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAzKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLpgIDloLTjgZfjgb7jgZfjgZ9cIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuiqjeitmOaZguOBq+OCqOODqeODvOOBjOi1t+OBjeOBvuOBl+OBn+OAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvbG9nX2luXCJcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkyID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6dGhpcy5wcm9wcy5uYW1lLHBhc3N3b3JkX3Rva2VuOnRoaXMucHJvcHMucGFzc3dvcmRfdG9rZW4sfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93bWVtYmVyJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keTIpO1xyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2dldF9udW1iZXIvZ2V0X251bWJlcicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keTJ9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODs+ODkOODvOODquOCueODiOabtOaWsFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbilcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24ubmFtZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKDxTaG93bWVtYmVyIG1lbWJlcmxpc3QgPSB7cmVzcG9uc2VKc29uLm5hbWV9Lz4sIGRvbSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuOCsOODq+ODvOODl+WQjeOBvuOBn+OBr+OCsOODq+ODvOODl+ODkeOCueODr+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmeOAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIumWsuimp+aZguOBq+OCqOODqeODvOOBjOi1t+OBjeOBvuOBl+OBn+OAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvbWVtYmVyX2xpc3RcIlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgY29uc3QgdmlkZW9Db25zdHJhaW50cyA9IHtcclxuICAgICAgICAgICAgd2lkdGggOiAxMjgwLFxyXG4gICAgICAgICAgICBoZWlnaHQgOiA3MjAsXHJcbiAgICAgICAgICAgIGZhY2luZ01vZGUgOiBcInVzZXJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIGlkID0gJ3dob2xlJz5cclxuICAgICAgICA8cD48aDE+TG9nIGluPC9oMT48L3A+XHJcbiAgICAgICAgPHA+44CAPC9wPlxyXG4gICAgICAgIDxwPjxkaXY+PGg0PuOCq+ODoeODqeOBq+mhlOOCkuaYoOOBl+OBpuOAgeODreOCsOOCpOODs+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOBj+OBoOOBleOBhDwvaDQ+PC9kaXY+PC9wPlxyXG4gICAgICAgIDxkaXY+PFdlYmNhbVxyXG4gICAgICAgICAgICBhdWRpbz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5zZXRSZWZ9XHJcbiAgICAgICAgICAgIHNjcmVlbnNob3RGb3JtYXQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgdmlkZW9Db25zdHJhaW50cz17e3ZpZGVvQ29uc3RyYWludHN9fVxyXG4gICAgICAgICAgICBvblVzZXJNZWRpYUVycm9yPXsoKSA9PiB3aW5kb3cuYWxlcnQoJ2NhbnQgYWNjZXNzIHlvdXIgY2FtZXJhJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYXJrXCIgb25DbGljayA9IHt0aGlzLmNhcHR1cmV9PuaSruW9sTwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgaWQgPSBcInNob3dtZW1iZXJcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5kb0FjdGlvbn0+44Oh44Oz44OQ44O86Kmz57SwPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=