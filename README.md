# Videojs Player

 This library was generated with Angular CLI version 15.0.0.
## How to Use

## Step 1

Install it
npm i video-js
## Step 2

Import component in any standalone component

import { VideoJsComponent } from 'lib-video-js';

@Component({
    standalone: true,
    imports: [VideoJsComponent]
})
## You can use it as follows

 <lib-video-js
        [videoUrl] = "videoUrl"
        [captionList] = "captionList"
        [volumeEnableByKey] = true
        [playPauseByKey] = true
        [fullScreenModeEnable]=true
        [qualitySelector]=true>
  </lib-video-js>

## Options

videoUrl is an array with option [{url:string,label:'300P'}]

captionList is also an array if you need to provide caption with option [{url: string,lang?: string,label?: string}] with optional key

volumeEnableByKey is an optional key by default it is false. It handle volume by arrow up and arrow down

playPauseByKey is also an optional key by default it is false. It handle play pause by space key.

fullScreenModeEnable is an optional key by default it is false. It handle fullscreen  by double click.

qualitySelector is an optional key, by default it is false. It provide feature for quality option with multiple video.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## LICENSE

The MIT License (MIT). Please see [License File]() for more information.
