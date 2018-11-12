import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerListComponent } from './banner-list/banner-list.component';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
const routes: Routes = [
 {
  path:'bannerlist',
  component:BannerListComponent

 },
 {
   path:'',
   component:SliderComponent
 },
 {
  path:'banner',
  component:BannerComponent
}

];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

