import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Gallery } from './model/gallery.model';
import { observable } from 'rxjs';
import { map, take } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  readonly baseURL = 'http://localhost:5000/user';
selectedGallery: Gallery;
employees: Gallery[];

  constructor(private http : HttpClient) { }


//request to upload images
addimage(pic : Gallery){
  return this.http.post(this.baseURL+`/upload`,pic)
}

//request to disaplay all images
getimages(){
  return this.http.get(this.baseURL);
}


//request to update images
putimages(pic:Gallery){
  return this.http.put(this.baseURL+`/${pic._id}`,pic);
}

//request to delete a images
deleteimages(_id:string){
  return this.http.delete('http://localhost:5000/user/delete/'+`${_id}`)
}

}
