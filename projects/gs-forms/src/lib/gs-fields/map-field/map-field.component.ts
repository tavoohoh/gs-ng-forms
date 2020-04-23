import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { GMapField } from '../../gs-forms.widgets';
import { FormGroup } from '@angular/forms';
import { GsFormsService } from '../../gs-forms.service';
import { LOCATION } from '../../gs-forms.constants';

const WINDOW: any = window;

@Component({
  selector: 'gs-map-field',
  templateUrl: './map-field.component.html',
  styleUrls: ['./map-field.component.sass']
})
export class GsMapFieldComponent implements OnChanges {
  @Input() public field: GMapField;
  @Input() public formGroup: FormGroup;
  @Input() private googleMapApiKey: string;

  @ViewChild('mapRef', { static: false }) mapElement: ElementRef;
  @ViewChild('search', { static: false }) search: ElementRef;

  public showMap = false;
  private latlng = LOCATION.co.lanLng;
  private map: any;
  private marker: any;
  public address: any;
  public addressInput = '';

  constructor(private gsServices: GsFormsService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field.currentValue && changes.field.currentValue.config.value) {
      const value = changes.field.currentValue.config.value;
      this.addressInput = value.address;
      if (value.lat && value.lng) {
        this.latlng = {
          lat: value.lat,
          lng: value.lng
        };
      }
    } else {
      this.setLanLngGeolocation();
    }
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
    this.toggleMap();
    if (!this.mapElement.nativeElement.hasChildNodes()) {
      this.map = new WINDOW.google.maps.Map(this.mapElement.nativeElement, {
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
    this.address = null;
    this.showMap = !this.showMap;
  }

  private addMarker(): void {
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.marker = new WINDOW.google.maps.Marker({ position: this.latlng, map: this.map });
    this.getAddress();
  }

  private getAddress(): void {
    this.gsServices.getAddress(this.latlng.lat, this.latlng.lng, this.googleMapApiKey)
      .subscribe(address => this.address = address.results);
  }

  private getSearchAddress(): void {
    const searchBox = new WINDOW.google.maps.places.SearchBox(this.search.nativeElement);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }
      const bounds = new WINDOW.google.maps.LatLngBounds();

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
    this.addressInput = address.split(', ')[0];

    const addressValue = {
      fullAddress: address,
      address: address.split(', ')[0],
      city: address.split(', ')[1],
      country: address.split(', ')[2],
      lat: this.latlng.lat,
      log: this.latlng.lng
    };

    this.formGroup.controls[this.field.config.model].patchValue(addressValue);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    this.toggleMap();
  }

  public selectAddressText(): string {
    return this.gsServices.getMessage('SELECT_ADDRESS');
  }
}
