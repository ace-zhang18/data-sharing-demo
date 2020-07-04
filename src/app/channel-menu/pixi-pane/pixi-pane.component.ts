import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-pixi-pane',
  templateUrl: './pixi-pane.component.html',
  styleUrls: ['./pixi-pane.component.scss']
})
export class PixiPaneComponent implements OnInit {
	constructor(private elRef:ElementRef) {
    console.log(elRef.nativeElement)
  }

	ngOnInit(): void {
		// The application will create a renderer using WebGL, if possible,
		// with a fallback to a canvas render. It will also setup the ticker
		// and the root stage PIXI.Container
    let app = new PIXI.Application({height: 200, width: 200});

    this.elRef.nativeElement.appendChild(app.view)

    app.renderer.backgroundColor = 0xFFFFFF;
    app.loader.add('spinner', 'assets/spinner.jpg').load((loader, resources) => {
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
          spinner.rotation += 0.01;
      });
    });
  }
}
