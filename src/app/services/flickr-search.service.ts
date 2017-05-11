import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Photo }  from './photo';

@Injectable()

export class FlickrSearchService {



  constructor(public http: Http) { }

  searchPhoto(pUrl: string): Observable<Photo[]>{
        var url = pUrl;
        return this.http.get(url).map(res => res.json());
    }

}
