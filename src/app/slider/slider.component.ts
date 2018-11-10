import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public items=[];

  constructor(private _bannerService:BannerService) { }


  ngOnInit() {
    this._bannerService.getBanners().subscribe(data =>this.items=data);
  }


}
