import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { LOCATION } from '../../gs-forms.constants';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
const WINDOW = window;
let GsMapFieldComponent = class GsMapFieldComponent extends GsGenericFieldComponent {
    constructor() {
        super(...arguments);
        this.showMap = false;
        this.showMapModal = false;
        this.latlng = LOCATION.co.lanLng;
        this.address = [];
        this.addressInput = '';
    }
    ngOnInit() {
        this.showMapModal = this.field.config.showMap;
    }
    ngOnChanges(changes) {
        if (changes.field.currentValue && changes.field.currentValue.config.value) {
            const value = changes.field.currentValue.config.value;
            if (value.city && value.country) {
                this.addressInput = `${value.address}, ${value.city}, ${value.country}`;
            }
            else {
                this.addressInput = value.address;
            }
            this.selectAddress(this.addressInput, true);
            if (value.lat && value.lng) {
                this.latlng = {
                    lat: value.lat,
                    lng: value.lng
                };
            }
        }
        else {
            this.setLanLngGeolocation();
        }
        this.valid(false);
    }
    setLanLngGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latlng = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }
    }
    valid(keyup, valueGoogleSearch) {
        // mark input as dirty
        if (keyup) {
            this.formGroup.controls[this.field.config.model].markAsDirty();
        }
        if (this.addressInput === '') {
            this.formGroup.controls[this.field.config.model].patchValue(null);
        }
        else if (valueGoogleSearch) {
            this.selectAddress(valueGoogleSearch, false);
        }
        else {
            this.selectAddress(this.addressInput, false);
        }
    }
    loadMap() {
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
    toggleMap() {
        this.address = [];
        this.showMap = !this.showMap;
    }
    getSearchAddress() {
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
                }
                else {
                    bounds.extend(place.geometry.location);
                }
                this.map.fitBounds(bounds);
            });
        });
    }
    addMarker() {
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.marker = new WINDOW.google.maps.Marker({ position: this.latlng, map: this.map });
        this.getAddress();
    }
    getAddress() {
        this.formsService.getAddress(this.latlng.lat, this.latlng.lng, this.googleMapApiKey)
            .subscribe(address => this.address = address.results);
    }
    selectAddress(address, patch) {
        this.addressInput = address;
        const addressValue = {
            fullAddress: address,
            address: address.split(', ')[0] || address,
            city: address.split(', ')[1] || '',
            country: address.split(', ')[2] || '',
            lat: this.latlng.lat || '',
            lng: this.latlng.lng || ''
        };
        setTimeout(() => {
            this.formGroup.controls[this.field.config.model].patchValue(addressValue);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
        }, 500);
        if (!patch) {
            this.toggleMap();
        }
    }
    selectAddressText() {
        return this.formsService.getMessage('SELECT_ADDRESS');
    }
};
tslib_1.__decorate([
    Input()
], GsMapFieldComponent.prototype, "field", void 0);
tslib_1.__decorate([
    Input()
], GsMapFieldComponent.prototype, "googleMapApiKey", void 0);
tslib_1.__decorate([
    ViewChild('mapRef', { static: false })
], GsMapFieldComponent.prototype, "mapElement", void 0);
tslib_1.__decorate([
    ViewChild('search', { static: false })
], GsMapFieldComponent.prototype, "search", void 0);
GsMapFieldComponent = tslib_1.__decorate([
    Component({
        selector: 'gs-map-field',
        template: "<ng-container>\n  <div class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box gs-field-box-icon gs-field-map-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-field-input gs-field-input-map\" (click)=\"loadMap()\">\n        <input \n          #search \n          class=\"gs-field-input\" \n          type=\"text\" \n          [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\" \n          [(ngModel)]=\"addressInput\"\n          (keyup)=\"valid(true)\">\n      </div>\n\n      <svg class=\"gs-field-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z\" />\n        </svg>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
        styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}"]
    })
], GsMapFieldComponent);
export { GsMapFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9uZy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9ncy1maWVsZHMvbWFwLWZpZWxkL21hcC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBZ0QsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXJGLE1BQU0sTUFBTSxHQUFRLE1BQU0sQ0FBQztBQU8zQixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLHVCQUF1QjtJQUxoRTs7UUFZUyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFdBQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUc3QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBMkszQixDQUFDO0lBektDLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN6RSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBRXRELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUMvQixJQUFJLENBQUMs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U0FDbEI7SUFDSCxDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQ0YsQ0FBQTtBQXZMVTtJQUFSLEtBQUssRUFBRTtrREFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7NERBQWlDO0FBRUQ7SUFBdkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzt1REFBd0I7QUFDdkI7SUFBdkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzttREFBb0I7QUFMaEQsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLHNxREFBeUM7O0tBRTFDLENBQUM7R0FDVyxtQkFBbUIsQ0F3TC9CO1NBeExZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdNYXBGaWVsZCB9IGZyb20gJy4uLy4uL2dzLWZvcm1zLndpZGdldHMnO1xuaW1wb3J0IHsgTE9DQVRJT04gfSBmcm9tICcuLi8uLi9ncy1mb3Jtcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgR3NHZW5lcmljRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9fZ2VuZXJpYy1maWVsZC9fZ2VuZXJpYy1maWVsZC5jb21wb25lbnQnO1xuXG5jb25zdCBXSU5ET1c6IGFueSA9IHdpbmRvdztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtbWFwLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hcC1maWVsZC5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzTWFwRmllbGRDb21wb25lbnQgZXh0ZW5kcyBHc0dlbmVyaWNGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHVibGljIGZpZWxkOiBHTWFwRmllbGQ7XG4gIEBJbnB1dCgpIHByaXZhdGUgZ29vZ2xlTWFwQXBpS2V5OiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnbWFwUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWFyY2g6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIHNob3dNYXAgPSBmYWxzZTtcbiAgcHVibGljIHNob3dNYXBNb2RhbCA9IGZhbHNlO1xuICBwcml2YXRlIGxhdGxuZyA9IExPQ0FUSU9OLmNvLmxhbkxuZztcbiAgcHJpdmF0ZSBtYXA6IGFueTtcbiAgcHJpdmF0ZSBtYXJrZXI6IGFueTtcbiAgcHVibGljIGFkZHJlc3M6IGFueSA9IFtdO1xuICBwdWJsaWMgYWRkcmVzc0lucHV0ID0gJyc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93TWFwTW9kYWwgPSB0aGlzLmZpZWxkLmNvbmZpZy5zaG93TWFwO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmZpZWxkLmN1cnJlbnRWYWx1ZSAmJiBjaGFuZ2VzLmZpZWxkLmN1cnJlbnRWYWx1ZS5jb25maWcudmFsdWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY2hhbmdlcy5maWVsZC5jdXJyZW50VmFsdWUuY29uZmlnLnZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUuY2l0eSAmJiB2YWx1ZS5jb3VudHJ5KSB7XG4gICAgICAgIHRoaXMuYWRkcmVzc0lucHV0ID0gYCR7dmFsdWUuYWRkcmVzc30sICR7dmFsdWUuY2l0eX0sICR7dmFsdWUuY291bnRyeX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRyZXNzSW5wdXQgPSB2YWx1ZS5hZGRyZXNzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbGVjdEFkZHJlc3ModGhpcy5hZGRyZXNzSW5wdXQsIHRydWUpO1xuXG4gICAgICBpZiAodmFsdWUubGF0ICYmIHZhbHVlLmxuZykge1xuICAgICAgICB0aGlzLmxhdGxuZyA9IHtcbiAgICAgICAgICBsYXQ6IHZhbHVlLmxhdCxcbiAgICAgICAgICBsbmc6IHZhbHVlLmxuZ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldExhbkxuZ0dlb2xvY2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy52YWxpZChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIHNldExhbkxuZ0dlb2xvY2F0aW9uKCk6IHZvaWQge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMubGF0bG5nID0ge1xuICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHZhbGlkKGtleXVwLCB2YWx1ZUdvb2dsZVNlYXJjaD8pOiB2b2lkIHtcbiAgICAvLyBtYXJrIGlucHV0IGFzIGRpcnR5XG4gICAgaWYgKGtleXVwKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0ubWFya0FzRGlydHkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZGRyZXNzSW5wdXQgPT09ICcnKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0ucGF0Y2hWYWx1ZShudWxsKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlR29vZ2xlU2VhcmNoKSB7XG4gICAgICB0aGlzLnNlbGVjdEFkZHJlc3ModmFsdWVHb29nbGVTZWFyY2gsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RBZGRyZXNzKHRoaXMuYWRkcmVzc0lucHV0LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxvYWRNYXAoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNob3dNYXBNb2RhbCkge1xuICAgICAgdGhpcy5nZXRTZWFyY2hBZGRyZXNzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGVNYXAoKTtcblxuICAgIGlmICghdGhpcy5tYXBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGFzQ2hpbGROb2RlcygpICYmIHRoaXMuc2hvd01hcE1vZGFsKSB7XG4gICAgICB0aGlzLm1hcCA9IG5ldyBXSU5ET1cuZ29vZ2xlLm1hcHMuTWFwKHRoaXMubWFwRWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgIGNlbnRlcjogdGhpcy5sYXRsbmcsXG4gICAgICAgIHpvb206IDE1LFxuICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgICBtYXBUeXBlSWQ6ICdyb2FkbWFwJ1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmxhdGxuZykge1xuICAgICAgICB0aGlzLm1hcmtlciA9IG5ldyBXSU5ET1cuZ29vZ2xlLm1hcHMuTWFya2VyKHsgcG9zaXRpb246IHRoaXMubGF0bG5nLCBtYXA6IHRoaXMubWFwIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmdldFNlYXJjaEFkZHJlc3MoKTtcblxuICAgICAgdGhpcy5tYXAuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKG1hcHNNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubGF0bG5nID0ge1xuICAgICAgICAgIGxhdDogbWFwc01vdXNlRXZlbnQubGF0TG5nLmxhdCgpLFxuICAgICAgICAgIGxuZzogbWFwc01vdXNlRXZlbnQubGF0TG5nLmxuZygpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRNYXJrZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzID0gW107XG4gICAgdGhpcy5zaG93TWFwID0gIXRoaXMuc2hvd01hcDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoQWRkcmVzcygpOiB2b2lkIHtcbiAgICBjb25zdCBzZWFyY2hCb3ggPSBuZXcgV0lORE9XLmdvb2dsZS5tYXBzLnBsYWNlcy5TZWFyY2hCb3godGhpcy5zZWFyY2gubmF0aXZlRWxlbWVudCk7XG5cbiAgICBzZWFyY2hCb3guYWRkTGlzdGVuZXIoJ3BsYWNlc19jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgY29uc3QgcGxhY2VzID0gc2VhcmNoQm94LmdldFBsYWNlcygpO1xuXG4gICAgICBpZiAocGxhY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5zaG93TWFwTW9kYWwpIHtcbiAgICAgICAgdGhpcy52YWxpZChmYWxzZSwgcGxhY2VzWzBdLmZvcm1hdHRlZF9hZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3VuZHMgPSBuZXcgV0lORE9XLmdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgICBwbGFjZXMuZm9yRWFjaCgocGxhY2UpID0+IHtcbiAgICAgICAgaWYgKCFwbGFjZS5nZW9tZXRyeSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGF0bG5nID0ge1xuICAgICAgICAgIGxhdDogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0KCksXG4gICAgICAgICAgbG5nOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkTWFya2VyKCk7XG5cbiAgICAgICAgaWYgKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KSB7XG4gICAgICAgICAgYm91bmRzLnVuaW9uKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRNYXJrZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFya2VyKSB7XG4gICAgICB0aGlzLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgfVxuICAgIHRoaXMubWFya2VyID0gbmV3IFdJTkRPVy5nb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogdGhpcy5sYXRsbmcsIG1hcDogdGhpcy5tYXAgfSk7XG4gICAgdGhpcy5nZXRBZGRyZXNzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldEFkZHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5mb3Jtc1NlcnZpY2UuZ2V0QWRkcmVzcyh0aGlzLmxhdGxuZy5sYXQsIHRoaXMubGF0bG5nLmxuZywgdGhpcy5nb29nbGVNYXBBcGlLZXkpXG4gICAgICAuc3Vic2NyaWJlKGFkZHJlc3MgPT4gdGhpcy5hZGRyZXNzID0gYWRkcmVzcy5yZXN1bHRzKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RBZGRyZXNzKGFkZHJlc3M6IHN0cmluZywgcGF0Y2g6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NJbnB1dCA9IGFkZHJlc3M7XG4gICAgY29uc3QgYWRkcmVzc1ZhbHVlID0ge1xuICAgICAgZnVsbEFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLnNwbGl0KCcsICcpWzBdIHx8IGFkZHJlc3MsXG4gICAgICBjaXR5OiBhZGRyZXNzLnNwbGl0KCcsICcpWzFdIHx8ICcnLFxuICAgICAgY291bnRyeTogYWRkcmVzcy5zcGxpdCgnLCAnKVsyXSB8fCAnJyxcbiAgICAgIGxhdDogdGhpcy5sYXRsbmcubGF0IHx8ICcnLFxuICAgICAgbG5nOiB0aGlzLmxhdGxuZy5sbmcgfHwgJydcbiAgICB9O1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0ucGF0Y2hWYWx1ZShhZGRyZXNzVmFsdWUpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9LCA1MDApO1xuXG4gICAgaWYgKCFwYXRjaCkge1xuICAgICAgdGhpcy50b2dnbGVNYXAoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0QWRkcmVzc1RleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3Jtc1NlcnZpY2UuZ2V0TWVzc2FnZSgnU0VMRUNUX0FERFJFU1MnKTtcbiAgfVxufVxuIl19