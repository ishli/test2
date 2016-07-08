import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Language } from './language';


@Component({
    selector: 'lang-comp',
    templateUrl: 'app/Languages/Languages.component.html',

})

export class LanguagesComponent{
    @Input() languages : Language[];
    @Output() selected = new EventEmitter();

    onSelectRow(input: any, input2: any)
    {
        let temp = +input2.innerText;
        this.selected.emit(temp);
    }
}