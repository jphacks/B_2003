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
            key: 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG93Y3N2LmpzIl0sIm5hbWVzIjpbIlNob3djc3YiLCJwcm9wcyIsImhhbmRsZXN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJwYXNzd29yZCIsImZhY2lsaXR5SUQiLCJzdGFydHRpbWUiLCJ0aW1laW5mbyIsInZhbHVlIiwiZW5kdGltZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZUpzb24iLCJyZXN1bHQiLCJ3aW5kb3ciLCJhbGVydCIsImxpc3QiLCJoZWFkIiwicHVzaCIsImkiLCJlbWFpbF9hZGRyZXNzIiwiYWZmaWxpYXRpb24iLCJsZW5ndGgiLCJkb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJlcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7O0FBRWpCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUZlO0FBR2xCOzs7O2lDQUVZQyxDLEVBQUU7QUFBQTs7QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsTUFBTSxHQUFHLE1BQWY7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLFlBQUksRUFBRSxLQUFLVCxLQUFMLENBQVdTLElBQWxCO0FBQXdCQyxnQkFBUSxFQUFFLEtBQUtWLEtBQUwsQ0FBV1UsUUFBN0M7QUFBdURDLGtCQUFVLEVBQUMsS0FBS1gsS0FBTCxDQUFXVyxVQUE3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QyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkosQ0FISSxFQVVKO0FBQUssVUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZJLENBQVI7QUFZSDs7OztFQXZFZ0NzQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cF9sb2dfaW4uMGM4YmFjMGI2NTk5YWExOGQyMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd2NzdiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVzdWJtaXQgPSB0aGlzLmhhbmRsZXN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bmFtZTogdGhpcy5wcm9wcy5uYW1lLCBwYXNzd29yZDogdGhpcy5wcm9wcy5wYXNzd29yZCwgZmFjaWxpdHlJRDp0aGlzLnByb3BzLmZhY2lsaXR5SUQsIHN0YXJ0dGltZTp0aW1laW5mby5zdGFydHRpbWUudmFsdWUsZW5kdGltZTp0aW1laW5mby5lbmR0aW1lLnZhbHVlfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICBcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2xpc3RfZ2V0L2xpc3RfZ2V0Jyx7bWV0aG9kOiBcIlBPU1RcIixib2R5OiBib2R5fSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZUpzb24pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5YWl5Yqb5b2i5byP44GM6ZaT6YGV44Gj44Gm44GE44G+44GZXCIpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uLmxpc3QpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGhlYWQucHVzaCg8dHIga2V5PXswfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLm5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLmVtYWlsX2FkZHJlc3N9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLmFmZmlsaWF0aW9ufTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPntyZXNwb25zZUpzb24ubGlzdFtpXS5zdGFydHRpbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLmVuZHRpbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxyZXNwb25zZUpzb24ubGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCg8dHIga2V5PXtpKzF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXNwb25zZUpzb24ubGlzdFtpXS5lbWFpbF9hZGRyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzcG9uc2VKc29uLmxpc3RbaV0uYWZmaWxpYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXNwb25zZUpzb24ubGlzdFtpXS5zdGFydHRpbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXNwb25zZUpzb24ubGlzdFtpXS5lbmR0aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbWJlcmluZm8nKVxyXG5cclxuICAgICAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcig8dGFibGU+PHRoZWFkPntoZWFkfTwvdGhlYWQ+PHRib2R5PntyZXN1bHR9PC90Ym9keT48L3RhYmxlPixkb20pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCLplrLopqfmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9hZGRfbWVtYmVyXCJcclxuICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICAgICAgPGgxPlZpZXcgbWVtYmVyIGRldGFpbDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+6Kq/44G544Gf44GE5pmC6ZaT5biv44Gu5aeL44G+44KK44Go57WC44KP44KK44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIGlkPVwidGltZWluZm9cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVzdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPHA+5aeL44G+44KKOjxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBuYW1lPVwic3RhcnR0aW1lXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7ntYLjgo/jgoo6PGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIG5hbWU9XCJlbmR0aW1lXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+6Zay6KanPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW1iZXJpbmZvXCIvPlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=