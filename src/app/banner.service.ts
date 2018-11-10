import { Injectable } from '@angular/core';
import { IBanner } from './models/banner';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private _url:string = "https://localhost:44385/api/banner"

  constructor(private http:HttpClient) { }

  getBanners(): Observable<IBanner[]>
  {
    return this.http.get<IBanner[]>(this._url);
  }
}
