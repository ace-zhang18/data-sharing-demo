import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorPickerHttpService {

  constructor(
    private http: HttpClient
  ) { }

  send(color): Observable<string>{
    return this.http.get<string>(`yourwebsitehere.com/endpoint?color=${color}`);
  }
}
