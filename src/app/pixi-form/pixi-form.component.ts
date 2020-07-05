import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as PIXI from 'pixi.js'

@Component({
  selector: 'app-pixi-form',
  templateUrl: './pixi-form.component.html',
  styleUrls: ['./pixi-form.component.scss']
})
export class PixiFormComponent implements OnInit {
  @ViewChild('canvas')
  canvas: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    console.log(this.canvas)
    let app = new PIXI.Application({height: 1200, width: 1200});

    this.canvas.nativeElement.appendChild(app.view)

    app.renderer.backgroundColor = 0xFFFFFF;
    app.loader.add('spinner', 'assets/blue-marble.jpg').load((loader, resources) => {
      // This creates a texture from a 'bunny.png' image
      const spinner = new PIXI.Sprite(resources.spinner.texture);
  
      // Setup the position of the bunny
      spinner.x = app.renderer.width / 2;
      spinner.y = app.renderer.height / 2;
  
      // Rotate around the center
      spinner.anchor.x = 0.5;
      spinner.anchor.y = 0.5;
  
      // Add the bunny to the scene we are building
      app.stage.addChild(spinner);
  
      // Listen for frame updates
      app.ticker.add(() => {
           // each frame we spin the bunny around a bit
          // spinner.rotation += 0.01;
      });
    });
  }

}
