import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, Inject } from '@angular/core';
import { GMap } from '../../gs-forms.widgets';
import { FormGroup } from '@angular/forms';
import { GsFormsService } from '../../gs-forms.service';
import { map } from 'rxjs/operators';

const w: any = window;

@Component({
  selector: 'gs-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class GsMapComponent implements OnInit {

  @Input() public field: GMap;
  @Input() public formGroup: FormGroup;

  @ViewChild('mapRef', { static: false }) mapElement: ElementRef;
  @ViewChild('search', { static: false }) search: ElementRef;
  public showMap = false;

  // Default bogotá lat and lng
  private latlng = {
    lat: 4.6565365,
    lng: -74.1248367
  };
  private map;
  private marker;
  private apikey;
  public address;

  private touched = false;
  private noSelection = false;

  constructor(private gsServices: GsFormsService, @Inject('apikey') apikey) {
    this.apikey = apikey;
  }

  ngOnInit() {
    this.setLanLngGeolocation();
  }

  private setLanLngGeolocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }

  public loadMap(): void {
    this.touched = true;
    this.toggleMap();
    if (!this.mapElement.nativeElement.hasChildNodes()) {
      this.map = new w.google.maps.Map(this.mapElement.nativeElement, {
        center: this.latlng,
        zoom: 15,
        disableDefaultUI: true,
        mapTypeId: 'roadmap'
      });

      this.getSearchAddress();

      this.map.addListener('click', (mapsMouseEvent) => {
        this.latlng = {
          lat: mapsMouseEvent.latLng.lat(),
          lng: mapsMouseEvent.latLng.lng()
        };

        this.addMarker();
      });
    }
  }

  public toggleMap(): void {
    this.noSelection = !this.formGroup.controls[this.field.config.model].value ? true : false;
    this.address = null;
    this.touched = false;
    this.showMap = !this.showMap;
  }

  private addMarker(): void {
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.marker = new w.google.maps.Marker({ position: this.latlng, map: this.map });
    this.getAddress();
  }

  private getAddress(): void {
    this.gsServices.getAddress(this.latlng.lat, this.latlng.lng, this.apikey)
      .subscribe(address => this.address = address.results);
  }

  private getSearchAddress(): void {
    const searchBox = new w.google.maps.places.SearchBox(this.search.nativeElement);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }
      const bounds = new w.google.maps.LatLngBounds();

      places.forEach((place) => {
        if (!place.geometry) {
          return;
        }

        this.latlng = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };

        this.addMarker();

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
        this.map.fitBounds(bounds);
      });
    });
  }

  public selectAddress(address: string): void {
    this.formGroup.controls[this.field.config.model].patchValue(address);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    this.toggleMap();
  }


  public validateRequired() {
    return this.field.config.validators && !this.showMap && this.noSelection;
  }

  public requiredText() {
    return this.gsServices.getValidationMessage('ERR_REQUIRED');
  }






}
