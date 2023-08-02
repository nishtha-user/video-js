import { NgFor } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
declare let videojs: any;

enum PlayerKey {
  arrowLeft = 'ArrowLeft',
  arrowRight = 'ArrowRight',
  arrowDown = 'ArrowDown',
  arrowUp = 'ArrowUp',
  space = 'Space'
}

interface Caption {
  url: string;
  lang?: string;
  label?: string
}

interface Video {
  url: string;
  label?: string;
}


@Component({
  selector: 'lib-video-js',
  standalone: true,
  imports: [NgFor],
  template: `
 <video id="video-player" class="video-js vjs-default-skin" autoplay="true">
  <source *ngFor="let item of videoUrl" src="{{ item.url }}" type="application/x-mpegURL" [attr.label]="item.label??''" />
  <ng-container *ngFor="let caption of captionList">
    <track kind="captions" src="{{caption.url}}" srclang="{{caption?.lang}}" label="{{caption?.label}}" />
  </ng-container>
 </video>
  `,
  styles: [
    `
    .video-js {
      width: 100%;
      height: 30%;

      video {
      width: 100%;
      height: 100%;
      position: static;
    }
    }
    `
  ]
})

export class VideoJsComponent implements OnDestroy {
  player!: any;
  @Input() videoUrl: Video[] = [];
  @Input() captionList: Caption[] = []
  @Input() volumeEnableByKey!: boolean;
  @Input() playPauseByKey!: boolean;
  @Input() fullScreenModeEnable!: boolean;
  @Input() qualitySelector!: boolean;
  qualitySelectorUrl = 'https://unpkg.com/@silvermine/videojs-quality-selector/dist/js/silvermine-videojs-quality-selector.min.js';
  videoJsUrl = 'https://vjs.zencdn.net/7.12.3/video.min.js';

  constructor() {
    this.loadScript();
  }

  createScript(url: string, cb: Function = () => { }): void {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.addEventListener("load", () => cb());
    script.src = url;
    script.defer = true;
    body.appendChild(script);
  }

  loadScript(): void {
    const vjs = this.videoJsUrl;
    this.createScript(vjs, () => {
      this.createScript(this.qualitySelectorUrl);
      this.onPlayVideo();
    });
  }

  onPlayVideo(): void {
    const options = this.setVideoConfig();
    this.player = videojs('video-player', options);
    this.qualitySelector && !this.player.controlBar.childNameIndex_?.QualitySelector && this.player.controlBar.addChild('QualitySelector');
  }

  setVideoConfig() {
    return {
      preload: "auto",
      autoplay: true,
      controls: true,
      responsive: true,
      html5: {
        nativeTextTracks: false,
      },
      userActions: {
        hotkeys: (event: KeyboardEvent) => {
          this.onPressHotkeys(event);
        },
        doubleClick: () => {
          if (this.player.isFullscreen() && this.fullScreenModeEnable) {
            this.player.exitFullscreen();
          } else {
            this.fullScreenModeEnable && this.player.requestFullscreen();
          }
        },
      },
    };
  }

  onPressHotkeys(event: KeyboardEvent): void {
    if (event.code === PlayerKey.space && this.playPauseByKey) {
      if (this.player.paused()) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
    if (event.code === PlayerKey.arrowLeft && this.volumeEnableByKey) {
      const backward = this.player.currentTime() - 10;
      this.player.currentTime(backward);
    }
    if (event.code === PlayerKey.arrowRight && this.volumeEnableByKey) {
      const forward = this.player.currentTime() + 10;
      this.player.currentTime(forward);
    }
    if (event.code === PlayerKey.arrowUp && this.volumeEnableByKey) {
      this.player.volume(this.player.volume() + 0.1);
    }
    if (event.code === PlayerKey.arrowDown && this.volumeEnableByKey) {
      this.player.volume(this.player.volume() - 0.1);
    }
  }

  ngOnDestroy(): void {
    this.player.dispose();
  }

}
