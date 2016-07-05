import { Component, OnInit } from '@angular/core';
import { Language } from './Languages/language';
import { HTTP_PROVIDERS } from '@angular/http';
import {LanguageService} from './Languages/Language.service';
import { LanguagesComponent} from './Languages/Languages.component';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html',
    directives: [LanguagesComponent],
      providers: [LanguageService,
                HTTP_PROVIDERS],
                
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