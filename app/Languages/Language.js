System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Language;
    return {
        setters:[],
        execute: function() {
            Language = (function () {
                function Language(Id, Name, EnglishName, Culture, EntryState, FlowDirection) {
                    this.Id = Id;
                    this.Name = Name;
                    this.EnglishName = EnglishName;
                    this.Culture = Culture;
                    this.EntryState = EntryState;
                    this.FlowDirection = FlowDirection;
                }
                return Language;
            }());
            exports_1("Language", Language);
        }
    }
});
//# sourceMappingURL=language.js.map