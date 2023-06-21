# Angular Video-js Player

A video player called ```Angular Video-js Player``` is utilised by Angular standalone projects. Video playback on PCs and mobile devices is supported, along with Media Source Extensions and HTML5 video. With the help of Angular CLI version 15.0.0, this library was created.

This package has basic video js many features with boolean values that may be customised.

## Getting Started

## Installation

```html
  npm i angular-video-js-player
```

## Usage

Import component in any standalone component

## Import in your ts file

```html
import { VideoJsComponent } from 'angular-video-js-player';

@Component({
    standalone: true,
    imports: [VideoJsComponent]
})
```

## Use in html file

```html
<lib-video-js
        [videoUrl] = "videoUrl"
        [captionList] = "captionList"
        [volumeEnableByKey] = false
        [playPauseByKey] = false
        [fullScreenModeEnable]=false
        [qualitySelector]=false>
  </lib-video-js>
```

## Description

Add this key in your ts file and assign value.

videoUrl : It is an array with option [{url:string,label:string}]

```for example:```
```html
videoUrl= [{url:'your-video-url',label:'300P'}]
```

captionList: It is an array if you need to provide caption with option [{url: string,lang: string,label: string}] where lang and label are optional key.

```for example:```
```html
captionList= [{url:'your-caption-url',lang:'en',label:'English'}]
```

## Options
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
