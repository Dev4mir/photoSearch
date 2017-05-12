import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Photo }  from './photo';

@Injectable()

export class FlickrSearchService {

  constructor(public http: Http) { }

  searchPhoto(pUrl: string): Observable<Photo[]>{
        
        return this.http.get(pUrl).map(res => res.json());
    }

}
