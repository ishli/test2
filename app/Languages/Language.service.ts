import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,RequestMethod,URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { LanguageTranslation } from './Language-translation';
import { Language } from './language';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LanguageService{
    private _languagleUrl = 'http://localhost:58585/RS/LanguagesData';
    private _languagleTranslationUrl = 'http://localhost:58585/RS/GetLanguageTranslations';

    constructor(private _http: Http){}

    getLanguages(): Observable<LanguageTranslation[]>{

        let options = new RequestOptions({
            method: RequestMethod.Post,
            withCredentials: true
        }) 
        return this._http.get(this._languagleUrl, options)
        .map((response : Response) => <LanguageTranslation[]>response.json())
        //.do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);

    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getLanguageTranslations(id: number): Observable<Language[]>{
        console.log("service " + id);

        let searchParams = new URLSearchParams();
        searchParams.set('id',id.toString());

        let options = new RequestOptions({
            method: RequestMethod.Post,
            withCredentials: true,
            search: searchParams
        });

        return this._http.get(this._languagleTranslationUrl, options)
        .map((response : Response) => <Language[]>response.json())
        //.do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);

    }
}
