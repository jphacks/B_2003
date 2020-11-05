webpackHotUpdate_N_E("pages/log_in",{

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
        } //location.href = "/log_in";

      })["catch"](function (error) {
        window.alert("認識時にエラーが起きました。もう一度入力してください。"); //location.href = "/log_in"
        //console.error('error');
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
          console.log(responseJson);
          console.log(responseJson.name);
          ReactDOM.render(__jsx(Showmember, {
            memberlist: responseJson.members,
            __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
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
          lineNumber: 84,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }, "Log in"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
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
          lineNumber: 87,
          columnNumber: 9
        }
      }), __jsx("button", {
        onClick: this.capture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }, "\u64AE\u5F71"), __jsx("div", {
        id: "showmember",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImluZGV4T2YiLCJmYWNlaWQiLCJzbGljZSIsIm1ldGhvZCIsImJvZHkxIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhY2VfcGhvdG8iLCJmYWNpbGl0eUlEIiwiZmV0Y2giLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJib2R5MiIsIm5hbWUiLCJwYXNzd29yZF90b2tlbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsIm1lbWJlcnMiLCJ2aWRlb0NvbnN0cmFpbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJmYWNpbmdNb2RlIiwic2V0UmVmIiwiY2FwdHVyZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7O0FBRUYsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxpTkFJVixVQUFBQyxNQUFNLEVBQUk7QUFDZixZQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxLQU5rQjs7QUFBQSxrTkFRVCxZQUFNO0FBRVosVUFBTUMsR0FBRyxHQUFHLE1BQUtELE1BQUwsQ0FBWUUsYUFBWixFQUFaOztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWixFQUhZLENBSVo7O0FBRUEsVUFBTUksS0FBSyxHQUFHSixHQUFHLENBQUNLLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQWpDO0FBQ0EsVUFBTUMsTUFBTSxHQUFHTixHQUFHLENBQUNPLEtB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O0FBSFEsT0FBekI7QUFNQSxhQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrS0FGQSxFQUdBLE1BQUMsbURBQUQ7QUFDSSxhQUFLLEVBQUUsS0FEWDtBQUVJLFdBQUcsRUFBRSxLQUFLQyxNQUZkO0FBR0ksd0JBQWdCLEVBQUMsWUFIckI7QUFJSSx3QkFBZ0IsRUFBRTtBQUFDSiwwQkFBZ0IsRUFBaEJBO0FBQUQsU0FKdEI7QUFLSSx3QkFBZ0IsRUFBRTtBQUFBLGlCQUFNWixNQUFNLENBQUNDLEtBQVAsQ0FBYSx5QkFBYixDQUFOO0FBQUEsU0FMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhBLEVBVUE7QUFBUSxlQUFPLEVBQUksS0FBS2dCLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVkEsRUFZQTtBQUFLLFVBQUUsRUFBRyxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFaQSxDQURBO0FBZ0JIOzs7O0VBOUZlQywrQzs7QUErRm5CO0FBRWMxQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dfaW4uMGI5YzhmOTM2NWNmMmYxMTRkYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWYgPSB3ZWJjYW0gPT4ge1xyXG4gICAgICAgIHRoaXMud2ViY2FtID0gd2ViY2FtO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcHR1cmUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZyA9IHRoaXMud2ViY2FtLmdldFNjcmVlbnNob3QoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGltZylcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbWcuaW5kZXhPZignLCcpICsgMVxyXG4gICAgICAgIGNvbnN0IGZhY2VpZCA9IGltZy5zbGljZShzdGFydClcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmYWNlaWQpXHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkxID0gSlNPTi5zdHJpbmdpZnkoe2ZhY2VfcGhvdG86IGZhY2VpZCwgZmFjaWxpdHlJRDogdGhpcy5wcm9wcy5mYWNpbGl0eUlEfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vcmVjb2duaXRpb24vcmVjb2duaXRpb24nLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHkxfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZUpzb24pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5YaN5pKu5b2x44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLkurrmlbDliLbpmZDjgpLotoXjgYjjgabjgYTjgb7jgZnjgIHnrqHnkIbogIXjgajnm7joq4fjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuWFpeWgtOOBl+OBvuOBl+OBn1wiKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDMpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6YCA5aC044GX44G+44GX44GfXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvbG9nX2luXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6KqN6K2Y5pmC44Gr44Ko44Op44O844GM6LW344GN44G+44GX44Gf44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2xvZ19pblwiXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkyID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6dGhpcy5wcm9wcy5uYW1lLHBhc3N3b3JkX3Rva2VuOnRoaXMucHJvcHMucGFzc3dvcmRfdG9rZW4sfSk7XHJcbiAgICAgICAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dtZW1iZXInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkyKTtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2dldF9udW1iZXIvZ2V0X251bWJlcicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keTJ9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIC8v44Oh44Oz44OQ44O844Oq44K544OI5pu05pawXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24ubmFtZSlcclxuXHJcbiAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoPFNob3dtZW1iZXIgbWVtYmVybGlzdCA9IHtyZXNwb25zZUpzb24ubWVtYmVyc30vPiwgZG9tKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi44Kw44Or44O844OX5ZCN44G+44Gf44Gv44Kw44Or44O844OX44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZ44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCLplrLopqfmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9tZW1iZXJfbGlzdFwiXHJcbiAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIGNvbnN0IHZpZGVvQ29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoIDogMTI4MCxcclxuICAgICAgICAgICAgaGVpZ2h0IDogNzIwLFxyXG4gICAgICAgICAgICBmYWNpbmdNb2RlIDogXCJ1c2VyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+TG9nIGluPC9oMT5cclxuICAgICAgICA8ZGl2PuOCq+ODoeODqeOBq+mhlOOCkuaYoOOBl+OBpuOAgeODreOCsOOCpOODs+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOBj+OBoOOBleOBhDwvZGl2PlxyXG4gICAgICAgIDxXZWJjYW1cclxuICAgICAgICAgICAgYXVkaW89e2ZhbHNlfVxyXG4gICAgICAgICAgICByZWY9e3RoaXMuc2V0UmVmfVxyXG4gICAgICAgICAgICBzY3JlZW5zaG90Rm9ybWF0PVwiaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgIHZpZGVvQ29uc3RyYWludHM9e3t2aWRlb0NvbnN0cmFpbnRzfX1cclxuICAgICAgICAgICAgb25Vc2VyTWVkaWFFcnJvcj17KCkgPT4gd2luZG93LmFsZXJ0KCdjYW50IGFjY2VzcyB5b3VyIGNhbWVyYScpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3RoaXMuY2FwdHVyZX0+5pKu5b2xPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxkaXYgaWQgPSBcInNob3dtZW1iZXJcIi8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=