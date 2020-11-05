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
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-webcam */ "./node_modules/react-webcam/dist/react-webcam.js");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







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
      var img = _this.webcam.getScreenshot();

      console.log(img); //console.log(img)

      var start = img.indexOf(',') + 1;
      var faceid = img.slice(start); //console.log(faceid)

      var method = "POST";
      var body1 = JSON.stringify({
        face_photo: faceid,
        facilityID: _this.props.facilityID
      });
      console.log(_this.props);
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

        location.href = "/log_in";
      })["catch"](function (error) {
        window.alert("認識時にエラーが起きました。もう一度入力してください。");
        location.href = "/log_in"; //console.error('error');
      });
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
          console.log(responseJson.name);
          ReactDOM.render(__jsx(Showmember, {
            memberlist: responseJson.members,
            __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 33
            }
          }), dom);
        } else {
          window.alert("グループ名またはグループパスワードが間違っています。もう一度入力してください。");
        }
      })["catch"](function (error) {
        window.alert("閲覧時にエラーが起きました。もう一度入力してください。");
        location.href = "/member_list"; //console.error('error');
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
          lineNumber: 83,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }
      }, "Log in"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }, "\u30AB\u30E1\u30E9\u306B\u9854\u3092\u6620\u3057\u3066\u3001\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044"), __jsx(react_webcam__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
          lineNumber: 86,
          columnNumber: 9
        }
      }), __jsx("button", {
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        id: "showmember",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImluZGV4T2YiLCJmYWNlaWQiLCJzbGljZSIsIm1ldGhvZCIsImJvZHkxIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhY2VfcGhvdG8iLCJmYWNpbGl0eUlEIiwiZmV0Y2giLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJib2R5MiIsIm5hbWUiLCJwYXNzd29yZF90b2tlbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsIm1lbWJlcnMiLCJ2aWRlb0NvbnN0cmFpbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJmYWNpbmdNb2RlIiwic2V0UmVmIiwiY2FwdHVyZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7O0FBRUYsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxpTkFJVixVQUFBQyxNQUFNLEVBQUk7QUFDZixZQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxLQU5rQjs7QUFBQSxrTkFRVCxZQUFNO0FBRVosVUFBTUMsR0FBRyxHQUFHLE1BQUtELE1BQUwsQ0FBWUUsYUFBWixFQUFaOztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWixFQUhZLENBSVo7O0FBRUEsVUFBTUksS0FBSyxHQUFHSixHQUFHLENBQUNLLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQWpDO0FBQ0EsVUFBTUMsTUFBTSxH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LEdBQUc7QUFDckJDLGFBQUssRUFBRyxJQURhO0FBRXJCQyxjQUFNLEVBQUcsR0FGWTtBQUdyQkMsa0JBQVUsRUFBRztBQUhRLE9BQXpCO0FBTUEsYUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxFQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0tBRkEsRUFHQSxNQUFDLG1EQUFEO0FBQ0ksYUFBSyxFQUFFLEtBRFg7QUFFSSxXQUFHLEVBQUUsS0FBS0MsTUFGZDtBQUdJLHdCQUFnQixFQUFDLFlBSHJCO0FBSUksd0JBQWdCLEVBQUU7QUFBQ0osMEJBQWdCLEVBQWhCQTtBQUFELFNBSnRCO0FBS0ksd0JBQWdCLEVBQUU7QUFBQSxpQkFBTWQsTUFBTSxDQUFDQyxLQUFQLENBQWEseUJBQWIsQ0FBTjtBQUFBLFNBTHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIQSxFQVVBO0FBQVEsZUFBTyxFQUFJLEtBQUtrQixPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZBLEVBWUE7QUFBSyxVQUFFLEVBQUcsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWkEsQ0FEQTtBQWdCSDs7OztFQTdGZUMsK0M7O0FBOEZuQjtBQUVjNUMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXBfbG9nX2luLmFiMzViZTVhYWQxYjlkNDdkYzE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV2ViY2FtIGZyb20gJ3JlYWN0LXdlYmNhbSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVmID0gd2ViY2FtID0+IHtcclxuICAgICAgICB0aGlzLndlYmNhbSA9IHdlYmNhbTtcclxuICAgIH1cclxuXHJcbiAgICBjYXB0dXJlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbWcgPSB0aGlzLndlYmNhbS5nZXRTY3JlZW5zaG90KClcclxuICAgICAgICBjb25zb2xlLmxvZyhpbWcpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWcpXHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW1nLmluZGV4T2YoJywnKSArIDFcclxuICAgICAgICBjb25zdCBmYWNlaWQgPSBpbWcuc2xpY2Uoc3RhcnQpXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZmFjZWlkKVxyXG5cclxuICAgICAgICBjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuICAgICAgICBjb25zdCBib2R5MSA9IEpTT04uc3RyaW5naWZ5KHtmYWNlX3Bob3RvOiBmYWNlaWQsIGZhY2lsaXR5SUQ6IHRoaXMucHJvcHMuZmFjaWxpdHlJRH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3JlY29nbml0aW9uL3JlY29nbml0aW9uJyx7bWV0aG9kOiBcIlBPU1RcIixib2R5OiBib2R5MX0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuWGjeaSruW9seOBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5Lq65pWw5Yi26ZmQ44KS6LaF44GI44Gm44GE44G+44GZ44CB566h55CG6ICF44Go55u46KuH44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMil7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLlhaXloLTjgZfjgb7jgZfjgZ9cIilcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAzKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIumAgOWgtOOBl+OBvuOBl+OBn1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9sb2dfaW5cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLoqo3orZjmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkyID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6dGhpcy5wcm9wcy5uYW1lLHBhc3N3b3JkX3Rva2VuOnRoaXMucHJvcHMucGFzc3dvcmRfdG9rZW4sfSk7XHJcbiAgICAgICAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dtZW1iZXInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkyKTtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2dldF9udW1iZXIvZ2V0X251bWJlcicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keTJ9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIC8v44Oh44Oz44OQ44O844Oq44K544OI5pu05pawXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24ubmFtZSlcclxuXHJcbiAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoPFNob3dtZW1iZXIgbWVtYmVybGlzdCA9IHtyZXNwb25zZUpzb24ubWVtYmVyc30vPiwgZG9tKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi44Kw44Or44O844OX5ZCN44G+44Gf44Gv44Kw44Or44O844OX44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZ44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCLplrLopqfmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvbWVtYmVyX2xpc3RcIlxyXG4gICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgICBjb25zdCB2aWRlb0NvbnN0cmFpbnRzID0ge1xyXG4gICAgICAgICAgICB3aWR0aCA6IDEyODAsXHJcbiAgICAgICAgICAgIGhlaWdodCA6IDcyMCxcclxuICAgICAgICAgICAgZmFjaW5nTW9kZSA6IFwidXNlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkxvZyBpbjwvaDE+XHJcbiAgICAgICAgPGRpdj7jgqvjg6Hjg6njgavpoZTjgpLmmKDjgZfjgabjgIHjg63jgrDjgqTjg7Pjg5zjgr/jg7PjgpLmirzjgZfjgabjgY/jgaDjgZXjgYQ8L2Rpdj5cclxuICAgICAgICA8V2ViY2FtXHJcbiAgICAgICAgICAgIGF1ZGlvPXtmYWxzZX1cclxuICAgICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cclxuICAgICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICB2aWRlb0NvbnN0cmFpbnRzPXt7dmlkZW9Db25zdHJhaW50c319XHJcbiAgICAgICAgICAgIG9uVXNlck1lZGlhRXJyb3I9eygpID0+IHdpbmRvdy5hbGVydCgnY2FudCBhY2Nlc3MgeW91ciBjYW1lcmEnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljayA9IHt0aGlzLmNhcHR1cmV9PuaSruW9sTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8ZGl2IGlkID0gXCJzaG93bWVtYmVyXCIvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9