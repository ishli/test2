"use strict";
var Language = (function () {
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
exports.Language = Language;
//# sourceMappingURL=language.js.map