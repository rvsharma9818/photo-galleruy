import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http';
import { AnimatedGalleryComponent } from './animated-gallery/animated-gallery.component';
import { SliderGalleryComponent } from './slider-gallery/slider-gallery.component';
import { UploadComponent } from './upload/upload.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from "swiper/angular";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    AnimatedGalleryComponent,
    SliderGalleryComponent,
    UploadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
