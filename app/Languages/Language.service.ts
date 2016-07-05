import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Language } from './language';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LanguageService{
    private _languagleUrl = 'http://localhost:58585/RS/LanguagesData';

    constructor(private _http: Http){}

    getLanguages(): Observable<Language[]>{

        let options = new RequestOptions({
            method: RequestMethod.Post,
            withCredentials: true
        }) 
        return this._http.get(this._languagleUrl, options)
        .map((response : Response) => <Language[]>response.json())
        //.do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);

    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}