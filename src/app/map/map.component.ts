import { Component, AfterViewInit, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map: any;
  lat = 39.8282;
  lng = -98.5795;

  @Input() data: any;
  @Input() zoom: any;

  constructor() {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.lat, this.lng],
      zoom: this.zoom
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  mapLocation(){
    if(this.data){
      this.lat = this.data.latitude;
      this.lng = this.data.longtude;
    }

    var markerIcon = L.icon({
      iconUrl: '../../assets/images/icon-location.svg',

      iconSize: [46, 56], // size of the icon
      iconAnchor: [23, 55], // point of the icon which will correspond to marker's location
    })
    this.map.setView([this.lat, this.lng], 17)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map)

    L.marker([this.lat, this.lng], { icon: markerIcon }).addTo(this.map)
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.mapLocation();
  }
}
