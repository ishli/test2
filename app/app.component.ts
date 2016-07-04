import { Component, OnInit } from '@angular/core';
import { Language } from './Languages/language';
import { HTTP_PROVIDERS } from '@angular/http';
import {LanguageService} from './Languages/Language.service';


@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html',
      providers: [LanguageService,
                HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    languages: Language[]; 
errorMessage: string;
    constructor(private _languageService: LanguageService){

    }

    ngOnInit(): void{
        this._languageService.getLanguages().subscribe(
            languages => this.languages = languages,
            error => this.errorMessage = <any>error);
        )

   
    }
}