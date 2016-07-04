import { Component }  from '@angular/core';
import { Language } from './language';
@Component({
    selector: 'lang-list',
    templateUrl: 'app/Languages/Languages.component.html',

})

export class LanguagesComponent{
    languages = [
        new Language(1,'11'),
        new Language(2, '22')
    ];
}