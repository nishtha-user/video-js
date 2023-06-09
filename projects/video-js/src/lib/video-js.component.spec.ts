import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoJsComponent } from './video-js.component';

describe('VideoJsComponent', () => {
  let component: VideoJsComponent;
  let fixture: ComponentFixture<VideoJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
