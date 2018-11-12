import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { IBanner } from '../models/banner';

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

  deleteEmp(banner: IBanner): void {  
    this._bannerService.deleteBanner(banner.Id)  
      .subscribe(data => {  
        this.items = this.items.filter(u => u !== banner);  
      })  
  }

}
