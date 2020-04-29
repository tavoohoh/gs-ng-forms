import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, OnInit } from '@angular/core';
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
export class GsMapFieldComponent implements OnInit, OnChanges {
  @Input() public field: GMapField;
  @Input() public formGroup: FormGroup;
  @Input() private googleMapApiKey: string;

  @ViewChild('mapRef', { static: false }) mapElement: ElementRef;
  @ViewChild('search', { static: false }) search: ElementRef;

  public showMap = false;
  public showMapModal = false;
  private latlng = LOCATION.co.lanLng;
  private map: any;
  private marker: any;
  public address: any = [];
  public addressInput = '';

  constructor(private gsServices: GsFormsService) { }

  ngOnInit(): void {
    this.showMapModal = this.field.config.showMap;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field.currentValue && changes.field.currentValue.config.value) {
      const value = changes.field.currentValue.config.value;

      if (value.city && value.country) {
        this.addressInput = `${value.address}, ${value.city}, ${value.country}`;
      } else {
        this.addressInput = value.address;
      }

      this.selectAddress(this.addressInput, true);

      if (value.lat && value.lng) {
        this.latlng = {
          lat: value.lat,
          lng: value.lng
        };
      }
    } else {
      this.setLanLngGeolocation();
    }

    this.valid(false);
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

  public valid(keyup, valueGoogleSearch?): void {
    // mark input as dirty
    if (keyup) {
      this.formGroup.controls[this.field.config.model].markAsDirty();
    }

    if (this.addressInput === '') {
      this.formGroup.controls[this.field.config.model].patchValue(null);
    } else if (valueGoogleSearch) {
      this.selectAddress(valueGoogleSearch, false);
    } else {
      this.selectAddress(this.addressInput, false);
    }
  }

  public loadMap(): void {
    if (!this.showMapModal) {
      this.getSearchAddress();
      return;
    }

    this.toggleMap();

    if (!this.mapElement.nativeElement.hasChildNodes() && this.showMapModal) {
      this.map = new WINDOW.google.maps.Map(this.mapElement.nativeElement, {
        center: this.latlng,
        zoom: 15,
        disableDefaultUI: true,
        mapTypeId: 'roadmap'
      });

      if (this.latlng) {
        this.marker = new WINDOW.google.maps.Marker({ position: this.latlng, map: this.map });
      }

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
    this.address = [];
    this.showMap = !this.showMap;
  }

  private getSearchAddress(): void {
    const searchBox = new WINDOW.google.maps.places.SearchBox(this.search.nativeElement);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      if (!this.showMapModal) {
        this.valid(false, places[0].formatted_address);
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

  public selectAddress(address: string, patch: boolean): void {
    this.addressInput = address;
    const addressValue = {
      fullAddress: address,
      address: address.split(', ')[0] || address,
      city: address.split(', ')[1] || '',
      country: address.split(', ')[2] || '',
      lat: this.latlng.lat || '',
      log: this.latlng.lng || ''
    };

    setTimeout(() => {
      this.formGroup.controls[this.field.config.model].patchValue(addressValue);
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    }, 500);

    if (!patch) {
      this.toggleMap();
    }
  }

  public selectAddressText(): string {
    return this.gsServices.getMessage('SELECT_ADDRESS');
  }
}
