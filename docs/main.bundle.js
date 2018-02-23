webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searching_match_searching_match_component__ = __webpack_require__("../../../../../src/app/searching-match/searching-match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lunch_finished_lunch_finished_component__ = __webpack_require__("../../../../../src/app/lunch-finished/lunch-finished.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_user_create_user_component__ = __webpack_require__("../../../../../src/app/create-user/create-user.component.ts");








var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */] },
    { path: 'createuser', component: __WEBPACK_IMPORTED_MODULE_7__create_user_create_user_component__["a" /* CreateUserComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */] },
    { path: 'searching', component: __WEBPACK_IMPORTED_MODULE_4__searching_match_searching_match_component__["a" /* SearchingMatchComponent */] },
    { path: 'lunchfinished', component: __WEBPACK_IMPORTED_MODULE_5__lunch_finished_lunch_finished_component__["a" /* LunchFinishedComponent */] },
    { path: 'app', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Shared Lunch';
        this.rootPage = 'UserComponent';
        this.pages = [
            { title: 'Login', component: 'LoginPage', icon: "home" },
            { title: 'test', component: 'TestPage', icon: "test" }
        ];
    }
    AppComponent.prototype.openPage = function (page) {
        console.log("this is page app components", page);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__searching_match_searching_match_component__ = __webpack_require__("../../../../../src/app/searching-match/searching-match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lunch_finished_lunch_finished_component__ = __webpack_require__("../../../../../src/app/lunch-finished/lunch-finished.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__memory_user_service__ = __webpack_require__("../../../../../src/app/memory-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__create_user_create_user_component__ = __webpack_require__("../../../../../src/app/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__searching_match_searching_match_component__["a" /* SearchingMatchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__lunch_finished_lunch_finished_component__["a" /* LunchFinishedComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__create_user_create_user_component__["a" /* CreateUserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__memory_user_service__["a" /* MemoryUserService */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_18__session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_17__user_service__["a" /* UserService */], { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MAT_DIALOG_DEFAULT_OPTIONS */], useValue: { hasBackdrop: false } }],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__dialog_dialog_component__["a" /* DialogComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/create-user/create-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup] = \"myform\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input formControlName = \"email\" name =\"email\" type=\"text\" placeholder=\"company email\" required> \n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input formControlName = \"password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" required>\n  </div>\n  <button (click)=\"save()\" type=\"submit\"  [disabled]=\"!myform.valid\" class=\"btn btn-primary\">Save</button>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(http, UserService, router) {
        this.http = http;
        this.UserService = UserService;
        this.router = router;
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.save = function () {
        var _this = this;
        this.UserService.exist(this.myform.value.email).subscribe(function (user) {
            var currentUser = user.filter(function (user) {
                return user.email == _this.myform.value.email;
            });
            console.log("nanchuma", currentUser);
            if (currentUser.length) {
                console.log("The user is already use");
            }
            else {
                // const objUser = {
                //   available: false,
                //   firstName: 'Marcela',
                //   lastName: 'Ramirez',
                //   area: 'Developer',
                //   phone: '3158324055',
                //   interests: ['Movies', 'Food'],
                //   description: 'Front-End developer',
                //   location: 2,
                //   email: email,
                //   password: password,
                //   matches:[]
                // }
                _this.UserService.saveUser(_this.myform.value.email, _this.myform.value.password).subscribe(function (new_user) {
                    console.log("new_usere", new_user);
                    localStorage.setItem("session_user", JSON.stringify(new_user));
                    _this.router.navigate(['search']);
                });
            }
        });
    };
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-user',
            template: __webpack_require__("../../../../../src/app/create-user/create-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-user/create-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/user\">Start</a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ol>\n    <li>\n      <mat-form-field>\n        <textarea matInput [(ngModel)]=\"data.message\" name=\"\n        msm\" placeholder=\"Send a message to your match about why you have to cancel the lunch\"></textarea>\n      </mat-form-field>\n    </li>\n    <li>\n      <mat-form-field>\n        <textarea matInput name=\"msh\" [(ngModel)]=\"data.message2\" placeholder=\"Send a message to HR match about why you have to cancel the lunch\"></textarea>\n      </mat-form-field>\n    </li>\n    <li>\n      <button (click)=\"closeDialog()\">Cancel</button>\n    </li>\n    <li>\n      <!-- <button (click)=\"saveMessage(msm, msh)\">Send</button> -->\n      <button [mat-dialog-close]=\"data\">Send</button>\n      \n    </li>\n  </ol>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DialogComponent = /** @class */ (function () {
    function DialogComponent(userService, sessionService, dialogRef, data, router) {
        this.userService = userService;
        this.sessionService = sessionService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lunch-finished/lunch-finished.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lunch-finished/lunch-finished.component.html":
/***/ (function(module, exports) {

module.exports = "How was your lunch\n<br>\nHow was your lunch with <div>{{user_info ? user_info.firstName : 'Unavailable'}}</div>\n<br>\n\nHelp us by Ratting your experience\n<br>\n  <mat-form-field>\n    <mat-select [(value)]=\"option\">\n      <mat-option value=\"Good\">Good</mat-option>\n      <mat-option value=\"Meh\">Meh</mat-option>\n      <mat-option value=\"No so great\">No so great</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button mat-raised-button (click) = \"finish_match()\">Ok</button>\n  "

/***/ }),

/***/ "../../../../../src/app/lunch-finished/lunch-finished.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LunchFinishedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LunchFinishedComponent = /** @class */ (function () {
    function LunchFinishedComponent(userService, sessionService, router) {
        this.userService = userService;
        this.sessionService = sessionService;
        this.router = router;
        this.myform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]()
        });
        this.matchedUser = JSON.parse(localStorage.getItem("matched"));
    }
    LunchFinishedComponent.prototype.ngOnInit = function () {
        this.user_info = JSON.parse(localStorage.getItem("session_user"));
    };
    LunchFinishedComponent.prototype.finish_match = function () {
        var _this = this;
        this.user_info.currentMatch = null;
        this.user_info.matches.push({
            id: this.matchedUser.id,
            date: Date.now().toString(),
            rate: this.option,
            cancelMessage: null,
            cancelMessageToHHRR: null
        });
        this.userService.update(this.user_info).subscribe(function (response) {
            console.log("sss", response);
            _this.router.navigate(['/search']);
        });
    };
    LunchFinishedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lunch-finished',
            template: __webpack_require__("../../../../../src/app/lunch-finished/lunch-finished.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lunch-finished/lunch-finished.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], LunchFinishedComponent);
    return LunchFinishedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/memory-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryUserService; });
var MemoryUserService = /** @class */ (function () {
    function MemoryUserService() {
    }
    MemoryUserService.prototype.createDb = function () {
        var users = [
            {
                id: 0,
                available: false,
                firstName: 'Marcela',
                lastName: 'Ramirez',
                email: 'viviana.ramirezyuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 16,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 38,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 53,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 1,
                available: true,
                firstName: 'Cindy',
                lastName: 'Giraldo',
                email: 'cindy.giraldo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 19,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 29,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 37,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 40,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 46,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 51,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 97,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 2,
                available: true,
                firstName: 'Jhon',
                lastName: 'Muñoz',
                email: 'williams.munoz@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 19,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 22,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 32,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 39,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 46,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 59,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 84,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 24,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 3,
                available: true,
                firstName: 'Carlos',
                lastName: 'Angulo',
                email: '',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 20,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 25,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 26,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 44,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 45,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 55,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 79,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 112,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 4,
                available: false,
                firstName: 'Carolina',
                lastName: 'Martinez',
                email: 'deicy.martinez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 11,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 14,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 34,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 5,
                available: true,
                firstName: 'Carlos',
                lastName: 'Arbelaez',
                email: 'carlos.arbelaez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 20,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 28,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 69,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 75,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 82,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 110,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 6,
                available: true,
                firstName: 'Andres',
                lastName: 'Diaz',
                email: 'andres.diaz@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 11,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 22,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 54,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 71,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 85,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 26,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 7,
                available: true,
                firstName: 'Kevin',
                lastName: 'Quintero',
                email: 'kevin.quintero@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 0,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 11,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 29,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 36,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 41,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 42,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 44,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 98,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 66,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 8,
                available: true,
                firstName: 'Verónica',
                lastName: 'Lopez',
                email: 'veronica.lopez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 11,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 22,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 40,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 43,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 44,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 50,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 28,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 9,
                available: true,
                firstName: 'Estefania',
                lastName: 'Ortiz',
                email: 'estefania.ortiz@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 20,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 38,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 40,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 52,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 73,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 86,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 10,
                available: true,
                firstName: 'Felipe',
                lastName: 'Garcia',
                email: 'felipe.garcia@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 18,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 32,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 33,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 36,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 40,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 42,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 74,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 115,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 11,
                available: false,
                firstName: 'Daniel',
                lastName: 'Barrios',
                email: 'daniel.barrios@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 4,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 14,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 33,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 57,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 12,
                available: false,
                firstName: 'Diana',
                lastName: 'Quintero',
                email: 'diana.quintero@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 16,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 18,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 20,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 22,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 28,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 59,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 68,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 93,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 13,
                available: false,
                firstName: 'Leidy',
                lastName: 'Gil',
                email: 'leidy.gil@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 16,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 29,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 41,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 61,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 14,
                available: true,
                firstName: 'Juan',
                lastName: 'Silva',
                email: 'juan.silva@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 4,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 11,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 27,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 37,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 48,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 83,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 107,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 15,
                available: true,
                firstName: 'Fabian',
                lastName: 'Buitrago',
                email: 'fabian.buitrago@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 13,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 14,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 24,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 26,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 33,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 54,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 16,
                available: false,
                firstName: 'Daniel',
                lastName: 'Bravo',
                email: 'daniel.bravo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 0,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 12,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 13,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 19,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 39,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 45,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 58,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 60,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 17,
                available: true,
                firstName: 'Jorge',
                lastName: 'Banguera',
                email: 'jorge.banguera@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 18,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 20,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 37,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 39,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 42,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 46,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 79,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 70,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 18,
                available: false,
                firstName: 'Esteban',
                lastName: 'Restrepo',
                email: 'esteban.santamaria@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 12,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 31,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 54,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 19,
                available: false,
                firstName: 'Jorge',
                lastName: 'Serrano',
                email: 'jorge.serrano@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 16,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 55,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 66,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 20,
                available: true,
                firstName: 'Santiago',
                lastName: 'Cano',
                email: 'santiago.cano@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 12,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 50,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 58,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 64,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 21,
                available: true,
                firstName: 'Julian',
                lastName: 'Romero',
                email: 'julian.romero@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 19,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 24,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 26,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 33,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 40,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 41,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 103,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 22,
                available: false,
                firstName: 'Felipe',
                lastName: 'Jaramillo',
                email: 'felipe.jaramillo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 12,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 48,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 79,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 88,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 23,
                available: true,
                firstName: 'Yessica',
                lastName: 'Gomez',
                email: 'yessica.gomez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 18,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 28,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 41,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 44,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 66,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 105,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 24,
                available: true,
                firstName: 'Yulied',
                lastName: 'Quiroz',
                email: 'yulied.quiroz@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 35,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 41,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 53,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 70,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 25,
                available: true,
                firstName: 'Camila',
                lastName: 'Giraldo',
                email: 'camila.giraldo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 27,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 29,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 38,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 57,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 64,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 78,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 46,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 26,
                available: true,
                firstName: 'Sandra',
                lastName: 'Giraldo',
                email: 'sandra.giraldo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 68,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 69,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 27,
                available: true,
                firstName: 'Fred',
                lastName: 'Pizarro',
                email: 'fred.pizarro@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 14,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 25,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 49,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 52,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 61,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 64,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 82,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 50,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 28,
                available: true,
                firstName: 'Armando',
                lastName: 'Restrepo',
                email: 'armando.restrepo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 12,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 33,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 45,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 72,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 29,
                available: true,
                firstName: 'Juan',
                lastName: 'Hernandez',
                email: 'juan.hernandez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 13,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 25,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 31,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 34,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 83,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 30,
                available: false,
                firstName: 'Camilo',
                lastName: 'Villa',
                email: 'camilo.villa@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 36,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 43,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 31,
                available: true,
                firstName: 'Maria',
                lastName: 'Llano',
                email: 'maria.llano@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 18,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 29,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 33,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 46,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 50,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 81,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 63,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 32,
                available: true,
                firstName: 'Eliana',
                lastName: 'Caraballo',
                email: 'eliana.caraballo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 47,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 57,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 84,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 67,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 33,
                available: true,
                firstName: 'Claudia',
                lastName: 'Ariza',
                email: 'claudia.ariza@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 11,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 28,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 31,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 40,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 34,
                available: true,
                firstName: 'Alejandro',
                lastName: 'Lopez',
                email: 'alejandro.lopez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 4,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 29,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 41,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 47,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 74,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 83,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 98,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 35,
                available: false,
                firstName: 'Juan',
                lastName: 'Gaviria',
                email: 'juan.gaviria@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 24,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 62,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 36,
                available: false,
                firstName: 'Sandra',
                lastName: 'Rios',
                email: 'sandra.rios@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 30,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 37,
                available: true,
                firstName: 'Ayrton',
                lastName: 'Rojo',
                email: 'ayrton.rojo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 14,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 39,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 47,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 61,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 71,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 38,
                available: true,
                firstName: 'Marcos',
                lastName: 'Arenas',
                email: 'marcos.arenas@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 0,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 25,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 47,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 59,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 87,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 81,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 39,
                available: false,
                firstName: 'Jorge',
                lastName: 'Buendia',
                email: 'jorge.buendia@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 16,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 37,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 49,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 66,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 40,
                available: true,
                firstName: 'Mateo',
                lastName: 'Castaño',
                email: 'mateo.castano@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 78,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 33,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 41,
                available: true,
                firstName: 'Esteban',
                lastName: 'Arango',
                email: 'esteban.arango@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 13,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 24,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 34,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 72,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 42,
                available: false,
                firstName: 'Angela',
                lastName: 'Ordoñez',
                email: 'angela.ordonez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 69,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 94,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 43,
                available: true,
                firstName: 'Jorge',
                lastName: 'Hurtado',
                email: 'jorge.hurtado@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 30,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 54,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 62,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 71,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 95,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 84,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 44,
                available: true,
                firstName: 'Daniel',
                lastName: 'Florez',
                email: 'daniel.florez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 69,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 81,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 101,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 45,
                available: true,
                firstName: 'Natalia',
                lastName: 'Mejia',
                email: 'natalia.mejia@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 16,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 28,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 52,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 78,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 102,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 46,
                available: true,
                firstName: 'Carlos',
                lastName: 'Carrero',
                email: 'carlos.carrero@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 31,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 51,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 77,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 25,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 47,
                available: true,
                firstName: 'Roger',
                lastName: 'Alvarez',
                email: 'roger.alvarez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 32,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 34,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 37,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 38,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 77,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 106,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 48,
                available: true,
                firstName: 'Luisa',
                lastName: 'Arias',
                email: 'luisa.arias@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 14,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 22,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 63,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 72,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 90,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 108,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 49,
                available: false,
                firstName: 'Andres',
                lastName: 'Sierra',
                email: 'andres.sierra@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 27,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 39,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 50,
                available: true,
                firstName: 'Pablo',
                lastName: 'Diaz',
                email: 'pablo.diaz@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 20,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 31,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 58,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 72,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 27,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 51,
                available: false,
                firstName: 'Alejandra',
                lastName: 'Marulanda',
                email: 'alejandra.marulanda@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 46,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 52,
                available: false,
                firstName: 'Harlen',
                lastName: 'Giraldo',
                email: 'harlen.giraldo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 27,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 45,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 87,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 96,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 53,
                available: true,
                firstName: 'Christian',
                lastName: 'Villa',
                email: 'christian.villa@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 0,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 24,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 54,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 67,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 80,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 111,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 54,
                available: true,
                firstName: 'Gloria',
                lastName: 'Vanegas',
                email: 'gloriia04@hotmail.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 15,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 18,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 43,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 53,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 114,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 55,
                available: true,
                firstName: 'Olga',
                lastName: 'Ochoa',
                email: 'olga8ac@hotmail.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 19,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 63,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 66,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 67,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 104,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 56,
                available: true,
                firstName: 'Juan',
                lastName: 'Herrera',
                email: 'juan.herrera@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 8,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 32,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 45,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 58,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 71,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 81,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 91,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 57,
                available: true,
                firstName: 'James',
                lastName: 'Santoya',
                email: 'james.santoya@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 11,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 25,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 32,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 65,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 92,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 61,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 58,
                available: true,
                firstName: 'Laura',
                lastName: 'Ciro',
                email: 'laura.ciro@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 16,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 20,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 50,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 61,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 116,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 59,
                available: false,
                firstName: 'Johan',
                lastName: 'Quintana',
                email: 'johan.quintana@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 12,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 38,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 63,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 72,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 60,
                available: false,
                firstName: 'Cesar',
                lastName: 'Balcazar',
                email: 'cesar.balcazar@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 16,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 66,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 61,
                available: true,
                firstName: 'Andres',
                lastName: 'Hurtado',
                email: 'andres.hurtado@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 13,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 27,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 37,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 58,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 64,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 57,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 62,
                available: false,
                firstName: 'Renata',
                lastName: 'Aguilar',
                email: 'renata.aguilar@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 35,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 43,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 67,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 63,
                available: true,
                firstName: 'Juan',
                lastName: 'Rendon',
                email: 'juan.rendon@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 48,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 55,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 59,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 73,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 80,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 31,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 64,
                available: true,
                firstName: 'Juan',
                lastName: 'Villa',
                email: 'juan.villa@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 25,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 27,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 61,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 68,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 99,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 20,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 65,
                available: false,
                firstName: 'Juliana',
                lastName: 'Aristizabal',
                email: 'juliana.aristizabal@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 57,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 66,
                available: true,
                firstName: 'Andres',
                lastName: 'Espino',
                email: 'andres.espino@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 19,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 39,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 55,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 60,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 67,
                available: true,
                firstName: 'Camilo',
                lastName: 'Velez',
                email: 'camilo.velez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 53,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 55,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 62,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 80,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 84,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 32,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 68,
                available: false,
                firstName: 'Alejandro',
                lastName: 'Sanchez',
                email: 'alejandro.sanchez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 12,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 26,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 64,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 69,
                available: true,
                firstName: 'Cristian',
                lastName: 'Ortiz',
                email: 'cristian.ortiz@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 26,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 42,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 44,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 113,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 70,
                available: true,
                firstName: 'Mateo',
                lastName: 'Parra',
                email: 'mateo.parra@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 24,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 71,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 75,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 89,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 71,
                available: true,
                firstName: 'Lina',
                lastName: 'Colorado',
                email: 'lina.colorado@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 43,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 70,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 37,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 72,
                available: true,
                firstName: 'Luz',
                lastName: 'Berrio',
                email: 'luz.berrio@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 28,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 48,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 50,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 59,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 41,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 73,
                available: true,
                firstName: 'Leonardo',
                lastName: 'Perez',
                email: 'leonardo',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 63,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 77,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 82,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 96,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 74,
                available: false,
                firstName: 'Leidy',
                lastName: 'Delgado',
                email: 'leidy.delgado@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 34,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 76,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 75,
                available: false,
                firstName: 'Leidy',
                lastName: 'Zapata',
                email: 'leidy.zapata@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 70,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 76,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 76,
                available: true,
                firstName: 'Hernan',
                lastName: 'Sanchez',
                email: 'hernan.sanchez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 74,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 75,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 86,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 100,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 77,
                available: true,
                firstName: 'Johana',
                lastName: 'Medina',
                email: 'johana.medina@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 46,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 47,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 73,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 109,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 78,
                available: true,
                firstName: 'Cesar',
                lastName: 'Duque',
                email: 'cesar.duque@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 25,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 40,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 45,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 79,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 79,
                available: true,
                firstName: 'Osman',
                lastName: 'Hoyos',
                email: 'osman.hoyos@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 17,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 22,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 78,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 80,
                available: false,
                firstName: 'Isabel',
                lastName: 'Guzman',
                email: 'isabel.guzman@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 53,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 63,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 67,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 81,
                available: true,
                firstName: 'Eliana',
                lastName: 'López',
                email: 'eliana.lopez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 31,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 44,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 38,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 82,
                available: false,
                firstName: 'Marly',
                lastName: 'Arango',
                email: 'marly.arango@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 27,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 73,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 83,
                available: true,
                firstName: 'Maria',
                lastName: 'Cardenas',
                email: 'maria.cardenas@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 14,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 34,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 85,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 29,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 84,
                available: true,
                firstName: 'Juan',
                lastName: 'Pulido',
                email: 'juan.pulido@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 2,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 32,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 67,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 43,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 85,
                available: false,
                firstName: 'Gerardo',
                lastName: 'Calvo',
                email: 'gerardo.calvoyuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 6,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 83,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 86,
                available: false,
                firstName: 'Victor',
                lastName: 'Florez',
                email: 'victor@globalperformancesearch.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 9,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 76,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 87,
                available: true,
                firstName: 'Andres',
                lastName: 'Echeverri',
                email: 'andres.echeverri@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 38,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 52,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 97,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 88,
                available: false,
                firstName: 'Heider',
                lastName: 'Llanten',
                email: 'heider.llanten@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 22,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 89,
                available: false,
                firstName: 'Mauricio',
                lastName: 'Arroyave',
                email: 'mauricio.panesso@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 70,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 90,
                available: false,
                firstName: 'Daniel',
                lastName: 'Henao',
                email: 'daniel.henao@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 48,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 91,
                available: false,
                firstName: 'Juan',
                lastName: 'Alzate',
                email: 'juan.alzate@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 56,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 92,
                available: false,
                firstName: 'Sebastian',
                lastName: 'Cardona',
                email: 'juan.cardona@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 57,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 93,
                available: false,
                firstName: 'Jhohanns',
                lastName: 'Villa',
                email: 'johanns.villa@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 12,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 94,
                available: false,
                firstName: 'Brian',
                lastName: 'Tafur',
                email: 'brian.tafur@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 42,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 95,
                available: false,
                firstName: 'Brayan',
                lastName: 'Giraldo',
                email: 'brayan.giraldo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 43,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 96,
                available: true,
                firstName: 'Ana',
                lastName: 'Sanchez',
                email: 'ana.sanchez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 52,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 73,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 97,
                available: true,
                firstName: 'Diego',
                lastName: 'Delgado',
                email: 'diego.delgado@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 1,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 87,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 98,
                available: true,
                firstName: 'Milena',
                lastName: 'Mora',
                email: 'milena.mora@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 7,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                    {
                        id: 34,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 99,
                available: false,
                firstName: 'Miguel',
                lastName: 'Tamayo',
                email: 'miguel.tamayo@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 64,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 100,
                available: true,
                firstName: 'Silvana',
                lastName: 'Perez',
                email: 'silvana.perez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 76,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 101,
                available: true,
                firstName: 'Andrea',
                lastName: 'Betancourt',
                email: 'andrea.betancourt@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 44,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 102,
                available: true,
                firstName: 'Harvey',
                lastName: 'Yepes',
                email: 'harvey.yepes@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 45,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 103,
                available: true,
                firstName: 'Veronica',
                lastName: 'Londoño',
                email: 'veronica.londono@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 21,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 104,
                available: true,
                firstName: 'Ronald',
                lastName: 'Babilonia',
                email: 'ronald.babilonia@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 55,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 105,
                available: true,
                firstName: 'Harvin',
                lastName: 'Bejarano',
                email: 'harvin.bejarano@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 23,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 106,
                available: true,
                firstName: 'Laura',
                lastName: 'Castro',
                email: 'laura.castro@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 47,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 107,
                available: true,
                firstName: 'Luis',
                lastName: 'Palacios',
                email: 'luis.palacios@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 14,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 108,
                available: true,
                firstName: 'Julian',
                lastName: 'Rivas',
                email: 'julian.rivas@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 48,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 109,
                available: true,
                firstName: 'Jose',
                lastName: 'Romero',
                email: 'jose.romero@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 77,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 110,
                available: true,
                firstName: 'Samuel',
                lastName: 'Mejia',
                email: 'samuel.mejia@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 5,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 111,
                available: true,
                firstName: 'Jose',
                lastName: 'Rojas',
                email: 'jose.rojas@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 53,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 112,
                available: true,
                firstName: 'Duverney',
                lastName: 'Muñoz',
                email: 'duverney.munoz@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 3,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 113,
                available: true,
                firstName: 'Santiago',
                lastName: 'Arango',
                email: 'santiago.arango@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 69,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 114,
                available: true,
                firstName: 'Cristian',
                lastName: 'Bedoya',
                email: 'cristian.david@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 2,
                currentMatch: null,
                matches: [
                    {
                        id: 54,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 115,
                available: true,
                firstName: 'Deysi',
                lastName: 'Sanchez',
                email: 'deysi.sanchez@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 0,
                currentMatch: null,
                matches: [
                    {
                        id: 10,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
            {
                id: 116,
                available: true,
                firstName: 'Juan',
                lastName: 'Madrigal',
                email: 'juan.madrigal@yuxiglobal.com',
                password: '1234',
                area: 'Developer',
                phone: '3158324055',
                interests: ['Movies', 'Food'],
                description: 'Front-End developer',
                location: 1,
                currentMatch: null,
                matches: [
                    {
                        id: 58,
                        date: null,
                        rate: null,
                        cancelMessage: null,
                        cancelMessageToHHRR: null,
                    },
                ],
            },
        ];
        return { users: users };
    };
    return MemoryUserService;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user_info && !user_info.currentMatch\">\n  <span>No Match</span>\n  <h2>keep it cool.</h2>\n  <p>Our team is working in the next <br> shared lunch experience.\n  </p>\n  <div>\n    <span><strong>Status:</strong>{{user_info.available ? 'Available':'Unavailable'}}</span>\n    <br>\n    <span>For your next lunch</span>\n    <br>\n    <button mat-raised-button (click)=\"changeStatus()\">Change Status</button>\n    <button mat-raised-button [disabled]=\"status\" (click)=\"getMatch()\">Match</button>\n  </div>\n</div>\n<div *ngIf=\"user_info && user_info.currentMatch\" id=\"divNomatch\">\n  <span>This is your match</span>\n  <span><strong>Get in contact with </strong> {{matchedUser.firstName}} {{matchedUser.lastName}}</span>\n  <br> <span>Use this tools to plan your shared lunch</span><br>\n  <span>{{matchedUser.phone}}</span><span> Teams, </span><span>{{matchedUser.email}}</span>\n  <br>\n  <span><strong>good luck.</strong></span>\n  <br>\n  <button mat-raised-button\n  mat-raised-button (click)=\"openDialog()\" >Cancel lunch</button>\n  <button mat-raised-button routerLink=\"/lunchfinished\">Rate lunch</button>\n  <br>\n  <h2>Note:</h2>\n  <p>Remember to rate your lunch experience, <br> obviously after you are done.</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(userService, sessionService, dialog, data) {
        this.userService = userService;
        this.sessionService = sessionService;
        this.dialog = dialog;
        this.data = data;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.user_info = JSON.parse(localStorage.getItem("session_user"));
        this.status = !this.user_info.available;
    };
    SearchComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */], {
            width: '1250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            _this.user_info.matches.push({
                id: _this.user_info.currentMatch,
                date: new Date().toString(),
                rate: null,
                cancelMessage: result.messagge,
                cancelMessageToHHRR: result.messagge2
            });
            _this.user_info.currentMatch = null;
            var matchedUser = JSON.parse(localStorage.getItem("matched"));
            _this.userService.update(_this.user_info).subscribe(function (x) {
                matchedUser.currentMatch = null;
                _this.userService.update(matchedUser).subscribe(function () {
                    console.log("bbbb");
                });
            });
        });
    };
    SearchComponent.prototype.changeStatus = function () {
        this.user_info.available = !this.user_info.available;
        this.status = !this.user_info.available;
        console.log(this.user_info);
        this.userService.update(this.user_info);
    };
    SearchComponent.prototype.getMatchRandom = function (validation) {
        return validation[Math.floor(Math.random() * validation.length)];
    };
    SearchComponent.prototype.getMatch = function () {
        var _this = this;
        console.log("666666666", this.user_info);
        this.userService.getData().subscribe(function (data) {
            var validation = data.filter(function (user) {
                return user.available && user.id !== _this.user_info.id && user.currentMatch === null;
            });
            _this.matchedUser = _this.getMatchRandom(validation);
            localStorage.setItem("matched", JSON.stringify(_this.matchedUser));
            _this.user_info.currentMatch = _this.matchedUser.id;
            _this.matchedUser.currentMatch = _this.user_info.id;
            _this.userService.update(_this.user_info).subscribe(function () {
                _this.userService.update(_this.matchedUser).subscribe(function () {
                });
            });
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */], Object])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/searching-match/searching-match.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/searching-match/searching-match.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  searching-match works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/searching-match/searching-match.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchingMatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchingMatchComponent = /** @class */ (function () {
    function SearchingMatchComponent() {
    }
    SearchingMatchComponent.prototype.ngOnInit = function () {
    };
    SearchingMatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-searching-match',
            template: __webpack_require__("../../../../../src/app/searching-match/searching-match.component.html"),
            styles: [__webpack_require__("../../../../../src/app/searching-match/searching-match.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchingMatchComponent);
    return SearchingMatchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.init = function (currentUser) {
        this.session_ = currentUser;
    };
    Object.defineProperty(SessionService.prototype, "session", {
        get: function () {
            return this.session_;
        },
        enumerable: true,
        configurable: true
    });
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getMatch = function (idMatched) {
        return this.http.get("api/users/?email=" + idMatched);
    };
    UserService.prototype.getData = function () {
        return this.http.get('api/users');
    };
    UserService.prototype.exist = function (email) {
        return this.http.get("api/users/?email=" + email);
    };
    UserService.prototype.update = function (user) {
        return this.http.put("api/users/" + user.id, user);
    };
    UserService.prototype.saveUser = function (email, password) {
        return this.http.post("api/users", {
            available: false,
            firstName: 'Marcela',
            lastName: 'Ramirez',
            area: 'Developer',
            phone: '3158324055',
            interests: ['Movies', 'Food'],
            description: 'Front-End developer',
            location: 2,
            email: email,
            password: password,
            matches: []
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup] = \"myform\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input formControlName = \"email\" name =\"email\" type=\"text\" placeholder=\"company email\" required> \n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input formControlName = \"password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" required>\n  </div>\n  <button (click)=\"login()\" type=\"submit\" [disabled]=\"!myform.valid\" class=\"btn btn-primary\">LOGIN</button>\n  <button routerLink=\"/createuser\" type=\"submit\" class=\"btn btn-primary\">I'M NEW</button>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(UserService, router, SessionService, dialog) {
        this.UserService = UserService;
        this.router = router;
        this.SessionService = SessionService;
        this.dialog = dialog;
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.login = function () {
        var _this = this;
        console.log('email', this.myform.value.email);
        this.UserService.exist(this.myform.value.email).subscribe(function (exists) {
            console.log("exists", exists);
            var currentUser = exists.filter(function (user) {
                return user.email == _this.myform.value.email;
            });
            if (currentUser.length && currentUser[0].password == _this.myform.value.password) {
                _this.SessionService.init(currentUser);
                localStorage.setItem("session_user", JSON.stringify(currentUser));
                _this.router.navigate(['search']);
            }
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialog */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map