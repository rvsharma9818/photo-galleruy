import { Component, OnInit ,ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-slider-gallery',
  templateUrl: './slider-gallery.component.html',
  styleUrls: ['./slider-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SliderGalleryComponent implements OnInit {
pic
  constructor(private http:HttpClient,public router:Router,public upload:PhotoService) { }

  ngOnInit(): void {
    this.getdetails();
  }
  getdetails(){
    this.upload.getimages().subscribe((res)=>{
  this.pic=res
  console.log(this.pic);
    })
  }
}
