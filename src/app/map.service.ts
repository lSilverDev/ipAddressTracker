import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private readonly API = 'https://geo.ipify.org/api/v2/country?apiKey=at_QRafkSXDGB5W9JemLmHKoiJtknyPv&ipAddress';

  constructor(private http: HttpClient) { }

  getDatas():Observable<any> {
    var ip: string = '8.8.8.8';

    const url = `${this.API}=${ip}`

    return this.http.get<any>(url)
  }
}
