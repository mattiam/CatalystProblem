(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Person.ts":
/*!***************************!*\
  !*** ./src/app/Person.ts ***!
  \***************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1> \n\n<app-people></app-people>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'People Manager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\nbody {\n    margin: 2em;\n  }\nbody, input[text], button {\n    color: crimson;\n    font-family: Cambria, Georgia;\n  }\nbutton.clear {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n  }\nbutton:hover {\n    background-color: #cfd8dc;\n  }\nbutton:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto;\n  }\nbutton.clear {\n    color: #888;\n    margin-bottom: 12px;\n  }"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n    <h2>Log</h2>\n    <button class=\"clear\"\n            (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n  </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n    padding-bottom: 20px;\n}\n\n.hand {\n    cursor: pointer;\n}\n\n.errorBorder {\n    border:2px solid red;\n}\n\n.avatar {\n    max-width:50px;\n    max-height:75px;\n}"

/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"searchParam\">Search People By Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"searchParam\"\n    [(ngModel)]=\"searchParam\" name=\"searchParam\"\n    #name=\"ngModel\"\n    required />\n  </div>\n  <button type=\"submit\" class=\"btn btn-success\" (click)=\"getPeople()\">\n    Search\n  </button> | \n  <button class=\"btn btn-success\" (click)=\"displayNewPerson()\">\n    Add Person\n  </button>\n</form>\n\n<h4 *ngIf=\"searching\">\n  Currently searching... we've been searching for {{searchTime}} seconds\n  <span *ngIf=\"searchTime > 3\"><br />Maybe you should get a drink.  This is taking longer than expected...</span>\n</h4>\n\n<h4 *ngIf=\"!searching && people.length <= 0\">\n  No one found with that name.\n</h4>\n\n<table class=\"table\" *ngIf=\"people && people.length > 0\">\n  <thead>\n    <tr>\n      <th>Avatar</th>\n      <th>Name</th>\n      <th>Address</th>\n      <th>Age</th>\n      <th>Interests</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr  *ngFor=\"let person of people\">\n      <td>\n        <img class=\"avatar\" [src]=\"person.avatarUrl\" onError=\"this.src='Content/images/default-avatar.png'\" title=\"{{person.firstName}}'s avatar\" />\n      </td>\n      <td>{{person.lastName}}, {{person.firstName}}</td>\n      <td>{{person.address}}</td>\n      <td>{{person.age}}</td>\n      <td>{{person.interests}}</td>\n      <td>\n        <span class=\"glyphicon glyphicon-edit hand\" [class.selectedPerson]=\"person === selectedPerson\" (click)=\"selectPerson(person)\"></span> | \n        <span class=\"glyphicon glyphicon-remove-sign hand\" (click)=\"deletePerson(person.personId)\"></span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div *ngIf=\"selectedPerson\">\n<h4>\n  <span *ngIf=\"selectedPerson.personId > 0\">Edit</span> \n  <span *ngIf=\"!selectedPerson.personId\">Add</span>\n  {{selectedPerson.firstName}} <span (click)=\"deselectPerson()\" class=\"btn btn-outline-danger btn-sm\">(close editor)</span>\n</h4>\n\n    <form #personForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\"\n          class=\"form-control\"\n          id=\"firstName\"\n          required minlength=\"1\" \n          [(ngModel)]=\"selectedPerson.firstName\" name=\"firstName\"\n          [ngClass]=\"{'errorBorder': !isValid(selectedPerson.firstName)}\">\n        </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\"\n        class=\"form-control\"\n        id=\"lastName\"\n        required minlength=\"1\" \n        [(ngModel)]=\"selectedPerson.lastName\" name=\"lastName\"\n        [ngClass]=\"{'errorBorder': !isValid(selectedPerson.lastName)}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"address\">Address</label>\n        <input type=\"text\"\n        class=\"form-control\"\n        id=\"address\"\n        required\n        [(ngModel)]=\"selectedPerson.address\" name=\"address\"\n        [ngClass]=\"{'errorBorder': !isValid(selectedPerson.address)}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"age\">Age</label>\n        <input type=\"number\"\n        class=\"form-control\"\n        id=\"age\"\n        required\n        [(ngModel)]=\"selectedPerson.age\" name=\"age\"\n        [ngClass]=\"{'errorBorder': selectedPerson.age <= 0}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"interests\">Interests</label>\n        <textarea class=\"form-control\"\n        cols=\"40\"\n        rows=\"5\"\n        id=\"interests\"\n        [(ngModel)]=\"selectedPerson.interests\" name=\"interests\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"avatarUrl\">Avatar Url</label>\n        <input type=\"text\"\n        class=\"form-control\"\n        id=\"avatarUrl\"\n        required\n        [(ngModel)]=\"selectedPerson.avatarUrl\" name=\"avatarUrl\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"editPerson()\">Submit Change</button>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Person */ "./src/app/Person.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(personService) {
        this.personService = personService;
    }
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        this.people = [];
        this.searching = true;
        var subscription = this.personService.getPeople(this.searchParam)
            .subscribe(function (people) { return _this.populatePeople(people); }, function (error) { return console.log('Error: ', error); }, function () { return _this.finishedPopulatingPeople(); });
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000);
        this.timerSubscription = source.subscribe(function (t) { return _this.searchTime = t; });
    };
    PeopleComponent.prototype.populatePeople = function (people) {
        this.people = people;
    };
    PeopleComponent.prototype.finishedPopulatingPeople = function () {
        this.searching = false;
        this.searchTime = 0;
        this.timerSubscription.unsubscribe();
    };
    PeopleComponent.prototype.selectPerson = function (person) {
        this.selectedPerson = person;
    };
    PeopleComponent.prototype.deselectPerson = function () {
        this.selectedPerson = undefined;
    };
    PeopleComponent.prototype.editPerson = function () {
        var _this = this;
        if (this.selectedPerson.firstName && this.selectedPerson.lastName && this.selectedPerson.address && this.selectedPerson.age) {
            if (!this.selectedPerson.personId) {
                var subscription = this.personService.addPerson(this.selectedPerson)
                    .subscribe(function (x) { return _this.finishAddingPerson(x); });
            }
            else {
                var subscription = this.personService.editPerson(this.selectedPerson)
                    .subscribe(function () { return _this.deselectPerson(); });
            }
        }
    };
    PeopleComponent.prototype.finishAddingPerson = function (personId) {
        this.selectedPerson.personId = personId;
        this.people.push(this.selectedPerson);
        this.deselectPerson();
    };
    PeopleComponent.prototype.displayNewPerson = function () {
        this.selectedPerson = new _Person__WEBPACK_IMPORTED_MODULE_2__["Person"]();
    };
    PeopleComponent.prototype.deletePerson = function (personId) {
        var _this = this;
        var subscription = this.personService.deletePerson(personId)
            .subscribe(function () { return _this.getPeople(); });
    };
    PeopleComponent.prototype.isValid = function (str) {
        return str === undefined || str.length > 0;
    };
    PeopleComponent.prototype.ngOnInit = function () {
        this.searchParam = '';
        this.people = [];
        this.searching = false;
        this.searchTime = 0;
        this.getPeople();
    };
    PeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/person.service.ts":
/*!***********************************!*\
  !*** ./src/app/person.service.ts ***!
  \***********************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonService = /** @class */ (function () {
    function PersonService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.personUrl = 'api/people';
    }
    PersonService.prototype.getPeople = function (searchParam) {
        var _this = this;
        var url = this.personUrl + "?searchParam=" + searchParam;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("searched for '" + searchParam + "'"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPeople', [])));
    };
    PersonService.prototype.getPerson = function (personId) {
        var _this = this;
        var url = this.personUrl + "/" + personId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getting person with id '" + personId + "'"); }));
    };
    PersonService.prototype.editPerson = function (person) {
        var _this = this;
        var url = this.personUrl + "/" + person.personId;
        return this.http.put(url, person).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("editing person with id '" + person.personId + "'"); }));
    };
    PersonService.prototype.addPerson = function (person) {
        var _this = this;
        var url = "" + this.personUrl;
        return this.http.post(url, person).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("adding person"); }));
    };
    PersonService.prototype.deletePerson = function (personId) {
        var _this = this;
        var url = this.personUrl + "/" + personId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleting person with id '" + personId + "'"); }));
    };
    PersonService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    PersonService.prototype.log = function (message) {
        this.messageService.add(message);
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], PersonService);
    return PersonService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\CatalystProblem\CatalystProblem\AngularClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map