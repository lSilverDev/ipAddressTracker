import { Component } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ipAddressTracker';

  data: any;
  zoom = 3;

  searchIp: string = '';
  ip: string = '--';
  location: string = '--';
  timezone: string = '--';
  isp: string = '--';

  constructor(private service: MapService){ }

  ngOnInit() : void {}

  getDatas(){
    this.service.getDatas(this.searchIp).subscribe((data) => {
      this.data = data;
    });

    this.ip = this.data.ip;
    this.location = `${this.data.country_capital}, ${this.data.country_code2}`;
    this.timezone = this.data.time_zone.offset;
    this.isp = this.data.isp;
  }
}
