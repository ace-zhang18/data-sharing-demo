import { Component, OnInit } from '@angular/core';
import { ColorPickerHttpService } from './color-picker-http.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  public show = true;
  public color1 = 'rgba(0,0,0,0)';

  public onEventLog(event: string, data: any): void {
    //  debugger;
    console.log(event, data);
  }

  onColorPickerChange($event) {
    //  debugger;
  }

  toggleShow() {
    this.show = !this.show;
  }

  sendColor() {
    this.http.send(this.color1)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

  constructor(
    private http: ColorPickerHttpService
  ) { }

  ngOnInit(): void {
  }

}
