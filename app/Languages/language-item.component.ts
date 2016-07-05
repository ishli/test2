import { Component, Input }  from '@angular/core';
import { Language } from './language';

@Component({
    selector: 'lang-item',
    templateUrl: 'app/Languages/language-item.component.html'
})
export class LanguageItem{
    @Input() lang: Language;
}