import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { SliderPaneHttpService } from './slider-pane-http.service';

@Component({
  selector: 'app-slider-pane',
  templateUrl: './slider-pane.component.html',
  styleUrls: ['./slider-pane.component.scss']
})
export class SliderPaneComponent implements OnInit {
  value = 200;
  highValue = 460;
  options: Options = {
    floor: 0,
    ceil: 800
  };

  setNewFloor(newFloor: string): void {
    const newOptions: Options = Object.assign({}, this.options);
    newOptions.floor = +newFloor;
    this.options = newOptions;
  }

  setNewCeil(newCeil: string): void {
    const newOptions: Options = Object.assign({}, this.options);
    newOptions.ceil = +newCeil;
    this.options = newOptions;
  }

  submitValues(): void{
    this.http.send(this.value, this.highValue, this.options.floor, this.options.ceil)
    .subscribe( data =>{
        console.log(data)
      }
    );
  }

  constructor(
    private http: SliderPaneHttpService
  ) { }
  ngOnInit() {}
}
