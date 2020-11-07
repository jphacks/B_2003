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
      var dom1 = document.getElementById('whole');
      console.log(this.props.name);
      console.log(this.props.password);
      console.log(this.props.facilityID);
      react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(__jsx(_showcsv__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: this.props.name,
        password: this.props.password,
        facilityID: this.props.facilityID,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }
      }), dom1);
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
      })), __jsx(_node_modules_react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwid2ViY2FtIiwiaW1nIiwiZ2V0U2NyZWVuc2hvdCIsInN0YXJ0IiwiaW5kZXhPZiIsImZhY2VpZCIsInNsaWNlIiwibWV0aG9kIiwiYm9keTEiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFjZV9waG90byIsImZhY2lsaXR5SUQiLCJjb25zb2xlIiwibG9nIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2giLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlSnNvbiIsInJlc3VsdCIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJib2R5MiIsIm5hbWUiLCJwYXNzd29yZF90b2tlbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvQWN0aW9uIiwiYmluZCIsImUiLCJkb20xIiwicGFzc3dvcmQiLCJ2aWRlb0NvbnN0cmFpbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJmYWNpbmdNb2RlIiwic2V0UmVmIiwiY2FwdHVyZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxLOzs7OztBQUVGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsaU5BZVYsVUFBQUMsTUFBTSxFQUFJO0FBQ2YsWUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0gsS0FqQmtCOztBQUFBLGtOQW1CVCxZQUFNO0FBRVosVUFBTUMsR0FBRyxHQUFHLE1BQUtELE1BQUwsQ0FBWUUsYUFBWixFQUFaLENBRlksQ0FHWjs7O0FBRUEsVUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQSxFQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrS0FBTCxDQUFILENBSEEsRUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssTUFBQyxtREFBRDtBQUNELGFBQUssRUFBRSxLQUROO0FBRUQsV0FBRyxFQUFFLEtBQUtDLE1BRlQ7QUFHRCx3QkFBZ0IsRUFBQyxZQUhoQjtBQUlELHdCQUFnQixFQUFFO0FBQUNKLDBCQUFnQixFQUFoQkE7QUFBRCxTQUpqQjtBQUtELHdCQUFnQixFQUFFO0FBQUEsaUJBQU1oQixNQUFNLENBQUNDLEtBQVAsQ0FBYSx5QkFBYixDQUFOO0FBQUEsU0FMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFMLEVBT0EsTUFBQyw2RUFBRDtBQUFRLGVBQU8sRUFBQyxNQUFoQjtBQUF1QixlQUFPLEVBQUksS0FBS29CLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEEsRUFRQTtBQUFLLFVBQUUsRUFBRyxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSQSxDQUpBLEVBZUEsTUFBQyw2RUFBRDtBQUFRLGVBQU8sRUFBRSxLQUFLVixRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQWZBLENBREE7QUFtQkg7Ozs7RUFoSGVXLCtDOztBQWlIbkI7QUFFY2pELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwX2xvZ19pbi4zMTBlYWNjNmU4ZGMzNTk5M2IwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJztcclxuaW1wb3J0IFNob3dtZW1iZXIgZnJvbSAnLi9zaG93bWVtYmVyJztcclxuaW1wb3J0IFNob3djc3YgZnJvbSAnLi9zaG93Y3N2JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5kb0FjdGlvbiA9IHRoaXMuZG9BY3Rpb24uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0FjdGlvbihlKXtcclxuICAgICAgICBjb25zdCBkb20xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dob2xlJyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBhc3N3b3JkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZmFjaWxpdHlJRClcclxuXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKDxTaG93Y3N2IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gcGFzc3dvcmQ9e3RoaXMucHJvcHMucGFzc3dvcmR9IGZhY2lsaXR5SUQ9e3RoaXMucHJvcHMuZmFjaWxpdHlJRH0vPixkb20xKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWYgPSB3ZWJjYW0gPT4ge1xyXG4gICAgICAgIHRoaXMud2ViY2FtID0gd2ViY2FtO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcHR1cmUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZyA9IHRoaXMud2ViY2FtLmdldFNjcmVlbnNob3QoKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coaW1nKVxyXG5cclxuICAgICAgICBjb25zdCBzdGFydCA9IGltZy5pbmRleE9mKCcsJykgKyAxXHJcbiAgICAgICAgY29uc3QgZmFjZWlkID0gaW1nLnNsaWNlKHN0YXJ0KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZmFjZWlkKVxyXG5cclxuICAgICAgICBjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuICAgICAgICBjb25zdCBib2R5MSA9IEpTT04uc3RyaW5naWZ5KHtmYWNlX3Bob3RvOiBmYWNlaWQsIGZhY2lsaXR5SUQ6IHRoaXMucHJvcHMuZmFjaWxpdHlJRH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vOWRsc3FienkyNS5leGVjdXRlLWFwaS5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9yZWNvZ25pdGlvbi9yZWNvZ25pdGlvbicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keTF9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuWGjeaSruW9seOBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLkurrmlbDliLbpmZDjgpLotoXjgYjjgabjgYTjgb7jgZnjgIHnrqHnkIbogIXjgajnm7joq4fjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5YWl5aC044GX44G+44GX44GfXCIpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIumAgOWgtOOBl+OBvuOBl+OBn1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZUpzb24pO1xyXG4gICAgICAgICAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvbG9nX2luXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6KqN6K2Y5pmC44Gr44Ko44Op44O844GM6LW344GN44G+44GX44Gf44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9sb2dfaW5cIlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTIgPSBKU09OLnN0cmluZ2lmeSh7bmFtZTp0aGlzLnByb3BzLm5hbWUscGFzc3dvcmRfdG9rZW46dGhpcy5wcm9wcy5wYXNzd29yZF90b2tlbix9KTtcclxuICAgICAgICAgICAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dtZW1iZXInKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5Mik7XHJcbiAgICAgICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vZ2V0X251bWJlci9nZXRfbnVtYmVyJyx7bWV0aG9kOiBcIlBPU1RcIixib2R5OiBib2R5Mn0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44Oz44OQ44O844Oq44K544OI5pu05pawXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbi5uYW1lKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoPFNob3dtZW1iZXIgbWVtYmVybGlzdCA9IHtyZXNwb25zZUpzb24ubmFtZX0vPiwgZG9tKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi44Kw44Or44O844OX5ZCN44G+44Gf44Gv44Kw44Or44O844OX44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZ44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6Zay6Kan5pmC44Gr44Ko44Op44O844GM6LW344GN44G+44GX44Gf44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9tZW1iZXJfbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgICBjb25zdCB2aWRlb0NvbnN0cmFpbnRzID0ge1xyXG4gICAgICAgICAgICB3aWR0aCA6IDEyODAsXHJcbiAgICAgICAgICAgIGhlaWdodCA6IDcyMCxcclxuICAgICAgICAgICAgZmFjaW5nTW9kZSA6IFwidXNlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgaWQgPSAnd2hvbGUnPlxyXG4gICAgICAgIDxwPjxoMT5Mb2cgaW48L2gxPjwvcD5cclxuICAgICAgICA8cD7jgIA8L3A+XHJcbiAgICAgICAgPHA+PGRpdj48aDQ+44Kr44Oh44Op44Gr6aGU44KS5pig44GX44Gm44CB44Ot44Kw44Kk44Oz44Oc44K/44Oz44KS5oq844GX44Gm44GP44Gg44GV44GEPC9oND48L2Rpdj48L3A+XHJcbiAgICAgICAgPGRpdj48V2ViY2FtXHJcbiAgICAgICAgICAgIGF1ZGlvPXtmYWxzZX1cclxuICAgICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cclxuICAgICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICB2aWRlb0NvbnN0cmFpbnRzPXt7dmlkZW9Db25zdHJhaW50c319XHJcbiAgICAgICAgICAgIG9uVXNlck1lZGlhRXJyb3I9eygpID0+IHdpbmRvdy5hbGVydCgnY2FudCBhY2Nlc3MgeW91ciBjYW1lcmEnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhcmtcIiBvbkNsaWNrID0ge3RoaXMuY2FwdHVyZX0+5pKu5b2xPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdiBpZCA9IFwic2hvd21lbWJlclwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmRvQWN0aW9ufT7jg6Hjg7Pjg5Djg7zoqbPntLA8L0J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==