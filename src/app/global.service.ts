import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  color: string;
  
  constructor() { }

  public setColor(color){
    this.color = color
  }

  public getColor(){
    return this.color
  }
}
