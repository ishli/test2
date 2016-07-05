import { Component, Input }  from '@angular/core';
import { Language } from './language';
import { LanguageItem } from './language-item.component';

@Component({
    selector: 'lang-comp',
    templateUrl: 'app/Languages/Languages.component.html',
directives: [LanguageItem]
})

export class LanguagesComponent{
    @Input() languages : Language[];
    
}