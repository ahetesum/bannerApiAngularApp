import { Injectable } from '@angular/core';
import { IBanner } from './models/banner';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
    //TODO:: Change the url after hosting the app
    //private _url:string = "https://localhost:44385/api/banner"
  private _url:string = "assets/data/banner.json"

  constructor(private http:HttpClient) {

   }

  getBanners(): Observable<IBanner[]>
  {
    return this.http.get<IBanner[]>(this._url);
  }

  deleteBanner(id: string) {  
    return this.http.delete<IBanner>(this._url + id);  
  }  
  createUser(banner: IBanner) {  
    return this.http.post(this._url, banner);  
  }  

  updateEmployee(banner: IBanner) {  
    return this.http.put(this._url + '/' + banner.Id, banner);  
  } 

}
