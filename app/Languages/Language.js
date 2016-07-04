System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Language;
    return {
        setters:[],
        execute: function() {
            Language = (function () {
                function Language(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Language;
            }());
            exports_1("Language", Language);
        }
    }
});
//# sourceMappingURL=language.js.map