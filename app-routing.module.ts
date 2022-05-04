import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedGalleryComponent } from './animated-gallery/animated-gallery.component';
import { GalleryComponent } from './gallery/gallery.component';

import { SliderGalleryComponent } from './slider-gallery/slider-gallery.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
  path:'',component:GalleryComponent
  },
  {
    path:'slidergallery',component:SliderGalleryComponent
  },
  {
    path:'animatedgallery',component:AnimatedGalleryComponent
  },
  {
    path:'upload',component:UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
