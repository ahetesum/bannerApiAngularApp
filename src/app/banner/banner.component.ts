import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { IBanner } from '../models/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public banner;

  constructor(private _bannerService:BannerService) { }


  ngOnInit() {
  }

}
