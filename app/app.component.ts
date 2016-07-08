import { Component, OnInit } from '@angular/core';
import { Language } from './Languages/language';
import { HTTP_PROVIDERS } from '@angular/http';
import {LanguageService} from './Languages/Language.service';
import { LanguagesComponent} from './Languages/Languages.component';
import { LanguageTranslation } from './Languages/Language-translation';
import { LanguagesTranslationComponent } from './Languages/Language-translation.component';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html',
    directives: [LanguagesComponent,LanguagesTranslationComponent],
      providers: [LanguageService,
                HTTP_PROVIDERS]
                
})

export class AppComponent implements OnInit {
    languages: Language[]; 
    languageTranslations: LanguageTranslation[]; 
    errorMessage: string;
    langId: number;

    constructor(private _languageService: LanguageService){

    }

    ngOnInit(): void{
        this._languageService.getLanguages().subscribe(
            languages => this.languages = languages,
            error => this.errorMessage = <any>error);
        
    }

    onItemSelected(id: number)
    {
        console.log(id);
        this._languageService.getLanguageTranslations(id).subscribe(
            langTrans => this.languageTranslations = langTrans,
            error => this.errorMessage = <any>error);
        
        this.langId= id;
    }
}