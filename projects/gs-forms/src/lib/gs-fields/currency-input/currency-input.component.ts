import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GCurrencyField } from '../../gs-forms.widgets';
import { GFieldValidatorType, GFieldCountryCode } from '../../gs-forms.enums';
import { LOCATION } from '../../gs-forms.constants';

@Component({
  selector: 'gs-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.sass']
})
export class GsCurrencyInputComponent implements OnChanges {
  @Input() public field: GCurrencyField;
  @Input() public formGroup: FormGroup;
  @Input() private countryGlobal: GFieldCountryCode;

  @ViewChild('inputElement', { static: true }) inputElement: ElementRef;

  public pattern: string | RegExp;
  public prefix: string;
  public suffix: string;
  public value = '';

  private thousandsSeparator: string;
  private decimalSeparator: string;
  private precision: number;

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

    this.prefix = location.currencyFormat.symbol;
    this.suffix = location.currencyFormat.code;
    this.thousandsSeparator = location.currencyFormat.thousands;
    this.decimalSeparator = location.currencyFormat.decimal;
    this.precision = location.currencyFormat.precision;

    if (changes.field.currentValue.config.value) {
      this.value = changes.field.currentValue.config.value.toString().replace('.', '');
    }

    this.formatCurrency(false);
  }

  public formatCurrency(keyup: boolean) {
    let inputVal = this.value || '0';

    // mark input as dirty
    if (keyup) {
      this.formGroup.controls[this.field.config.model].markAsDirty();
    }

    // remove any leading zeros
    if (inputVal.substring(0, 1) === '0') {
      inputVal = inputVal.replace(/^[0|\D]*/, '');
    }

    // format decimal if applies
    if (!inputVal || inputVal.length === 1 && inputVal.substring(0, 1) === '0') {
      let emptyDecimals = '0';

      if (this.precision > 0) {
        for (let index = 0; index < this.precision; index++) {
          emptyDecimals = emptyDecimals + '0';
        }
      }
      inputVal = emptyDecimals;
    }

    const cleanValue = inputVal.replace(/\D/g, '');

    let decimals = null;
    let thousands = null;

    // format number as currency
    if (this.precision > 0) {
      decimals = cleanValue.slice(this.precision - this.precision * 2);

      if (decimals.length < this.precision) {
        for (let index = 0; index < this.precision - Number(decimals); index++) {
          decimals = '0' + decimals;
        }
        thousands = '0';
      } else {
        thousands = cleanValue.substring(0, cleanValue.length - this.precision) || '0';
      }

    } else {
      thousands = cleanValue;
    }

    const formattedThousands = thousands.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
    const controlValue = `${thousands}${decimals ? '.' + decimals : ''}`;

    this.value = formattedThousands + (decimals ? this.decimalSeparator + decimals : '');
    
    setTimeout(() => {
      this.formGroup.controls[this.field.config.model].patchValue(Number(controlValue));
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    });
  }

  public focusInput() {
    this.inputElement.nativeElement.focus();
  }

  public returnBuildingError() {
    return console.error(
      'GS Form building err: Please provide country for currency field:' + '\n\n' +
      'In your component make sure you are passing a valid country to `GCurrencyField`:' + '\n\n' +
      '\xa0' + 'public formFields: GFormFields = [' + '\n' +
      '\xa0\xa0' + 'new GCurrencyField({' + '\n' +
      '\xa0\xa0\xa0' + `model: 'currency',` + '\n' +
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
