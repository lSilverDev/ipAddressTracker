import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private readonly API = `https://api.ipgeolocation.io/ipgeo?apiKey=8b5280ea014040f38bed70cb39a8061e&ip`;

  constructor(private http: HttpClient) { }

  getDatas(ip: string):Observable<any> {
    const url = `${this.API}=${ip}`;

    return this.http.get(url);
  }
}
