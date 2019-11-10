(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n<div id=\"router-content\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n  <dynamic-background></dynamic-background>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/background/background.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/background/background.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"background\"><div id=\"gradient\"></div></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"board\" class=\"card\">\n  <thumbnail class='.thumbnail' *ngFor=\"let ep of eps\" [title]=\"ep.eng_name\" [img]=\"ep.img\" [page]=\"ep.page\"></thumbnail>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <h3>Welcome to DockSkid</h3>\n\n  <p>Coming in for dry dock.</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <h3>Login</h3>\n\n  <br/>\n\n  <form (submit)=\"submit()\">\n    <label for=\"username\">Username:</label><input id=\"username\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\">\n    <label for=\"password\">Password:</label><input id=\"password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n    <br /><br />\n    <input id=\"submit\" type=\"submit\" value=\"Sign in\">\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"nav-bar\">\n  <div id=\"logo\"></div>\n  <h1>{{title}}</h1>\n\n  <div id=\"links\">\n    <a *ngIf=\"!auth.is_logged_in()\" [routerLink]=\"['/register']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Register</a>\n\n    <a *ngIf=\"!auth.is_logged_in()\" [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Login</a>\n\n    <a *ngIf=\"auth.is_logged_in()\" (click)=\"logout()\" href=\"#\">Logout</a>\n\n    <a *ngIf=\"auth.is_logged_in()\" [routerLink]=\"['/profile']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Profile</a>\n\n    <a *ngIf=\"auth.is_logged_in()\" [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['active']\"></a>\n    <!-- <a [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a> -->\n\n    <a [routerLink]=\"['/']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\" class=\"card\">\n  <h2>Hello, {{user.name}}</h2>\n\n  <h5>Account details:</h5>\n  <p><strong>Username:</strong> {{user.username}}</p>\n  <p><strong>Email:</strong> {{user.email}}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <h3>Sign up</h3>\n\n  <br/>\n\n  <form (submit)=\"submit()\">\n    <label for=\"name\">Name:</label><input id=\"name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\">\n    <label for=\"username\">Username:</label><input id=\"username\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\">\n    <label for=\"email\">Email:</label><input id=\"email\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"E-Mail\">\n    <label for=\"password_1\">Password:</label><input id=\"password_1\" type=\"password\" [(ngModel)]=\"password_1\" name=\"password_1\" placeholder=\"Password\">\n    <label for=\"password_2\">Password (again):</label><input id=\"password_2\" type=\"password\" [(ngModel)]=\"password_2\" name=\"password_2\" placeholder=\"Password\">\n    <br /><br />\n    <input id=\"submit\" type=\"submit\" value=\"Sign up\">\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thumbnail/thumbnail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/thumbnail/thumbnail.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"{{page}}\" target=\"_blank\"><img src=\"{{img}}\" alt=\"{{title}}\"></a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/video/video.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/video/video.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'DockSkid';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_alert_extensions_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/alert-extensions.service */ "./src/app/services/alert-extensions.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_background_background_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/background/background.component */ "./src/app/components/background/background.component.ts");
/* harmony import */ var _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/thumbnail/thumbnail.component */ "./src/app/components/thumbnail/thumbnail.component.ts");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/video/video.component */ "./src/app/components/video/video.component.ts");






















const appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'video', component: _components_video_video_component__WEBPACK_IMPORTED_MODULE_21__["VideoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
            _components_background_background_component__WEBPACK_IMPORTED_MODULE_19__["BackgroundComponent"],
            _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_20__["ThumbnailComponent"],
            _components_video_video_component__WEBPACK_IMPORTED_MODULE_21__["VideoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesModule"]
        ],
        providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_15__["ValidateService"], _services_alert_extensions_service__WEBPACK_IMPORTED_MODULE_16__["AlertExtensionsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/background/background.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/background/background.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n  z-index: -8;\n  opacity: 1;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n\n  background-image: none;\n  background-size: 100vw auto;\n  background-repeat: no-repeat;\n  background-position: 50% 25%;\n  transition: 1s;\n}\n\n#gradient { padding: 0; width: 100vw; height: 100vh; background-color: rgba(45, 15, 45, 0.65); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7O0VBRWIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBRUEsWUFBWSxVQUFVLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSx3Q0FBd0MsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gIHotaW5kZXg6IC04O1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwdncgYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDI1JTtcbiAgdHJhbnNpdGlvbjogMXM7XG59XG5cbiNncmFkaWVudCB7IHBhZGRpbmc6IDA7IHdpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgMTUsIDQ1LCAwLjY1KTsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/components/background/background.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/background/background.component.ts ***!
  \***************************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackgroundComponent = class BackgroundComponent {
    constructor() { }
    ngOnInit() {
        var index = Math.floor(Math.random() * 22);
        var padding = "";
        if (index < 100 && index > 9) {
            padding = "0";
        }
        else if (index < 10) {
            padding = "00";
        }
        var file = new String("/assets/blue/blue_" + padding + index + ".png");
        this.load_image(file);
    }
    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
    load_image(file) {
        var background = document.getElementById("background");
        console.log("background.style.backgroundImage = url(" + file + ");");
        background.style.backgroundImage = "url(" + file + ")";
        background.style.opacity = "1";
    }
};
BackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dynamic-background',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./background.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/background/background.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./background.component.css */ "./src/app/components/background/background.component.css")).default]
    })
], BackgroundComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{ position: relative; top: -21vh; width: 90vw; }\n\nh1 { position: absolute; top: 0.2em; left: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFOztBQUVwRCxLQUFLLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkeyBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLTIxdmg7IHdpZHRoOiA5MHZ3OyB9XG5cbmgxIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDAuMmVtOyBsZWZ0OiAxZW07IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
        this.eps = __webpack_require__(/*! ../../../assets/episode_data.json */ "./src/assets/episode_data.json");
        for (var i = 0; i < this.eps.length; ++i) {
            this.eps[i].img = '/assets/thumbnails/thumbnail_' + i + '.png';
            this.eps[i].page = '/video'; //'/ep/' + this.eps[i]['prod_code'];
        }
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dashboard-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  margin: 25vh auto;\n  text-align: center;\n  font-weight: bold;\n  background: rgba(170, 170, 170, 0.25);\n  width: 250px;\n  height: auto;\n  padding: 2em;\n}\n\nform { text-align: left; }\n\ninput {\n  position: relative;\n  left: -1em;\n  margin: 1em;\n  text-align: right;\n  border-width: 0 0 2px 0;\n  border-style: solid;\n  border-color: rgba(223, 230, 227, 1);\n  outline: none;\n  color: rgba(223, 230, 227, 1);\n  background: none;\n  transition: 0.3s;\n}\n\nlabel { font-weight: normal; }\n\n#submit {\n  padding: 0.5em;\n  font-weight: bold;\n  border-width: 2px!important;\n  border-style: solid;\n  border-color: rgba(223, 230, 227, 1);\n  border-radius: 1em;\n  outline: none;\n  color: rgba(223, 230, 227, 1);\n  background: none;\n  transition: 0.3s;\n}\n\n#submit:hover {\n  background-color: rgba(80, 40, 255, 1);\n  border-color: rgba(80, 40, 255, 1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLE9BQU8sZ0JBQWdCLEVBQUU7O0FBRXpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQSxRQUFRLG1CQUFtQixFQUFFOztBQUU3QjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQ0FBa0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgbWFyZ2luOiAyNXZoIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTcwLCAxNzAsIDE3MCwgMC4yNSk7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyZW07XG59XG5cbmZvcm0geyB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbmlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMWVtO1xuICBtYXJnaW46IDFlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjIzLCAyMzAsIDIyNywgMSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDIyMywgMjMwLCAyMjcsIDEpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5sYWJlbCB7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuI3N1Ym1pdCB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXdpZHRoOiAycHghaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjIzLCAyMzAsIDIyNywgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHJnYmEoMjIzLCAyMzAsIDIyNywgMSk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbiNzdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA0MCwgMjU1LCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDgwLCA0MCwgMjU1LCAxKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_extensions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert-extensions.service */ "./src/app/services/alert-extensions.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LoginComponent = class LoginComponent {
    constructor(auth, validate_service, flash_message, alert_ext, router) {
        this.auth = auth;
        this.validate_service = validate_service;
        this.flash_message = flash_message;
        this.alert_ext = alert_ext;
        this.router = router;
        this.alert_timeout = 3000;
    }
    ngOnInit() { }
    submit() {
        const user = {
            username: this.username,
            password: this.password
        };
        if (!this.validate_service.validateLogin(user)) {
            this.flash_message.show("Missing one or more fields!", { cssClass: 'warn-alert', timeout: this.alert_timeout });
            this.alert_ext.add_close_button('warn-alert');
            return false;
        }
        this.auth.login(user).subscribe(data => {
            if (data.success) {
                this.auth.store_user_data(data.token, data.user);
                this.flash_message.show(data.msg, { cssClass: 'success-alert', timeout: this.alert_timeout });
                this.alert_ext.add_close_button('success-alert');
                this.router.navigate(['/dashboard']);
            }
            else {
                this.flash_message.show(data.msg, { cssClass: 'warn-alert', timeout: this.alert_timeout });
                this.alert_ext.add_close_button('warn-alert');
                this.router.navigate(['/login']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"] },
    { type: _services_alert_extensions_service__WEBPACK_IMPORTED_MODULE_4__["AlertExtensionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#nav-bar { z-index: 256; background: rgba(85, 7, 255, 0.7); position: fixed; top: 0; left: 0; width: 100vw; height: 30px; padding: 1em; }\n\n#links { margin-right: 3em; }\n\nh1 { position: relative; top: -0.75em; left: 0.5em; }\n\na {\n  position: relative;\n  top: -4.75em;\n  right: 1em;\n  margin: 0 1em;\n  padding: 0 10px 19px 10px;\n  float: right;\n  text-align: right;\n  text-decoration: none;\n  color: rgba(223, 230, 227, 1);\n  transition: 0.3s;\n}\n\na:hover { color: rgba(227, 48, 61, 1); }\n\n.active { color: rgba(227, 48, 61, 1); border-bottom: 3px solid rgba(227, 48, 61, 1);}\n\n#logo {\n  float: left;\n  position: relative;\n  top: -0.5em;\n  left: 0.5em;\n  width: 45px;\n  height: 45px;\n  background-image: url(\"/assets/ftf_logo.png\");\n  background-size: 45px;\n  background-repeat: no-repeat;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLFlBQVksRUFBRSxpQ0FBaUMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRTs7QUFFeEksU0FBUyxpQkFBaUIsRUFBRTs7QUFFNUIsS0FBSyxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFOztBQUVwRDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSxVQUFVLDJCQUEyQixFQUFFOztBQUV2QyxVQUFVLDJCQUEyQixFQUFFLDZDQUE2QyxDQUFDOztBQUVyRjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZDQUE2QztFQUM3QyxxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXYtYmFyIHsgei1pbmRleDogMjU2OyBiYWNrZ3JvdW5kOiByZ2JhKDg1LCA3LCAyNTUsIDAuNyk7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwdnc7IGhlaWdodDogMzBweDsgcGFkZGluZzogMWVtOyB9XG5cbiNsaW5rcyB7IG1hcmdpbi1yaWdodDogM2VtOyB9XG5cbmgxIHsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC0wLjc1ZW07IGxlZnQ6IDAuNWVtOyB9XG5cbmEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQuNzVlbTtcbiAgcmlnaHQ6IDFlbTtcbiAgbWFyZ2luOiAwIDFlbTtcbiAgcGFkZGluZzogMCAxMHB4IDE5cHggMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgyMjMsIDIzMCwgMjI3LCAxKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuYTpob3ZlciB7IGNvbG9yOiByZ2JhKDIyNywgNDgsIDYxLCAxKTsgfVxuXG4uYWN0aXZlIHsgY29sb3I6IHJnYmEoMjI3LCA0OCwgNjEsIDEpOyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyMjcsIDQ4LCA2MSwgMSk7fVxuXG4jbG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTAuNWVtO1xuICBsZWZ0OiAwLjVlbTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9mdGZfbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_extensions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert-extensions.service */ "./src/app/services/alert-extensions.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let NavBarComponent = class NavBarComponent {
    constructor(auth, validate_service, flash_message, alert_ext, router) {
        this.auth = auth;
        this.validate_service = validate_service;
        this.flash_message = flash_message;
        this.alert_ext = alert_ext;
        this.router = router;
        this.title = 'DockSkid';
        this.alert_timeout = 3000;
    }
    ngOnInit() { }
    logout() {
        if (this.auth.logout()) {
            this.flash_message.show("Logged out!", { cssClass: 'success-alert', timeout: this.alert_timeout });
            this.alert_ext.add_close_button('success-alert');
            this.router.navigate(['/']);
        }
        else {
            this.flash_message.show("Not logged in!", { cssClass: 'warn-alert', timeout: this.alert_timeout });
            this.alert_ext.add_close_button('warn-alert');
        }
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"] },
    { type: _services_alert_extensions_service__WEBPACK_IMPORTED_MODULE_4__["AlertExtensionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card { width: 80vw; height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLFdBQVcsRUFBRSxZQUFZLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgeyB3aWR0aDogODB2dzsgaGVpZ2h0OiBhdXRvOyB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.auth.get_profile().subscribe(profile => {
            this.user = profile.user;
        }, err => {
            console.log(err);
            return false;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card { margin: 18vh auto; }\nform { text-align: left; }\ninput {\n  position: relative;\n  left: -1em;\n  margin: 1em;\n  text-align: right;\n  border-width: 0 0 2px 0;\n  border-style: solid;\n  border-color: rgba(223, 230, 227, 1);\n  outline: none;\n  color: rgba(223, 230, 227, 1);\n  background: none;\n  transition: 0.3s;\n}\nlabel { font-weight: normal; }\n#submit {\n  padding: 0.5em;\n  font-weight: bold;\n  border-width: 2px!important;\n  border-style: solid;\n  border-color: rgba(223, 230, 227, 1);\n  border-radius: 1em;\n  outline: none;\n  color: rgba(223, 230, 227, 1);\n  background: none;\n  transition: 0.3s;\n}\n#submit:hover {\n  background-color: rgba(80, 40, 255, 1);\n  border-color: rgba(80, 40, 255, 1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsaUJBQWlCLEVBQUU7QUFDM0IsT0FBTyxnQkFBZ0IsRUFBRTtBQUV6QjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQSxRQUFRLG1CQUFtQixFQUFFO0FBRTdCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgeyBtYXJnaW46IDE4dmggYXV0bzsgfVxuZm9ybSB7IHRleHQtYWxpZ246IGxlZnQ7IH1cblxuaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xZW07XG4gIG1hcmdpbjogMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMjMsIDIzMCwgMjI3LCAxKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHJnYmEoMjIzLCAyMzAsIDIyNywgMSk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbmxhYmVsIHsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4jc3VibWl0IHtcbiAgcGFkZGluZzogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItd2lkdGg6IDJweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMjMsIDIzMCwgMjI3LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogcmdiYSgyMjMsIDIzMCwgMjI3LCAxKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuI3N1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDQwLCAyNTUsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoODAsIDQwLCAyNTUsIDEpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_extensions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert-extensions.service */ "./src/app/services/alert-extensions.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let RegisterComponent = class RegisterComponent {
    constructor(validate_service, auth, flash_message, alert_ext, router) {
        this.validate_service = validate_service;
        this.auth = auth;
        this.flash_message = flash_message;
        this.alert_ext = alert_ext;
        this.router = router;
        this.alert_timeout = 3000;
    }
    ngOnInit() { }
    submit() {
        const user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password_1
        };
        if (!this.validate_service.validateRegister(user)) {
            this.flash_message.show("Missing one or more fields!", { cssClass: 'warn-alert', timeout: this.alert_timeout });
            this.alert_ext.add_close_button('warn-alert');
            return false;
        }
        else if (!this.validate_service.validateEmail(user.email)) {
            this.flash_message.show("Invalid email!", { cssClass: 'warn-alert', timeout: this.alert_timeout });
            this.alert_ext.add_close_button('warn-alert');
            return false;
        }
        else if (!this.validate_service.validatePassword(user.password)) {
            this.flash_message.show("Password must have 8 to 40 characters, contains upper and lowercase letters, and have atleast one number.", { cssClass: 'warn-alert', timeout: 2 * this.alert_timeout });
            this.alert_ext.add_close_button('warn-alert');
            return false;
        }
        else if (!this.validate_service.matchPasswords(this.password_1, this.password_2)) {
            this.flash_message.show("Passwords do not match!", { cssClass: 'warn-alert', timeout: this.alert_timeout });
            this.alert_ext.add_close_button('warn-alert');
            return false;
        }
        this.auth.register(user).subscribe(data => {
            if (data.success) {
                this.flash_message.show(data.msg, { cssClass: 'success-alert', timeout: this.alert_timeout });
                this.alert_ext.add_close_button('success-alert');
                this.router.navigate(['/login']);
            }
            else {
                this.flash_message.show(data.msg, { cssClass: 'warn-alert', timeout: this.alert_timeout });
                this.alert_ext.add_close_button('warn-alert');
                this.router.navigate(['/register']);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"] },
    { type: _services_alert_extensions_service__WEBPACK_IMPORTED_MODULE_4__["AlertExtensionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'register-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/thumbnail/thumbnail.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/thumbnail/thumbnail.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\n  margin: 0.1em 0.5vw;\n  width: 19vw;\n  height: auto;\n}\n\na, img{ z-index: 16; }\n\na > img {\n  background-color: rgba(68, 63, 76, 1);\n  opacity: 0.5;\n  transition: 0.6s;\n}\n\na:hover > img{\n  opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aHVtYm5haWwvdGh1bWJuYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxRQUFRLFdBQVcsRUFBRTs7QUFFckI7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGh1bWJuYWlsL3RodW1ibmFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICBtYXJnaW46IDAuMWVtIDAuNXZ3O1xuICB3aWR0aDogMTl2dztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5hLCBpbWd7IHotaW5kZXg6IDE2OyB9XG5cbmEgPiBpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA2MywgNzYsIDEpO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IDAuNnM7XG59XG5cbmE6aG92ZXIgPiBpbWd7XG4gIG9wYWNpdHk6IDE7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/thumbnail/thumbnail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/thumbnail/thumbnail.component.ts ***!
  \*************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ThumbnailComponent = class ThumbnailComponent {
    constructor(elm) {
        this.elm = elm;
        this.title = elm.nativeElement.getAttribute('t_title');
        this.img = elm.nativeElement.getAttribute('t_img');
        this.page = elm.nativeElement.getAttribute('t_page');
    }
    ngOnInit() { }
};
ThumbnailComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThumbnailComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThumbnailComponent.prototype, "img", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThumbnailComponent.prototype, "page", void 0);
ThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'thumbnail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thumbnail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thumbnail/thumbnail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thumbnail.component.css */ "./src/app/components/thumbnail/thumbnail.component.css")).default]
    })
], ThumbnailComponent);



/***/ }),

/***/ "./src/app/components/video/video.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/video/video.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW8vdmlkZW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/video/video.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoComponent = class VideoComponent {
    constructor() { }
    ngOnInit() {
    }
};
VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/video/video.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video.component.css */ "./src/app/components/video/video.component.css")).default]
    })
], VideoComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.is_logged_in()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/alert-extensions.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/alert-extensions.service.ts ***!
  \******************************************************/
/*! exports provided: AlertExtensionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExtensionsService", function() { return AlertExtensionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertExtensionsService = class AlertExtensionsService {
    constructor() { }
    add_close_button(alert_class) {
        var alerts = document.getElementsByClassName(alert_class);
        var alert = alerts[alerts.length - 1];
        var button = document.createElement('img');
        button.setAttribute('src', '/assets/ui_elements/close_btn_grey.png');
        button.setAttribute('class', 'close-btn');
        // Close action for button
        button.addEventListener('click', function () { button.parentElement.style.display = "none"; });
        alert.appendChild(button);
    }
};
AlertExtensionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertExtensionsService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        console.log("Logged in: " + this.is_logged_in());
    }
    register(user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('u/register', user, { headers: headers });
    }
    login(user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('u/auth', user, { headers: headers });
    }
    logout() {
        if (this.auth_token != null) {
            this.auth_token = null;
            this.user = null;
            localStorage.clear();
            return true;
        }
        else
            return false;
    }
    is_logged_in() {
        this.auth_token = localStorage.getItem('id_token');
        return !(this.auth_token == null || this.auth_token == undefined);
    }
    get_profile() {
        this.load_token();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.auth_token
        });
        return this.http.get('u/profile', { headers: headers });
    }
    load_token() {
        this.auth_token = localStorage.getItem('id_token');
        ;
        return this.auth_token;
    }
    store_user_data(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.auth_token = token;
        this.user = user;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidateService = class ValidateService {
    constructor() { }
    validateLogin(user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateRegister(user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return pattern.test(email);
    }
    validatePassword(password) {
        var numbers = /[0-9]/g;
        var lower = /[a-z]/g;
        var upper = /[A-Z]/g;
        return ((password.length > 8 && password.length < 40) && (password.match(numbers) !== null) && (password.match(lower) !== null) && (password.match(upper) !== null));
    }
    matchPasswords(password_1, password_2) {
        return (password_1 === password_2);
    }
};
ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidateService);



/***/ }),

/***/ "./src/assets/episode_data.json":
/*!**************************************!*\
  !*** ./src/assets/episode_data.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"number\":\"0\",\"eng_name\":\"X.A.N.A. Awakens\",\"fre_name\":\"Le réveil de X.A.N.A.\",\"us_airdate\":\"October 2, 2006 (2006-10-02)\",\"fr_airdate\":\"October 21, 2006\",\"prod_code\":\"000\",\"description\":\"In a prequel to Teddygozilla, Jeremy discovers a quantum supercomputer in an abandoned factory. Within, he finds that the computer runs a world parallel to Earth, a virtual world called Lyoko, along with an artificial intelligence Jeremy decides to name Maya. Jeremy tries to help Maya as much as he can with understanding what she is doing on Lyoko. With the Supercomputer active, strange events begin to plague Jeremy.\"},{\"number\":\"1\",\"eng_name\":\"Teddygozilla\",\"fre_name\":\"Teddygozilla\",\"us_airdate\":\"April 19, 2004 (2004-04-19)\",\"fr_airdate\":\"September 8, 2003\",\"prod_code\":\"101\",\"description\":\"Milly and Tamiya are doing a report on the school prom. They try to interview Sissi, who was prom queen last year, but she turns them down and makes fun of them for their age. Milly tries to ask Ulrich out, and he turns her down because he's going to the dance with Yumi. Upset, Milly storms off. In her room, she tells Tamiya that she hates everyone, with X.A.N.A. listening from her computer.\"},{\"number\":\"2\",\"eng_name\":\"Seeing Is Believing\",\"fre_name\":\"Le voir pour le croire\",\"us_airdate\":\"April 20, 2004 (2004-04-20)\",\"fr_airdate\":\"September 10, 2003\",\"prod_code\":\"102\",\"description\":\"Principal Delmas lets Odd begin casting for a traditional rock band called the Pop Rock Progressives. They need a drummer, and several try out for the position, including Nicolas. Nicolas turns out to be the best, but Odd does not want anything to do with him.  Meanwhile, X.A.N.A. tries to overload a nuclear power plant by storing electricity in a transformer and unleashing it on the plant all at once, possibly causing a nuclear meltdown.\"},{\"number\":\"3\",\"eng_name\":\"Holiday in the Fog\",\"fre_name\":\"Vacances dans la brume\",\"us_airdate\":\"April 21, 2004 (2004-04-21)\",\"fr_airdate\":\"September 17, 2003\",\"prod_code\":\"103\",\"description\":\"After Jeremy and Ulrich paint graffiti portraying Jim in a less than favorable light on a wall in order for Jeremy to remain at school during a vacation, Sissi overhears him talking with the others about his reasons for doing so: to watch X.A.N.A. She gets her father to let her stay there during the vacation so she can discover the group's secret. X.A.N.A.\"},{\"number\":\"4\",\"eng_name\":\"Log Book\",\"fre_name\":\"Carnet de bord\",\"us_airdate\":\"April 22, 2004 (2004-04-22)\",\"fr_airdate\":\"September 24, 2003\",\"prod_code\":\"104\",\"description\":\"When Sissi finds and steals Ulrich's diary, he is blackmailed into being her boyfriend. During a trip to a swimming pool, Jeremy and Yumi have the opportunity to find it. The new electric bus that is being used for the field trip is possessed by X.A.N.A. and starts acting weird as a result. Yumi ends up finding Sissi's diary during this and uses it to blackmail her into giving up the location of Ulrich's diary. X.A.N.A.\"},{\"number\":\"5\",\"eng_name\":\"Big Bug\",\"fre_name\":\"Big Bogue\",\"us_airdate\":\"April 23, 2004 (2004-04-23)\",\"fr_airdate\":\"October 1, 2003\",\"prod_code\":\"105\",\"description\":\"X.A.N.A. launches an attack on the internet itself, managing to disable much of the city's infrastructure. Though most of the problems caused can be bypassed by manual controls, two trains that are completely automatic are put on a collision course, one of which contains a load of highly toxic and deadly chemicals.\"},{\"number\":\"6\",\"eng_name\":\"Cruel Dilemma\",\"fre_name\":\"Cruel Dilemme\",\"us_airdate\":\"April 26, 2004 (2004-04-26)\",\"fr_airdate\":\"October 8, 2003\",\"prod_code\":\"106\",\"description\":\"Due to a favorable accident on Odd's part, Jeremy's materialization program for Aelita is finished, but is only good for one use. In turn, X.A.N.A. possesses two bulldozers and sets them on the factory to prevent Aelita's materialization from taking place. Odd goes to Lyoko while Ulrich tries to stop the bulldozers. Ulrich is then knocked unconscious, and Yumi carries him to safety. Odd is devirtualized, and Yumi goes to Lyoko to help Aelita.\"},{\"number\":\"7\",\"eng_name\":\"Image Problem\",\"fre_name\":\"Problème d'image\",\"us_airdate\":\"April 27, 2004 (2004-04-27)\",\"fr_airdate\":\"October 15, 2003\",\"prod_code\":\"107\",\"description\":\"After an unexplained incident on Lyoko ends up devirtualizing Yumi without any cause, she is taken to the infirmary. After waking up, she attacks the nurse, Yolanda (addressed as Dorothy in the English dub), and continues to act strangely throughout the day, wanting to go to Lyoko with everyone else. Jeremy will not let them, though, because he wants to know what caused her devirtualization.\"},{\"number\":\"8\",\"eng_name\":\"End of Take\",\"fre_name\":\"Clap de fin\",\"us_airdate\":\"April 28, 2004 (2004-04-28)\",\"fr_airdate\":\"October 22, 2003\",\"prod_code\":\"108\",\"description\":\"After Principal Delmas shows a movie about aliens made by a director named James Finson, Finson announces that he plans to make a movie in the city, using the factory as their primary location. The group would rather not have people setting up shop in their factory, so Ulrich tries to convince Finson that making a movie there would be a bad idea.\"},{\"number\":\"9\",\"eng_name\":\"Satellite\",\"fre_name\":\"Satellite\",\"us_airdate\":\"April 29, 2004 (2004-04-29)\",\"fr_airdate\":\"October 29, 2003\",\"prod_code\":\"109\",\"description\":\"During class, everyone's cell phones suddenly go off, and all of them are confiscated. Sissi is not happy about this and organizes a protest in response. Yumi joins the protest, since having cell phones is a necessary part of the group's fight against X.A.N.A. Meanwhile, Jeremy investigates the strange occurrence and learns that X.A.N.A. is using the school's antenna to take over the nearby television antenna.\"},{\"number\":\"10\",\"eng_name\":\"The Girl of the Dreams\",\"fre_name\":\"Créature de rêve\",\"us_airdate\":\"April 30, 2004 (2004-04-30)\",\"fr_airdate\":\"November 5, 2003\",\"prod_code\":\"110\",\"description\":\"After Jeremy makes another failed attempt to materialize Aelita, a student named Taelia arrives at school that looks exactly like her. Jeremy is convinced that it must be her, but she seems to have no memory of her experiences with the group. The others are not quite as convinced, but Jeremy insists that the materialization process must have caused her to lose her memory, but the others were right.\"},{\"number\":\"11\",\"eng_name\":\"Plagued\",\"fre_name\":\"Enragés\",\"us_airdate\":\"May 3, 2004 (2004-05-03)\",\"fr_airdate\":\"November 12, 2003\",\"prod_code\":\"111\",\"description\":\"X.A.N.A. possesses a rat that tries to sneak a bite from the school's kitchen. His creation goes on biting other rats, putting them under his control. Meanwhile, the school counselor has been watching Jeremy and believes him to be a gifted student. As such, he believes that Jeremy would be better off at a more advanced school and decides to give him an aptitude test. During the test, X.A.N.A.'s rat army attacks the school.\"},{\"number\":\"12\",\"eng_name\":\"Swarming Attack\",\"fre_name\":\"Attaque en piqué\",\"us_airdate\":\"May 4, 2004 (2004-05-04)\",\"fr_airdate\":\"November 19, 2003\",\"prod_code\":\"112\",\"description\":\"After failing with an army of rats, X.A.N.A. attempts a similar tactic using hornets. Meanwhile, Ulrich gets a letter from Yumi saying that she loves him. He's not quite sure how to respond, so he avoids talking to her about it. Jeremy and Odd find out about the note, but does not learn who wrote it. Ulrich tells them not to tell Yumi. After learning about the hornets and X.A.N.A.'s control over them, the group heads for the factory.\"},{\"number\":\"13\",\"eng_name\":\"Just in Time\",\"fre_name\":\"D'un cheveu\",\"us_airdate\":\"May 5, 2004 (2004-05-05)\",\"fr_airdate\":\"November 26, 2003\",\"prod_code\":\"113\",\"description\":\"Taking a different approach to his research, Jeremy materializes a single hair of Aelita's. Unfortunately, the follow-up test goes awry, and Jeremy has to find out why. Meanwhile, different parts of the school begin to crumble apart. Jeremy learns that his first test damaged Aelita's program, and she'll be deleted if she tries to deactivate a tower. On top of that, they learn that X.A.N.A.\"},{\"number\":\"14\",\"eng_name\":\"The Trap\",\"fre_name\":\"Piège\",\"us_airdate\":\"May 6, 2004 (2004-05-06)\",\"fr_airdate\":\"December 3, 2003\",\"prod_code\":\"114\",\"description\":\"It's been a year since the group first discovered the Supercomputer and Aelita, and they decide to throw a surprise party for Aelita. Sissi catches wind of the party and follows Ulrich and Yumi to the factory. On the way there, X.A.N.A. possesses the factory as a whole. Jeremy and Odd are the first to arrive at the factory, finding the elevator to be inoperable. They head off to find the fuse box.\"},{\"number\":\"15\",\"eng_name\":\"Laughing Fit\",\"fre_name\":\"Crise de rire\",\"us_airdate\":\"May 7, 2004 (2004-05-07)\",\"fr_airdate\":\"December 10, 2003\",\"prod_code\":\"115\",\"description\":\"In class, Susan teaches the class about nitrous oxide, more commonly known as laughing gas, and its effects. Meanwhile, Yumi's parents are having trouble with their relationship, which Yumi is not too happy about. No one seems to be able to cheer her up, even Ulrich. He eventually manages to do so, however, and helps her find a way to bring her parents back together. During a school production of Romeo and Juliet, X.A.N.A.\"},{\"number\":\"16\",\"eng_name\":\"Claustrophobia\",\"fre_name\":\"Claustrophobie\",\"us_airdate\":\"May 10, 2004 (2004-05-10)\",\"fr_airdate\":\"December 17, 2003\",\"prod_code\":\"116\",\"description\":\"When a boy named Theo takes an interest in Sissi, Herve becomes jealous and tries to get him expelled. The situation only gets worse when X.A.N.A. possesses the cafeteria during lunch, trapping most of the students inside its electrified walls. Jeremy and Yumi leave the cafeteria before this took place. Yumi has to get Aelita to the tower by herself before the cafeteria collapses in on itself.\"},{\"number\":\"17\",\"eng_name\":\"Amnesia\",\"fre_name\":\"Mémoire morte\",\"us_airdate\":\"May 11, 2004 (2004-05-11)\",\"fr_airdate\":\"December 24, 2003\",\"prod_code\":\"117\",\"description\":\"When Suzanne gives a lesson on nanotechnology, she uses a small machine designed to produce the little robots as an example. Little do they realize that X.A.N.A. has infected the machine, so when they find it filled with gel, Odd carelessly ends up pushing Ulrich's face into a small scoop of it. Later on, Ulrich gets a headache and faints. When he wakes up, his memory is gone.\"},{\"number\":\"18\",\"eng_name\":\"Killer Music\",\"fre_name\":\"Musique mortelle\",\"us_airdate\":\"May 12, 2004 (2004-05-12)\",\"fr_airdate\":\"December 31, 2003\",\"prod_code\":\"118\",\"description\":\"When X.A.N.A. creates an MP3 file that puts anyone who listens to it into a coma, Odd ends up being the first victim. Soon, the rest of the city begins to follow, including Ulrich and Jeremy.\"},{\"number\":\"19\",\"eng_name\":\"Frontier\",\"fre_name\":\"Frontière\",\"us_airdate\":\"May 13, 2004 (2004-05-13)\",\"fr_airdate\":\"January 7, 2004\",\"prod_code\":\"119\",\"description\":\"When Jeremy yells at Aelita, he tries to go to Lyoko to apologize. Unfortunately, while Yumi is transferring him, she makes a scanner error, which leaves him trapped in a virtual limbo between Lyoko and the real world, so Aelita has to retrieve data to recover Jeremy without support in order to bring Jeremy back, but when she gets to the Mountain Sector, there are a couple of Bloks guarding the tower.\"},{\"number\":\"20\",\"eng_name\":\"The Robots\",\"fre_name\":\"L'âme des robots\",\"us_airdate\":\"May 14, 2004 (2004-05-14)\",\"fr_airdate\":\"January 14, 2004\",\"prod_code\":\"120\",\"description\":\"During a school robot competition, X.A.N.A. sends a robot of his own to deal with the group. Ulrich and Yumi are forced to enlist Herve's help to destroy it while Jeremy and Odd head to the factory to deactivate the tower.\"},{\"number\":\"21\",\"eng_name\":\"Zero Gravity Zone\",\"fre_name\":\"Gravité zéro\",\"us_airdate\":\"May 17, 2004 (2004-05-17)\",\"fr_airdate\":\"January 21, 2004\",\"prod_code\":\"121\",\"description\":\"Just before an official school soccer game, X.A.N.A. starts nullifying gravity by creating electromagnetic fields around specific areas. Ulrich is unable to help stop X.A.N.A. this time around, instead needing to impress his parents (particularly his hard to please father), who will be attending the game. The others have to stop X.A.N.A. before the entire school is sent into orbit.Note: This episode never aired in Serbia.\"},{\"number\":\"22\",\"eng_name\":\"Routine\",\"fre_name\":\"Routine\",\"us_airdate\":\"May 18, 2004 (2004-05-18)\",\"fr_airdate\":\"January 28, 2004\",\"prod_code\":\"122\",\"description\":\"After many X.A.N.A. attacks in a row, Ulrich starts to get tired of fighting X.A.N.A. On top of that, he questions his relationship with Yumi and if she feels the same way about him. He begins to hang around a girl named Emily, and Yumi gets jealous, causing a great fight between the group. When X.A.N.A. activates a tower without disturbing Earth, Jeremy forces Ulrich, Odd, and Yumi all to go to Lyoko to deactivate the tower.\"},{\"number\":\"23\",\"eng_name\":\"Rock Bottom?\",\"fre_name\":\"36ème dessous\",\"us_airdate\":\"May 19, 2004 (2004-05-19)\",\"fr_airdate\":\"February 4, 2004\",\"prod_code\":\"123\",\"description\":\"During a vacation period at the school, the group plans to have a party at Yumi's house. Odd promises to have a DJ at the party. This DJ, named Samantha Knight, is also his girlfriend, who goes to another school. After meeting up, she has Odd take her to the computer room. Once they arrive, she tries to steal a laptop, since she's too poor to afford one. Odd stops her, but ends up being caught by Jim. Meanwhile, X.A.N.A.\"},{\"number\":\"24\",\"eng_name\":\"Ghost Channel\",\"fre_name\":\"Canal fantôme\",\"us_airdate\":\"May 20, 2004 (2004-05-20)\",\"fr_airdate\":\"February 11, 2004\",\"prod_code\":\"124\",\"description\":\"After another successful battle against X.A.N.A. and another return to the past, Ulrich, Odd, and Yumi are nowhere to be found. They, however, do not see anything wrong with where they are. X.A.N.A. has trapped them in a world of its own design, which is fashioned after the school to ease their suspicions. Meanwhile, in the real world, Jeremy is being questioned on the group's disappearance.\"},{\"number\":\"25\",\"eng_name\":\"Code: Earth\",\"fre_name\":\"Code Terre\",\"us_airdate\":\"May 21, 2004 (2004-05-21)\",\"fr_airdate\":\"February 18, 2004\",\"prod_code\":\"125\",\"description\":\"Jeremy finally completes his materialization program and prepares to bring Aelita into the real world. At the same time, Jim's suspicions of the group have risen to the point that he's actively trying to discover their secret and he ends up causing Jeremy to injure his ankle while running away from him downstairs in the school.\"},{\"number\":\"26\",\"eng_name\":\"False Start\",\"fre_name\":\"Faux départ\",\"us_airdate\":\"May 24, 2004 (2004-05-24)\",\"fr_airdate\":\"February 25, 2004\",\"prod_code\":\"126\",\"description\":\"Aelita's materialization program has worked, and she's now living on Earth, but not all is well. When Jeremy pulls the plug, Aelita faints. Jeremy believes that a virus is given to her by X.A.N.A. while he is bringing her to Earth in the previous episode, which has linked her to the Supercomputer, preventing the group from shutting it off. Furthermore, X.A.N.A.\"},{\"number\":\"27\",\"eng_name\":\"New Order\",\"fre_name\":\"Nouvelle donne\",\"us_airdate\":\"September 19, 2005 (2005-09-19)\",\"fr_airdate\":\"August 31, 2005\",\"prod_code\":\"201\",\"description\":\"This episode takes place one month after the events of the first season. After discovering Aelita's link to the Supercomputer and the inability to shut off the Supercomputer that stems from it, Jeremy works hard to find new and better ways to fight X.A.N.A. To that end, he develops new vehicles for the group. He also develops a new tower-scanning program that instantly detects activated towers, allowing Aelita to live on Earth.\"},{\"number\":\"28\",\"eng_name\":\"Uncharted Territory\",\"fre_name\":\"Terre inconnue\",\"us_airdate\":\"September 20, 2005 (2005-09-20)\",\"fr_airdate\":\"September 7, 2005\",\"prod_code\":\"202\",\"description\":\"While Aelita adjusts to her new life on Earth, Jeremy and the others investigate the mysterious owner of the Hermitage, Franz Hopper, and his link to the Supercomputer, Lyoko, and X.A.N.A. It is discovered that Franz Hopper was a former teacher at Kadic. After being teased by Sissi, Aelita retreats to Lyoko but gets lost. Jeremy finds her in a previously undiscovered fifth sector of Lyoko, Carthage (labeled Sector 5 by the group).\"},{\"number\":\"29\",\"eng_name\":\"Exploration\",\"fre_name\":\"Exploration\",\"us_airdate\":\"September 21, 2005 (2005-09-21)\",\"fr_airdate\":\"September 14, 2005\",\"prod_code\":\"203\",\"description\":\"After discovering Sector 5, the group decides to explore it. Yumi is forced to opt out after her continued late-night trips to Lyoko draw the attention of her parents. While in Sector 5, Ulrich and Odd get devirtualized, but do not appear in the real world, so Yumi sneaks out of the house to go to Lyoko and rescue Aelita from the Scyphozoa while Jeremy searches for a way to recover Odd and Ulrich.\"},{\"number\":\"30\",\"eng_name\":\"A Great Day\",\"fre_name\":\"Un grand jour\",\"us_airdate\":\"September 22, 2005 (2005-09-22)\",\"fr_airdate\":\"September 21, 2005\",\"prod_code\":\"204\",\"description\":\"After taking another trip to Sector 5 and returning to the school, Aelita talks to Jeremy about not being human, unaware that Sissi is recording their conversation. On top of that, the false data they retrieved from Sector 5 allows X.A.N.A. to take over the Supercomputer and starts running return trips over and over. Jeremy discovers the return to the pasts are making X.A.N.A. stronger and more powerful. During the third return trip, X.A.N.A.\"},{\"number\":\"31\",\"eng_name\":\"Mister Pück\",\"fre_name\":\"Mister Pück\",\"us_airdate\":\"September 23, 2005 (2005-09-23)\",\"fr_airdate\":\"September 28, 2005\",\"prod_code\":\"205\",\"description\":\"When Aelita's dreams and hallucinations become too disruptive to ignore, the group heads to the Hermitage to discover their source. There, Aelita finds a doll she inexplicably recognizes to be Mister Puck. Hidden on this doll is a key to a train station locker, which contains the heavily encrypted diary of Franz Hopper. Upon its discovery, X.A.N.A. takes action, possessing Jeremy, to ensure they'll never be able to read it.\"},{\"number\":\"32\",\"eng_name\":\"Saint Valentine's Day\",\"fre_name\":\"Saint Valentin\",\"us_airdate\":\"September 26, 2005 (2005-09-26)\",\"fr_airdate\":\"October 5, 2005\",\"prod_code\":\"206\",\"description\":\"It's Saint Valentine's Day and romance is blossoming in the air. Ulrich forgets, so at last minute writes a poem for Yumi. However, when William presents Yumi with flowers, Ulrich gets jealous and reads the poem to Sissi instead, hoping to elicit jealousy from Yumi. In return, Yumi kisses William on the cheek. Ulrich and Yumi end up in a fight, both bothered and wondering if the other really likes them. Additionally, a man possessed by X.A.N.A.\"},{\"number\":\"33\",\"eng_name\":\"Final Mix\",\"fre_name\":\"Mix final\",\"us_airdate\":\"September 27, 2005 (2005-09-27)\",\"fr_airdate\":\"October 12, 2005\",\"prod_code\":\"207\",\"description\":\"When the school holds a concert in the gym, William accidentally drops a mixing board for the DJ contest. Odd offers to fix it, and tries to get Jeremy to help. Jeremy is busy, so Aelita offers her help. She easily fixes the device, and finds that she is quite talented in using it. The school is holding its finals, as well, and Odd finds that he is not prepared in the least. Meanwhile, X.A.N.A.\"},{\"number\":\"34\",\"eng_name\":\"Missing Link\",\"fre_name\":\"Chaînon manquant\",\"us_airdate\":\"September 28, 2005 (2005-09-28)\",\"fr_airdate\":\"October 19, 2005\",\"prod_code\":\"208\",\"description\":\"During a mission to Sector 5, the Scyphozoa attacks Yumi, stealing her human DNA, leaving her trapped on Lyoko. To make matters worse, it's picture day for her class and she will be suspended if absent. After some discussion, Ulrich gets the idea to have Sissi stand in for Yumi. Strangely, Sissi agrees and asks for nothing in return. During this, Jeremy tries to come up with a way to bring Yumi back.\"},{\"number\":\"35\",\"eng_name\":\"The Chips Are Down\",\"fre_name\":\"Les jeux sont faits\",\"us_airdate\":\"September 29, 2005 (2005-09-29)\",\"fr_airdate\":\"October 26, 2005\",\"prod_code\":\"209\",\"description\":\"When Ulrich learns that Yumi might have to go back to Japan because her father lost his job, he cannot accept losing her. After hearing the lottery numbers on the radio though, he gets an idea. Using a return trip, Ulrich is able to get a ticket with the winning numbers and give it to her parents. When the others find out, they kick him out of the group until they can figure out what to do. To make matters worse, X.A.N.A.\"},{\"number\":\"36\",\"eng_name\":\"Marabounta\",\"fre_name\":\"Marabounta\",\"us_airdate\":\"September 30, 2005 (2005-09-30)\",\"fr_airdate\":\"November 2, 2005\",\"prod_code\":\"210\",\"description\":\"After deciphering a part of Franz Hopper's diary, Jeremy gets an idea to make a monster that fights on the side of good. By combining techniques, he makes the Marabounta, a black sphere that can exponentially replicate itself endlessly and devour any monster it may encase. Though it works quite well to begin with, everything goes wrong when it senses Aelita's virus, which is linked to X.A.N.A.\"},{\"number\":\"37\",\"eng_name\":\"Common Interest\",\"fre_name\":\"Intérêt commun\",\"us_airdate\":\"October 3, 2005 (2005-10-03)\",\"fr_airdate\":\"November 9, 2005\",\"prod_code\":\"211\",\"description\":\"When the Supercomputer's main nuclear battery starts failing, X.A.N.A. is forced to possess a local criminal named Peter Duncan to replace it. The Supercomputer's periodic shutdowns threaten not only X.A.N.A., but also Aelita, whose heart stops beating with each shutdown due to her connection to the Supercomputer. X.A.N.A. soon captures Jeremy to change the battery to the Supercomputer.\"},{\"number\":\"38\",\"eng_name\":\"Temptation\",\"fre_name\":\"Tentation\",\"us_airdate\":\"November 25, 2005 (2005-11-25)\",\"fr_airdate\":\"December 7, 2005\",\"prod_code\":\"212\",\"description\":\"After X.A.N.A.'s attack, Jeremy insists on a return to the past, regardless of the fact that X.A.N.A. does not cause any damage. When questioned, he gets defensive and angry, insisting that it's necessary. Further questioning on the matter leads to the same result. After the next return to the past, Jeremy is found unconscious in his room. Yumi and Ulrich go searching through Jeremy's room to see what they can find about Jeremy's problem.\"},{\"number\":\"39\",\"eng_name\":\"A Bad Turn\",\"fre_name\":\"Mauvaise Conduite\",\"us_airdate\":\"October 26, 2005 (2005-10-26)\",\"fr_airdate\":\"November 16, 2005\",\"prod_code\":\"213\",\"description\":\"When Ulrich tries to tell Yumi how he really feels after some prodding by the rest of the group, he finds her talking to William, who is doing the same thing Ulrich had planned to. Yumi turns him down, but Ulrich leaves before hearing it. Meanwhile, X.A.N.A. activates a tower and materializes a Krab. At school, a driving class has been set up to teach the kids road safety.\"},{\"number\":\"40\",\"eng_name\":\"Attack of the Zombies\",\"fre_name\":\"Contagion\",\"us_airdate\":\"October 4, 2005 (2005-10-04)\",\"fr_airdate\":\"November 23, 2005\",\"prod_code\":\"214\",\"description\":\"When X.A.N.A. possesses Kiwi, it turns him into the carrier for a virulent virus that turns those it infects into zombies. To make matters worse, Aelita and Jeremy are stuck in the cafeteria and cannot get to the factory. On top of that, Odd is a zombie himself. Jeremy and Aelita escape but Ulrich and the other students (except William, who is turned into one himself) fight the rest.\"},{\"number\":\"41\",\"eng_name\":\"Ultimatum\",\"fre_name\":\"Ultimatum\",\"us_airdate\":\"October 5, 2005 (2005-10-05)\",\"fr_airdate\":\"November 30, 2005\",\"prod_code\":\"215\",\"description\":\"After X.A.N.A. possesses Principal Delmas and kidnaps Odd and Yumi, he gives Jeremy an ultimatum: deliver Aelita to the Scyphozoa or sacrifice Odd and Yumi. However, Jeremy and Aelita go to Sissi for help after being questioned by the police. Sissi agrees to be temporarily part of the group to help save her father and stop X.A.N.A.\"},{\"number\":\"42\",\"eng_name\":\"A Fine Mess\",\"fre_name\":\"Désordre\",\"us_airdate\":\"October 6, 2005 (2005-10-06)\",\"fr_airdate\":\"December 14, 2005\",\"prod_code\":\"216\",\"description\":\"After a malfunction and a little bug with the regular materialization program, Odd and Yumi are bugged up, ending up in each other's bodies. Even worse, their atoms start splitting after a while due to being devirtualized, even on Lyoko. The gang has to go to Lyoko and fix the problem before Odd and Yumi disintegrate and disappear forever, but it's not easy when X.A.N.A. tries to stop them.\"},{\"number\":\"43\",\"eng_name\":\"X.A.N.A.'s Kiss\",\"fre_name\":\"Mon meilleur ennemi\",\"us_airdate\":\"October 7, 2005 (2005-10-07)\",\"fr_airdate\":\"January 11, 2006\",\"prod_code\":\"217\",\"description\":\"X.A.N.A. creates a ghost called a polymorphic specter, that can change its shape or form at will and does not need to possess a host, then uses it to drive a wedge between the group by having it kiss people while disguised as them. At the end of the episode, Aelita kisses Jeremy to see how he'll react. He predictably freezes up.\"},{\"number\":\"44\",\"eng_name\":\"Vertigo\",\"fre_name\":\"Vertige\",\"us_airdate\":\"October 24, 2005 (2005-10-24)\",\"fr_airdate\":\"January 11, 2006\",\"prod_code\":\"218\",\"description\":\"After a trip to Sector 5, Jeremy believes he has the data necessary to cure Aelita's virus. While the two work on the cure, Odd, Ulrich, and Yumi go to a rock climbing contest. Odd races against Herve, who is no match for Odd. William then goads Ulrich into racing, despite his obvious reluctance. During the race, Ulrich gets dizzy and falls. Yumi realizes that he must have vertigo. Ulrich, embarrassed, runs off.\"},{\"number\":\"45\",\"eng_name\":\"Cold War\",\"fre_name\":\"Guerre froide\",\"us_airdate\":\"October 25, 2005 (2005-10-25)\",\"fr_airdate\":\"January 18, 2006\",\"prod_code\":\"219\",\"description\":\"Jeremy is woken up to an alarm signal, with no activated towers, so he goes back to sleep. The next morning, while Jeremy and Aelita are investigating Jeremy's computer, Odd looks for his DVD of his movie to show the famous news reporter T.V. (Thomas Vincent), who is coming to the school to do a report on the lackluster of today's schools.\"},{\"number\":\"46\",\"eng_name\":\"Déjà Vu\",\"fre_name\":\"Empreintes\",\"us_airdate\":\"October 27, 2005 (2005-10-27)\",\"fr_airdate\":\"January 18, 2006\",\"prod_code\":\"220\",\"description\":\"Aelita's visions become a problem once again, but not the same visions as before. This time, she has visions of her and Franz Hopper being chased by government agents. The visions come even when she's awake, causing her to lose consciousness while at the pool. Wanting to know the source of the visions, she heads to the Hermitage to learn more about them. Jeremy believes that X.A.N.A. is causing the visions through her link to the Supercomputer.\"},{\"number\":\"47\",\"eng_name\":\"Tip-Top Shape\",\"fre_name\":\"Au meilleur de sa forme\",\"us_airdate\":\"October 28, 2005 (2005-10-28)\",\"fr_airdate\":\"January 25, 2006\",\"prod_code\":\"221\",\"description\":\"During the school physicals, X.A.N.A. possesses the school nurse, Yolanda, and has her kidnap Aelita. The rest of the group beat her to the factory, but have no way to get Aelita from the far more powerful nurse. Having no other choice, Jeremy decides to test out an experiment which will give a person the same powers as one possessed by X.A.N.A. To do this, he has to activate a tower like X.A.N.A.\"},{\"number\":\"48\",\"eng_name\":\"Is Anybody Out There?\",\"fre_name\":\"Esprit frappeur\",\"us_airdate\":\"November 1, 2005 (2005-11-01)\",\"fr_airdate\":\"January 25, 2006\",\"prod_code\":\"222\",\"description\":\"After reading about a dead man named Leon Corbe, who died during the construction of Kadic, Sissi decides to hold a séance to communicate with him. She manages to convince Ulrich to attend. During the séance, one of X.A.N.A.'s ghosts appears in the form of a four-armed monster. At first, it seem docile, but quickly gets angry and attacks. Ulrich leaves Sissi with Odd while he goes to tell Jeremy.\"},{\"number\":\"49\",\"eng_name\":\"Franz Hopper\",\"fre_name\":\"Franz Hopper\",\"us_airdate\":\"October 31, 2005 (2005-10-31)\",\"fr_airdate\":\"February 1, 2006\",\"prod_code\":\"223\",\"description\":\"Jeremy discovers five activated towers and gathers the group to take care of them. However, when they arrive at the factory, they find a man at the interface, deactivating the towers as if it were a simple matter to do so. When questioned, the man claims that he's none other than Franz Hopper. However, something seems off about this convenient arrival.\"},{\"number\":\"50\",\"eng_name\":\"Contact\",\"fre_name\":\"Contact\",\"us_airdate\":\"November 25, 2005 (2005-11-25)\",\"fr_airdate\":\"February 1, 2006\",\"prod_code\":\"224\",\"description\":\"During a short film made by Odd and starring Sissi, Sissi seems to be possessed by a ghost. She does not act as expected, however. Instead, she starts speaking in an unknown language, focusing on Jeremy as she does. She is taken to the infirmary as a result. Later on, she walks into Jeremy's room and writes some code on a piece of paper. Jeremy translates the code, revealing a message stating a desire to help.\"},{\"number\":\"51\",\"eng_name\":\"Revelation\",\"fre_name\":\"Révélation\",\"us_airdate\":\"December 9, 2005 (2005-12-09)\",\"fr_airdate\":\"February 8, 2006\",\"prod_code\":\"225\",\"description\":\"It's nearing the end of the year and Jeremy's research has hit a dead end. After the group collects more data from Sector 5, he plans to use a tower to decipher Franz Hopper's diary. Before the mission, Odd gets a message from a mystery girl. When he goes to meet her, he is attacked by one of X.A.N.A.'s ghosts and locked inside a well at the Hermitage. The ghost then assumes Odd's form and goes to Lyoko in his place. The tower that X.A.N.A.\"},{\"number\":\"52\",\"eng_name\":\"The Key\",\"fre_name\":\"Réminiscence\",\"us_airdate\":\"December 9, 2005 (2005-12-09)\",\"fr_airdate\":\"February 8, 2006\",\"prod_code\":\"226\",\"description\":\"After going through all of Franz Hopper's diary, Jeremy discovers the truth behind the Supercomputer, at least to some extent. Hopper has used it quite extensively, to the point of repeating a single day for more than seven years. His sanity degraded throughout the experience. Hopper also revealed that he and Aelita hold the Keys to Lyoko, which were what X.A.N.A. is after. He only needed her half, now.\"},{\"number\":\"53\",\"eng_name\":\"Straight to Heart\",\"fre_name\":\"Droit au cœur\",\"us_airdate\":\"October 4, 2006 (2006-10-04)\",\"fr_airdate\":\"September 9, 2006\",\"prod_code\":\"301\",\"description\":\"After another three-week vacation, the group is still looking for a way to fight X.A.N.A. X.A.N.A., meanwhile, is trying to destroy Lyoko, preventing them from doing just that. He does so by targeting the core, which contains the code that maintains the virtual world. In a side story, Odd blackmails Jim into asking Principal Delmas to make Odd have the same classes as his friends.\"},{\"number\":\"54\",\"eng_name\":\"Lyoko Minus One\",\"fre_name\":\"Lyokô moins un\",\"us_airdate\":\"October 5, 2006 (2006-10-05)\",\"fr_airdate\":\"September 16, 2006\",\"prod_code\":\"302\",\"description\":\"During a field trip with the rest of her 10th grade class, Yumi finds herself facing off against the students, teachers, and bus driver, all of whom X.A.N.A. has possessed. At the same time, X.A.N.A. plans to get rid of Lyoko through alternate means: destroying each sector one at a time. To this end, he uses the Scyphozoa to possess Aelita and enter Code: X.A.N.A. into the way tower, wiping out the Forest Sector completely.\"},{\"number\":\"55\",\"eng_name\":\"Tidal Wave\",\"fre_name\":\"Raz de marée\",\"us_airdate\":\"October 6, 2006 (2006-10-06)\",\"fr_airdate\":\"September 23, 2006\",\"prod_code\":\"303\",\"description\":\"X.A.N.A. attacks the Lyoko warriors by possessing a large amount of food. At the same time, he bugs up the Mountain Sector by raising the level of the Digital Sea, but Odd and Aelita go to Sector 5 to stop him. X.A.N.A. also mounts an attack on Lyoko's core at the same time.\"},{\"number\":\"56\",\"eng_name\":\"False Lead\",\"fre_name\":\"Fausse Piste\",\"us_airdate\":\"October 10, 2006 (2006-10-10)\",\"fr_airdate\":\"September 30, 2006\",\"prod_code\":\"304\",\"description\":\"When X.A.N.A. hacks into a weapon's manufacturing computer network and leaves a paper trail pointing to Jeremy, government agents arrive at the school looking for him. Then, the whole gang arrive at the factory. When they end up tracking Jeremy to the factory, X.A.N.A. possesses them for an attack on the Supercomputer itself in the Ice Sector, and in the Mountain Sector.\"},{\"number\":\"57\",\"eng_name\":\"Aelita\",\"fre_name\":\"Aelita\",\"us_airdate\":\"October 11, 2006 (2006-10-11)\",\"fr_airdate\":\"October 7, 2006\",\"prod_code\":\"305\",\"description\":\"Aelita gets mad at Jeremy and she and Odd go into Lyoko without telling anybody, which causes problems. On Lyoko, X.A.N.A. creates a diversion to get everybody to deactivate the tower in the Mountain Sector while the monsters (mostly Mantas and Creepers) worked on destroying the core of Lyoko. At the end of the episode, Jeremy and Aelita find a strand of DNA that belongs to Franz Hopper, indicating he may be still alive.\"},{\"number\":\"58\",\"eng_name\":\"The Pretender\",\"fre_name\":\"Le prétendant\",\"us_airdate\":\"October 12, 2006 (2006-10-12)\",\"fr_airdate\":\"October 14, 2006\",\"prod_code\":\"306\",\"description\":\"Odd and Ulrich are talking in the shower room when a young boy, Johnny, asks to talk to Ulrich. It turns out that Johnny likes Yumi, and being jealous of that, Ulrich tells him to follow her around to get her attention, which Yumi hates. After following her all day and ending up in the gym, a flock of crows possessed by X.A.N.A. attacks Yumi. She is beaten unconscious by their electrified beaks and sent to the hospital.\"},{\"number\":\"59\",\"eng_name\":\"The Secret\",\"fre_name\":\"Le secret\",\"us_airdate\":\"October 13, 2006 (2006-10-13)\",\"fr_airdate\":\"October 21, 2006\",\"prod_code\":\"307\",\"description\":\"After being rejected by Yumi, William makes it his mission to find out the secret she's hiding. Soon enough, he manages to follow Ulrich and Odd to the factory and learns about Lyoko and X.A.N.A. Meanwhile in the Ice Sector, the Scyphozoa possesses Aelita to enter Code: X.A.N.A. in the way tower, but is devirtualized just in time by Yumi.\"},{\"number\":\"60\",\"eng_name\":\"Temporary Insanity\",\"fre_name\":\"Tarentule au plafond\",\"us_airdate\":\"October 16, 2006 (2006-10-16)\",\"fr_airdate\":\"November 1, 2006\",\"prod_code\":\"308\",\"description\":\"Before leaving Sector 5, Odd and Ulrich are hit by a strange red beam from a pair of Mantas. They both eventually begin to act strange in the real world during a school play. They start seeing their environment, people as enemies, and fight as if they were still on Lyoko. They are branded as insane and hospitalized while Jeremy tries to figure out what happened.\"},{\"number\":\"61\",\"eng_name\":\"Sabotage\",\"fre_name\":\"Sabotage\",\"us_airdate\":\"October 17, 2006 (2006-10-17)\",\"fr_airdate\":\"November 2, 2006\",\"prod_code\":\"309\",\"description\":\"When X.A.N.A. sabotages the Supercomputer, weird bugs begin cropping up in Lyoko. With its power rapidly draining, Jeremy needs to repair it before it becomes completely useless. However, he seems to forget about boys' dorm inspection, so Jim forces him to stay behind. Meanwhile, X.A.N.A. possesses vines to trip up the rest of the group, except Aelita.\"},{\"number\":\"62\",\"eng_name\":\"Nobody in Particular\",\"fre_name\":\"Désincarnation\",\"us_airdate\":\"October 18, 2006 (2006-10-18)\",\"fr_airdate\":\"November 3, 2006\",\"prod_code\":\"310\",\"description\":\"During a test to materialize Ulrich directly into Sector 5, his mind and body become separated, leaving Ulrich's body trapped on Lyoko and his incorporeal mind stuck on Earth. What's worse, X.A.N.A. possesses Ulrich's body and uses it to attack the Core of Lyoko. Meanwhile, Suzanne, disappointed with Ulrich's bad grades, tries to place him in remedial classes.\"},{\"number\":\"63\",\"eng_name\":\"Triple Trouble\",\"fre_name\":\"Triple Sot\",\"us_airdate\":\"October 19, 2006 (2006-10-19)\",\"fr_airdate\":\"November 6, 2006\",\"prod_code\":\"311\",\"description\":\"When Odd complains that he does not have any cool powers on Lyoko like his friends, Jeremy designs him a teleportation ability. It works, but ends up leaving duplicates of himself in the location he teleported from in the Mountain Sector. After trying it twice, Jeremy devirtualizes Odd to find out what went wrong, accidentally creating two clones of Odd himself. Meanwhile, in the real world, X.A.N.A.\"},{\"number\":\"64\",\"eng_name\":\"Double Trouble\",\"fre_name\":\"Surmenage\",\"us_airdate\":\"October 20, 2006 (2006-10-20)\",\"fr_airdate\":\"November 7, 2006\",\"prod_code\":\"312\",\"description\":\"With X.A.N.A.'s attacks becoming more and more difficult to handle, the group contemplates adding another member to the team to make things easier. William is the prime candidate, but Yumi still does not trust him. While Jeremy works on a way to get to Sector 5 directly, X.A.N.A. makes a clone of him and has it take Jeremy's place. Meanwhile, Yumi has missed one too many classes, and will be expelled if she misses another.\"},{\"number\":\"65\",\"eng_name\":\"Final Round\",\"fre_name\":\"Dernier round\",\"us_airdate\":\"October 23, 2006 (2006-10-23)\",\"fr_airdate\":\"November 8, 2006\",\"prod_code\":\"313\",\"description\":\"After William is initiated into the group, a series of events leaves only him and Aelita to defend Lyoko's core. During William's first mission to Lyoko, X.A.N.A. uses the Scyphozoa to possess him, making him the general of a massive army focused on Lyoko's core. Despite their best efforts, the group canot stop the possessed William from destroying the core, which both renders the Supercomputer useless and transforms William into a darker, X.A.N.\"},{\"number\":\"66\",\"eng_name\":\"William Returns\",\"fre_name\":\"Renaissance\",\"us_airdate\":\"May 18, 2007 (2007-05-18)\",\"fr_airdate\":\"August 13, 2007\",\"prod_code\":\"401\",\"description\":\"Using the data that Franz Hopper gave them, Jeremy and Aelita succeed in recreating Lyoko, which now holds only Sector 5. Soon after, William is materialized, and seems perfectly normal. He shows up at school much to Yumi's delight and Ulrich's disdain. Sissi decides to make herself editor-in-chief of Kadic News, much to Milly and Tamiya's dismay. She soon barges into Aelita's room to interview her and is stopped by William.\"},{\"number\":\"67\",\"eng_name\":\"Double Take\",\"fre_name\":\"Mauvaise réplique\",\"us_airdate\":\"June 12, 2007 (2007-06-12)\",\"fr_airdate\":\"August 14, 2007\",\"prod_code\":\"402\",\"description\":\"In order to compensate for William, who is still under X.A.N.A.'s control, Jeremy sets to work designing brand-new virtual attire and digital enhanced weaponry and abilities for his friends and recreating the rest of Lyoko. In order to buy himself time to do this, he activates a tower and uses it to create a clone of his own to attend class in his place. Meanwhile, William's absence is drawing attention, from both the principal and his father.\"},{\"number\":\"68\",\"eng_name\":\"Opening Act\",\"fre_name\":\"Première partie\",\"us_airdate\":\"June 19, 2007 (2007-06-19)\",\"fr_airdate\":\"October 29, 2007\",\"prod_code\":\"403\",\"description\":\"Jim's nephew, Chris, the drummer of the Subdigitals, pays a visit to Kadic to look for an opening act for the band's next concert. Everybody tries out, and Aelita turns out to be the one Chris is looking for. However, circumstances make sure that Chris does not realize who Aelita is, and X.A.N.A.'s clone of him only complicates matters, kidnapping Aelita and sending her to Lyoko.\"},{\"number\":\"69\",\"eng_name\":\"Wreck Room\",\"fre_name\":\"Double foyer\",\"us_airdate\":\"June 26, 2007 (2007-06-26)\",\"fr_airdate\":\"August 15, 2007\",\"prod_code\":\"404\",\"description\":\"There is a new recreation room at Kadic and William's clone is put in charge of it. Meanwhile, Jeremy has developed a program to get the real William out of Lyoko. However, the program malfunctions and bugs up the tower, allowing X.A.N.A. to take it over while Aelita cannot shut it down. As the William clone lashes out at the group, the real William is on Lyoko to keep the tower under X.A.N.A.'s control.\"},{\"number\":\"70\",\"eng_name\":\"Skidbladnir\",\"fre_name\":\"Skidbladnir\",\"us_airdate\":\"July 3, 2007 (2007-07-03)\",\"fr_airdate\":\"August 16, 2007\",\"prod_code\":\"405\",\"description\":\"The new virtual, submersible submarine (as Jeremy calls it) is almost complete, the last step being a secondary program that needs to be run by 4 PM the next day. However, when Aelita and Jeremy stay up late to set the program up, they are caught and given detention. Meanwhile, William takes the opportunity to attack the incomplete ship, forcing Yumi to run the Supercomputer in Jeremy's absence.\"},{\"number\":\"71\",\"eng_name\":\"Maiden Voyage\",\"fre_name\":\"Premier voyage\",\"us_airdate\":\"July 10, 2007 (2007-07-10)\",\"fr_airdate\":\"August 17, 2007\",\"prod_code\":\"406\",\"description\":\"The gang manages to convince Jeremy to let them test out the Skid. During this test, the navigation system bugs up, leaving the gang stranded in the digital sea. Jeremy runs to his room to fetch the backup programs, but forgets that it's Fire Safety Day and runs into several teachers, eventually having to scale the roof to get to his room. Meanwhile, the Skid stumbles upon another Lyoko and is attacked by two eel-like monsters.\"},{\"number\":\"72\",\"eng_name\":\"Crash Course\",\"fre_name\":\"Leçon de choses\",\"us_airdate\":\"July 17, 2007 (2007-07-17)\",\"fr_airdate\":\"August 20, 2007\",\"prod_code\":\"407\",\"description\":\"Jeremy decides to teach Odd, Ulrich, and Yumi how to use the Supercomputer in case he or Aelita are unable to, being X.A.N.A.'s favorite targets. During the lesson, Jeremy is attacked by one of X.A.N.A.'s polymorphic clones, leaving the others to operate the Supercomputer without help. Aelita is at the final audition with the Subdigitals, competing against two other candidates, and thus cannot be contacted.\"},{\"number\":\"73\",\"eng_name\":\"Replika\",\"fre_name\":\"Réplika\",\"us_airdate\":\"July 24, 2007 (2007-07-24)\",\"fr_airdate\":\"August 21, 2007\",\"prod_code\":\"408\",\"description\":\"The group travels to one of X.A.N.A.'s replica sectors in the Digital Sea. Meanwhile, Aelita and Odd get into a fight after Odd's desire to sleep in gets them both in trouble. Furthermore, their arguing inadvertently leads Nicolas and Herve into the factory, where Jeremy is forced to distract them while the group explores the Lyoko copy, which consists entirely of the Forest Sector.\"},{\"number\":\"74\",\"eng_name\":\"I'd Rather Not Talk About It\",\"fre_name\":\"Je préfère ne pas en parler\",\"us_airdate\":\"July 31, 2007 (2007-07-31)\",\"fr_airdate\":\"August 22, 2007\",\"prod_code\":\"409\",\"description\":\"The group turns to Jim for training, so they can be better prepared to fight against X.A.N.A. However, things go bad when X.A.N.A. possesses a boar to attack them with, forcing them to put their training to good use to avoid it. Furthermore, X.A.N.A. sends William and a group of Mantas to attack Lyoko's core. Jeremy stays behind to help Jim while the others repel the attack.\"},{\"number\":\"75\",\"eng_name\":\"Hot Shower\",\"fre_name\":\"Corps céleste\",\"us_airdate\":\"August 14, 2007 (2007-08-14)\",\"fr_airdate\":\"August 23, 2007\",\"prod_code\":\"410\",\"description\":\"When a comet passes near Earth, X.A.N.A. uses a laser-equipped military satellite to split it into chunks, simultaneously aiming the bulk of it directly at the factory. Aelita, Odd, and Ulrich are exploring the digital sea at the time, and X.A.N.A. traps them with a firewall to prevent them from stopping the attack. Meanwhile, Yumi is stuck at school and, when informed of the attack, works to evacuate the school.\"},{\"number\":\"76\",\"eng_name\":\"The Lake\",\"fre_name\":\"Le lac\",\"us_airdate\":\"August 21, 2007 (2007-08-21)\",\"fr_airdate\":\"August 24, 2007\",\"prod_code\":\"411\",\"description\":\"Jeremy, Aelita, Ulrich, and Odd go with the rest of their science class on a field trip to an island in the middle of a nearby lake to study water-based plant life. Yumi, not part of the class, remains behind to sit through two important exams. Jeremy's fears about X.A.N.A. attacking at such an inopportune moment are realized when X.A.N.A. creates an electricity-blasting sludge that attacks anyone who approaches the shore.\"},{\"number\":\"77\",\"eng_name\":\"Lost at Sea\",\"fre_name\":\"Torpilles virtuelles\",\"us_airdate\":\"August 28, 2007 (2007-08-28)\",\"fr_airdate\":\"August 27, 2007\",\"prod_code\":\"412\",\"description\":\"Hiroki steals Yumi's diary and Ulrich finds it. Meanwhile, in a new attempt to free William from X.A.N.A.'s evil clutches, Jeremy creates a program to find William in the Digital Sea. When he uploads the program to the Skid, the sonar becomes bugged, forcing the gang to return to Lyoko. When the Kongres interrupt their return, Yumi gets stranded, and is lost in the Digital Sea. X.A.N.A.\"},{\"number\":\"78\",\"eng_name\":\"Lab Rat\",\"fre_name\":\"Expérience\",\"us_airdate\":\"(skipped) (Put online)\",\"fr_airdate\":\"August 28, 2007\",\"prod_code\":\"413\",\"description\":\"Jeremy has perfected his teleportation process, allowing him to send his four best friends to the location of X.A.N.A.'s supercomputer in the real world to destroy it. He uses it on Aelita and Odd first, sending them to the jungle laboratory containing the supercomputer. As they explore, they find that X.A.N.A. is constructing cybernetic spiders with the help of a team of possessed scientists.\"},{\"number\":\"79\",\"eng_name\":\"Bragging Rights\",\"fre_name\":\"Arachnophobie\",\"us_airdate\":\"September 8, 2007 (2007-09-08)\",\"fr_airdate\":\"August 29, 2007\",\"prod_code\":\"414\",\"description\":\"Having failed to destroy X.A.N.A.'s supercomputer in the previous episode, the group sets out to finish the job. Meanwhile, Odd's bragging gets the better of him, and he makes a bet with Ulrich not to brag for 24 hours.\"},{\"number\":\"80\",\"eng_name\":\"Dog Day Afternoon\",\"fre_name\":\"Kiwodd\",\"us_airdate\":\"September 15, 2007 (2007-09-15)\",\"fr_airdate\":\"August 29, 2007\",\"prod_code\":\"415\",\"description\":\"Odd tries to take Kiwi to Lyoko, but ends up absorbing him instead. As a result, Odd slowly begins to take on dog traits, such as enhanced smell and scratching himself with his foot. While Jeremy works on separating the two, X.A.N.A. possesses a biker gang to attack Yumi. When Ulrich and Aelita arrive to Lyoko, they are confronted by William and three Tarantulas. Jeremy manages to split Odd and Kiwi while Aelita deactivates the tower.\"},{\"number\":\"81\",\"eng_name\":\"A Lack of Goodwill\",\"fre_name\":\"Œil pour œil\",\"us_airdate\":\"September 22, 2007 (2007-09-22)\",\"fr_airdate\":\"August 30, 2007\",\"prod_code\":\"416\",\"description\":\"Jeremy has developed a program to make the William clone smarter, but the learning curve is still problematic, as it tries to fling a glass into the air from a fork. Milly and Tamiya, overhearing the group's conversation about the clone, decide to ask him personally. The clone, having never been told to keep the information a secret, reveals everything to them, and even takes them to the factory.\"},{\"number\":\"82\",\"eng_name\":\"Distant Memory\",\"fre_name\":\"Mémoire blanche\",\"us_airdate\":\"September 29, 2007 (2007-09-29)\",\"fr_airdate\":\"August 31, 2007\",\"prod_code\":\"417\",\"description\":\"It's holiday time at Kadic and everyone is headed home. Aelita, however, has no home to go to. As she watches over Lyoko, she gets a message from Franz Hopper, who has constructed a simulation bubble of their mountain home on Lyoko. Though happy to see her father, Aelita quickly learns that the entire thing is a trick from X.A.N.A. – her father is just an illusion in the simulation bubble on Lyoko.\"},{\"number\":\"83\",\"eng_name\":\"Hard Luck\",\"fre_name\":\"Superstition\",\"us_airdate\":\"October 6, 2007 (2007-10-06)\",\"fr_airdate\":\"September 8, 2007\",\"prod_code\":\"418\",\"description\":\"When Odd breaks a mirror, a little bad luck follows and jinxes him everywhere, even on Lyoko. A bug in his virtual avatar spreads to Yumi and Aelita, causing annoying pauses and random devirtualization in the Desert Replika. Meanwhile, at the site of the Replika's supercomputer, X.A.N.A. materializes Kankrelats in the real world to stop Ulrich and Yumi. Despite the bug, their mission to destroy X.A.N.A.\"},{\"number\":\"84\",\"eng_name\":\"Guided Missile\",\"fre_name\":\"Missile guidé\",\"us_airdate\":\"October 13, 2007 (2007-10-13)\",\"fr_airdate\":\"September 15, 2007\",\"prod_code\":\"419\",\"description\":\"Jeremy wins a contest to take a flight in an armed fighter jet, even though it is Odd who entered him into the contest. However, just before takeoff, X.A.N.A. possesses the jet and sends it to destroy the factory and kill Jeremy by forcing it to crash. As it closes in, Aelita, Odd, Ulrich, and Yumi struggle against William, who devirtualizes them one by one in his attempt to throw Aelita into the Digital Sea.\"},{\"number\":\"85\",\"eng_name\":\"Kadic Bombshell\",\"fre_name\":\"La belle de Kadic\",\"us_airdate\":\"November 3, 2007 (2007-11-03)\",\"fr_airdate\":\"September 22, 2007\",\"prod_code\":\"420\",\"description\":\"When Sissi's pen pal from Iceland, Brynja Heringsdötir, arrives at the school, all the boys swoon over her, making Sissi envious. When Brynja takes an interest in Odd, he ends up showing her the Supercomputer. While there, she messes with the computer despite Odd's pleas not to, creating a glitch in a program Jeremy is installing that causes every virtualization to happen in the wrong sector and prevents materialization.\"},{\"number\":\"86\",\"eng_name\":\"Canine Conundrum\",\"fre_name\":\"Kiwi superstar\",\"us_airdate\":\"November 10, 2007 (2007-11-10)\",\"fr_airdate\":\"September 29, 2007\",\"prod_code\":\"421\",\"description\":\"When Kiwi's mindless destruction becomes too much for the group to bear, they force Odd to keep him at the factory. As Odd drops him off, X.A.N.A. possesses Jeremy's Kiwi robot, turning it into an army of self-replicating attack dogs. The dogs attack Yumi and Ulrich, among other children, during Jim's Pencak silat class.\"},{\"number\":\"87\",\"eng_name\":\"A Space Oddity\",\"fre_name\":\"Planète bleue\",\"us_airdate\":\"November 17, 2007 (2007-11-17)\",\"fr_airdate\":\"October 6, 2007\",\"prod_code\":\"422\",\"description\":\"Because of a surprise dorm inspection, Odd has to convince Yumi to keep Kiwi at her house. Jeremy, meanwhile, has located the next Lyoko copy, a Carthage Replika. Its supercomputer is located on a newly-built space station orbiting Earth. While Odd and Yumi work to disable it, Aelita and Ulrich work to disable the Replika's defenses, which threaten to destroy the Skid.\"},{\"number\":\"88\",\"eng_name\":\"Cousins Once Removed\",\"fre_name\":\"Cousins ennemis\",\"us_airdate\":\"November 17, 2007 (2007-11-17)\",\"fr_airdate\":\"October 13, 2007\",\"prod_code\":\"423\",\"description\":\"Jeremy's cousin, Patrick, comes to visit. Jeremy is not entirely happy about it, since Patrick is super cool compared to him. Discovering another Replika, Jeremy and his friends plan a mission to destroy it, leaving Sissi alone with Patrick. She is able to convince him to let Herve rummage through Jeremy's computer files.\"},{\"number\":\"89\",\"eng_name\":\"Music to Soothe the Savage Beast\",\"fre_name\":\"Il est sensé d'être insensé\",\"us_airdate\":\"2007 (2007) (online)\",\"fr_airdate\":\"October 20, 2007\",\"prod_code\":\"424\",\"description\":\"Aelita's first concert with the Subdigitals is coming up, but Aelita's stage fright threatens to get the better of her. Meanwhile, Odd has to find an extra ticket so he can bring a date. When the concert finally starts, X.A.N.A. attacks, possessing Sophia, the Subdigitals' manager, in order to kidnap Aelita. He also possesses Milly and Tamiya for some extra help.\"},{\"number\":\"90\",\"eng_name\":\"Wrong Exposure\",\"fre_name\":\"Médusée\",\"us_airdate\":\"2007 (2007) (online)\",\"fr_airdate\":\"October 27, 2007\",\"prod_code\":\"425\",\"description\":\"Aelita finds a photo of herself with Franz Hopper at the Hermitage, with a mathematical equation in the background. Jeremy discovers that the program works as a reset feature to Lyoko, something not too helpful, but useful nonetheless. Meanwhile, Odd, in an attempt to impress a girl in photography class, inadvertently sends the photo to Sissi, who in turn shows it to her father.\"},{\"number\":\"91\",\"eng_name\":\"Bad Connection\",\"fre_name\":\"Mauvaises ondes\",\"us_airdate\":\"2007 (2007) (online)\",\"fr_airdate\":\"November 3, 2007\",\"prod_code\":\"426\",\"description\":\"Odd is presenting one of his films, but is unhappy because his parents are coming. According to him, they never find fault in anything he does, which he finds dissatisfying, because he isn't treated like a normal teen. However, when he's finally pressured into it, X.A.N.A.\"},{\"number\":\"92\",\"eng_name\":\"Cold Sweat\",\"fre_name\":\"Sueurs froides\",\"us_airdate\":\"2007 (2007) (online)\",\"fr_airdate\":\"November 3, 2007\",\"prod_code\":\"427\",\"description\":\"When an embarrassing picture of Yumi is printed in the Kadic newspaper, she turns to Odd as the source. He manages to get Ulrich to take the blame, however, causing tension between him and Yumi. Putting that aside, Jeremy sets up a mission to the next Lyoko copy, an Ice Replika. Its supercomputer is located in Siberia, where X.A.N.A. is growing brains for an unknown purpose.\"},{\"number\":\"93\",\"eng_name\":\"Down to Earth\",\"fre_name\":\"Retour\",\"us_airdate\":\"2007 (2007) (online)\",\"fr_airdate\":\"November 3, 2007\",\"prod_code\":\"428\",\"description\":\"In order to defeat X.A.N.A., whom they have vastly underestimated, Jeremy plans to design another multi-agent system to combat him. That, however, is still under development. In more immediate matters, Jeremy has figured out how to free William from X.A.N.A., but needs to run his program directly from the Ice Replika's supercomputer. Meanwhile, William's parents visit their son, and the strange behavior of his clone concerns them greatly.\"},{\"number\":\"94\",\"eng_name\":\"Fight to the Finish\",\"fre_name\":\"Contre-attaque\",\"us_airdate\":\"2007 (2007) (online)\",\"fr_airdate\":\"November 10, 2007\",\"prod_code\":\"429\",\"description\":\"With the Skid gone and X.A.N.A.'s Replikas at unmanageable numbers, Jeremy continues work on his multi-agent system. Meanwhile, Aelita has nightmares about her father being killed by X.A.N.A. As Jeremy works, he is contacted by Franz Hopper, who arranges a meeting on Lyoko. William wants to help, but all except Aelita are a little wary of trusting him again. William is left in the lab with Jeremy.\"},{\"number\":\"95\",\"eng_name\":\"Echoes\",\"fre_name\":\"Souvenirs\",\"us_airdate\":\"2007 (2007) (online)\",\"fr_airdate\":\"November 10, 2007\",\"prod_code\":\"430\",\"description\":\"With their mission completed, the group looks back on all their fond memories of Lyoko. Sissi, meanwhile, plants a tracking device on Ulrich in order to discover their secret.\"}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ivo/cs/ftf/dock-skid/dock-skid/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map