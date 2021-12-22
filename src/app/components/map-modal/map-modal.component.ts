import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare const google: any;

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {
  lat: string | undefined;
  lon: string | undefined;
  name: string | undefined;
  temp: string | undefined;

  map: any;
  @ViewChild('mapElement') mapElement: any;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.map = new google.maps.Map(document.getElementById('mapElement'), { // initialize the google Map in the specified container (mapElement from map-modal.component.html)
      center: { lat: this.lat, lng: this.lon }, // passing the latitude and longitude coordinates to the function incapsulated in the center object
    zoom: 8,
  })
}

}
