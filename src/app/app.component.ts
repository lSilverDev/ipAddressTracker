import { Component } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ipAddressTracker';

  ip = 0;
  location = '';
  timezone = '';
  isp = '';


  constructor(private service: MapService){ }

  ngOnInit() : void {}

  getDatas(){
    var data = this.service.getDatas();


    console.log(data);

    this.genMap();
  }

  genMap() {}
}
