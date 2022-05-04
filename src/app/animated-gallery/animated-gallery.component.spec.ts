import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedGalleryComponent } from './animated-gallery.component';

describe('AnimatedGalleryComponent', () => {
  let component: AnimatedGalleryComponent;
  let fixture: ComponentFixture<AnimatedGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
