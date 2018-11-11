import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import {HttpClientModule} from '@angular/common/http';
import { BannerService } from './banner.service';
import { BannerComponent } from './banner/banner.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BannerComponent,
    BannerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    ReactiveFormsModule
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
