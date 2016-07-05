System.register(['@angular/core', '@angular/http', './Languages/Language.service', './Languages/Languages.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Language_service_1, Languages_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Language_service_1_1) {
                Language_service_1 = Language_service_1_1;
            },
            function (Languages_component_1_1) {
                Languages_component_1 = Languages_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_languageService) {
                    this._languageService = _languageService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._languageService.getLanguages().subscribe(function (languages) { return _this.languages = languages; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        templateUrl: './app/app.component.html',
                        directives: [Languages_component_1.LanguagesComponent],
                        providers: [Language_service_1.LanguageService,
                            http_1.HTTP_PROVIDERS],
                    }), 
                    __metadata('design:paramtypes', [Language_service_1.LanguageService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map