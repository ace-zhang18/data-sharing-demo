import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit} from '@angular/core';
import * as PIXI from 'pixi.js'
import * as $ from 'jquery'

@Component({
  selector: 'app-pixi-form',
  templateUrl: './pixi-form.component.html',
  styleUrls: ['./pixi-form.component.scss']
})
export class PixiFormComponent implements OnInit, AfterViewInit{
  @ViewChild('canvas')
  canvas: ElementRef;

  @ViewChild('content')
  content: any;

  app;
  spinner: PIXI.Sprite;

  constructor(el: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    const width = this.content.elementRef.nativeElement.clientWidth;
    let height = this.content.elementRef.nativeElement.clientHeight;

    height = height - 6

    this.app = new PIXI.Application({height: height, width: width});
    
    this.canvas.nativeElement.appendChild(this.app.view)

    let canvasElm = $(this.canvas.nativeElement).find("canvas")[0]
    
    this.app.renderer.backgroundColor = 0x000000;


    this.app.loader.add('spinner', 'assets/blue-marble.jpg').load((loader, resources) => {
      // This creates a texture from a 'bunny.png' image
      this.spinner = new PIXI.Sprite(resources.spinner.texture);
  
      // Setup the position of the bunny
      this.spinner.x = this.app.renderer.width / 2;
      this.spinner.y = this.app.renderer.height / 2;
  
      // Rotate around the center
      this.spinner.anchor.x = 0.5;
      this.spinner.anchor.y = 0.5;
  
      this.spinner.scale.x = 0.5
      this.spinner.scale.y = 0.5

      // Add the bunny to the scene we are building
      this.app.stage.addChild(this.spinner);
  
      // Listen for frame updates
      this.app.ticker.add(() => {
           // each frame we spin the bunny around a bit
          // this.spinner.rotation += 0.01;
      });
    });

    this.app.renderer.resize(width, height);


  }  

  @HostListener('window:resize')
  public resize() {
    const width = this.content.ElementRef.nativeElement.clientWidth;
    let height = this.content.ElementRef.nativeElement.clientHeight;
    height = height - 6
    console.log(width, height)

    this.app.renderer.resize(width, height);

    // Setup the position of the bunny
    this.spinner.x = this.app.renderer.width / 2;
    this.spinner.y = this.app.renderer.height / 2;

    // Rotate around the center
    this.spinner.anchor.x = 0.5;
    this.spinner.anchor.y = 0.5;
  }

  public zoomIn(){
    this.spinner.scale.x += 0.3
    this.spinner.scale.y += 0.3
  }

  public zoomOut(){
    this.spinner.scale.x -= 0.3
    this.spinner.scale.y -= 0.3
  }
}