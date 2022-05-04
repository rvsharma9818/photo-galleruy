import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
pic
like=false
dislike=false

  constructor(private http:HttpClient,public router:Router,public upload:PhotoService) {


  }

  ngOnInit() {
    this.getdetails();
  }
getdetails(){
  this.upload.getimages().subscribe((res)=>{
this.pic=res
console.log(this.pic);
  })
}
  deleteimg(_id:string){
    this.upload.deleteimages(_id).subscribe((res)=>{
     alert('delete Suceesfully') ;
     this.getdetails();
    })
  }
  likex(){
   this.like = !this.like
  }
  disklike(){
     this.dislike=!this.dislike
  }
}


