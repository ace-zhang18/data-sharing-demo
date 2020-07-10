import { Component, OnInit } from '@angular/core';
import { ColorPickerHttpService } from './color-picker-http.service';
import { GlobalService } from 'src/app/global.service';

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
    this.glob.setColor(this.color1)
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

  public getColor(){
    return this.color1
  }

  constructor(
    private http: ColorPickerHttpService,
    private glob: GlobalService
  ) { }

  ngOnInit(): void {
    this.glob.setColor(this.color1)
  }

}
