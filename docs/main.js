"use strict";
(self["webpackChunkchatvia"] = self["webpackChunkchatvia"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 8036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./chat/chat.module */ 1762)).then(m => m.ChatModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'account',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 1995)).then(m => m.AccountModule)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class AppComponent {
  constructor(translate) {
    this.translate = translate;
    translate.addLangs(['en', 'es', 'it', 'ru', 'de']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|it|es|ru|de/) ? browserLang : 'en');
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   createTranslateLoader: () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 614);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat/chat.module */ 1762);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authUtils */ 81);
/* harmony import */ var _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/helpers/fake-backend */ 3709);
/* harmony import */ var _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/helpers/error.interceptor */ 2121);
/* harmony import */ var _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/helpers/jwt.interceptor */ 5562);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 1509);



















if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.defaultauth === 'firebase') {
  (0,_authUtils__WEBPACK_IMPORTED_MODULE_4__.initFirebaseBackend)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig);
} else {
  _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_5__.FakeBackendInterceptor;
}
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
      useClass: _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__.JwtInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
      useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.ErrorInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
      useClass: _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_5__.FakeBackendInterceptor,
      multi: true
    }],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _chat_chat_module__WEBPACK_IMPORTED_MODULE_0__.ChatModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.isDevMode)(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _chat_chat_module__WEBPACK_IMPORTED_MODULE_0__.ChatModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 81:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFirebaseBackend: () => (/* binding */ getFirebaseBackend),
/* harmony export */   initFirebaseBackend: () => (/* binding */ initFirebaseBackend)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 1953);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ 7423);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ 6780);



class FirebaseAuthBackend {
  constructor(firebaseConfig) {
    /**
     * Registers the user with given details
     */
    this.registerUser = (email, password) => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then(user => {
          var user = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
          resolve(user);
        }, error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * Login user with given details
     */
    this.loginUser = (email, password) => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then(user => {
          // eslint-disable-next-line no-redeclare
          var user = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
          resolve(user);
        }, error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * forget Password user with given details
     */
    this.forgetPassword = email => {
      return new Promise((resolve, reject) => {
        // tslint:disable-next-line: max-line-length
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().sendPasswordResetEmail(email, {
          url: window.location.protocol + '//' + window.location.host + '/login'
        }).then(() => {
          resolve(true);
        }).catch(error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * Logout the user
     */
    this.logout = () => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut().then(() => {
          resolve(true);
        }).catch(error => {
          reject(this._handleError(error));
        });
      });
    };
    this.setLoggeedInUser = user => {
      sessionStorage.setItem('authUser', JSON.stringify(user));
    };
    /**
     * Returns the authenticated user
     */
    this.getAuthenticatedUser = () => {
      if (!sessionStorage.getItem('authUser')) {
        return null;
      }
      return JSON.parse(sessionStorage.getItem('authUser'));
    };
    if (firebaseConfig) {
      // Initialize Firebase
      firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
      firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged(user => {
        if (user) {
          sessionStorage.setItem('authUser', JSON.stringify(user));
        } else {
          sessionStorage.removeItem('authUser');
        }
      });
    }
  }
  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error) {
    // tslint:disable-next-line: prefer-const
    var errorMessage = error.message;
    return errorMessage;
  }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = config => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};


/***/ }),

/***/ 5149:
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatRoutingModule: () => (/* binding */ ChatRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ 5791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: "",
  component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent
}];
class ChatRoutingModule {
  static #_ = this.ɵfac = function ChatRoutingModule_Factory(t) {
    return new (t || ChatRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ChatRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1762:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatModule: () => (/* binding */ ChatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 7104);
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/tabs.module */ 9653);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-routing.module */ 5149);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 2605);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ 5791);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







// Emoji Picker


// Simplebar




class ChatModule {
  static #_ = this.ɵfac = function ChatModule_Factory(t) {
    return new (t || ChatModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ChatModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    imports: [ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapseModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__.ChatRoutingModule, _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_1__.TabsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_9__.SimplebarAngularModule, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_10__.PickerModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChatModule, {
    declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__.IndexComponent],
    imports: [ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapseModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__.ChatRoutingModule, _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_1__.TabsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_9__.SimplebarAngularModule, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_10__.PickerModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule]
  });
})();

/***/ }),

/***/ 551:
/*!************************************!*\
  !*** ./src/app/chat/index/data.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chat: () => (/* binding */ chat),
/* harmony export */   groups: () => (/* binding */ groups)
/* harmony export */ });
const chat = [{
  id: 1,
  name: 'chat.tabs.chats.recent.userslist.user1.name',
  profilePicture: 'assets/images/users/avatar-2.jpg',
  status: 'online',
  lastMessage: 'chat.tabs.chats.recent.userslist.user1.message',
  time: 'chat.tabs.chats.recent.userslist.user1.time',
  isActive: true,
  messages: [{
    id: 1,
    message: 'chat.messages.1.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.1.time'
  }, {
    id: 2,
    message: 'chat.messages.2.message',
    name: 'chat.messages.2.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.2.time',
    align: 'right'
  }, {
    isToday: true
  }, {
    id: 3,
    message: 'chat.messages.3.message',
    message2: 'chat.messages.3.message2',
    name: 'chat.messages.3.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.3.time'
  }, {
    id: 4,
    message: 'chat.messages.4.message',
    name: 'chat.messages.4.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.4.time',
    align: 'right'
  }, {
    id: 5,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '1',
      src: 'assets/images/small/img-1.jpg',
      caption: 'Image 4 caption here',
      thumb: 'assets/images/small/img-1.jpg'
    }]
  }, {
    id: 6,
    name: 'chat.messages.6.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.6.time',
    align: 'right',
    isfile: true,
    fileContent: 'admin_v1.0.zip',
    fileSize: '12.5 MB'
  }, {
    id: 1,
    message: '👍',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.1.time',
    replayName: "You",
    replaymsg: `chat.messages.1.message`,
    align: 'right'
  }]
}, {
  id: 2,
  name: 'chat.tabs.chats.recent.userslist.user2.name',
  profilePicture: 'assets/images/users/avatar-3.jpg',
  status: 'away',
  unRead: '02',
  lastMessage: 'chat.tabs.chats.recent.userslist.user2.message',
  time: 'chat.tabs.chats.recent.userslist.user2.time',
  messages: [{
    id: 1,
    message: 'chat.messages.8.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.1.time',
    align: 'right'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '4',
      src: 'assets/images/small/img-4.jpg',
      caption: 'Image 4 caption here',
      thumb: 'assets/images/small/img-4.jpg'
    }, {
      id: '5',
      src: 'assets/images/small/img-5.jpg',
      caption: 'Image 5 caption here',
      thumb: 'assets/images/small/img-5.jpg'
    }],
    imageNo: ['4', '5']
  }]
}, {
  id: 3,
  name: 'chat.tabs.chats.recent.userslist.user3.name',
  lastMessage: 'chat.tabs.chats.recent.userslist.user3.message',
  time: 'chat.tabs.chats.recent.userslist.user3.time',
  messages: [{
    id: 1,
    message: 'chat.messages.9.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.1.time'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '4',
      src: 'assets/images/small/img-4.jpg',
      caption: 'Image 4 caption here',
      thumb: 'assets/images/small/img-4.jpg'
    }, {
      id: '6',
      src: 'assets/images/small/img-6.jpg',
      caption: 'Image 6 caption here',
      thumb: 'assets/images/small/img-6.jpg'
    }]
  }, {
    id: 3,
    message: 'chat.messages.10.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.10.time',
    align: 'right'
  }, {
    id: 34,
    message: 'chat.messages.11.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.11.time'
  }]
}, {
  id: 4,
  name: 'chat.tabs.chats.recent.userslist.user4.name',
  profilePicture: 'assets/images/users/avatar-4.jpg',
  status: 'online',
  lastMessage: 'chat.tabs.chats.recent.userslist.user4.message',
  time: 'chat.tabs.chats.recent.userslist.user4.time',
  messages: [{
    id: 1,
    message: 'chat.messages.1.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.1.time'
  }, {
    id: 2,
    message: 'chat.messages.2.message',
    name: 'chat.messages.2.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.2.time',
    align: 'right'
  }, {
    isToday: true
  }, {
    id: 3,
    message: 'chat.messages.3.message',
    message2: 'chat.messages.3.message2',
    name: 'chat.messages.3.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.3.time'
  }, {
    id: 4,
    message: 'chat.messages.4.message',
    name: 'chat.messages.4.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.4.time',
    align: 'right'
  }, {
    id: 5,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '1',
      src: 'assets/images/small/img-1.jpg',
      caption: 'Image 1 caption here',
      thumb: 'assets/images/small/img-1.jpg'
    }, {
      id: '2',
      src: 'assets/images/small/img-2.jpg',
      caption: 'Image 2 caption here',
      thumb: 'assets/images/small/img-2.jpg'
    }]
  }, {
    id: 6,
    name: 'chat.messages.6.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.6.time',
    align: 'right',
    isfile: true,
    fileContent: 'admin_v1.0.zip',
    fileSize: '12.5 MB'
  }]
}, {
  id: 5,
  name: 'chat.tabs.chats.recent.userslist.user5.name',
  unRead: '01',
  lastMessage: 'chat.tabs.chats.recent.userslist.user5.message',
  time: 'chat.tabs.chats.recent.userslist.user5.time',
  messages: [{
    id: 1,
    message: 'chat.messages.9.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.9.time'
  }, {
    isToday: true
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '2',
      src: 'assets/images/small/img-2.jpg',
      caption: 'Image 2 caption here',
      thumb: 'assets/images/small/img-2.jpg'
    }]
  }, {
    id: 3,
    name: 'chat.messages.6.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.6.time',
    align: 'right',
    isfile: true,
    fileContent: 'Minible-Vertical.zip',
    fileSize: '12.5 MB'
  }, {
    id: 4,
    message: 'chat.messages.12.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.12.time',
    align: 'right'
  }, {
    id: 5,
    message: 'chat.messages.10.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.10.time'
  }]
}, {
  id: 6,
  name: 'chat.tabs.chats.recent.userslist.user6.name',
  profilePicture: 'assets/images/users/avatar-6.jpg',
  status: 'away',
  lastMessage: 'chat.tabs.chats.recent.userslist.user6.message',
  time: 'chat.tabs.chats.recent.userslist.user6.time',
  messages: [{
    id: 1,
    name: 'chat.messages.6.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.6.time',
    isfile: true,
    fileContent: 'Minible-Vertical.zip',
    fileSize: '12.5 MB'
  }, {
    id: 2,
    message: 'chat.messages.13.message',
    name: 'chat.messages.2.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.13.time',
    align: 'right'
  }]
}, {
  id: 7,
  name: 'chat.tabs.chats.recent.userslist.user7.name',
  status: 'online',
  isTyping: true,
  time: '04:56 PM',
  messages: [{
    id: 1,
    message: 'chat.messages.14.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.14.time'
  }, {
    id: 2,
    message: 'chat.messages.15.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.15.time',
    align: 'right'
  }]
}, {
  id: 8,
  name: 'chat.tabs.chats.recent.userslist.user8.name',
  status: 'online',
  lastMessage: 'chat.tabs.chats.recent.userslist.user8.message',
  time: 'chat.tabs.chats.recent.userslist.user8.time',
  messages: [{
    id: 1,
    message: 'chat.messages.16.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.16.time'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '4',
      src: 'assets/images/small/img-4.jpg',
      caption: 'Image 4 caption here',
      thumb: 'assets/images/small/img-4.jpg'
    }, {
      id: '2',
      src: 'assets/images/small/img-2.jpg',
      caption: 'Image 2 caption here',
      thumb: 'assets/images/small/img-2.jpg'
    }]
  }, {
    id: 3,
    message: 'chat.messages.17.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.17.time'
  }, {
    id: 4,
    message: 'chat.messages.18.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.18.time',
    align: 'right'
  }]
}, {
  id: 9,
  name: 'chat.tabs.chats.recent.userslist.user9.name',
  profilePicture: 'assets/images/users/avatar-7.jpg',
  status: 'away',
  lastMessage: 'chat.tabs.chats.recent.userslist.user9.message',
  time: 'chat.tabs.chats.recent.userslist.user9.time',
  messages: [{
    id: 1,
    message: 'chat.messages.16.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.16.time'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '4',
      src: 'assets/images/small/img-2.jpg',
      caption: 'Image 4 caption here',
      thumb: 'assets/images/small/img-4.jpg'
    }, {
      id: '1',
      src: 'assets/images/small/img-2.jpg',
      caption: 'Image 2 caption here',
      thumb: 'assets/images/small/img-2.jpg'
    }],
    align: 'right'
  }, {
    id: 3,
    message: 'chat.messages.17.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.17.time',
    align: 'right'
  }, {
    id: 4,
    message: 'chat.messages.19.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.19.time'
  }]
}, {
  id: 10,
  name: 'chat.tabs.chats.recent.userslist.user10.name',
  status: 'online',
  lastMessage: 'chat.tabs.chats.recent.userslist.user10.message',
  time: 'chat.tabs.chats.recent.userslist.user10.time',
  messages: [{
    id: 1,
    message: 'chat.messages.20.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.20.time'
  }, {
    id: 2,
    message: 'chat.messages.21.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.21.time',
    align: 'right'
  }, {
    id: 3,
    message: 'chat.messages.22.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.22.time'
  }, {
    id: 4,
    message: 'chat.messages.23.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.23.time'
  }, {
    id: 5,
    message: 'chat.messages.24.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.24.time'
  }]
}, {
  id: 11,
  name: 'chat.tabs.chats.recent.userslist.user11.name',
  profilePicture: 'assets/images/users/avatar-8.jpg',
  status: 'away',
  lastMessage: 'chat.tabs.chats.recent.userslist.user11.message',
  time: 'chat.tabs.chats.recent.userslist.user11.time',
  messages: [{
    id: 1,
    message: 'chat.messages.14.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.14.time',
    align: 'right'
  }, {
    id: 2,
    message: 'chat.messages.25.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.25.time',
    align: 'right'
  }, {
    id: 3,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '3',
      src: 'assets/images/small/img-3.jpg',
      caption: 'Image 3 caption here',
      thumb: 'assets/images/small/img-3.jpg'
    }]
  }]
}, {
  id: 12,
  name: 'chat.tabs.chats.recent.userslist.user12.name',
  status: 'online',
  lastMessage: 'chat.tabs.chats.recent.userslist.user12.message',
  time: 'chat.tabs.chats.recent.userslist.user12.time',
  messages: [{
    id: 1,
    message: 'chat.messages.26.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.26.time',
    align: 'right'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '3',
      src: 'assets/images/small/img-3.jpg',
      caption: 'Image 3 caption here',
      thumb: 'assets/images/small/img-3.jpg'
    }]
  }, {
    id: 3,
    message: 'chat.messages.27.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.27.time',
    align: 'right'
  }]
}];
const groups = [{
  id: 1,
  name: 'chat.tabs.groups.list.general',
  messages: [{
    id: 1,
    message: 'chat.messages.26.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.26.time',
    align: 'right'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '3',
      src: 'assets/images/small/img-3.jpg',
      caption: 'Image 3 caption here',
      thumb: 'assets/images/small/img-3.jpg'
    }]
  }, {
    id: 3,
    message: 'chat.messages.27.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.27.time',
    align: 'right'
  }]
}, {
  id: 2,
  name: 'chat.tabs.groups.list.reporting',
  unread: '+23',
  messages: [{
    id: 1,
    message: 'chat.messages.9.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.9.time'
  }, {
    isToday: true
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '2',
      src: 'assets/images/small/img-2.jpg',
      caption: 'Image 2 caption here',
      thumb: 'assets/images/small/img-2.jpg'
    }]
  }, {
    id: 3,
    name: 'chat.messages.6.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.6.time',
    align: 'right',
    isfile: true,
    fileContent: 'Minible-Vertical.zip',
    fileSize: '12.5 MB'
  }, {
    id: 4,
    message: 'chat.messages.12.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.12.time',
    align: 'right'
  }, {
    id: 5,
    message: 'chat.messages.10.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.10.time'
  }]
}, {
  id: 3,
  name: 'chat.tabs.groups.list.designers',
  messages: [{
    id: 1,
    message: 'chat.messages.14.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.14.time'
  }, {
    id: 2,
    message: 'chat.messages.15.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.15.time',
    align: 'right'
  }]
}, {
  id: 4,
  name: 'chat.tabs.groups.list.developer',
  unread: 'New',
  messages: [{
    id: 1,
    message: 'chat.messages.16.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.16.time'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '4',
      src: 'assets/images/small/img-4.jpg',
      caption: 'Image 4 caption here',
      thumb: 'assets/images/small/img-4.jpg'
    }, {
      id: '2',
      src: 'assets/images/small/img-2.jpg',
      caption: 'Image 2 caption here',
      thumb: 'assets/images/small/img-2.jpg'
    }],
    align: 'right'
  }, {
    id: 3,
    message: 'chat.messages.17.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.17.time',
    align: 'right'
  }, {
    id: 4,
    message: 'chat.messages.19.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.19.time'
  }]
}, {
  id: 5,
  name: 'chat.tabs.groups.list.projectalpha',
  messages: [{
    id: 1,
    message: 'chat.messages.9.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.1.time'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '4',
      src: 'assets/images/small/img-4.jpg',
      caption: 'Image 4 caption here',
      thumb: 'assets/images/small/img-4.jpg'
    }, {
      id: '6',
      src: 'assets/images/small/img-6.jpg',
      caption: 'Image 6 caption here',
      thumb: 'assets/images/small/img-6.jpg'
    }]
  }, {
    id: 3,
    message: 'chat.messages.10.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.10.time',
    align: 'right'
  }, {
    id: 34,
    message: 'chat.messages.11.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.11.time'
  }]
}, {
  id: 6,
  name: 'chat.tabs.groups.list.snacks',
  messages: [{
    id: 1,
    message: 'chat.messages.8.message',
    name: 'chat.messages.1.name',
    profile: 'assets/images/users/avatar-4.jpg',
    time: 'chat.messages.1.time',
    align: 'right'
  }, {
    id: 2,
    name: 'chat.messages.5.name',
    profile: 'assets/images/users/avatar-1.jpg',
    time: 'chat.messages.5.time',
    isimage: true,
    imageContent: [{
      id: '4',
      src: 'assets/images/small/img-4.jpg',
      caption: 'Image 4 caption here',
      thumb: 'assets/images/small/img-4.jpg'
    }, {
      id: '5',
      src: 'assets/images/small/img-5.jpg',
      caption: 'Image 5 caption here',
      thumb: 'assets/images/small/img-5.jpg'
    }]
  }]
}];


/***/ }),

/***/ 5791:
/*!***********************************************!*\
  !*** ./src/app/chat/index/index.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexComponent: () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 551);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/authfake.service */ 9634);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ 304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ 7104);
/* harmony import */ var _tabs_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tabs/profile/profile.component */ 2657);
/* harmony import */ var _tabs_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tabs/contacts/contacts.component */ 2955);
/* harmony import */ var _tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tabs/settings/settings.component */ 9476);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 2605);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);


















const _c0 = ["scrollRef"];
const _c1 = a0 => ({
  "active": a0
});
function IndexComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_50_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.setLanguage(item_r20.lang));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c1, ctx_r0.lang === item_r20.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", item_r20.flag, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r20.text);
  }
}
function IndexComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function IndexComponent_Conditional_75_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 191)(1, "a", 192)(2, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 194)(4, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h5", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 1, "chat.tabs.chats.users.1"));
  }
}
function IndexComponent_Conditional_75_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 191)(1, "a", 192)(2, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 197)(4, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h5", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 1, "chat.tabs.chats.users.2"));
  }
}
function IndexComponent_Conditional_75_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 191)(1, "a", 192)(2, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 198)(4, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h5", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 1, "chat.tabs.chats.users.3"));
  }
}
function IndexComponent_Conditional_75_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 191)(1, "a", 192)(2, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 199)(4, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h5", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 1, "chat.tabs.chats.users.4"));
  }
}
function IndexComponent_Conditional_75_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 191)(1, "a", 192)(2, "div", 193)(3, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " T ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h5", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 1, "chat.tabs.chats.users.5"));
  }
}
function IndexComponent_Conditional_75_For_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 212);
  }
  if (rf & 2) {
    const user_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", user_r33.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function IndexComponent_Conditional_75_For_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 213)(1, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, user_r33.name).charAt(0), " ");
  }
}
function IndexComponent_Conditional_75_For_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 195);
  }
}
function IndexComponent_Conditional_75_For_26_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "typing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 215)(4, "span", 215)(5, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c2 = a0 => ({
  "typing": a0
});
const _c3 = (a0, a1) => ({
  "online": a0,
  "away": a1
});
function IndexComponent_Conditional_75_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Conditional_75_For_26_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const user_r33 = restoredCtx.$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r44.showChat($event, user_r33.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 202)(2, "div", 203)(3, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, IndexComponent_Conditional_75_For_26_Conditional_4_Template, 1, 1, "img", 70)(5, IndexComponent_Conditional_75_For_26_Conditional_5_Template, 4, 3)(6, IndexComponent_Conditional_75_For_26_Conditional_6_Template, 1, 0, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 71)(8, "h5", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, IndexComponent_Conditional_75_For_26_Conditional_11_Template, 6, 0, "p", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 210)(19, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const user_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](15, _c2, user_r33.isTyping));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](17, _c3, user_r33.status === "online", user_r33.status === "away"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](4, user_r33.profilePicture ? 4 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](6, user_r33.status ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 9, user_r33.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](11, user_r33.isTyping ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 11, user_r33.lastMessage));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 13, user_r33.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](user_r33.unRead);
  }
}
function IndexComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "div")(2, "div", 179)(3, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 180)(7, "div", 181)(8, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function IndexComponent_Conditional_75_Template_input_keyup_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r46.ContactSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 185)(13, "owl-carousel-o", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, IndexComponent_Conditional_75_ng_template_14_Template, 8, 3, "ng-template", 187)(15, IndexComponent_Conditional_75_ng_template_15_Template, 8, 3, "ng-template", 187)(16, IndexComponent_Conditional_75_ng_template_16_Template, 8, 3, "ng-template", 187)(17, IndexComponent_Conditional_75_ng_template_17_Template, 8, 3, "ng-template", 187)(18, IndexComponent_Conditional_75_ng_template_18_Template, 9, 3, "ng-template", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div")(20, "h5", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ngx-simplebar", 189)(24, "ul", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](25, IndexComponent_Conditional_75_For_26_Template, 21, 20, "li", 216, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, "chat.tabs.chats.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 6, "chat.tabs.chats.search.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx_r2.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 8, "chat.tabs.chats.recent.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r2.chat);
  }
}
function IndexComponent_Conditional_76_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 228)(1, "div", 229)(2, "h5", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Conditional_76_ng_template_10_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const modal_r51 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r51.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 232)(7, "form")(8, "div", 143)(9, "label", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 143)(15, "label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 236)(19, "button", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Conditional_76_ng_template_10_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r52.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 238, 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngbCollapseChange", function IndexComponent_Conditional_76_ng_template_10_Template_div_ngbCollapseChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r56.isCollapsed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 240)(25, "div", 241)(26, "h5", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 243)(30, "ngx-simplebar", 244)(31, "div")(32, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "ul", 246)(36, "li")(37, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "label", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "li")(43, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "input", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "label", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div")(49, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "ul", 246)(53, "li")(54, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](55, "input", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "label", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div")(60, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "ul", 246)(64, "li")(65, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "label", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div")(71, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "ul", 246)(75, "li")(76, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](77, "input", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "label", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div")(82, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](84, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "ul", 246)(86, "li")(87, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](88, "input", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "label", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "li")(93, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](94, "input", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "label", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](97, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "li")(99, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](100, "input", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "label", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](103, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "div")(105, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "ul", 246)(109, "li")(110, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](111, "input", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "label", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](114, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "li")(116, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](117, "input", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "label", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](120, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div")(122, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](124, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "ul", 246)(126, "li")(127, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](128, "input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "label", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](131, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "div")(133, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](135, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "ul", 246)(137, "li")(138, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](139, "input", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "label", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](142, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "div")(144, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](146, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "ul", 246)(148, "li")(149, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](150, "input", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](151, "label", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](153, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "div", 236)(155, "label", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](157, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](158, "textarea", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](159, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "div", 276)(161, "button", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Conditional_76_ng_template_10_Template_button_click_161_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const modal_r51 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r51.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](162);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](163, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "button", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](166, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 34, "chat.tabs.groups.modal.title"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 36, "chat.tabs.groups.modal.form.name.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 38, "chat.tabs.groups.modal.form.name.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 40, "chat.tabs.groups.modal.form.members.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-expanded", !ctx_r48.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 42, "chat.tabs.groups.modal.form.members.button.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbCollapse", ctx_r48.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 44, "chat.tabs.contacts.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 46, "chat.tabs.contacts.list.A.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 48, "chat.tabs.contacts.list.A.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 50, "chat.tabs.contacts.list.A.name2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 52, "chat.tabs.contacts.list.C.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 54, "chat.tabs.contacts.list.C.name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](62, 56, "chat.tabs.contacts.list.D.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](69, 58, "chat.tabs.contacts.list.D.name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](73, 60, "chat.tabs.contacts.list.I.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](80, 62, "chat.tabs.contacts.list.I.name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](84, 64, "chat.tabs.contacts.list.J.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](91, 66, "chat.tabs.contacts.list.J.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](97, 68, "chat.tabs.contacts.list.J.name2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](103, 70, "chat.tabs.contacts.list.J.name3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](107, 72, "chat.tabs.contacts.list.M.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](114, 74, "chat.tabs.contacts.list.M.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](120, 76, "chat.tabs.contacts.list.M.name2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](124, 78, "chat.tabs.contacts.list.P.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](131, 80, "chat.tabs.contacts.list.P.name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](135, 82, "chat.tabs.contacts.list.R.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](142, 84, "chat.tabs.contacts.list.R.name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](146, 86, "chat.tabs.contacts.list.S.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](153, 88, "chat.tabs.contacts.list.S.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](157, 90, "chat.tabs.groups.modal.form.description.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](159, 92, "chat.tabs.groups.modal.form.description.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](163, 94, "chat.tabs.groups.modal.form.button.close"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](166, 96, "chat.tabs.groups.modal.form.button.create"));
  }
}
function IndexComponent_Conditional_76_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Conditional_76_For_21_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r64);
      const item_r58 = restoredCtx.$implicit;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r63.showGroupChat($event, item_r58.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 202)(2, "div", 65)(3, "div", 280)(4, "div", 213)(5, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 71)(9, "h5", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 3, item_r58.name).charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("#", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 5, item_r58.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r58.unread);
  }
}
function IndexComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "div")(2, "div", 217)(3, "div", 218)(4, "div", 219)(5, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Conditional_76_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66);
      const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r65.openGroupModal(_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, IndexComponent_Conditional_76_ng_template_10_Template, 167, 98, "ng-template", null, 222, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 180)(13, "div", 223)(14, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function IndexComponent_Conditional_76_Template_input_keyup_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r67.GroupSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ngx-simplebar", 226)(19, "ul", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](20, IndexComponent_Conditional_76_For_21_Template, 14, 7, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 2, "chat.tabs.groups.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 4, "chat.tabs.groups.search.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r3.groups);
  }
}
function IndexComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function IndexComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function IndexComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 212);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r6.userProfile, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function IndexComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 213)(1, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, ctx_r7.userName).charAt(0), " ");
  }
}
function IndexComponent_ng_template_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 283)(1, "div", 284)(2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h5", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Start Audio Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 288)(10, "ul", 289)(11, "li", 290)(12, "button", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_ng_template_121_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70);
      const modal_r68 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r68.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "li", 294)(16, "button", 295)(17, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r8.userProfile, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 2, ctx_r8.userName));
  }
}
function IndexComponent_ng_template_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 283)(1, "div", 284)(2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h5", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Start Video Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 288)(10, "ul", 289)(11, "li", 290)(12, "button", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_ng_template_126_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r73);
      const modal_r71 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r71.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "li", 294)(16, "button", 295)(17, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r10.userProfile, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 2, ctx_r10.userName));
  }
}
function IndexComponent_For_156_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 301)(1, "span", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r81.senderProfile, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 323);
  }
  if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r90.userProfile, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 213)(1, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, ctx_r91.userName).charAt(0), " ");
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, IndexComponent_For_156_Conditional_2_Conditional_2_Conditional_1_Template, 1, 1, "img", 323)(2, IndexComponent_For_156_Conditional_2_Conditional_2_Conditional_2_Template, 4, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, ctx_r82.userProfile ? 1 : 2);
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 324)(1, "div", 162)(2, "h5", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "button", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r74.replayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 2, data_r74.replaymsg));
  }
}
const _forTrack4 = ($index, $item) => $item.id;
function IndexComponent_For_156_Conditional_2_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 329)(1, "div")(2, "a", 330)(3, "img", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Conditional_10_For_2_Template_img_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r101);
      const x_r95 = restoredCtx.$index;
      const $index_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$index;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r99.openImage($index_r75, x_r95));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 332)(5, "ul", 111)(6, "li", 77)(7, "a", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li", 170)(10, "a", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 27)(13, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "i", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Conditional_10_For_2_Template_a_click_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r101);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r102.deleteMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", item_r94.src, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 5, "chat.messages.dropdown.copy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 7, "chat.messages.dropdown.save"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 9, "chat.messages.dropdown.forward"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 11, "chat.messages.dropdown.delete"));
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](1, IndexComponent_For_156_Conditional_2_Conditional_10_For_2_Template, 29, 13, "li", 333, _forTrack4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](data_r74.imageContent);
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 334)(1, "div", 65)(2, "div", 159)(3, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 335)(6, "div", 163)(7, "h5", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 336)(12, "ul", 337)(13, "li", 77)(14, "a", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "li", 170)(17, "a", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 93)(20, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Conditional_11_Template_a_click_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r105);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r104.deleteMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const data_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r74.fileContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r74.fileSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 4, "chat.messages.filedropdown.share"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 6, "chat.messages.filedropdown.delete"), " ");
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, data_r74.time));
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 306)(1, "div", 307)(2, "p", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 313)(11, "a", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 27)(14, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Conditional_37_Template_a_click_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r108.replyMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Conditional_37_Template_a_click_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r110.copyMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "i", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "i", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Conditional_37_Template_a_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](386);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r111.centerModal(_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "i", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Conditional_37_Template_a_click_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r112.deleteMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 7, data_r74.message2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 9, data_r74.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 11, "chat.messages.dropdown.reply"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 13, "chat.messages.dropdown.copy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 15, "chat.messages.dropdown.save"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 17, "chat.messages.dropdown.forward"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 19, "chat.messages.dropdown.delete"));
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r88.senderName));
  }
}
function IndexComponent_For_156_Conditional_2_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r89.userName));
  }
}
function IndexComponent_For_156_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, IndexComponent_For_156_Conditional_2_Conditional_1_Template, 2, 1, "div", 304)(2, IndexComponent_For_156_Conditional_2_Conditional_2_Template, 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 305)(4, "div", 306)(5, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, IndexComponent_For_156_Conditional_2_Conditional_6_Template, 9, 4, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, IndexComponent_For_156_Conditional_2_Conditional_10_Template, 3, 0, "ul", 310)(11, IndexComponent_For_156_Conditional_2_Conditional_11_Template, 28, 8, "div", 311)(12, IndexComponent_For_156_Conditional_2_Conditional_12_Template, 5, 3, "p", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 313)(14, "a", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 27)(17, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Template_a_click_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r115);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r114.replyMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Template_a_click_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r115);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r116.copyMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "i", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Template_a_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r115);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](386);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r117.centerModal(_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "i", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_For_156_Conditional_2_Template_a_click_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r115);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r118.deleteMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, IndexComponent_For_156_Conditional_2_Conditional_37_Template, 34, 21, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, IndexComponent_For_156_Conditional_2_Conditional_39_Template, 3, 3, "span")(40, IndexComponent_For_156_Conditional_2_Conditional_40_Template, 3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, data_r74.align === "right" ? 1 : 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](6, data_r74.replayName ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 13, data_r74.message), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](10, data_r74.isimage ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](11, data_r74.isfile ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](12, !data_r74.istyping ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 15, "chat.messages.dropdown.reply"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 17, "chat.messages.dropdown.copy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 19, "chat.messages.dropdown.save"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 21, "chat.messages.dropdown.forward"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 23, "chat.messages.dropdown.delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](37, data_r74.message2 ? 37 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](39, data_r74.align === "right" ? 39 : 40);
  }
}
const _c5 = a0 => ({
  "right": a0
});
function IndexComponent_For_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, IndexComponent_For_156_Conditional_1_Template, 3, 0, "div", 300)(2, IndexComponent_For_156_Conditional_2_Template, 41, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c5, data_r74.align === "right"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, data_r74.isToday ? 1 : 2);
  }
}
function IndexComponent_Conditional_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "emoji-mart", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("emojiSelect", function IndexComponent_Conditional_171_Template_emoji_mart_emojiSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r121);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r120.addEmoji($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function IndexComponent_Conditional_198_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 344);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r15.userProfile, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function IndexComponent_Conditional_199_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 345)(1, "span", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, ctx_r16.userName).charAt(0), " ");
  }
}
function IndexComponent_ng_template_385_Template(rf, ctx) {
  if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 229)(1, "h5", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Forward to...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_ng_template_385_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r124);
      const modal_r122 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r122.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 283)(5, "div", 349)(6, "div", 350)(7, "div", 351)(8, "div", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 354)(11, "div", 355)(12, "div", 356)(13, "div", 357)(14, "div")(15, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ul", 246)(18, "li")(19, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "label", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Albert Rodarte");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li")(24, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "label", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Allison Etter");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div")(29, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "ul", 246)(32, "li")(33, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "label", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Craig Smiley");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div")(38, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "ul", 246)(41, "li")(42, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "input", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "label", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Daniel Clay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "li")(47, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](48, "input", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "label", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Doris Brown");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div")(52, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "I");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "ul", 246)(55, "li")(56, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "input", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "label", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Iris Wells");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div")(61, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "J");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "ul", 246)(64, "li")(65, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "label", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Juan Flakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "li")(70, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "input", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "label", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "John Hall");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "li")(75, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](76, "input", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "label", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Joy Southern");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div")(80, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "ul", 246)(83, "li")(84, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](85, "input", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "label", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "Mary Farmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "li")(89, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](90, "input", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "label", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, "Mark Messer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "li")(94, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](95, "input", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "label", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "Michael Hinton");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div")(99, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "O");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "ul", 246)(102, "li")(103, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](104, "input", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "label", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "Ossie Wilson");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "div")(108, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "ul", 246)(111, "li")(112, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](113, "input", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "label", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "Phillis Griffin");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "li")(117, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](118, "input", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "label", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120, "Paul Haynes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div")(122, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "ul", 246)(125, "li")(126, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](127, "input", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "label", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "Rocky Jackson");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div")(131, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "ul", 246)(134, "li")(135, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](136, "input", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "label", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138, "Sara Muller");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "li")(140, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](141, "input", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](142, "label", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](143, "Simon Velez");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "li")(145, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](146, "input", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "label", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, "Steve Walker");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "div")(150, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "ul", 246)(153, "li")(154, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](155, "input", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "label", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](157, "Hanah Mile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](158, "div", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "div", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](160, "div", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "div", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](162, "div", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "div", 391)(164, "button", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, "Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
}
const _c6 = (a0, a1) => ({
  "text-success": a0,
  "text-warning": a1
});
/**
 * Chat-component
 */
class IndexComponent {
  constructor(authFackservice, authService, router, translate, modalService, offcanvasService, formBuilder, datePipe, lightbox) {
    this.authFackservice = authFackservice;
    this.authService = authService;
    this.router = router;
    this.translate = translate;
    this.modalService = modalService;
    this.offcanvasService = offcanvasService;
    this.formBuilder = formBuilder;
    this.datePipe = datePipe;
    this.lightbox = lightbox;
    this.activetab = 2;
    this.emoji = '';
    this.isreplyMessage = false;
    this.isgroupMessage = false;
    this.isCollapsed = true;
    this.listLang = [{
      text: 'English',
      flag: 'assets/images/flags/us.jpg',
      lang: 'en'
    }, {
      text: 'Spanish',
      flag: 'assets/images/flags/spain.jpg',
      lang: 'es'
    }, {
      text: 'German',
      flag: 'assets/images/flags/germany.jpg',
      lang: 'de'
    }, {
      text: 'Italian',
      flag: 'assets/images/flags/italy.jpg',
      lang: 'it'
    }, {
      text: 'Russian',
      flag: 'assets/images/flags/russia.jpg',
      lang: 'ru'
    }];
    this.images = [];
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['Previous', 'Next'],
      margin: 20,
      items: 4
    };
    /**
     * Show user chat
     */
    // tslint:disable-next-line: typedef
    this.userName = 'Doris Brown';
    this.userStatus = 'online';
    this.userProfile = 'assets/images/users/avatar-4.jpg';
    // Emoji Picker
    this.showEmojiPicker = false;
    this.sets = ['native', 'google', 'twitter', 'facebook', 'emojione', 'apple', 'messenger'];
    this.set = 'twitter';
  }
  /**
  * Open lightbox
  */
  openImage(index, i) {
    // open lightbox
    this.lightbox.open(this.message[index].imageContent, i, {
      showZoom: true
    });
  }
  ngOnInit() {
    document.body.setAttribute('data-bs-theme', 'light');
    // Validation
    this.formData = this.formBuilder.group({
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    const user = window.sessionStorage.getItem('currentUser');
    if (user) {
      this.senderName = JSON.parse(user).username;
      this.senderProfile = 'assets/images/users/' + JSON.parse(user).profile;
    } else {
      this.router.navigate(['/account/login']);
    }
    this.chat = _data__WEBPACK_IMPORTED_MODULE_0__.chat;
    this.groups = _data__WEBPACK_IMPORTED_MODULE_0__.groups;
    this.lang = this.translate.currentLang;
    this.onListScroll();
  }
  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 100;
  }
  /**
   * Show user profile
   */
  // tslint:disable-next-line: typedef
  showUserProfile() {
    document.getElementById('profile-detail').style.display = 'block';
  }
  /**
   * Close user chat
   */
  // tslint:disable-next-line: typedef
  closeUserChat() {
    document.getElementById('chat-room').classList.remove('user-chat-show');
  }
  /**
   * Logout the user
   */
  logout() {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultauth === 'firebase') {
      this.authService.logout();
    } else if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultauth === 'fackbackend') {
      this.authFackservice.logout();
    }
    this.router.navigate(['/account/login']);
  }
  /**
   * Set language
   * @param lang language
   */
  setLanguage(lang) {
    this.translate.use(lang);
    this.lang = lang;
  }
  openCallModal(content) {
    this.modalService.open(content, {
      centered: true
    });
  }
  openVideoModal(videoContent) {
    this.modalService.open(videoContent, {
      centered: true
    });
  }
  showChat(event, id) {
    var removeClass = document.querySelectorAll('.chat-user-list li');
    removeClass.forEach(element => {
      element.classList.remove('active');
    });
    document.querySelector('.user-chat').classList.add('user-chat-show');
    document.querySelector('.chat-welcome-section').classList.add('d-none');
    document.querySelector('.user-chat').classList.remove('d-none');
    event.target.closest('li').classList.add('active');
    var data = this.chat.filter(chat => {
      return chat.id === id;
    });
    this.userName = data[0].name;
    this.userStatus = data[0].status;
    this.userProfile = data[0].profilePicture;
    this.message = data[0].messages;
    this.onListScroll();
  }
  // Contact Search
  ContactSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchContact");
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll(".chat-user-list");
    ul.forEach(item => {
      li = item.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a?.innerText;
        if (txtValue?.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    });
  }
  // Message Search
  MessageSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchMessage");
    filter = input.value.toUpperCase();
    ul = document.getElementById("users-conversation");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      txtValue = a?.innerText;
      if (txtValue?.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  // Filter Offcanvas Set
  onChatInfoClicked() {
    document.querySelector('.user-profile-sidebar').style.display = 'block';
  }
  CloseChatInfo() {
    document.querySelector('.user-profile-sidebar').style.display = 'none';
  }
  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }
  /**
   * Save the message in chat
   */
  messageSave() {
    var groupMsg = document.querySelector('.pills-groups-tab.active');
    const message = this.formData.get('message').value;
    if (message) {
      if (!groupMsg) {
        document.querySelector('.chat-user-list li.active .chat-user-message').innerHTML = message ? message : this.img;
      }
      var img = this.img ? this.img : '';
      var status = this.img ? true : '';
      var dateTime = this.datePipe.transform(new Date(), "h:mm a");
      var chatReplyUser = this.isreplyMessage == true ? document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerHTML : '';
      var chatReplyMessage = this.isreplyMessage == true ? document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerText : '';
      this.message.push({
        id: 1,
        message: message,
        name: this.senderName,
        profile: this.senderProfile,
        time: dateTime,
        align: 'right',
        isimage: status,
        imageContent: [img],
        replayName: chatReplyUser,
        replaymsg: chatReplyMessage
      });
      this.onListScroll();
      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null
      });
      this.isreplyMessage = false;
      this.emoji = '';
      this.img = '';
      chatReplyUser = '';
      chatReplyMessage = '';
      document.querySelector('.replyCard')?.classList.remove('show');
    }
  }
  onListScroll() {
    if (this.scrollRef !== undefined) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop = this.scrollRef.SimpleBar.getScrollElement().scrollHeight;
      }, 500);
    }
  }
  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }
  addEmoji(event) {
    const {
      emoji
    } = this;
    const text = `${emoji}${event.emoji.native}`;
    this.emoji = text;
    this.showEmojiPicker = false;
  }
  onFocus() {
    this.showEmojiPicker = false;
  }
  onBlur() {}
  closeReplay() {
    document.querySelector('.replyCard')?.classList.remove('show');
  }
  // Copy Message
  copyMessage(event) {
    navigator.clipboard.writeText(event.target.closest('.chats').querySelector('.messageText').innerHTML);
    document.getElementById('copyClipBoard')?.classList.add('show');
    setTimeout(() => {
      document.getElementById('copyClipBoard')?.classList.remove('show');
    }, 1000);
  }
  // Delete Message
  deleteMessage(event) {
    event.target.closest('.chats').remove();
  }
  // Delete All Message
  deleteAllMessage(event) {
    var allMsgDelete = document.getElementById('users-conversation')?.querySelectorAll('.chats');
    allMsgDelete.forEach(item => {
      item.remove();
    });
  }
  // Replay Message
  replyMessage(event) {
    this.isreplyMessage = true;
    document.querySelector('.replyCard')?.classList.add('show');
    var copyText = event.target.closest('.chats').querySelector('.messageText').innerHTML;
    document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerHTML = copyText;
    var msgOwnerName = event.target.closest(".chats").classList.contains("right") == true ? 'You' : document.querySelector('.username')?.innerHTML;
    document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerHTML = msgOwnerName;
  }
  /**
  * Open center modal
  * @param centerDataModal center modal data
  */
  centerModal(centerDataModal) {
    this.modalService.open(centerDataModal, {
      centered: true
    });
  }
  fileChange(event) {
    let fileList = event.target;
    let file = fileList.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
      this.img = this.imageURL;
    };
    reader.readAsDataURL(file);
  }
  /**
   * Topbar Light-Dark Mode Change
   */
  changeMode(mode) {
    this.mode = mode;
    switch (mode) {
      case 'light':
        document.body.setAttribute('data-bs-theme', "light");
        break;
      case 'dark':
        document.body.setAttribute('data-bs-theme', "dark");
        break;
      default:
        document.body.setAttribute('data-bs-theme', "light");
        break;
    }
  }
  /***
   * ========== Group Msg ============
   */
  /**
  * Show user chat
  */
  // tslint:disable-next-line: typedef
  showGroupChat(event, id) {
    var removeClass = document.querySelectorAll('.chat-list li');
    removeClass.forEach(element => {
      element.classList.remove('active');
    });
    document.querySelector('.user-chat').classList.add('user-chat-show');
    document.querySelector('.chat-welcome-section').classList.add('d-none');
    document.querySelector('.user-chat').classList.remove('d-none');
    event.target.closest('li').classList.add('active');
    var data = this.groups.filter(group => {
      return group.id === id;
    });
    this.userName = data[0].name;
    this.userProfile = '';
    this.message = data[0].messages;
  }
  /**
   * Open add group modal
   * @param content content
   */
  // tslint:disable-next-line: typedef
  openGroupModal(content) {
    this.modalService.open(content, {
      centered: true
    });
  }
  // Group Search
  GroupSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchGroup");
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll(".group-list");
    ul.forEach(item => {
      li = item.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a?.innerText;
        if (txtValue?.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    });
  }
  static #_ = this.ɵfac = function IndexComponent_Factory(t) {
    return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbOffcanvas), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__.Lightbox));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: IndexComponent,
    selectors: [["app-index"]],
    viewQuery: function IndexComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
      }
    },
    decls: 387,
    vars: 169,
    consts: [[1, "layout-wrapper", "d-lg-flex"], [1, "side-menu", "flex-lg-column", "me-lg-1", "ms-lg-0"], [1, "navbar-brand-box"], [1, "logo", "logo-dark", 3, "click"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "30"], [1, "logo", "logo-light", 3, "click"], [1, "flex-lg-column", "my-auto"], ["role", "tablist", 1, "nav", "nav-pills", "side-menu-nav", "justify-content-center"], ["ngbTooltip", "Profile", 1, "nav-item"], ["id", "pills-user-tab", "href", "javascript: void(0);", 1, "nav-link", 3, "ngClass", "click"], [1, "ri-user-2-line"], ["ngbTooltip", "Chats", 1, "nav-item"], ["id", "pills-chat-tab", "href", "javascript: void(0);", 1, "nav-link", "active", 3, "ngClass", "click"], [1, "ri-message-3-line"], ["ngbTooltip", "Groups", 1, "nav-item"], ["id", "pills-groups-tab", "href", "javascript: void(0);", 1, "nav-link", "pills-groups-tab", 3, "ngClass", "click"], [1, "ri-group-line"], ["ngbTooltip", "Contacts", "placement", "top", 1, "nav-item"], ["id", "pills-contacts-tab", "href", "javascript: void(0);", 1, "nav-link", 3, "ngClass", "click"], [1, "ri-contacts-line"], ["ngbTooltip", "Settings", 1, "nav-item"], ["id", "pills-setting-tab", "href", "javascript: void(0);", 1, "nav-link", 3, "ngClass", "click"], [1, "ri-settings-2-line"], ["ngbDropdown", "", "placement", "top", 1, "nav-item", "dropdown", "profile-user-dropdown", "d-inline-block", "d-lg-none"], ["href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "profile-user", "rounded-circle"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "ri-profile-line", "float-end", "text-muted"], [1, "ri-settings-3-line", "float-end", "text-muted"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], [1, "ri-logout-circle-r-line", "float-end", "text-muted"], [1, "flex-lg-column", "d-none", "d-lg-block"], [1, "nav", "side-menu-nav", "justify-content-center"], ["ngbDropdown", "", "placement", "top-left", 1, "nav-item", "btn-group", "dropup", "profile-user-dropdown"], ["href", "javascript:void(0);", "role", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "ri-global-line"], [1, "nav-item"], ["id", "light-dark", "href", "javascript:void(0);", "ngbTooltip", "Light Mode", 1, "nav-link", "light-dark-mode"], [1, "ri-sun-line", "theme-mode-icon", "layout-mode-dark", 3, "click"], [1, "ri-sun-line", "theme-mode-icon", "layout-mode-light", 3, "click"], [1, "chat-leftsidebar", "me-lg-1", "ms-lg-0"], [1, "tab-content"], ["id", "pills-user", "role", "tabpanel", "aria-labelledby", "pills-user-tab"], ["id", "pills-chat", "role", "tabpanel", "aria-labelledby", "pills-chat-tab"], ["id", "pills-groups", "role", "tabpanel", "aria-labelledby", "pills-groups-tab"], ["id", "pills-contacts", "role", "tabpanel", "aria-labelledby", "pills-contacts-tab"], ["id", "pills-setting", "role", "tabpanel", "aria-labelledby", "pills-setting-tab"], [1, "chat-welcome-section"], [1, "row", "w-100", "justify-content-center"], [1, "col-xxl-5", "col-md-7"], [1, "p-4", "text-center"], [1, "avatar-xl", "mx-auto", "mb-4"], [1, "avatar-title", "bg-secondary", "rounded-circle"], ["data-v-5e8ea5c2", "", "xmlns", "http://www.w3.org/2000/svg", "width", "70px", "height", "65px", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-message-square"], ["data-v-5e8ea5c2", "", "d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "d-inline", "px-3", "py-2", "rounded-pill", "bg-secondary", "text-white", "fs-4"], ["id", "chat-room", 1, "user-chat", "w-100", "overflow-hidden", "d-none"], [1, "d-lg-flex"], [1, "w-100", "overflow-hidden", "position-relative"], [1, "p-3", "p-lg-4", "border-bottom", "user-chat-topbar"], [1, "row", "align-items-center"], [1, "col-sm-4", "col-8"], [1, "d-flex", "align-items-center"], [1, "d-block", "d-lg-none", "me-2", "ms-0"], ["href", "javascript: void(0);", 1, "user-chat-remove", "text-muted", "font-size-16", "p-2", 3, "click"], [1, "ri-arrow-left-s-line"], [1, "me-3", "ms-0"], ["class", "rounded-circle avatar-xs", "alt", "", 3, "src"], [1, "flex-grow-1", "overflow-hidden"], [1, "font-size-16", "mb-0", "text-truncate"], ["href", "javascript:void(0);", 1, "text-reset", "user-profile-show", "username", 3, "click"], [1, "ri-record-circle-fill", "font-size-10", "d-inline-block", "ms-1", 3, "ngClass"], [1, "col-sm-8", "col-4"], [1, "list-inline", "user-chat-nav", "text-end", "mb-0"], [1, "list-inline-item"], ["ngbDropdown", "", 1, "dropdown"], ["ngbDropdownToggle", "", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "nav-btn", "dropdown-toggle"], [1, "ri-search-line"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "p-0", "dropdown-menu-end", "dropdown-menu-md"], [1, "search-box", "p-2"], ["type", "text", "id", "searchMessage", 1, "form-control", "bg-light", "border-0", 3, "placeholder", "keyup"], [1, "list-inline-item", "d-none", "d-lg-inline-block", "me-2", "ms-0"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#audiocallModal", 1, "btn", "nav-btn", 3, "click"], [1, "ri-phone-line"], ["callContent", ""], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#videocallModal", 1, "btn", "nav-btn", 3, "click"], [1, "ri-vidicon-line"], ["videoContent", ""], ["type", "button", 1, "btn", "nav-btn", "user-profile-show", 3, "click"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block", "d-lg-none", "user-profile-show", 3, "click"], [1, "ri-user-2-line", "float-end", "text-muted"], [1, "ri-archive-line", "float-end", "text-muted"], [1, "ri-volume-mute-line", "float-end", "text-muted"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "ri-delete-bin-line", "float-end", "text-muted"], [1, "chat-conversation", "p-3", "p-lg-4"], ["scrollRef", ""], ["id", "users-conversation", 1, "list-unstyled", "mb-0"], ["id", "copyClipBoard", "role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "copyclipboard-alert", "px-4", "fade"], [1, "chat-input-section", "p-3", "p-lg-4", "border-top", "mb-0", "send-msg"], ["id", "chatinput-form", "enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "row", "g-0"], [1, "col"], ["type", "text", "placeholder", "Enter Message...", "formControlName", "message", 1, "form-control", "form-control-lg", "bg-light", "border-light", 3, "ngModel", "ngModelChange", "blur", "focus"], [1, "col-auto"], [1, "chat-input-links", "ms-md-2", "me-md-0"], [1, "list-inline", "mb-0"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "ngbTooltip", "Emoji", "id", "emoji-btn", 1, "btn", "btn-link", "text-decoration-none", "font-size-16", "btn-lg", "waves-effect", 3, "click"], [1, "ri-emotion-happy-line"], ["class", "emoji-mart", "title", "Pick your emoji\u2026"], ["id", "files", 1, "btn", "btn-link", "text-decoration-none", "font-size-16", "btn-lg", "waves-effect"], [1, "ri-attachment-line"], ["name", "fileInput", "size", "60", "type", "file", 1, "form-control-file", "d-none", 3, "change"], ["type", "submit", 1, "btn", "btn-primary", "font-size-16", "btn-lg", "chat-send", "waves-effect", "waves-light"], [1, "ri-send-plane-2-fill"], ["_ngcontent-hes-c189", "", 1, "replyCard"], ["_ngcontent-hes-c189", "", 1, "card", "mb-0"], ["_ngcontent-hes-c189", "", 1, "card-body", "py-3"], ["_ngcontent-hes-c189", "", 1, "replymessage-block", "mb-0", "d-flex", "align-items-start"], ["_ngcontent-hes-c189", "", 1, "flex-grow-1"], ["_ngcontent-hes-c189", "", 1, "conversation-name"], ["_ngcontent-hes-c189", "", 1, "mb-0"], ["_ngcontent-hes-c189", "", 1, "flex-shrink-0"], ["_ngcontent-hes-c189", "", "type", "button", "id", "close_toggle", 1, "btn", "btn-sm", "btn-link", "mt-n2", "me-n3", "fs-18", "shadow-none", 3, "click"], ["_ngcontent-xeu-c127", "", 1, "ri-close-line", "float-end", "fs-5"], [1, "user-profile-sidebar"], [1, "px-3", "px-lg-4", "pt-3", "pt-lg-4"], [1, "user-chat-nav", "text-end"], ["type", "button", "id", "user-profile-hide", 1, "btn", "nav-btn", 3, "click"], [1, "ri-close-line"], [1, "text-center", "p-4", "border-bottom"], [1, "mb-4", "d-flex", "justify-content-center"], ["class", "rounded-circle avatar-lg img-thumbnail", "alt", "", 3, "src"], [1, "font-size-16", "mb-1", "text-truncate"], [1, "text-muted", "text-truncate", "mb-1"], [1, "ri-record-circle-fill", "font-size-10", "me-1", "ms-0", 3, "ngClass"], [1, "p-4", "user-profile-desc"], [1, "text-muted"], [1, "mb-4"], ["id", "profile-user-accordion", 1, "custom-accordion"], ["ngbAccordion", "", "activeIds", "about", 3, "closeOthers"], ["acc", "ngbAccordion"], ["ngbAccordionItem", "", "cardClass", "card shadow-none border mb-2", "id", "about"], ["ngbAccordionHeader", ""], [1, "font-size-14", "m-0"], [1, "ri-user-2-line", "me-2", "align-middle", "d-inline-block"], ["ngbAccordionCollapse", ""], [1, "text-muted", "mb-1"], [1, "font-size-14"], [1, "mt-4"], [1, "font-size-14", "mb-0"], ["ngbAccordionItem", "", "cardClass", "card shadow-none border mb-2", "id", "file"], [1, "ri-attachment-line", "me-2", "align-middle", "d-inline-block"], [1, "card", "p-2", "border", "mb-2"], [1, "avatar-sm", "me-3", "ms-0"], [1, "avatar-title", "bg-primary-subtle", "text-primary", "rounded", "font-size-20"], [1, "ri-file-text-fill"], [1, "flex-grow-1"], [1, "text-start"], [1, "font-size-14", "mb-1"], [1, "text-muted", "font-size-13", "mb-0"], [1, "ms-4", "me-0"], [1, "list-inline", "mb-0", "font-size-18"], ["href", "javascript: void(0);", 1, "text-muted", "px-1"], [1, "ri-download-2-line"], ["ngbDropdown", "", 1, "list-inline-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "text-muted", "px-1"], [1, "ri-image-fill"], ["ngbDropdownToggle", "", "href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "text-muted", "px-1"], ["href", "javascript:void(0);", 1, "text-muted", "px-1"], ["centerDataModal", ""], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "ngClass", "click"], ["alt", "user-image", "height", "12", 1, "me-1", 3, "src"], [1, "align-middle"], [1, "px-4", "pt-4"], [1, "search-box", "chat-search-box"], [1, "input-group", "mb-3", "rounded-3"], ["id", "basic-addon1", 1, "input-group-text", "text-muted", "bg-light", "pe-1", "ps-3"], [1, "ri-search-line", "search-icon", "font-size-18"], ["type", "text", "aria-label", "Search messages or users", "aria-describedby", "basic-addon1", "id", "searchContact", "autocomplete", "off", 1, "form-control", "bg-light", 3, "placeholder", "keyup"], ["dir", "ltr", 1, "px-4", "pb-4"], [3, "options"], ["carouselSlide", ""], [1, "mb-3", "px-3", "font-size-16"], ["data-simplebar-track", "light", 1, "chat-message-list", "px-2"], [1, "list-unstyled", "chat-list", "chat-user-list"], [1, "item"], ["href", "javascript:void(0);", 1, "user-status-box"], [1, "avatar-xs", "mx-auto", "d-block", "chat-user-img", "online"], ["src", "assets/images/users/avatar-2.jpg", "alt", "user-img", 1, "img-fluid", "rounded-circle"], [1, "user-status"], [1, "font-size-13", "text-truncate", "mt-3", "mb-1"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-img", 1, "img-fluid", "rounded-circle"], ["src", "assets/images/users/avatar-5.jpg", "alt", "user-img", 1, "img-fluid", "rounded-circle"], ["src", "assets/images/users/avatar-6.jpg", "alt", "user-img", 1, "img-fluid", "rounded-circle"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary"], [3, "ngClass", "click"], ["href", "javascript:void(0);"], [1, "d-flex"], [1, "chat-user-img", "online", "align-self-center", "me-3", "ms-0", 3, "ngClass"], ["class", "user-status"], [1, "text-truncate", "font-size-15", "mb-1"], ["class", "chat-user-message text-truncate mb-0"], [1, "chat-user-message", "text-truncate", "mb-0"], [1, "font-size-11"], [1, "unread-message"], [1, "badge", "badge-soft-danger", "rounded-pill"], ["alt", "", 1, "rounded-circle", "avatar-xs", 3, "src"], [1, "avatar-xs"], [1, "animate-typing"], [1, "dot", "ms-1"], [3, "ngClass"], [1, "p-4"], [1, "user-chat-nav", "float-end"], ["ngbTooltip", "Create group"], ["type", "button", "data-toggle", "modal", "data-target", "#addgroup-exampleModal", 1, "btn", "btn-link", "text-decoration-none", "text-muted", "font-size-18", "py-0", 3, "click"], [1, "ri-group-line", "me-1", "ms-0"], ["content", ""], [1, "input-group", "rounded-3"], ["type", "button", 1, "input-group-text", "text-muted", "bg-light", "pe-1", "ps-3"], ["type", "text", "id", "searchGroup", "autocomplete", "off", 1, "form-control", "bg-light", 3, "placeholder", "keyup"], ["data-simplebar", "", 1, "p-4", "chat-message-list", "chat-group-list"], [1, "list-unstyled", "chat-list"], [1, "modal-content"], [1, "modal-header"], ["id", "addgroup-exampleModalLabel", 1, "modal-title", "font-size-16"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], ["for", "addgroupname-input", 1, "form-label"], ["type", "text", "id", "addgroupname-input", 1, "form-control", 3, "placeholder"], [1, "form-label"], [1, "mb-3"], ["type", "button", "data-toggle", "collapse", "aria-controls", "collapseExample", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["id", "groupmembercollapse", 1, "collapse", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "card", "border"], [1, "card-header"], [1, "font-size-15", "mb-0"], [1, "card-body", "p-2"], ["data-simplebar", "", 2, "height", "150px"], [1, "p-3", "fw-bold", "text-primary"], [1, "list-unstyled", "contact-list"], [1, "form-check"], ["type", "checkbox", "id", "memberCheck1", "checked", "", 1, "form-check-input"], ["for", "memberCheck1", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck2", 1, "form-check-input"], ["for", "memberCheck2", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck3", 1, "form-check-input"], ["for", "memberCheck3", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck4", 1, "form-check-input"], ["for", "memberCheck4", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck5", 1, "form-check-input"], ["for", "memberCheck5", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck6", 1, "form-check-input"], ["for", "memberCheck6", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck7", 1, "form-check-input"], ["for", "memberCheck7", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck8", 1, "form-check-input"], ["for", "memberCheck8", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck9", 1, "form-check-input"], ["for", "memberCheck9", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck10", 1, "form-check-input"], ["for", "memberCheck10", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck11", 1, "form-check-input"], ["for", "memberCheck11", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck12", 1, "form-check-input"], ["for", "memberCheck12", 1, "form-check-label"], ["type", "checkbox", "id", "memberCheck13", 1, "form-check-input"], ["for", "memberCheck13", 1, "form-check-label"], ["for", "addgroupdescription-input", 1, "form-label"], ["id", "addgroupdescription-input", "rows", "3", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], [3, "click"], [1, "chat-user-img", "me-3", "ms-0"], [1, "text-truncate", "font-size-14", "mb-0"], [1, "badge", "badge-soft-danger", "rounded-pill", "float-end"], [1, "modal-body"], [1, "text-center", "p-4"], [1, "avatar-lg", "mx-auto", "mb-4"], ["alt", "", 1, "img-thumbnail", "rounded-circle", 3, "src"], [1, "text-truncate"], [1, "mt-5"], [1, "list-inline", "mb-1"], [1, "list-inline-item", "px-2", "me-2", "ms-0"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "avatar-sm", "rounded-circle", 3, "click"], [1, "avatar-title", "bg-transparent", "font-size-20"], [1, "ri-close-fill"], [1, "list-inline-item", "px-2"], ["type", "button", 1, "btn", "btn-success", "avatar-sm", "rounded-circle"], [1, "ri-phone-fill"], [1, "text-muted", "mb-0"], [1, "ri-vidicon-fill"], [1, "chats", 3, "ngClass"], ["class", "chat-day-title"], [1, "chat-day-title"], [1, "title"], [1, "conversation-list"], ["class", "chat-avatar"], [1, "user-chat-content"], [1, "ctext-wrap"], [1, "ctext-wrap-content"], ["class", "replymessage-block mb-0 d-flex align-items-start"], [1, "mb-0", "messageText"], ["class", "list-inline message-img mb-0"], ["class", "card p-2 mb-2"], ["class", "chat-time mb-0"], ["ngbDropdown", "", 1, "dropdown", "align-self-start"], ["href", "javascript:void(0);", "role", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "ri-more-2-fill"], [1, "ri-reply-line", "float-end", "text-muted"], [1, "ri-file-copy-line", "float-end", "text-muted"], [1, "ri-save-line", "float-end", "text-muted"], [1, "ri-chat-forward-line", "float-end", "text-muted"], ["class", "ctext-wrap"], [1, "conversation-name"], [1, "chat-avatar"], ["alt", "", 3, "src"], [1, "replymessage-block", "mb-0", "d-flex", "align-items-start"], [1, "mb-0"], [1, "flex-shrink-0"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "mt-n2", "me-n3", "font-size-18"], [1, "list-inline", "message-img", "mb-0"], [1, "list-inline-item", "message-img-list"], ["href", "javascript:void(0);", "title", "Project 1", 1, "popup-img", "d-inline-block", "m-1", "p-0"], ["alt", "", 1, "rounded", "border", 3, "src", "click"], [1, "message-img-link"], ["class", "list-inline-item message-img-list"], [1, "card", "p-2", "mb-2"], [1, "d-flex-body"], [1, "ms-4"], [1, "list-inline", "mb-0", "font-size-20"], ["href", "javascript:void(0);", 1, "text-muted"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "text-muted"], [1, "ri-share-line", "float-end", "text-muted"], [1, "chat-time", "mb-0"], [1, "ri-time-line", "align-middle"], ["title", "Pick your emoji\u2026", 1, "emoji-mart", 3, "emojiSelect"], ["alt", "", 1, "rounded-circle", "avatar-lg", "img-thumbnail", 3, "src"], [1, "avatar-lg"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-24"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "p-2", "card-body"], ["data-simplebar", "init", 2, "max-height", "200px"], [1, "simplebar-wrapper", 2, "margin", "0px"], [1, "simplebar-height-auto-observer-wrapper"], [1, "simplebar-height-auto-observer"], [1, "simplebar-mask"], [1, "simplebar-offset", 2, "right", "0px", "bottom", "0px"], ["tabindex", "0", "role", "region", "aria-label", "scrollable content", 1, "simplebar-content-wrapper", 2, "height", "auto", "overflow", "hidden scroll"], [1, "simplebar-content", 2, "padding", "0px"], [1, "p-3", "font-weight-bold", "text-primary"], ["id", "memberCheck1", "type", "checkbox", "value", "Albert Rodarte", 1, "form-check-input", "form-check-input"], ["id", "memberCheck2", "type", "checkbox", "value", "Allison Etter", 1, "form-check-input", "form-check-input"], ["id", "memberCheck3", "type", "checkbox", "value", "Craig Smiley", 1, "form-check-input", "form-check-input"], ["id", "memberCheck4", "type", "checkbox", "value", "Daniel Clay", 1, "form-check-input", "form-check-input"], ["id", "memberCheck5", "type", "checkbox", "value", "Doris Brown", 1, "form-check-input", "form-check-input"], ["id", "memberCheck6", "type", "checkbox", "value", "Iris Wells", 1, "form-check-input", "form-check-input"], ["id", "memberCheck7", "type", "checkbox", "value", "Juan Flakes", 1, "form-check-input", "form-check-input"], ["id", "memberCheck8", "type", "checkbox", "value", "John Hall", 1, "form-check-input", "form-check-input"], ["id", "memberCheck9", "type", "checkbox", "value", "Joy Southern", 1, "form-check-input", "form-check-input"], ["id", "memberCheck10", "type", "checkbox", "value", "Mary Farmer", 1, "form-check-input", "form-check-input"], ["id", "memberCheck11", "type", "checkbox", "value", "Mark Messer", 1, "form-check-input", "form-check-input"], ["id", "memberCheck12", "type", "checkbox", "value", "Michael Hinton", 1, "form-check-input", "form-check-input"], ["id", "memberCheck13", "type", "checkbox", "value", "Ossie Wilson", 1, "form-check-input", "form-check-input"], ["id", "memberCheck14", "type", "checkbox", "value", "Phillis Griffin", 1, "form-check-input", "form-check-input"], ["for", "memberCheck14", 1, "form-check-label"], ["id", "memberCheck15", "type", "checkbox", "value", "Paul Haynes", 1, "form-check-input", "form-check-input"], ["for", "memberCheck15", 1, "form-check-label"], ["id", "memberCheck16", "type", "checkbox", "value", "Rocky Jackson", 1, "form-check-input", "form-check-input"], ["for", "memberCheck16", 1, "form-check-label"], ["id", "memberCheck17", "type", "checkbox", "value", "Sara Muller", 1, "form-check-input", "form-check-input"], ["for", "memberCheck17", 1, "form-check-label"], ["id", "memberCheck18", "type", "checkbox", "value", "Simon Velez", 1, "form-check-input", "form-check-input"], ["for", "memberCheck18", 1, "form-check-label"], ["id", "memberCheck19", "type", "checkbox", "value", "Steve Walker", 1, "form-check-input", "form-check-input"], ["for", "memberCheck19", 1, "form-check-label"], ["id", "memberCheck20", "type", "checkbox", "value", "Hanah Mile", 1, "form-check-input", "form-check-input"], ["for", "memberCheck20", 1, "form-check-label"], [1, "simplebar-placeholder", 2, "width", "auto", "height", "1666px"], [1, "simplebar-track", "simplebar-horizontal", 2, "visibility", "hidden"], [1, "simplebar-scrollbar", 2, "width", "0px", "display", "none"], [1, "simplebar-track", "simplebar-vertical", 2, "visibility", "visible"], [1, "simplebar-scrollbar", 2, "height", "25px", "transform", "translate3d(0px, 0px, 0px)", "display", "block"], [1, "border-0", "modal-footer"], [1, "btn", "btn-primary"], ["class", "dropdown-item", "href", "javascript: void(0);", 3, "ngClass"], ["class", "chats", 3, "ngClass"]],
    template: function IndexComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_3_listener() {
          return ctx.activetab = 2;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_6_listener() {
          return ctx.activetab = 2;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7)(10, "ul", 8)(11, "li", 9)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_12_listener() {
          return ctx.activetab = 1;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "li", 12)(15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_15_listener() {
          return ctx.activetab = 2;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "li", 15)(18, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_18_listener() {
          return ctx.activetab = 3;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "li", 18)(21, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_21_listener() {
          return ctx.activetab = 4;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li", 21)(24, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_24_listener() {
          return ctx.activetab = 5;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "li", 24)(27, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 27)(30, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_39_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 34)(44, "ul", 35)(45, "li", 36)(46, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](49, IndexComponent_For_50_Template, 4, 5, "a", 393, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "li", 39)(52, "a", 40)(53, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_i_click_53_listener() {
          return ctx.changeMode("dark");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_i_click_54_listener() {
          return ctx.changeMode("light");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "li", 36)(56, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 27)(59, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_68_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 43)(73, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, IndexComponent_Conditional_74_Template, 2, 0, "div", 45)(75, IndexComponent_Conditional_75_Template, 27, 10, "div", 46)(76, IndexComponent_Conditional_76_Template, 22, 6, "div", 47)(77, IndexComponent_Conditional_77_Template, 2, 0, "div", 48)(78, IndexComponent_Conditional_78_Template, 2, 0, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 50)(80, "div", 51)(81, "div", 52)(82, "div", 53)(83, "div", 54)(84, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "svg", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](86, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, " Start Conversation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 59)(90, "div", 60)(91, "div", 61)(92, "div", 62)(93, "div", 63)(94, "div", 64)(95, "div", 65)(96, "div", 66)(97, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_97_listener() {
          return ctx.closeUserChat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](98, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](100, IndexComponent_Conditional_100_Template, 1, 1, "img", 70)(101, IndexComponent_Conditional_101_Template, 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div", 71)(103, "h5", 72)(104, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_104_listener() {
          return ctx.onChatInfoClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](107, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div", 75)(109, "ul", 76)(110, "li", 77)(111, "div", 78)(112, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](113, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "div", 81)(115, "div", 82)(116, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function IndexComponent_Template_input_keyup_116_listener() {
          return ctx.MessageSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "li", 84)(119, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_119_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r125);
          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](122);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.openCallModal(_r9));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](120, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](121, IndexComponent_ng_template_121_Template, 19, 4, "ng-template", null, 87, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "li", 84)(124, "button", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_124_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r125);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](127);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.openVideoModal(_r11));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](125, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](126, IndexComponent_ng_template_126_Template, 19, 4, "ng-template", null, 90, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "li", 84)(129, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_129_listener() {
          return ctx.onChatInfoClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](130, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "li", 77)(132, "div", 78)(133, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](134, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div", 93)(136, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_136_listener() {
          return ctx.showUserProfile();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](139, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](142, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](143, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](147, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_148_listener($event) {
          return ctx.deleteAllMessage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](150, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](151, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "ngx-simplebar", 100, 101)(154, "ul", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](155, IndexComponent_For_156_Template, 3, 4, "li", 394, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, " Message copied ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "div", 104)(160, "form", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function IndexComponent_Template_form_ngSubmit_160_listener() {
          return ctx.messageSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "div", 106)(162, "div", 107)(163, "div")(164, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_input_ngModelChange_164_listener($event) {
          return ctx.emoji = $event;
        })("blur", function IndexComponent_Template_input_blur_164_listener() {
          return ctx.onBlur();
        })("focus", function IndexComponent_Template_input_focus_164_listener() {
          return ctx.onFocus();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "div", 109)(166, "div", 110)(167, "ul", 111)(168, "li", 77)(169, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_169_listener() {
          return ctx.toggleEmojiPicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](170, "i", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](171, IndexComponent_Conditional_171_Template, 1, 0, "emoji-mart", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "li", 77)(173, "label", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](174, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](175, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function IndexComponent_Template_input_change_175_listener($event) {
          return ctx.fileChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "li", 77)(177, "button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](178, "i", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "div", 120)(180, "div", 121)(181, "div", 122)(182, "div", 123)(183, "div", 124)(184, "h5", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](185, "You");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](187, "Wow that's great");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](188, "div", 127)(189, "button", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_189_listener() {
          return ctx.closeReplay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](190, "i", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "div", 130)(192, "div", 131)(193, "div", 132)(194, "button", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_194_listener() {
          return ctx.CloseChatInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](195, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "div", 135)(197, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](198, IndexComponent_Conditional_198_Template, 1, 1, "img", 137)(199, IndexComponent_Conditional_199_Template, 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](200, "h5", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](202, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "p", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](204, "i", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](206, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "ngx-simplebar", 141)(208, "div", 142)(209, "p", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](211, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](212, "div", 144)(213, "div", 145, 146)(215, "div", 147)(216, "div", 148)(217, "h5", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](218, "i", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](220, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "div", 151)(222, "div")(223, "p", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](225, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "h5", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](228, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "div", 154)(230, "p", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](232, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](233, "h5", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](235, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](236, "div", 154)(237, "p", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](238);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](239, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](240, "h5", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](241);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](242, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](243, "div", 154)(244, "p", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](245);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](246, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "h5", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](249, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "div", 156)(251, "div", 148)(252, "h5", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](253, "i", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](254);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](255, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "div", 151)(257, "div", 158)(258, "div", 65)(259, "div", 159)(260, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](261, "i", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](262, "div", 162)(263, "div", 163)(264, "h5", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](265);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](266, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](267, "p", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](268);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](269, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "div", 166)(271, "ul", 167)(272, "li", 77)(273, "a", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](274, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](275, "li", 170)(276, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](277, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](278, "div", 93)(279, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](280);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](281, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](282, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](284, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](285, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](286, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](287);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](288, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](289, "div", 158)(290, "div", 65)(291, "div", 159)(292, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](293, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](294, "div", 162)(295, "div", 163)(296, "h5", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](297);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](298, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](299, "p", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](300);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](301, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](302, "div", 166)(303, "ul", 167)(304, "li", 77)(305, "a", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](306, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](307, "li", 170)(308, "a", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](309, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](310, "div", 93)(311, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](312);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](313, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](314, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](315);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](316, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](317, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](318, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](319);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](320, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](321, "div", 158)(322, "div", 65)(323, "div", 159)(324, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](325, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](326, "div", 162)(327, "div", 163)(328, "h5", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](329);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](330, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](331, "p", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](332);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](333, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](334, "div", 166)(335, "ul", 167)(336, "li", 77)(337, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](338, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](339, "li", 170)(340, "a", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](341, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](342, "div", 93)(343, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](344);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](345, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](346, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](347);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](348, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](349, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](350, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](351);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](352, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](353, "div", 158)(354, "div", 65)(355, "div", 159)(356, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](357, "i", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](358, "div", 162)(359, "div", 163)(360, "h5", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](361);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](362, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](363, "p", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](364);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](365, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](366, "div", 166)(367, "ul", 167)(368, "li", 77)(369, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](370, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](371, "li", 170)(372, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](373, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](374, "div", 93)(375, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](376);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](377, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](378, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](379);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](380, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](381, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](382, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](383);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](384, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](385, IndexComponent_ng_template_385_Template, 166, 0, "ng-template", null, 175, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](153, _c1, ctx.activetab === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](155, _c1, ctx.activetab === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](157, _c1, ctx.activetab === 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](159, _c1, ctx.activetab === 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](161, _c1, ctx.activetab === 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 63, "chat.profiledropdown.profile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 65, "chat.profiledropdown.setting"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 67, "chat.profiledropdown.logout"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.listLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](61, 69, "chat.profiledropdown.profile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 71, "chat.profiledropdown.setting"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](70, 73, "chat.profiledropdown.logout"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](74, ctx.activetab === 1 ? 74 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](75, ctx.activetab === 2 ? 75 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](76, ctx.activetab === 3 ? 76 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](77, ctx.activetab === 4 ? 77 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](78, ctx.activetab === 5 ? 78 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](100, ctx.userProfile ? 100 : 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](106, 75, ctx.userName));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](163, _c6, ctx.userStatus === "online", ctx.userStatus === "away"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](117, 77, "chat.chatpanelheader.search.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](138, 79, "chat.chatpanelheader.dropdown.viewprofile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](142, 81, "chat.chatpanelheader.dropdown.archive"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](146, 83, "chat.chatpanelheader.dropdown.muted"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](150, 85, "chat.chatpanelheader.dropdown.delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.emoji);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](171, ctx.showEmojiPicker ? 171 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](198, ctx.userProfile ? 198 : 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](202, 87, ctx.userName));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](166, _c6, ctx.userStatus === "online", ctx.userStatus === "away"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](206, 89, ctx.userStatus), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](211, 91, "chat.rightpanel.message"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](220, 93, "chat.rightpanel.about.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](225, 95, "chat.rightpanel.about.name.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](228, 97, ctx.userName));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](232, 99, "chat.rightpanel.about.email.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](235, 101, "chat.rightpanel.about.email.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](239, 103, "chat.rightpanel.about.time.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](242, 105, "chat.rightpanel.about.time.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](246, 107, "chat.rightpanel.about.location.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](249, 109, "chat.rightpanel.about.location.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](255, 111, "chat.rightpanel.attachedfile.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](266, 113, "chat.rightpanel.attachedfile.file1.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](269, 115, "chat.rightpanel.attachedfile.file1.size"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](281, 117, "chat.rightpanel.attachedfile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](284, 119, "chat.rightpanel.attachedfile.dropdown.another"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](288, 121, "chat.rightpanel.attachedfile.dropdown.delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](298, 123, "chat.rightpanel.attachedfile.file2.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](301, 125, "chat.rightpanel.attachedfile.file2.name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](313, 127, "chat.rightpanel.attachedfile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](316, 129, "chat.rightpanel.attachedfile.dropdown.another"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](320, 131, "chat.rightpanel.attachedfile.dropdown.delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](330, 133, "chat.rightpanel.attachedfile.file3.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](333, 135, "chat.rightpanel.attachedfile.file3.size"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](345, 137, "chat.rightpanel.attachedfile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](348, 139, "chat.rightpanel.attachedfile.dropdown.another"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](352, 141, "chat.rightpanel.attachedfile.dropdown.delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](362, 143, "chat.rightpanel.attachedfile.file4.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](365, 145, "chat.rightpanel.attachedfile.file4.size"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](377, 147, "chat.rightpanel.attachedfile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](380, 149, "chat.rightpanel.attachedfile.dropdown.another"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](384, 151, "chat.rightpanel.attachedfile.dropdown.delete"));
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAccordionDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAccordionItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAccordionHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAccordionCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapse, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _tabs_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent, _tabs_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__.ContactsComponent, _tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownMenu, simplebar_angular__WEBPACK_IMPORTED_MODULE_14__.SimplebarAngularComponent, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_15__.PickerComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselSlideDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2955:
/*!**********************************************************!*\
  !*** ./src/app/chat/tabs/contacts/contacts.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactsComponent: () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 6666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function ContactsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_9_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const modal_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r3.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18)(7, "form")(8, "div", 19)(9, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 19)(15, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 24)(21, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_9_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const modal_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r3.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "chat.tabs.contacts.modal.title"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, "chat.tabs.contacts.modal.form.email.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 11, "chat.tabs.contacts.modal.form.email.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 13, "chat.tabs.contacts.modal.form.message.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 15, "chat.tabs.contacts.modal.form.message.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 17, "chat.tabs.contacts.modal.form.button.close"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 19, "chat.tabs.contacts.modal.form.button.contact"));
  }
}
function ContactsComponent_For_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "div", 29)(2, "div", 30)(3, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 32)(7, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 35)(10, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, item_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, "chat.tabs.contacts.list.dropdown.item1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, "chat.tabs.contacts.list.dropdown.item2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, "chat.tabs.contacts.list.dropdown.item3"), " ");
  }
}
function ContactsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](4, ContactsComponent_For_20_For_5_Template, 22, 12, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](item_r7.contacts);
  }
}
/**
 * Tab-contacts component
 */
class ContactsComponent {
  constructor(modalService, translate) {
    this.modalService = modalService;
    this.translate = translate;
  }
  ngOnInit() {
    const sorted = _data__WEBPACK_IMPORTED_MODULE_0__.contacts.sort((a, b) => a.name > b.name ? 1 : -1);
    const grouped = sorted.reduce((groups, contact) => {
      const letter = this.translate.instant(contact.name).charAt(0);
      groups[letter] = groups[letter] || [];
      groups[letter].push(contact);
      return groups;
    }, {});
    // contacts list
    this.contactsList = Object.keys(grouped).map(key => ({
      key,
      contacts: grouped[key]
    }));
  }
  /**
   * Contacts modal open
   * @param content content
   */
  // tslint:disable-next-line: typedef
  openContactsModal(content) {
    this.modalService.open(content, {
      centered: true
    });
  }
  static #_ = this.ɵfac = function ContactsComponent_Factory(t) {
    return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContactsComponent,
    selectors: [["app-contacts"]],
    decls: 21,
    vars: 6,
    consts: [[1, "p-4"], [1, "user-chat-nav", "float-end"], ["ngbTooltip", "Add Contact"], ["type", "button", "data-toggle", "modal", "data-target", "#addContact-exampleModal", 1, "btn", "btn-link", "text-decoration-none", "text-muted", "font-size-18", "py-0", 3, "click"], [1, "ri-user-add-line"], [1, "mb-4"], ["content", ""], [1, "search-box", "chat-search-box"], [1, "input-group", "bg-light", "input-group-lg", "rounded-3"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", "text-muted", "pe-1", "ps-3"], [1, "ri-search-line", "search-icon", "font-size-18"], ["type", "text", 1, "form-control", "bg-light", 3, "placeholder"], ["data-simplebar", "", 1, "p-4", "chat-message-list", "chat-group-list"], [1, "modal-content"], [1, "modal-header"], ["id", "addContact-exampleModalLabel", 1, "modal-title", "font-size-16"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "mb-3"], ["for", "addcontactemail-input", 1, "form-label"], ["type", "email", "id", "addcontactemail-input", 1, "form-control", 3, "placeholder"], ["for", "addcontact-invitemessage-input", 1, "form-label"], ["id", "addcontact-invitemessage-input", "rows", "3", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], [1, "p-3", "fw-bold", "text-primary"], [1, "list-unstyled", "contact-list"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "font-size-14", "m-0"], ["ngbDropdown", "", 1, "dropdown"], ["href", "javascript: void(0);", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-muted", "dropdown-toggle"], [1, "ri-more-2-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "ri-share-line", "float-end", "text-muted"], [1, "ri-forbid-line", "float-end", "text-muted"], [1, "ri-delete-bin-line", "float-end", "text-muted"]],
    template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.openContactsModal(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ContactsComponent_ng_template_9_Template, 27, 21, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ngx-simplebar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](19, ContactsComponent_For_20_Template, 6, 1, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "chat.tabs.contacts.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 4, "chat.tabs.contacts.search.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.contactsList);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, simplebar_angular__WEBPACK_IMPORTED_MODULE_4__.SimplebarAngularComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6666:
/*!********************************************!*\
  !*** ./src/app/chat/tabs/contacts/data.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contacts: () => (/* binding */ contacts)
/* harmony export */ });
const contacts = [{
  id: 1,
  name: 'chat.tabs.contacts.list.A.name'
}, {
  id: 2,
  name: 'chat.tabs.contacts.list.A.name2'
}, {
  id: 3,
  name: 'chat.tabs.contacts.list.C.name'
}, {
  id: 4,
  name: 'chat.tabs.contacts.list.D.name'
}, {
  id: 5,
  name: 'chat.tabs.contacts.list.D.name2'
}, {
  id: 6,
  name: 'chat.tabs.contacts.list.I.name'
}, {
  id: 7,
  name: 'chat.tabs.contacts.list.J.name'
}, {
  id: 8,
  name: 'chat.tabs.contacts.list.J.name2'
}, {
  id: 9,
  name: 'chat.tabs.contacts.list.J.name3'
}, {
  id: 10,
  name: 'chat.tabs.contacts.list.M.name'
}, {
  id: 11,
  name: 'chat.tabs.contacts.list.M.name2'
}, {
  id: 12,
  name: 'chat.tabs.contacts.list.M.name3'
}, {
  id: 13,
  name: 'chat.tabs.contacts.list.O.name'
}, {
  id: 14,
  name: 'chat.tabs.contacts.list.P.name'
}, {
  id: 15,
  name: 'chat.tabs.contacts.list.P.name2'
}, {
  id: 16,
  name: 'chat.tabs.contacts.list.R.name'
}, {
  id: 17,
  name: 'chat.tabs.contacts.list.S.name'
}, {
  id: 18,
  name: 'chat.tabs.contacts.list.S.name2'
}, {
  id: 19,
  name: 'chat.tabs.contacts.list.S.name3'
}, {
  id: 20,
  name: 'chat.tabs.contacts.list.H.name'
}];


/***/ }),

/***/ 2657:
/*!********************************************************!*\
  !*** ./src/app/chat/tabs/profile/profile.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);




/**
 * Tabs-Profile component
 */
class ProfileComponent {
  constructor() {}
  ngOnInit() {
    const user = window.sessionStorage.getItem('currentUser');
    this.senderName = JSON.parse(user).username;
    this.senderProfile = 'assets/images/users/' + JSON.parse(user).profile;
  }
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 209,
    vars: 114,
    consts: [[1, "px-4", "pt-4"], [1, "user-chat-nav", "float-end"], ["ngbDropdown", "", 1, "dropdown"], ["href", "javascript: void(0);", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "font-size-18", "text-muted", "dropdown-toggle"], [1, "ri-more-2-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "mb-0"], [1, "text-center", "p-4", "border-bottom"], [1, "mb-4"], ["alt", "", 1, "rounded-circle", "avatar-lg", "img-thumbnail", 3, "src"], [1, "font-size-16", "mb-1", "text-truncate"], [1, "text-muted", "text-truncate", "mb-1"], [1, "ri-record-circle-fill", "font-size-10", "text-success", "me-1", "d-inline-block"], [1, "p-4", "user-profile-desc"], [1, "text-muted"], ["ngbAccordion", "", "activeIds", "about", 3, "closeOthers"], ["acc", "ngbAccordion"], ["ngbAccordionItem", "", "cardClass", "card shadow-none border mb-2", "id", "about", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", "", 1, "font-size-14", "m-0"], [1, "ri-user-2-line", "me-2", "align-middle", "d-inline-block"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], [1, "text-muted", "mb-1"], [1, "font-size-14"], [1, "mt-4"], [1, "font-size-14", "mb-0"], ["ngbAccordionItem", "", "cardClass", "card shadow-none border mb-2", "id", "file"], [1, "ri-attachment-line", "me-2", "align-middle", "d-inline-block"], [1, "card", "p-2", "border", "mb-2"], [1, "d-flex", "align-items-center"], [1, "avatar-sm", "me-3", "ms-0"], [1, "avatar-title", "bg-primary-subtle", "text-primary", "rounded", "font-size-20"], [1, "ri-file-text-fill"], [1, "flex-grow-1"], [1, "text-start"], [1, "font-size-14", "mb-1"], [1, "text-muted", "font-size-13", "mb-0"], [1, "ms-4", "me-0"], [1, "list-inline", "mb-0", "font-size-18"], [1, "list-inline-item"], ["href", "javascript:void(0);", 1, "text-muted", "px-1"], [1, "ri-download-2-line"], ["ngbDropdown", "", 1, "list-inline-item", "dropdown"], ["href", "javascript:void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "dropdown-toggle", "text-muted", "px-1"], [1, "ri-more-fill"], [1, "ri-image-fill"], ["href", "javascript: void(0);", "ngbDropdownToggle", "", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "text-muted", "px-1"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "text-muted", "px-1"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9)(21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-simplebar", 15)(31, "div", 16)(32, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17, 18)(37, "div", 19)(38, "div", 20)(39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23)(44, "div", 24)(45, "div")(46, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27)(53, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27)(60, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27)(67, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29)(74, "div", 20)(75, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23)(80, "div", 24)(81, "div", 31)(82, "div", 32)(83, "div", 33)(84, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 36)(87, "div", 37)(88, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 40)(95, "ul", 41)(96, "li", 42)(97, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 45)(100, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 5)(103, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 31)(114, "div", 32)(115, "div", 33)(116, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 36)(119, "div", 37)(120, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 40)(127, "ul", 41)(128, "li", 42)(129, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 45)(132, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 5)(135, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](144, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 31)(146, "div", 32)(147, "div", 33)(148, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 36)(151, "div", 37)(152, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](157, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 40)(159, "ul", 41)(160, "li", 42)(161, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 45)(164, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 5)(167, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](169, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](172, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](176, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 31)(178, "div", 32)(179, "div", 33)(180, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 36)(183, "div", 37)(184, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](186, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](189, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 40)(191, "ul", 41)(192, "li", 42)(193, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li", 45)(196, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 5)(199, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](201, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](204, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](208, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 40, "chat.tabs.profile.dropdown.edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 42, "chat.tabs.profile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 44, "chat.tabs.profile.dropdown.another"), "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 46, "chat.tabs.profile.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.senderProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 48, ctx.senderName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 50, "chat.tabs.profile.status"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 52, "chat.tabs.profile.message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 54, "chat.tabs.profile.about.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 56, "chat.tabs.profile.about.name.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 58, ctx.senderName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 60, "chat.tabs.profile.about.email.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 62, "chat.tabs.profile.about.email.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 64, "chat.tabs.profile.about.time.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 66, "chat.tabs.profile.about.time.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 68, "chat.tabs.profile.about.location.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 70, "chat.tabs.profile.about.location.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 72, "chat.tabs.profile.attachedfile.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 74, "chat.tabs.profile.attachedfile.file1.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 76, "chat.tabs.profile.attachedfile.file1.size"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 78, "chat.tabs.profile.attachedfile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 80, "chat.tabs.profile.attachedfile.dropdown.another"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 82, "chat.tabs.profile.attachedfile.dropdown.delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](122, 84, "chat.tabs.profile.attachedfile.file2.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](125, 86, "chat.tabs.profile.attachedfile.file2.size"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](137, 88, "chat.tabs.profile.attachedfile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](140, 90, "chat.tabs.profile.attachedfile.dropdown.another"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](144, 92, "chat.tabs.profile.attachedfile.dropdown.delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](154, 94, "chat.tabs.profile.attachedfile.file3.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](157, 96, "chat.tabs.profile.attachedfile.file3.size"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](169, 98, "chat.tabs.profile.attachedfile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](172, 100, "chat.tabs.profile.attachedfile.dropdown.another"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](176, 102, "chat.tabs.profile.attachedfile.dropdown.delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](186, 104, "chat.tabs.profile.attachedfile.file4.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](189, 106, "chat.tabs.profile.attachedfile.file4.size"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](201, 108, "chat.tabs.profile.attachedfile.dropdown.action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](204, 110, "chat.tabs.profile.attachedfile.dropdown.another"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](208, 112, "chat.tabs.profile.attachedfile.dropdown.delete"));
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionButton, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionBody, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionCollapse, simplebar_angular__WEBPACK_IMPORTED_MODULE_2__.SimplebarAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9476:
/*!**********************************************************!*\
  !*** ./src/app/chat/tabs/settings/settings.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 5939);





/**
 * Tabs-settings component
 */
class SettingsComponent {
  constructor() {}
  ngOnInit() {
    const user = window.sessionStorage.getItem('currentUser');
    this.senderName = JSON.parse(user).username;
    this.playerName = JSON.parse(user).username;
    this.senderProfile = 'assets/images/users/' + JSON.parse(user).profile;
  }
  fileChange(event) {
    let fileList = event.target;
    let file = fileList.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
      document.querySelectorAll('#user_profile').forEach(element => {
        element.src = this.imageURL;
      });
    };
    reader.readAsDataURL(file);
  }
  // User Name Update
  edit_userName() {
    this.playerName = this.senderName;
    document.getElementById("user_name").classList.toggle("visually-hidden");
    document.getElementById("user_name_edit").classList.toggle("visually-hidden");
    document.getElementById("edit-user-name").classList.toggle("visually-hidden");
  }
  // User Name Update
  userNameChange() {
    this.senderName = this.playerName;
    document.getElementById("user_name").classList.toggle("visually-hidden");
    document.getElementById("edit-user-name").classList.toggle("visually-hidden");
    document.getElementById("user_name_edit").classList.toggle("visually-hidden");
  }
  static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
    return new (t || SettingsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    decls: 207,
    vars: 121,
    consts: [[1, "px-4", "pt-4"], [1, "mb-0"], [1, "text-center", "border-bottom", "p-4"], [1, "mb-4", "profile-user"], ["alt", "", "id", "user_profile", 1, "rounded-circle", "avatar-lg", "img-thumbnail", 3, "src"], ["id", "profile-img-file-input", "type", "file", 1, "profile-img-file-input", "d-none", 3, "change"], ["for", "profile-img-file-input", 1, "profile-photo-edit", "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-light", "text-body"], [1, "ri-pencil-fill"], [1, "font-size-16", "mb-1", "text-truncate"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "mb-1"], ["href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "text-muted", "dropdown-toggle", "pb-1", "d-block"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["data-simplebar", "", 1, "p-4", "user-profile-desc"], ["ngbAccordion", "", "activeIds", "perfonal-info", 3, "closeOthers"], ["acc", "ngbAccordion"], ["ngbAccordionItem", "", "cardClass", "card shadow-none border mb-2", "id", "perfonal-info", 3, "collapsed"], ["ngbAccordionHeader", ""], [1, "font-size-14", "m-0"], ["ngbAccordionButton", ""], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], [1, "float-end"], ["type", "button", "id", "user_name_edit", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "ri-edit-fill", "me-1", "ms-0", "align-middle"], [1, "text-muted", "mb-1"], ["id", "user_name", 1, "font-size-14"], ["id", "edit-user-name", 1, "visually-hidden", "d-flex", "justify-content-between"], ["type", "text", "maxlength", "20", 1, "form-control", "bg-soft-light", "border-light", 3, "ngModel", "ngModelChange"], [1, "float-right"], ["type", "submit", "id", "receiverSave", 1, "btn", "btn-primary", "btn-block", "waves-effect", "waves-light", 2, "display", "block", 3, "click"], [1, "mt-4"], [1, "font-size-14"], ["ngbAccordionItem", "", "cardClass", "card shadow-none border mb-2", "id", "privacy"], [1, "py-3"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1", "overflow-hidden"], [1, "font-size-13", "mb-0", "text-truncate"], ["ngbDropdown", "", 1, "dropdown", "ms-2", "me-0"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-light", "btn-sm", "dropdown-toggle", "w-sm"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "py-3", "border-top"], [1, "ms-2", "me-0"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "privacy-lastseenSwitch", "checked", "", 1, "form-check-input"], ["for", "privacy-lastseenSwitch", 1, "form-check-label"], ["type", "checkbox", "id", "privacy-readreceiptSwitch", "checked", "", 1, "form-check-input"], ["for", "privacy-readreceiptSwitch", 1, "form-check-label"], ["ngbDropdownToggle", "", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "dropdown-toggle", "w-sm"], ["ngbAccordionItem", "", "cardClass", "card shadow-none border mb-2", "id", "security"], ["type", "checkbox", "id", "security-notificationswitch", 1, "form-check-input"], ["for", "security-notificationswitch", 1, "form-check-label"], ["ngbAccordionItem", "", "cardClass", "card shadow-none border mb-2", "id", "help"], [1, "font-size-13", "mb-0"], ["href", "javascript:void(0);", 1, "text-body", "d-block"]],
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_Template_input_change_8_listener($event) {
          return ctx.fileChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13)(21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-simplebar", 15)(28, "div", 16, 17)(30, "div", 18)(31, "div", 19)(32, "h5", 20)(33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22)(37, "div", 23)(38, "div", 24)(39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_39_listener() {
          return ctx.edit_userName();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div")(44, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29)(51, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_51_listener($event) {
          return ctx.playerName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31)(53, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_53_listener() {
          return ctx.userNameChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33)(56, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33)(63, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33)(70, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35)(77, "div", 19)(78, "h5", 20)(79, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 22)(83, "div", 23)(84, "div", 36)(85, "div", 37)(86, "div", 38)(87, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 40)(91, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 42)(96, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 43)(106, "div", 37)(107, "div", 38)(108, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 44)(112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 46)(114, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 43)(116, "div", 37)(117, "div", 38)(118, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 40)(122, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 42)(127, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 43)(137, "div", 37)(138, "div", 38)(139, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 44)(143, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 48)(145, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 43)(147, "div", 37)(148, "div", 38)(149, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 40)(153, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 42)(158, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](166, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 51)(168, "div", 19)(169, "h5", 20)(170, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](172, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 22)(174, "div", 23)(175, "div", 37)(176, "div", 38)(177, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](179, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 44)(181, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 52)(183, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 54)(185, "div", 19)(186, "h5", 20)(187, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](189, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 22)(191, "div", 23)(192, "div", 36)(193, "h5", 55)(194, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](196, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 43)(198, "h5", 55)(199, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](201, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 43)(203, "h5", 55)(204, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](206, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 43, "chat.tabs.settings.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.senderProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 45, ctx.senderName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 47, "chat.tabs.settings.status.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 49, "chat.tabs.settings.status.dropdown.available"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 51, "chat.tabs.settings.status.dropdown.busy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 53, "chat.tabs.settings.info.title"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 55, "chat.tabs.settings.info.edit"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 57, "chat.tabs.settings.info.name.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 59, ctx.senderName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 61, "chat.tabs.settings.info.email.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 63, "chat.tabs.settings.info.email.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 65, "chat.tabs.settings.info.time.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 67, "chat.tabs.settings.info.time.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 69, "chat.tabs.settings.info.location.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 71, "chat.tabs.settings.info.location.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 73, "chat.tabs.settings.privacy.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 75, "chat.tabs.settings.privacy.photo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 77, "chat.tabs.settings.privacy.dropdowntext"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 79, "chat.tabs.settings.privacy.dropdown.everyone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 81, "chat.tabs.settings.privacy.dropdown.selected"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 83, "chat.tabs.settings.privacy.dropdown.nobody"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 85, "chat.tabs.settings.privacy.seen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 87, "chat.tabs.settings.privacy.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](124, 89, "chat.tabs.settings.privacy.dropdowntext"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](129, 91, "chat.tabs.settings.privacy.dropdown.everyone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](132, 93, "chat.tabs.settings.privacy.dropdown.selected"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](135, 95, "chat.tabs.settings.privacy.dropdown.nobody"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](141, 97, "chat.tabs.settings.privacy.receipt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](151, 99, "chat.tabs.settings.privacy.groups"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](155, 101, "chat.tabs.settings.privacy.dropdowntext"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](160, 103, "chat.tabs.settings.privacy.dropdown.everyone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](163, 105, "chat.tabs.settings.privacy.dropdown.selected"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](166, 107, "chat.tabs.settings.privacy.dropdown.nobody"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](172, 109, "chat.tabs.settings.security.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](179, 111, "chat.tabs.settings.security.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](189, 113, "chat.tabs.settings.help.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](196, 115, "chat.tabs.settings.help.faqs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](201, 117, "chat.tabs.settings.help.contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](206, 119, "chat.tabs.settings.help.policy"));
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionButton, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionBody, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordionCollapse, simplebar_angular__WEBPACK_IMPORTED_MODULE_2__.SimplebarAngularComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9653:
/*!******************************************!*\
  !*** ./src/app/chat/tabs/tabs.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsModule: () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 2657);
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts/contacts.component */ 2955);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ 9476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);










class TabsModule {
  static #_ = this.ɵfac = function TabsModule_Factory(t) {
    return new (t || TabsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TabsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_7__.SimplebarAngularModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapseModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TabsModule, {
    declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent],
    imports: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_7__.SimplebarAngularModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapseModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule],
    exports: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent]
  });
})();

/***/ }),

/***/ 8036:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 304);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authfake.service */ 9634);





class AuthGuard {
  constructor(router, authenticationService, authFackservice) {
    this.router = router;
    this.authenticationService = authenticationService;
    this.authFackservice = authFackservice;
  }
  canActivate(route, state) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
      const currentUser = this.authenticationService.currentUser();
      if (currentUser && currentUser.profile) {
        // logged in so return true
        return true;
      }
    } else {
      const currentUser = this.authFackservice.currentUserValue;
      if (currentUser && currentUser.profile) {
        // logged in so return true
        return true;
      }
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/account/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2121:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 304);




class ErrorInterceptor {
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        location.reload();
      }
      const error = err.error.message || err.statusText;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function ErrorInterceptor_Factory(t) {
    return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ErrorInterceptor,
    factory: ErrorInterceptor.ɵfac
  });
}

/***/ }),

/***/ 3709:
/*!**********************************************!*\
  !*** ./src/app/core/helpers/fake-backend.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FakeBackendInterceptor: () => (/* binding */ FakeBackendInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9593);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);




class FakeBackendInterceptor {
  constructor() {}
  intercept(request, next) {
    // array in local storage for registered users
    // tslint:disable-next-line: max-line-length
    const users = JSON.parse(sessionStorage.getItem('users')) || [{
      username: 'admin',
      email: 'chatvia@themesbrand.com',
      password: '123456',
      profile: 'avatar-1.jpg'
    }];
    // wrap in delayed observable to simulate server api call
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
      // authenticate
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        const filteredUsers = users.filter(user => {
          return user.email === request.body.email && user.password === request.body.password;
        });
        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = filteredUsers[0];
          const body = {
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token',
            profile: user.profile
          };
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
            status: 200,
            body
          }));
        } else {
          // else return 400 bad request
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            error: {
              message: 'Username or password is incorrect'
            }
          });
        }
      }
      // get users
      if (request.url.endsWith('/users') && request.method === 'GET') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
            status: 200,
            body: users
          }));
        } else {
          // return 401 not authorised if token is null or invalid
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // get user by id
      if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          // tslint:disable-next-line: radix
          const id = parseInt(urlParts[urlParts.length - 1]);
          // tslint:disable-next-line: no-shadowed-variable
          const matchedUsers = users.filter(user => user.id === id);
          const user = matchedUsers.length ? matchedUsers[0] : null;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
            status: 200,
            body: user
          }));
        } else {
          // return 401 not authorised if token is null or invalid
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // register user
      if (request.url.endsWith('/users/register') && request.method === 'POST') {
        // get new user object from post body
        const newUser = request.body;
        // validation
        const duplicateUser = users.filter(user => user.username === newUser.username).length;
        if (duplicateUser) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            error: {
              message: 'Username "' + newUser.username + '" is already taken'
            }
          });
        }
        // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        sessionStorage.setItem('users', JSON.stringify(users));
        // respond 200 OK
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
          status: 200
        }));
      }
      // delete user
      if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          // tslint:disable-next-line: radix
          const id = parseInt(urlParts[urlParts.length - 1]);
          for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.id === id) {
              // delete user
              users.splice(i, 1);
              sessionStorage.setItem('users', JSON.stringify(users));
              break;
            }
          }
          // respond 200 OK
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
            status: 200
          }));
        } else {
          // return 401 not authorised if token is null or invalid
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // pass through any requests not handled above
      return next.handle(request);
    }))
    // tslint:disable-next-line: max-line-length
    // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.materialize)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(500)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.dematerialize)());
  }
  static #_ = this.ɵfac = function FakeBackendInterceptor_Factory(t) {
    return new (t || FakeBackendInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: FakeBackendInterceptor,
    factory: FakeBackendInterceptor.ɵfac
  });
}

/***/ }),

/***/ 5562:
/*!*************************************************!*\
  !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 304);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authfake.service */ 9634);




class JwtInterceptor {
  constructor(authenticationService, authfackservice) {
    this.authenticationService = authenticationService;
    this.authfackservice = authfackservice;
  }
  intercept(request, next) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
      const currentUser = this.authenticationService.currentUser();
      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`
          }
        });
      }
    } else {
      // add authorization header with jwt token if available
      const currentUser = this.authfackservice.currentUserValue;
      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`
          }
        });
      }
    }
    return next.handle(request);
  }
  static #_ = this.ɵfac = function JwtInterceptor_Factory(t) {
    return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: JwtInterceptor,
    factory: JwtInterceptor.ɵfac
  });
}

/***/ }),

/***/ 304:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authUtils */ 81);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AuthenticationService {
  constructor() {}
  /**
   * Returns the current user
   */
  currentUser() {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().getAuthenticatedUser();
  }
  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email, password) {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().loginUser(email, password).then(response => {
      const user = response;
      return user;
    });
  }
  /**
   * Performs the register
   * @param email email
   * @param password password
   */
  register(email, password) {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().registerUser(email, password).then(response => {
      const user = response;
      return user;
    });
  }
  /**
   * Reset password
   * @param email email
   */
  resetPassword(email) {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().forgetPassword(email).then(response => {
      const message = response.data;
      return message;
    });
  }
  /**
   * Logout the user
   */
  logout() {
    // logout the user
    (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().logout();
  }
  static #_ = this.ɵfac = function AuthenticationService_Factory(t) {
    return new (t || AuthenticationService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthenticationService,
    factory: AuthenticationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9634:
/*!***************************************************!*\
  !*** ./src/app/core/services/authfake.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthfakeauthenticationService: () => (/* binding */ AuthfakeauthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);




class AuthfakeauthenticationService {
  constructor(http) {
    this.http = http;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  login(email, password) {
    return this.http.post(`/users/authenticate`, {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }));
  }
  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  static #_ = this.ɵfac = function AuthfakeauthenticationService_Factory(t) {
    return new (t || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthfakeauthenticationService,
    factory: AuthfakeauthenticationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  defaultauth: 'fackbackend',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map