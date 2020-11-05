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
                lineNumber: 67,
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

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      var videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, "Log in"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, "\u30AB\u30E1\u30E9\u306B\u9854\u3092\u6620\u3057\u3066\u3001\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044"), __jsx(react_webcam__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
          lineNumber: 94,
          columnNumber: 9
        }
      }), __jsx("button", {
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        id: "showmember",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsInN0YXJ0IiwiaW5kZXhPZiIsImZhY2VpZCIsInNsaWNlIiwibWV0aG9kIiwiYm9keTEiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFjZV9waG90byIsImZhY2lsaXR5SUQiLCJjb25zb2xlIiwibG9nIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2giLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJib2R5MiIsIm5hbWUiLCJwYXNzd29yZF90b2tlbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInZpZGVvQ29uc3RyYWludHMiLCJ3aWR0aCIsImhlaWdodCIsImZhY2luZ01vZGUiLCJzZXRSZWYiLCJjYXB0dXJlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7QUFFRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGlOQUlWLFVBQUFDLE1BQU0sRUFBSTtBQUNmLFlBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNILEtBTmtCOztBQUFBLGtOQVFULFlBQU07QUFFWixVQUFNQyxHQUFHLEdBQUcsTUFBS0QsTUFBTCxDQUFZRSxhQUFaLEVBQVosQ0FGWSxDQUdaOzs7QUFFQSxVQUFNQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBakM7QUFDQSxVQUFNQyxNQUFNLEdBQUdKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVSCxLQUFWLENBQWYsQ0FOWSxDQU9aOztBQUVBLFVBQU1JLE1BQU0sR0FBRyxNQUFmO0FBQ0EsVUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxrQkFBVSxFQUFFTixNQUFiO0FBQXFCTyxrQkFBVSxFQUFFLE1BQUtiLEtBQUwsQ0FBV2E7QUFBNUMsT0FBZixDQUFkO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtmLEtBQWpCO0FBRUEsVUFBTWdCLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3JDQyxhQUFLLENBQUMsZ0ZBQUQsRUFBa0Y7QUFBQ1gsZ0JBQU0sRUFBRSxNQUFUO0FBQWdCWSxjQUFJLEVBQUVYO0FBQXRCLFNBQWxGLENBQUwsQ0FDQ1ksSUFERCxDQUNNLFVBQUNDLFFBQUQ7QUFBQSxpQkFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxTQUROLEVBRUNGLElBRkQsQ0FFTSxVQUFDRyxZQUFELEVBQWtCO0FBQ3hCO0FBQ0ksY0FBR0EsWUFBWSxDQUFDQyxNQUFiLElBQXVCLENBQTFCLEVBQTRCO0FBQ3hCQyxrQkFBTSxDQUFDQyxLQUFQLENBQWEsV0FBYjtBQUNILFdBRkQsTUFFTSxJQUFHSCxZQUFZLENBQUNDLE1BQWIsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDOUJDLGtCQUFNLENBQUNDLEtBQVAsQ0FBYSwwQkFBYjtBQUNILFdBRkssTUFFQSxJQUFHSCxZQUFZLENBQUNDLE1BQWIsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDOUJDLGtCQUFNLENBQUNDLEtBQVAsQ0FBYSxRQUFiO0FBQ0gsV0FGSyxNQUVBLElBQUdILFlBQVksQ0FBQ0MsTUFBYixJQUF1QixDQUExQixFQUE0QjtBQUM5QkMsa0JBQU0sQ0FBQ0MsS0FBUCxDQUFhLFFBQWI7QUFDSDs7QUFDRFQsaUJBQU8sQ0FBQ00sWUFBRCxDQUFQLENBWG9CLENBWXBCO0FBQ0gsU0FmRCxXQWdCTyxVQUFDSSxLQUFELEVBQVU7QUFDYkYsZ0JBQU0sQ0FBQ0MsS0FBUCxDQUFhLDZCQUFiLEVBRGEsQ0FFYjtBQUNBO0FBQ0gsU0FwQkQ7QUFxQkgsT0F0QmUsQ0FBaEI7QUEwQkFYLGFBQU8sQ0FBQ0ssSUFBUixDQUFhLFlBQU07QUFDZixZQUFNUSxLQUFLLEdBQUduQixJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDbUIsY0FBSSxFQUFDLE1BQUs5QixLQUFMLENBQVc4QixJQUFqQjtBQUFzQkMsd0JBQWMsRUFBQyxNQUFLL0IsS0FBTCxDQUFXK0I7QUFBaEQsU0FBZixDQUFkO0FBQ0EsWUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBWjtBQUNBcEIsZUFBTyxDQUFDQyxHQUFSLENBQVljLEtBQVo7QUFDQVYsYUFBSyxDQUFDLDhFQUFELEVBQWdGO0FBQUNYLGdCQUFNLEVBQUUsTUFBVDtBQUFnQlksY0FBSSxFQUFFUztBQUF0QixTQUFoRixDQUFMLENBQ0NSLElBREQsQ0FDTSxVQUFDQyxRQUFEO0FBQUEsaUJBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsU0FETixFQUVDRixJQUZELENBRU0sVUFBQ0csWUFBRCxFQUFrQjtBQUNwQixjQUFHQSxZQUFZLENBQUNDLE1BQWIsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEI7QUFDQVgsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZUyxZQUFaO0FBQ0FWLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVMsWUFBWSxDQUFDTSxJQUF6QjtBQUVBSyw0REFBUSxDQUFDQyxNQUFULENBQWdCLE1BQUMsb0RBQUQ7QUFBWSx3QkFBVSxFQUFJWixZQUFZLENBQUNNLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBaEIsRUFBZ0VFLEdBQWhFO0FBRUgsV0FQRCxNQU9LO0FBQ0ROLGtCQUFNLENBQUNDLEtBQVAsQ0FBYSx5Q0FBYjtBQUNIO0FBQ0osU0FiRCxXQWNPLFVBQUNDLEtBQUQsRUFBVTtBQUNiRixnQkFBTSxDQUFDQyxLQUFQLENBQWEsNkJBQWIsRUFEYSxDQUViO0FBQ0E7QUFDSCxTQWxCRDtBQW1CSCxPQXZCRDtBQTBCSCxLQXpFa0I7O0FBQUE7QUFFbEI7Ozs7NkJBeUVRO0FBQ0wsVUFBTVUsZ0JBQWdCLEdBQUc7QUFDckJDLGFBQUssRUFBRyxJQURhO0FBRXJCQyxjQUFNLEVBQUcsR0FGWTtBQUdyQkMsa0JBQVUsRUFBRztBQUhRLE9BQXpCO0FBTUEsYUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxFQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0tBRkEsRUFHQSxNQUFDLG1EQUFEO0FBQ0ksYUFBSyxFQUFFLEtBRFg7QUFFSSxXQUFHLEVBQUUsS0FBS0MsTUFGZDtBQUdJLHdCQUFnQixFQUFDLFlBSHJCO0FBSUksd0JBQWdCLEVBQUU7QUFBQ0osMEJBQWdCLEVBQWhCQTtBQUFELFNBSnRCO0FBS0ksd0JBQWdCLEVBQUU7QUFBQSxpQkFBTVgsTUFBTSxDQUFDQyxLQUFQLENBQWEseUJBQWIsQ0FBTjtBQUFBLFNBTHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIQSxFQVVBO0FBQVEsZUFBTyxFQUFJLEtBQUtlLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVkEsRUFZQTtBQUFLLFVBQUUsRUFBRyxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFaQSxDQURBO0FBZ0JIOzs7O0VBcEdlQywrQzs7QUFxR25CO0FBRWM1QyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cF9sb2dfaW4uMjk2MWYyMDZjM2RmNzg3MTM1N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgV2ViY2FtIGZyb20gJ3JlYWN0LXdlYmNhbSc7XHJcbmltcG9ydCBTaG93bWVtYmVyIGZyb20gJy4vc2hvd21lbWJlcic7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVmID0gd2ViY2FtID0+IHtcclxuICAgICAgICB0aGlzLndlYmNhbSA9IHdlYmNhbTtcclxuICAgIH1cclxuXHJcbiAgICBjYXB0dXJlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbWcgPSB0aGlzLndlYmNhbS5nZXRTY3JlZW5zaG90KClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGltZylcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbWcuaW5kZXhPZignLCcpICsgMVxyXG4gICAgICAgIGNvbnN0IGZhY2VpZCA9IGltZy5zbGljZShzdGFydClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZhY2VpZClcclxuXHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgICAgICAgY29uc3QgYm9keTEgPSBKU09OLnN0cmluZ2lmeSh7ZmFjZV9waG90bzogZmFjZWlkLCBmYWNpbGl0eUlEOiB0aGlzLnByb3BzLmZhY2lsaXR5SUR9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vcmVjb2duaXRpb24vcmVjb2duaXRpb24nLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHkxfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZUpzb24pO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLlho3mkq7lvbHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5Lq65pWw5Yi26ZmQ44KS6LaF44GI44Gm44GE44G+44GZ44CB566h55CG6ICF44Go55u46KuH44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuWFpeWgtOOBl+OBvuOBl+OBn1wiKVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAzKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLpgIDloLTjgZfjgb7jgZfjgZ9cIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuiqjeitmOaZguOBq+OCqOODqeODvOOBjOi1t+OBjeOBvuOBl+OBn+OAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvbG9nX2luXCJcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkyID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6dGhpcy5wcm9wcy5uYW1lLHBhc3N3b3JkX3Rva2VuOnRoaXMucHJvcHMucGFzc3dvcmRfdG9rZW4sfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93bWVtYmVyJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keTIpO1xyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2dldF9udW1iZXIvZ2V0X251bWJlcicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keTJ9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODs+ODkOODvOODquOCueODiOabtOaWsFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbilcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24ubmFtZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKDxTaG93bWVtYmVyIG1lbWJlcmxpc3QgPSB7cmVzcG9uc2VKc29uLm5hbWV9Lz4sIGRvbSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuOCsOODq+ODvOODl+WQjeOBvuOBn+OBr+OCsOODq+ODvOODl+ODkeOCueODr+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmeOAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIumWsuimp+aZguOBq+OCqOODqeODvOOBjOi1t+OBjeOBvuOBl+OBn+OAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvbWVtYmVyX2xpc3RcIlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgICBjb25zdCB2aWRlb0NvbnN0cmFpbnRzID0ge1xyXG4gICAgICAgICAgICB3aWR0aCA6IDEyODAsXHJcbiAgICAgICAgICAgIGhlaWdodCA6IDcyMCxcclxuICAgICAgICAgICAgZmFjaW5nTW9kZSA6IFwidXNlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkxvZyBpbjwvaDE+XHJcbiAgICAgICAgPGRpdj7jgqvjg6Hjg6njgavpoZTjgpLmmKDjgZfjgabjgIHjg63jgrDjgqTjg7Pjg5zjgr/jg7PjgpLmirzjgZfjgabjgY/jgaDjgZXjgYQ8L2Rpdj5cclxuICAgICAgICA8V2ViY2FtXHJcbiAgICAgICAgICAgIGF1ZGlvPXtmYWxzZX1cclxuICAgICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cclxuICAgICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICB2aWRlb0NvbnN0cmFpbnRzPXt7dmlkZW9Db25zdHJhaW50c319XHJcbiAgICAgICAgICAgIG9uVXNlck1lZGlhRXJyb3I9eygpID0+IHdpbmRvdy5hbGVydCgnY2FudCBhY2Nlc3MgeW91ciBjYW1lcmEnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljayA9IHt0aGlzLmNhcHR1cmV9PuaSruW9sTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8ZGl2IGlkID0gXCJzaG93bWVtYmVyXCIvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9