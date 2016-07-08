import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { LanguageTranslation } from './Language-translation';

@Component({
    selector: 'lang-transl',
    templateUrl: 'app/Languages/Language-translation.component.html'

})
export class LanguagesTranslationComponent{
    @Input() languageTranslations : LanguageTranslation[];
   
}
