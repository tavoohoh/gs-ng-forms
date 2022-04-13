import { ElementRef, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { GMapField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsMapFieldComponent extends GsGenericFieldComponent implements OnInit, OnChanges {
    field: GMapField;
    private googleMapApiKey;
    mapElement: ElementRef;
    search: ElementRef;
    showMap: boolean;
    showMapModal: boolean;
    private latlng;
    private map;
    private marker;
    address: any;
    addressInput: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setLanLngGeolocation;
    valid(keyup: any, valueGoogleSearch?: any): void;
    loadMap(): void;
    toggleMap(): void;
    private getSearchAddress;
    private addMarker;
    private getAddress;
    selectAddress(address: string, patch: boolean): void;
    selectAddressText(): string;
}
