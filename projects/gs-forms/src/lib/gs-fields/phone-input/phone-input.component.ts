import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GPhoneField } from '../../gs-forms.widgets';
import { GFieldValidatorType, GFieldCountryCode } from '../../gs-forms.enums';
import { LOCATION } from '../../gs-forms.constants';

@Component({
  selector: 'gs-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.sass']
})
export class GsPhoneInputComponent implements OnChanges {
  @Input() public field: GPhoneField;
  @Input() public formGroup: FormGroup;
  @Input() private countryGlobal: GFieldCountryCode;

  @ViewChild('inputElement', { static: true }) inputElement: ElementRef;

  public countryCode: string;
  public country: string;
  public countryCodeOptions: Array<{ code: string, country: string }>;
  public showCountryOptions = false;
  public phoneMask: string;
  public editCountry: boolean;
  public value = '';

  public fieldValidatorType = GFieldValidatorType;

  ngOnChanges(changes: SimpleChanges) {
    let location = null;

    if (changes.field && changes.field.currentValue.config.country) {
      location = LOCATION[changes.field.currentValue.config.country];

    } else if (changes.countryGlobal && changes.countryGlobal.currentValue) {
      location = LOCATION[changes.countryGlobal.currentValue];

    } else {
      return this.returnBuildingError();
    }

    this.phoneMask = location.phoneFormat.mask;

    if (changes.field.currentValue.config.value) {
      this.value = changes.field.currentValue.config.value.toString();
    }

    this.countryCode = location.country.alpha2Code.toLowerCase();
    this.country = location.phoneFormat.code;
    this.editCountry = changes.field.currentValue.config.editCountry;
    this.countryCodeOptions = this.setCountryCodeOptions();

    this.formatPhone(false);
  }

  public formatPhone(keyup: boolean) {
    const inputVal = this.value || '';

    if (inputVal === '') { return; }

    // mark input as dirty
    if (keyup) {
      this.formGroup.controls[this.field.config.model].markAsDirty();
    }

    let j = 0;
    const pattern = this.phoneMask;
    const sign1 = '0';
    const sign2 = ' ';
    const patternLength = pattern.replace(/-/gi, '').length;
    const oldString = inputVal.replace(/\D/g, '');
    const newString = [];
    const sRegEx = new RegExp(sign2, 'gi');
    const cleanString = oldString.replace(sRegEx, '');

    if (cleanString.length > patternLength) {
      return oldString.substring(0, pattern.length);
    }

    for (let i = 0; i < pattern.length; i++) {

      if (j === cleanString.length) {
        break;
      }

      if (pattern[i] === sign1) {
        newString[i] = cleanString[j];
        j++;
      } else if (pattern[i] === sign2) {
        newString[i] = sign2;
      }

    }

    this.value = newString.join('');

    const controlValue = inputVal;
    this.formGroup.controls[this.field.config.model].patchValue(controlValue);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
  }

  public updatePhoneMask(country: string) {
    const location = LOCATION[country];

    this.phoneMask = location.phoneFormat.mask;
    this.countryCode = location.country.alpha2Code.toLowerCase();
    this.country = location.phoneFormat.code;

    this.formatPhone(false);
    this.toggleCountryOptions(true);
  }

  private setCountryCodeOptions() {
    const countryCodeOptions = [];

    for (const key in LOCATION) {
      if (LOCATION.hasOwnProperty(key)) {
        if (!LOCATION[key].disabled) {
          countryCodeOptions.push({
            code: LOCATION[key].phoneFormat.code,
            country: LOCATION[key].country.alpha2Code.toLowerCase()
          });
        }
      }
    }

    return countryCodeOptions;
  }

  public toggleCountryOptions(close?: boolean) {
    this.showCountryOptions = close ? false : !this.showCountryOptions;
  }

  public returnBuildingError() {
    return console.error(
      'GS Form building err: Please provide country for phone field:' + '\n\n' +
      'In your component make sure you are passing a valid country to `GPhoneField`:' + '\n\n' +
      '\xa0' + 'public formFields: GFormFields = [' + '\n' +
      '\xa0\xa0' + 'new GPhoneField({' + '\n' +
      '\xa0\xa0\xa0' + `model: 'phone',` + '\n' +
      '\xa0\xa0\xa0' + `country: GFieldCountryCode.CO` + '\n' +
      '\xa0\xa0\xa0' + '// other properties' + '\n' +
      '\xa0\xa0' + '}),' + '\n' +
      '\xa0' + '];' + '\n\n' +
      'Or In your component make sure you are passing a valid country to `GFormOptions`:' + '\n\n' +
      '\xa0' + 'public formOptions: GFormOptions = {' + '\n' +
      '\xa0\xa0' + 'country: GFieldCountryCode.CO' + '\n' +
      '\xa0\xa0' + '// other properties' + '\n' +
      '\xa0' + '};' + '\n\n'
    );
  }
}
