import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from '../photo.service';
import { Gallery } from '../model/gallery.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  myForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    desc: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, public router:Router) { }

  ngOnInit(): void {

  }
  get f(){
    return this.myForm.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        image: file
      });
    }
  }

  submit(){
    const formData = new FormData();
    formData.append('title', this.myForm.get('title').value);
    formData.append('desc', this.myForm.get('desc').value);

    formData.append('image', this.myForm.get('image').value);

    this.http.post('http://localhost:5000/user/upload', formData)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('');
        alert('Uploaded Successfully.');
      })
  }
}
