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
                lineNumber: 70,
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
        className: "text-center",
        id: "whole",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 12
        }
      }, "Log in")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }, "\u3000"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 12
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, "\u30AB\u30E1\u30E9\u306B\u9854\u3092\u6620\u3057\u3066\u3001\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
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
          lineNumber: 96,
          columnNumber: 14
        }
      }), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "dark",
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        id: "showmember",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsInN0YXJ0IiwiaW5kZXhPZiIsImZhY2VpZCIsInNsaWNlIiwibWV0aG9kIiwiYm9keTEiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFjZV9waG90byIsImZhY2lsaXR5SUQiLCJjb25zb2xlIiwibG9nIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2giLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJib2R5MiIsIm5hbWUiLCJwYXNzd29yZF90b2tlbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInZpZGVvQ29uc3RyYWludHMiLCJ3aWR0aCIsImhlaWdodCIsImZhY2luZ01vZGUiLCJzZXRSZWYiLCJjYXB0dXJlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLEs7Ozs7O0FBRUYsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxpTkFJVixVQUFBQyxNQUFNLEVBQUk7QUFDZixZQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxLQU5rQjs7QUFBQSxrTkFRVCxZQUFNO0FBRVosVUFBTUMsR0FBRyxHQUFHLE1BQUtELE1BQUwsQ0FBWUUsYUFBWixFQUFaLENBRlksQ0FHWjs7O0FBRUEsVUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQWpDO0FBQ0EsVUFBTUMsTUFBTSxHQUFHSixHQUFHLENB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QUE7QUFBQTtBQUFBLHdCQVBBLEVBUUE7QUFBSyxVQUFFLEVBQUcsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkEsQ0FKQSxDQURBO0FBaUJIOzs7O0VBbkdlQywrQzs7QUFvR25CO0FBRWM1QyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cF9sb2dfaW4uNGE5OThjYjk1NmE4MzlhY2YyOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgV2ViY2FtIGZyb20gJ3JlYWN0LXdlYmNhbSc7XHJcbmltcG9ydCBTaG93bWVtYmVyIGZyb20gJy4vc2hvd21lbWJlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZiA9IHdlYmNhbSA9PiB7XHJcbiAgICAgICAgdGhpcy53ZWJjYW0gPSB3ZWJjYW07XHJcbiAgICB9XHJcblxyXG4gICAgY2FwdHVyZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaW1nID0gdGhpcy53ZWJjYW0uZ2V0U2NyZWVuc2hvdCgpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWcpXHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW1nLmluZGV4T2YoJywnKSArIDFcclxuICAgICAgICBjb25zdCBmYWNlaWQgPSBpbWcuc2xpY2Uoc3RhcnQpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmYWNlaWQpXHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkxID0gSlNPTi5zdHJpbmdpZnkoe2ZhY2VfcGhvdG86IGZhY2VpZCwgZmFjaWxpdHlJRDogdGhpcy5wcm9wcy5mYWNpbGl0eUlEfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3JlY29nbml0aW9uL3JlY29nbml0aW9uJyx7bWV0aG9kOiBcIlBPU1RcIixib2R5OiBib2R5MX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5YaN5pKu5b2x44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuS6uuaVsOWItumZkOOCkui2heOBiOOBpuOBhOOBvuOBmeOAgeeuoeeQhuiAheOBqOebuOirh+OBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLlhaXloLTjgZfjgb7jgZfjgZ9cIilcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6YCA5aC044GX44G+44GX44GfXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9sb2dfaW5cIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLoqo3orZjmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5MiA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOnRoaXMucHJvcHMubmFtZSxwYXNzd29yZF90b2tlbjp0aGlzLnByb3BzLnBhc3N3b3JkX3Rva2VuLH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd21lbWJlcicpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkyKTtcclxuICAgICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vOWRsc3FienkyNS5leGVjdXRlLWFwaS5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9nZXRfbnVtYmVyL2dldF9udW1iZXInLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHkyfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg7Pjg5Djg7zjg6rjgrnjg4jmm7TmlrBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uLm5hbWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcig8U2hvd21lbWJlciBtZW1iZXJsaXN0ID0ge3Jlc3BvbnNlSnNvbi5uYW1lfS8+LCBkb20pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLjgrDjg6vjg7zjg5flkI3jgb7jgZ/jga/jgrDjg6vjg7zjg5fjg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZnjgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLplrLopqfmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL21lbWJlcl9saXN0XCJcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIGNvbnN0IHZpZGVvQ29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoIDogMTI4MCxcclxuICAgICAgICAgICAgaGVpZ2h0IDogNzIwLFxyXG4gICAgICAgICAgICBmYWNpbmdNb2RlIDogXCJ1c2VyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBpZCA9ICd3aG9sZSc+XHJcbiAgICAgICAgPHA+PGgxPkxvZyBpbjwvaDE+PC9wPlxyXG4gICAgICAgIDxwPuOAgDwvcD5cclxuICAgICAgICA8cD48ZGl2PjxoND7jgqvjg6Hjg6njgavpoZTjgpLmmKDjgZfjgabjgIHjg63jgrDjgqTjg7Pjg5zjgr/jg7PjgpLmirzjgZfjgabjgY/jgaDjgZXjgYQ8L2g0PjwvZGl2PjwvcD5cclxuICAgICAgICA8ZGl2PjxXZWJjYW1cclxuICAgICAgICAgICAgYXVkaW89e2ZhbHNlfVxyXG4gICAgICAgICAgICByZWY9e3RoaXMuc2V0UmVmfVxyXG4gICAgICAgICAgICBzY3JlZW5zaG90Rm9ybWF0PVwiaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgIHZpZGVvQ29uc3RyYWludHM9e3t2aWRlb0NvbnN0cmFpbnRzfX1cclxuICAgICAgICAgICAgb25Vc2VyTWVkaWFFcnJvcj17KCkgPT4gd2luZG93LmFsZXJ0KCdjYW50IGFjY2VzcyB5b3VyIGNhbWVyYScpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFya1wiIG9uQ2xpY2sgPSB7dGhpcy5jYXB0dXJlfT7mkq7lvbE8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGlkID0gXCJzaG93bWVtYmVyXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9