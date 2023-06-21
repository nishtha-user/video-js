# Videojs Player

Videojs Player is a web video player built from the ground up for an HTML5 world. It supports HTML5 video and Media Source Extensions, as well as other playback techs like YouTube and Vimeo. It supports video playback on desktops and mobile devices.This library was generated with Angular CLI version 15.0.0.
## How to Use

## Step 1

Install it
npm i angular-video-js-player
## Step 2

Import component in any standalone component

import { VideoJsComponent } from 'angular-video-js-player';

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


videoUrl : It is an array with option [{url:string,label:'300P'}]

captionList: It is an array if you need to provide caption with option [{url: string,lang: string,label: string}] where lang and label are optional key.
## Methods
 <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Description</th>
        <th>Key Used</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>Volume enable by Key </td>
            <td>It handle volume by arrow up and arrow down.It is an optional key and has boolean value.</td>
            <td><code>volumeEnableByKey</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>Play Pause by key</td>
            <td>It handle play pause by space key.It is an optional key and has boolean value.</td>
            <td><code>playPauseByKey</code></td>
            <td><code>false</code></td>
        </tr>
         <tr>
            <td>Full Screen Mode</td>
            <td>It handle fullScreen by double click.It is an optional key and has boolean value.</td>
            <td><code>fullScreenModeEnable</code></td>
            <td><code>false</code></td>
        </tr>
         <tr>
            <td>Quality Selector</td>
            <td>It provide feature for quality option with multiple video.It is an optional key and has boolean value.</td>
            <td><code>qualitySelector</code></td>
            <td><code>false</code></td>
        </tr>
    </tbody>
  </table>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## LICENSE

The MIT License (MIT). Please see [License File](https://github.com/vc-nishtha/video-js/blob/main/LICENSE) for more information.
