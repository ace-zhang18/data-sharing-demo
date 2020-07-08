import { Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import * as PIXI from 'pixi.js'
import * as $ from 'jquery'
import { PixiHttpService } from './pixi-http.service';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-pixi-form',
  templateUrl: './pixi-form.component.html',
  styleUrls: ['./pixi-form.component.scss']
})
export class PixiFormComponent implements OnInit{
  @ViewChild('canvas')
  canvas: ElementRef;

  @ViewChild('content')
  content: any;

  image_name = 'blue-marble.jpg'
  image: Blob;
  fileURL;

  app;
  spinner;

  constructor(
    private http: PixiHttpService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.http.getImage(this.image_name)
      .subscribe(data => {
        this.load(data)
      }      
    )
  }

  load(blob: any){
    const file = this.blobToFile(blob, 'assets/blue-marble.jpg')

    const width = this.content.elementRef.nativeElement.clientWidth;
    let height = this.content.elementRef.nativeElement.clientHeight;

    height = height - 6

    this.app = new PIXI.Application({height: height, width: width});
    
    this.canvas.nativeElement.appendChild(this.app.view)

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
          this.spinner.rotation += 0.01;
      });
    });

    this.app.renderer.resize(width, height);


  }  

  @HostListener('window:resize')
  public resize() {
    const width = this.content.elementRef.nativeElement.clientWidth;
    let height = this.content.elementRef.nativeElement.clientHeight;
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
    this.spinner.scale.x += 0.1
    this.spinner.scale.y += 0.1
  }

  public zoomOut(){
    this.spinner.scale.x -= 0.1
    this.spinner.scale.y -= 0.1
  }
  
  public blobToFile = (theBlob: Blob, fileName:string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  }
}
