import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import { OpenSeaDragonComponent } from './open-sea-dragon/open-sea-dragon.component';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-channel-menu',
  templateUrl: './channel-menu.component.html',
  styleUrls: ['./channel-menu.component.scss']
})
export class ChannelMenuComponent implements OnInit {

  @ViewChild(OpenSeaDragonComponent) private seadragon: OpenSeaDragonComponent;

  constructor() { }

  ngOnInit(): void {
  } //...


  //...
  onTabChanged(event: MatTabChangeEvent) 
  {
    if(event.index == 3)
    {
        this.seadragon.ngOnInit();//Or whatever name the method is called
    }
  }
}
