import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderPaneHttpService {

  constructor(
    private http: HttpClient
  ) { }

  send(value, highValue, floor, ceil): Observable<string>{
    return this.http.get<string>(`yourwebsitehere.com/endpoint?value=${value}&highValue=${highValue}&floor=${floor}&ceil=${ceil}`);
  }
}
