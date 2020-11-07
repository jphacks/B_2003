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
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);






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
          }, "name"), __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 21
            }
          }, "email_address"), __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 21
            }
          }, "affiliation"), __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 21
            }
          }, "starttime"), __jsx("th", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 21
            }
          }, "endtime")));
          console.log(head);
          var result = [];

          for (var i = 0; i < responseJson.list.length; i++) {
            result.push(__jsx("tr", {
              key: i + 1,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }
            }, __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 25
              }
            }, responseJson.list[i].name), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 25
              }
            }, responseJson.list[i].email_address), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 25
              }
            }, responseJson.list[i].affiliation), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 25
              }
            }, responseJson.list[i].starttime), __jsx("td", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 25
              }
            }, responseJson.list[i].endtime)));
          }

          console.log(result);
          var dom = document.getElementById('memberinfo');
          react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render(__jsx("table", {
            className: "text-center",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 33
            }
          }, __jsx("thead", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 64
            }
          }, head), __jsx("tbody", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 85
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
          lineNumber: 66,
          columnNumber: 17
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, "View member detail"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, "\u8ABF\u3079\u305F\u3044\u6642\u9593\u5E2F\u306E\u59CB\u307E\u308A\u3068\u7D42\u308F\u308A\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"), __jsx("form", {
        id: "timeinfo",
        onSubmit: this.handlesubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }, "\u59CB\u307E\u308A:", __jsx("input", {
        type: "datetime-local",
        name: "starttime",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 24
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, "\u7D42\u308F\u308A:", __jsx("input", {
        type: "datetime-local",
        name: "endtime",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 24
        }
      })), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, "\u95B2\u89A7")), __jsx("div", {
        id: "memberinfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG93Y3N2LmpzIl0sIm5hbWVzIjpbIlNob3djc3YiLCJwcm9wcyIsImhhbmRsZXN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJwYXNzd29yZCIsImZhY2lsaXR5SUQiLCJzdGFydHRpbWUiLCJ0aW1laW5mbyIsInZhbHVlIiwiZW5kdGltZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZUpzb24iLCJyZXN1bHQiLCJ3aW5kb3ciLCJhbGVydCIsImxpc3QiLCJoZWFkIiwicHVzaCIsImkiLCJsZW5ndGgiLCJlbWFpbF9hZGRyZXNzIiwiYWZmaWxpYXRpb24iLCJkb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJlcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7O0FBRWpCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUZlO0FBR2xCOzs7O2lDQUVZQyxDLEVBQUU7QUFBQTs7QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsTUFBTSxHQUFHLE1BQWY7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLFlBQUksRUFBRSxLQUFLVCxLQUFMLENBQVdTLElBQWxCO0FBQXdCQyxnQkFBUSxFQUFFLEtBQUtWLEtBQUwsQ0FBV1UsUUFBN0M7QUFBdURDLGtCQUFVLEVBQUMsS0FBS1gsS0FBTCxDQUFXVyxVQUE3RTtBQUF5RkMsaUJBQVMsRUFBQ0MsUUFBUSxDQUFDRCxTQUFULENBQW1CRSxLQUF0SDtBQUE0SEMsZUFBTyxFQUFDRixRQUFRLENBQUNFLE9BQVQsQ0FBaUJEO0FBQXJKLE9BQWYsQ0FBYjtBQUVBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWVgsSUFBWjtBQUVBWSxXQUFLLENBQUMsMEVBQUQsRUFBNEU7QUFBQ2IsY0FBTSxFQUFFLE1BQVQ7QUFBZ0JDLFlBQUksRUFBRUE7QUFBdEIsT0FBNUUsQ0FBTCxDQUNDYSxJQURELENBQ00sVUFBQ0MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsT0FETixFQUVDRixJQUZELENBRU0sVUFBQ0csWUFBRCxFQUFrQjtBQUN4QjtBQUNJLFlBQUdBLFlBQVksQ0FBQ0MsTUFBYixJQUF1QixDQUExQixFQUE0QjtBQUN4QkMsZ0JBQU0sQ0FBQ0MsS0FBUCxDQUFhLGNBQWI7QUFDSCxTQUZELE1BRUs7QUFDRFQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxZQUFZLENBQUNJLElBQXpCO0FBRUEsY0FBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQUEsY0FBSSxDQUFDQyxJQUFMLENBQVU7QUFBSSxlQUFHLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFETSxFQUVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRk0sRUFHTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhNLEVBSU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKTSxFQUtOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTE0sQ0FBVjtBQVFBWixpQkFBTyxDQUFDQyxHQUFSLENBQVlVLElBQVo7QUFFQSxjQUFJSixNQUFNLEdBQUcsRUFBYjs7QUFDQSxlQUFJLElBQUlNLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ1AsWUFBWSxDQUFDSSxJQUFiLENBQWtCSSxNQUFoQyxFQUF1Q0QsQ0FBQyxFQUF4QyxFQUEyQztBQUN2Q04sa0JBQU0sQ0FBQ0ssSUFBUCxDQUFZO0FBQUksaUJBQUcsRUFBRUMsQ0FBQyxHQUFDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBS1AsWUFBWSxDQUFDSSxJQUFiLENBQWtCRyxDQUFsQixFQUFxQnBCLElBQTFCLENBRFEsRUFFUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUthLFlBQVksQ0FBQ0ksSUFBYixDQUFrQkcsQ0FBbEIsRUFBcUJFLGFBQTFCLENBRlEsRUFHUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUtULFlBQVksQ0FBQ0ksSUFBYixDQUFrQkcsQ0FBbEIsRUFBcUJHLFdBQTFCLENBSFEsRUFJUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUtWLFlBQVksQ0FBQ0ksSUFBYixDQUFrQkcsQ0FBbEIsRUFBcUJqQixTQUExQixDQUpRLEVBS1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFLVSxZQUFZLENBQUNJLElBQWIsQ0FBa0JHLENBQWxCLEVBQXFCZCxPQUExQixDQUxRLENBQVo7QUFPSDs7QUFFREMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxNQUFaO0FBRUEsY0FBTVUsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBWjtBQUVBQywwREFBUSxDQUFDQyxNQUFULENBQWdCO0FBQU8scUJBQVMsRUFBQyxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUVYsSUFBUixDQUEvQixFQUFvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVFKLE1BQVIsQ0FBcEQsQ0FBaEIsRUFBb0dVLEdBQXBHO0FBQ0g7QUFDSixPQXJDRCxXQXNDSyxVQUFDSyxLQUFELEVBQVU7QUFDZmQsY0FBTSxDQUFDQyxLQUFQLENBQWEsNkJBQWIsRUFEZSxDQUVmO0FBQ0E7QUFDRCxPQTFDQztBQTJDSDs7OzZCQUVPO0FBQ0osYUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESSxFQUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEpBRkksRUFHSjtBQUFNLFVBQUUsRUFBQyxVQUFUO0FBQW9CLGdCQUFRLEVBQUUsS0FBS3hCLFlBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFPO0FBQU8sWUFBSSxFQUFDLGdCQUFaO0FBQTZCLFlBQUksRUFBQyxXQUFsQztBQUE4QyxnQkFBUSxNQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVAsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQU87QUFBTyxZQUFJLEVBQUMsZ0JBQVo7QUFBNkIsWUFBSSxFQUFDLFNBQWxDO0FBQTRDLGdCQUFRLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUCxDQUZKLEVBSUk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKLENBSEksRUFVSjtBQUFLLFVBQUUsRUFBQyxZQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFWSSxDQUFSO0FBWUg7Ozs7RUF6RWdDc0MsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXBfbG9nX2luLjQ1ZGNiNDhhNmM4MTljNjk3MjNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd2NzdiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVzdWJtaXQgPSB0aGlzLmhhbmRsZXN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bmFtZTogdGhpcy5wcm9wcy5uYW1lLCBwYXNzd29yZDogdGhpcy5wcm9wcy5wYXNzd29yZCwgZmFjaWxpdHlJRDp0aGlzLnByb3BzLmZhY2lsaXR5SUQsIHN0YXJ0dGltZTp0aW1laW5mby5zdGFydHRpbWUudmFsdWUsZW5kdGltZTp0aW1laW5mby5lbmR0aW1lLnZhbHVlfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICBcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly85ZGxzcWJ6eTI1LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2xpc3RfZ2V0L2xpc3RfZ2V0Jyx7bWV0aG9kOiBcIlBPU1RcIixib2R5OiBib2R5fSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZUpzb24pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi5YWl5Yqb5b2i5byP44GM6ZaT6YGV44Gj44Gm44GE44G+44GZXCIpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uLmxpc3QpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGhlYWQucHVzaCg8dHIga2V5PXswfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+bmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPmVtYWlsX2FkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5hZmZpbGlhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPnN0YXJ0dGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPmVuZHRpbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZWFkKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8cmVzcG9uc2VKc29uLmxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goPHRyIGtleT17aSsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXNwb25zZUpzb24ubGlzdFtpXS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzcG9uc2VKc29uLmxpc3RbaV0uZW1haWxfYWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jlc3BvbnNlSnNvbi5saXN0W2ldLmFmZmlsaWF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzcG9uc2VKc29uLmxpc3RbaV0uc3RhcnR0aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzcG9uc2VKc29uLmxpc3RbaV0uZW5kdGltZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1iZXJpbmZvJylcclxuXHJcbiAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoPHRhYmxlIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPjx0aGVhZD57aGVhZH08L3RoZWFkPjx0Ym9keT57cmVzdWx0fTwvdGJvZHk+PC90YWJsZT4sZG9tKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwi6Zay6Kan5pmC44Gr44Ko44Op44O844GM6LW344GN44G+44GX44Gf44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgLy9sb2NhdGlvbi5ocmVmID0gXCIvYWRkX21lbWJlclwiXHJcbiAgICAgICAgLy9jb25zb2xlLmVycm9yKCdlcnJvcicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5WaWV3IG1lbWJlciBkZXRhaWw8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2Puiqv+OBueOBn+OBhOaZgumWk+W4r+OBruWni+OBvuOCiuOBqOe1guOCj+OCiuOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cInRpbWVpbmZvXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlc3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxwPuWni+OBvuOCijo8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgbmFtZT1cInN0YXJ0dGltZVwiIHJlcXVpcmVkPjwvaW5wdXQ+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+57WC44KP44KKOjxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBuYW1lPVwiZW5kdGltZVwiIHJlcXVpcmVkPjwvaW5wdXQ+PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPumWsuimpzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWVtYmVyaW5mb1wiLz5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9