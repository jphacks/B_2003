webpackHotUpdate_N_E("pages/show_member",{

/***/ "./components/showmember.js":
/*!**********************************!*\
  !*** ./components/showmember.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\tsujishunya104\\Desktop\\shunya-s15\\jphacks\\B_2003\\front\\components\\showmember.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Showmember = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Showmember, _Component);

  var _super = _createSuper(Showmember);

  function Showmember(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Showmember);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Showmember, [{
    key: "componentDidMount",
    value: function componentDidMount(props) {
      //const members = new Array('shunya','kotaro','naoya','kohei','uec');
      var members = this.props.memlist;
      var timeline = document.getElementById("member");
      timeline.innerHTML = "";

      for (var i = 0; i < members.length; i++) {
        var sentence = document.createElement("h5");
        var name = document.createTextNode(members[i]);
        sentence.appendChild(name);
        timeline.appendChild(sentence);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, "\u6D3B\u52D5\u30E1\u30F3\u30D0\u30FC"), __jsx("div", {
        id: "member",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }));
    }
  }]);

  return Showmember;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Showmember);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaG93bWVtYmVyLmpzIl0sIm5hbWVzIjpbIlNob3dtZW1iZXIiLCJwcm9wcyIsIm1lbWJlcnMiLCJtZW1saXN0IiwidGltZWxpbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiaSIsImxlbmd0aCIsInNlbnRlbmNlIiwiY3JlYXRlRWxlbWVudCIsIm5hbWUiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFU7Ozs7O0FBQ0Ysc0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2QkFDUkEsS0FEUTtBQUVqQjs7OztzQ0FFaUJBLEssRUFBTTtBQUNwQjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxLQUFLRCxLQUFMLENBQVdFLE9BQTNCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBakI7QUFDQUYsY0FBUSxDQUFDRyxTQUFULEdBQXFCLEVBQXJCOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDTixPQUFPLENBQUNPLE1BQXRCLEVBQTZCRCxDQUFDLEVBQTlCLEVBQWlDO0FBQzdCLFlBQU1FLFFBQVEsR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLElBQXZCLENBQWpCO0FBQ0EsWUFBTUMsSUFBSSxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0JYLE9BQU8sQ0FBQ00sQ0FBRCxDQUEvQixDQUFiO0FBQ0FFLGdCQUFRLENBQUNJLFdBQVQsQ0FBcUJGLElBQXJCO0FBQ0FSLGdCQUFRLENBQUNVLFdBQVQsQ0FBcUJKLFFBQXJCO0FBQ0g7QUFDSjs7OzZCQUNPO0FBQ0osYUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFESixFQUVJO0FBQUssVUFBRSxFQUFHLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBREE7QUFLSDs7OztFQXZCb0JLLCtDOztBQTBCVmYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvd19tZW1iZXIuZjNhM2FiOTZhZjgzMzI0MTc0ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNsYXNzIFNob3dtZW1iZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudChwcm9wcyl7XHJcbiAgICAgICAgLy9jb25zdCBtZW1iZXJzID0gbmV3IEFycmF5KCdzaHVueWEnLCdrb3Rhcm8nLCduYW95YScsJ2tvaGVpJywndWVjJyk7XHJcbiAgICAgICAgY29uc3QgbWVtYmVycyA9IHRoaXMucHJvcHMubWVtbGlzdDtcclxuICAgICAgICBjb25zdCB0aW1lbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtYmVyXCIpO1xyXG4gICAgICAgIHRpbWVsaW5lLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxtZW1iZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBzZW50ZW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1lbWJlcnNbaV0pO1xyXG4gICAgICAgICAgICBzZW50ZW5jZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICAgICAgdGltZWxpbmUuYXBwZW5kQ2hpbGQoc2VudGVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPua0u+WLleODoeODs+ODkOODvDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSBcIm1lbWJlclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd21lbWJlcjsiXSwic291cmNlUm9vdCI6IiJ9