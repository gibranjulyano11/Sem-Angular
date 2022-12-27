import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsGalleryComponent } from './gifts-gallery.component';

describe('GiftsGalleryComponent', () => {
  let component: GiftsGalleryComponent;
  let fixture: ComponentFixture<GiftsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftsGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
