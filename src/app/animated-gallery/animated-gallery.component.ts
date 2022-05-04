import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-animated-gallery',
  templateUrl: './animated-gallery.component.html',
  styleUrls: ['./animated-gallery.component.scss']
})
export class AnimatedGalleryComponent implements OnInit {

  constructor(private http:HttpClient,public router:Router,public upload:PhotoService) { }
pic
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
