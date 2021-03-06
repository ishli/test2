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
var http_1 = require('@angular/http');
var Language_service_1 = require('./Languages/Language.service');
var Languages_component_1 = require('./Languages/Languages.component');
var Language_translation_component_1 = require('./Languages/Language-translation.component');
var AppComponent = (function () {
    function AppComponent(_languageService) {
        this._languageService = _languageService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._languageService.getLanguages().subscribe(function (languages) { return _this.languages = languages; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onItemSelected = function (id) {
        var _this = this;
        console.log(id);
        this._languageService.getLanguageTranslations(id).subscribe(function (langTrans) { return _this.languageTranslations = langTrans; }, function (error) { return _this.errorMessage = error; });
        this.langId = id;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            templateUrl: './app/app.component.html',
            directives: [Languages_component_1.LanguagesComponent, Language_translation_component_1.LanguagesTranslationComponent],
            providers: [Language_service_1.LanguageService,
                http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [Language_service_1.LanguageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map