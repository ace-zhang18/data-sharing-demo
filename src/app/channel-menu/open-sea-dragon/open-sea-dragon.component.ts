import { Component, OnInit } from '@angular/core';
import { ColorPickerComponent } from 'ngx-color-picker';
import { GlobalService } from 'src/app/global.service';

declare const OpenSeadragon: any;

@Component({
  selector: 'app-open-sea-dragon',
  templateUrl: './open-sea-dragon.component.html',
  styleUrls: ['./open-sea-dragon.component.scss']
})
export class OpenSeaDragonComponent implements OnInit {
  color = 'rgba(0,0,0,0)';
  viewer;
  debuggerModeOn = false;
  tileSource : any = {
    height: 24138,
    width: 13122,
    tileSize: 512,
    maxLevel: 5,
    scaleFactor: 3,
    baseUrl: "http://your-url.com/",
    channels: [
      { index:"0", color:"255,0,255", range:"917,6684" },
      { index:"1", color:"255,0,0", range:"917,6684" },
      { index:"2", color:"255,255,0", range:"917,6684" },
      { index:"3", color:"0,255,0", range:"917,6684" },
      { index:"4", color:"0,255,255", range:"917,6684" },
      { index:"5", color:"0,17,255", range:"917,6684" }
    ]
  };

  constructor(
    private glob: GlobalService
  ) {}

  ngOnInit(): void {
    `
    this.color = this.glob.getColor();
    console.log(this.color);
    `
    this.viewer = OpenSeadragon({
      id: 'openseadragon',
      prefixUrl: 'assets/images/',
      navigatorSizeRatio: 0.25,
      wrapHorizontal: true,
      showFlipControl: true,
      debugGridColor: [], 
      autoHideControls: true,
      gestureSettingsMouse: {
        dblClickToZoom: true
      }, 
      immediateRender: true,
      minPixelRatio: 0.25,
      showNavigator: true,
      tileSources: {
        height: this.tileSource.height,
        width: this.tileSource.width,
        tileSize: this.tileSource.tileSize,
        maxLevel: this.tileSource.maxLevel,
        scaleFactor: this.tileSource.scaleFactor,
        channels: this.tileSource.channels,
        baseUrl: this.tileSource.baseUrl,
        getTileUrl: function(level, x, y) {
          let xPosition = x * this.getTileWidth();
          let yPosition = y * this.getTileHeight();
      
          // Build base request
          const quality = (this.maxLevel - level);
          let url = this.baseUrl +
            "?GIG=/HDFU/images/category/Image1/image-file.jpg" +
            "&TILE=" + quality + "," + xPosition + "," + yPosition + "," + this.getTileWidth() + "," + this.getTileHeight();

          // Add channel data to url
          let channelIndexStr = "&CHANNEL="
          let channelColorStr = "&COLOR="
          let channelRangeStr = "&RANGE="
          this.channels.forEach((channel, i) => {
            channelIndexStr += (i === this.channels.length - 1) ? channel.index : channel.index + ",";
            channelColorStr += (i === this.channels.length - 1) ? channel.color : channel.color + ",";
            channelRangeStr += (i === this.channels.length - 1) ? channel.range : channel.range + ",";
          });

          url += channelIndexStr + channelColorStr + channelRangeStr + "&RETURN=JPG";
          return url;
        },
        getLevelScale: function(level) {
          var levelScaleCache = {},
            i;
          for (i = 0; i <= this.maxLevel; i++) {
            levelScaleCache[i] = 1 / Math.pow(this.scaleFactor, this.maxLevel - i);
          }
          this.getLevelScale = function(_level) {
            return levelScaleCache[_level];
          };
          return this.getLevelScale(level);
        }
      }
    });
  }
}