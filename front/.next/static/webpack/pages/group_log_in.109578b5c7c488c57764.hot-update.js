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
          var result = [];

          for (var i = 0; i < responseJson.list.length; i++) {
            result.push(__jsx("tr", {
              key: i,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }
            }, __jsx("th", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 25
              }
            }, responseJson.list[i].name), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 25
              }
            }, responseJson.list[i].email_address), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 25
              }
            }, responseJson.list[i].affiliation), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 25
              }
            }, responseJson.list[i].starttime), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 25
              }
            }, responseJson.list[i].endtime)));
          }

          console.log(result);
          dom = document.getElementById('memberinfo');
          react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render(__jsx("tbody", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 33
            }
          }, result), dom);
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
          lineNumber: 55,
          columnNumber: 17
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, "View member detail"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, "\u8ABF\u3079\u305F\u3044\u6642\u9593\u5E2F\u306E\u59CB\u307E\u308A\u3068\u7D42\u308F\u308A\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"), __jsx("form", {
        id: "timeinfo",
        onSubmit: this.handlesubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }, "\u59CB\u307E\u308A:", __jsx("input", {
        type: "datetime-local",
        name: "starttime",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 24
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, "\u7D42\u308F\u308A:", __jsx("input", {
        type: "datetime-local",
        name: "endtime",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 24
        }
      })), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, "\u95B2\u89A7")), __jsx("div", {
        id: "memberinfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG93Y3N2LmpzIl0sIm5hbWVzIjpbIlNob3djc3YiLCJwcm9wcyIsImhhbmRsZXN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJwYXNzd29yZCIsImZhY2lsaXR5SUQiLCJzdGFydHRpbWUiLCJ0aW1laW5mbyIsInZhbHVlIiwiZW5kdGltZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZUpzb24iLCJyZXN1bHQiLCJ3aW5kb3ciLCJhbGVydCIsImxpc3QiLCJpIiwibGVuZ3RoIiwicHVzaCIsImVtYWlsX2FkZHJlc3MiLCJhZmZpbGlhdGlvbiIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsImVycm9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFFakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBRmU7QUFHbEI7Ozs7aUNBRVlDLEMsRUFBRTtBQUFBOztBQUNYQSxPQUFDLENBQUNDLGNBQUY7QUFFQSxVQUFNQyxNQUFNLEdBQUcsTUFBZjtBQUNBLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ0MsWUFBSSxFQUFFLEtBQUtULEtBQUwsQ0FBV1MsSUFBbEI7QUFBd0JDLGdCQUFRLEVBQUUsS0FBS1YsS0FBTCxDQUFXVSxRQUE3QztBQUF1REMsa0JBQVUsRUFBQyxLQUFLWCxLQUFMLENBQVdXLFVBQTdFO0FBQXlG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QUFBO0FBQUE7QUFBQSxRQUFQLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFPO0FBQU8sWUFBSSxFQUFDLGdCQUFaO0FBQTZCLFlBQUksRUFBQyxTQUFsQztBQUE0QyxnQkFBUSxNQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVAsQ0FGSixFQUlJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKSixDQUhJLEVBVUo7QUFBSyxVQUFFLEVBQUMsWUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkksQ0FBUjtBQVlIOzs7O0VBOURnQ3FDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwX2xvZ19pbi4xMDk1NzhiNWM3YzQ4OGM1Nzc2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93Y3N2IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXN1Ym1pdCA9IHRoaXMuaGFuZGxlc3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlc3VibWl0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOiB0aGlzLnByb3BzLm5hbWUsIHBhc3N3b3JkOiB0aGlzLnByb3BzLnBhc3N3b3JkLCBmYWNpbGl0eUlEOnRoaXMucHJvcHMuZmFjaWxpdHlJRCwgc3RhcnR0aW1lOnRpbWVpbmZvLnN0YXJ0dGltZS52YWx1ZSxlbmR0aW1lOnRpbWVpbmZvLmVuZHRpbWUudmFsdWV9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgIFxyXG4gICAgICAgIGZldGNoKCdodHRwczovLzlkbHNxYnp5MjUuZXhlY3V0ZS1hcGkuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vbGlzdF9nZXQvbGlzdF9nZXQnLHttZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGJvZHl9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlSnNvbi5yZXN1bHQgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCLlhaXlipvlvaLlvI/jgYzplpPpgZXjgaPjgabjgYTjgb7jgZlcIilcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24ubGlzdClcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHJlc3BvbnNlSnNvbi5saXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLm5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXNwb25zZUpzb24ubGlzdFtpXS5lbWFpbF9hZGRyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzcG9uc2VKc29uLmxpc3RbaV0uYWZmaWxpYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXNwb25zZUpzb24ubGlzdFtpXS5zdGFydHRpbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXNwb25zZUpzb24ubGlzdFtpXS5lbmR0aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgICAgICAgICAgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbWJlcmluZm8nKVxyXG5cclxuICAgICAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcig8dGJvZHk+e3Jlc3VsdH08L3Rib2R5Pixkb20pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCLplrLopqfmmYLjgavjgqjjg6njg7zjgYzotbfjgY3jgb7jgZfjgZ/jgILjgoLjgYbkuIDluqblhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIilcclxuICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9hZGRfbWVtYmVyXCJcclxuICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2Vycm9yJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICAgICAgPGgxPlZpZXcgbWVtYmVyIGRldGFpbDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+6Kq/44G544Gf44GE5pmC6ZaT5biv44Gu5aeL44G+44KK44Go57WC44KP44KK44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIGlkPVwidGltZWluZm9cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVzdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPHA+5aeL44G+44KKOjxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBuYW1lPVwic3RhcnR0aW1lXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7ntYLjgo/jgoo6PGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIG5hbWU9XCJlbmR0aW1lXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+6Zay6KanPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW1iZXJpbmZvXCIvPlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=