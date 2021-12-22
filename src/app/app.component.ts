import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MapModalComponent } from './components/map-modal/map-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  API_KEY = 'e458935d50a5de8ed4b370b5e5d93cc0';
  weatherData = [];

  constructor(private _modal: NgbModal) {};

  loadData = (): void => {
    const weatherInfoURL = `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${this.API_KEY}`;
    axios.get(weatherInfoURL).then(({ data }) => { // the request for obtaining the data using axios
      this.weatherData = data.list; // storing the result for using it in HTML page for populating the table (in app.component.html as 'weatherData': see app.component.html)
    }).catch(() => console.log('Eroare la preluarea informatiilor!'));
  }

  showMap = (lat?: string, lon?: string, name?: string, temp?: string): void => {
    const modalRef = this._modal.open(MapModalComponent, {size: 'md', backdrop: 'static'}); // opening the map modal from the map-modal component (imported as MapModalComponent)
    modalRef.componentInstance.lat = lat; // setting the 'lat' value (city latitude) to the modal in order the google Map to use it to locate the city
    modalRef.componentInstance.lon = lon; // setting the 'lon' value (city longitude) to the modal in order the google Map to use it to locate the city
    modalRef.componentInstance.name = name; // setting the 'name' value (city name) to the modal in order to be displayed in the modal header
    modalRef.componentInstance.temp = temp; // setting the 'temp' value (temperature in the city) to the modal in order to be displayed in the modal header
  }

  ngOnInit(): void {
      this.loadData(); // obtaining the weather dates
  }

}