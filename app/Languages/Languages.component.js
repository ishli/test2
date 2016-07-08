"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LanguagesComponent = (function () {
    function LanguagesComponent() {
        this.selected = new core_1.EventEmitter();
    }
    LanguagesComponent.prototype.onSelectRow = function (input, input2) {
        var temp = +input2.innerText;
        this.selected.emit(temp);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LanguagesComponent.prototype, "languages", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LanguagesComponent.prototype, "selected", void 0);
    LanguagesComponent = __decorate([
        core_1.Component({
            selector: 'lang-comp',
            templateUrl: 'app/Languages/Languages.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], LanguagesComponent);
    return LanguagesComponent;
}());
exports.LanguagesComponent = LanguagesComponent;
//# sourceMappingURL=Languages.component.js.map