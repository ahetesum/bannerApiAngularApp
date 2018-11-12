import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {
  public items=[];

  constructor(private _bannerService:BannerService) { }


  ngOnInit() {
    this._bannerService.getBanners().subscribe(data =>this.items=data);
  }


}
