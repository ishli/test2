System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LanguageTranslation;
    return {
        setters:[],
        execute: function() {
            LanguageTranslation = (function () {
                function LanguageTranslation(Id, Culture, Translation) {
                    this.Id = Id;
                    this.Culture = Culture;
                    this.Translation = Translation;
                }
                return LanguageTranslation;
            }());
            exports_1("LanguageTranslation", LanguageTranslation);
        }
    }
});
//# sourceMappingURL=Language-translation.js.map