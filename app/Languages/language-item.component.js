System.register(['@angular/core', './language'], function(exports_1, context_1) {
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
    var core_1, language_1;
    var LanguageItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (language_1_1) {
                language_1 = language_1_1;
            }],
        execute: function() {
            LanguageItem = (function () {
                function LanguageItem() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', language_1.Language)
                ], LanguageItem.prototype, "lang", void 0);
                LanguageItem = __decorate([
                    core_1.Component({
                        selector: 'lang-item',
                        templateUrl: 'app/Languages/language-item.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LanguageItem);
                return LanguageItem;
            }());
            exports_1("LanguageItem", LanguageItem);
        }
    }
});
//# sourceMappingURL=language-item.component.js.map