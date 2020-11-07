webpackHotUpdate_N_E("pages/group_log_in",{

/***/ "./components/showcsv.js":
/*!*******************************!*\
  !*** ./components/showcsv.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showcsv; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\kota1\\Documents\\B_2003\\front\\components\\showcsv.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Showcsv = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Showcsv, _Component);

  var _super = _createSuper(Showcsv);

  function Showcsv(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Showcsv);

    _this = _super.call(this, props);
    _this.handlesubmit = _this.handlesubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Showcsv, [{
    key: "handlesubmit",
    value: function handlesubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var method = "POST";
      var body = JSON.stringify({
        name: this.props.name,
        password: this.props.password,
        facilityID: this.props.facilityID,
        starttime: timeinfo.starttime.value,
        endtime: timeinfo.endtime.value
      });
      console.log(body);
      fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/list_get/list_get', {
        method: "POST",
        body: body
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        //console.log(responseJson);
        if (responseJson.result == 0) {
          window.alert("入力形式が間違っています");
        } else {
          console.log(responseJson.list);
          var head = [];
          head.push(__jsx("tr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 27
            }
          }, __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 21
            }
          }, responseJson.list[i].name), __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 21
            }
          }, responseJson.list[i].email_address), __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 21
            }
          }, responseJson.list[i].affiliation), __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 21
            }
          }, responseJson.list[i].starttime), __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 21
            }
          }, responseJson.list[i].endtime)));
          var result = [];

          for (var _i = 0; _i < responseJson.list.length; _i++) {
            result.push(__jsx("tr", {
              key: _i + 1,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 33
              }
            }, __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 25
              }
            }, responseJson.list[_i].name), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 25
              }
            }, responseJson.list[_i].email_address), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 25
              }
            }, responseJson.list[_i].affiliation), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 25
              }
            }, responseJson.list[_i].starttime), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 25
              }
            }, responseJson.list[_i].endtime)));
          }

          console.log(result);
          var dom = document.getElementById('memberinfo');
          react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render(__jsx("table", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 33
            }
          }, __jsx("thead", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 40
            }
          }, head), __jsx("tbody", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 61
            }
          }, result)), dom);
        }
      })["catch"](function (error) {
        window.alert("閲覧時にエラーが起きました。もう一度入力してください。"); //location.href = "/add_member"
        //console.error('error');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, "View member detail"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, "\u8ABF\u3079\u305F\u3044\u6642\u9593\u5E2F\u306E\u59CB\u307E\u308A\u3068\u7D42\u308F\u308A\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"), __jsx("form", {
        id: "timeinfo",
        onSubmit: this.handlesubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }, "\u59CB\u307E\u308A:", __jsx("input", {
        type: "datetime-local",
        name: "starttime",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 24
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, "\u7D42\u308F\u308A:", __jsx("input", {
        type: "datetime-local",
        name: "endtime",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 24
        }
      })), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, "\u95B2\u89A7")), __jsx("div", {
        id: "memberinfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }));
    }
  }]);

  return Showcsv;
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG93Y3N2LmpzIl0sIm5hbWVzIjpbIlNob3djc3YiLCJwcm9wcyIsImhhbmRsZXN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJwYXNzd29yZCIsImZhY2lsaXR5SUQiLCJzdGFydHRpbWUiLCJ0aW1laW5mbyIsInZhbHVlIiwiZW5kdGltZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZUpzb24iLCJyZXN1bHQiLCJ3aW5kb3ciLCJhbGVydCIsImxpc3QiLCJoZWFkIiwicHVzaCIsImkiLCJlbWFpbF9hZGRyZXNzIiwiYWZmaWxpYXRpb24iLCJsZW5ndGgiLCJkb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJlcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7O0FBRWpCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUZlO0FBR2xCOzs7O2lDQUVZQyxDLEVBQUU7QUFBQTs7QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsTUFBTSxHQUFHLE1BQWY7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLFlBQUksRUFBRSxLQUFLVCxLQUFMLENBQVdTLElBQWxCO0FBQXdCQyxnQkFBUSxFQUFFLEtBQUtWLEtBQUwsQ0FBV1UsUUFBN0M7QUFBdURDLGtCQUFVLEVBQUMsS0FBS1gsS0FBTCxDQUFXVyxVQUE3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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKLENBSEksRUFVSjtBQUFLLFVBQUUsRUFBQyxZQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFWSSxDQUFSO0FBWUg7Ozs7RUF2RWdDc0MsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXBfbG9nX2luLjY2NGJlY2M5ODdlZDI5OTdhYTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3djc3YgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlc3VibWl0ID0gdGhpcy5oYW5kbGVzdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVzdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6IHRoaXMucHJvcHMubmFtZSwgcGFzc3dvcmQ6IHRoaXMucHJvcHMucGFzc3dvcmQsIGZhY2lsaXR5SUQ6dGhpcy5wcm9wcy5mYWNpbGl0eUlELCBzdGFydHRpbWU6dGltZWluZm8uc3RhcnR0aW1lLnZhbHVlLGVuZHRpbWU6dGltZWluZm8uZW5kdGltZS52YWx1ZX0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vOWRsc3FienkyNS5leGVjdXRlLWFwaS5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9saXN0X2dldC9saXN0X2dldCcse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keX0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuWFpeWKm+W9ouW8j+OBjOmWk+mBleOBo+OBpuOBhOOBvuOBmVwiKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbi5saXN0KVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBoZWFkID0gW107XHJcbiAgICAgICAgICAgICAgICBoZWFkLnB1c2goPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD57cmVzcG9uc2VKc29uLmxpc3RbaV0ubmFtZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD57cmVzcG9uc2VKc29uLmxpc3RbaV0uZW1haWxfYWRkcmVzc308L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD57cmVzcG9uc2VKc29uLmxpc3RbaV0uYWZmaWxpYXRpb259PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLnN0YXJ0dGltZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD57cmVzcG9uc2VKc29uLmxpc3RbaV0uZW5kdGltZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHJlc3BvbnNlSnNvbi5saXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKDx0ciBrZXk9e2krMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzcG9uc2VKc29uLmxpc3RbaV0ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLmVtYWlsX2FkZHJlc3N9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXNwb25zZUpzb24ubGlzdFtpXS5hZmZpbGlhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLnN0YXJ0dGltZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLmVuZHRpbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtYmVyaW5mbycpXHJcblxyXG4gICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKDx0YWJsZT48dGhlYWQ+e2hlYWR9PC90aGVhZD48dGJvZHk+e3Jlc3VsdH08L3Rib2R5PjwvdGFibGU+LGRvbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIumWsuimp+aZguOBq+OCqOODqeODvOOBjOi1t+OBjeOBvuOBl+OBn+OAguOCguOBhuS4gOW6puWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKVxyXG4gICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2FkZF9tZW1iZXJcIlxyXG4gICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+VmlldyBtZW1iZXIgZGV0YWlsPC9oMT5cclxuICAgICAgICAgICAgPGRpdj7oqr/jgbnjgZ/jgYTmmYLplpPluK/jga7lp4vjgb7jgorjgajntYLjgo/jgorjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYQ8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJ0aW1laW5mb1wiIG9uU3VibWl0PXt0aGlzLmhhbmRsZXN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8cD7lp4vjgb7jgoo6PGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIG5hbWU9XCJzdGFydHRpbWVcIiByZXF1aXJlZD48L2lucHV0PjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPue1guOCj+OCijo8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgbmFtZT1cImVuZHRpbWVcIiByZXF1aXJlZD48L2lucHV0PjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7plrLopqc8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lbWJlcmluZm9cIi8+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==