import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GTaxDocumentTypeField } from '../../gs-forms.widgets';
import { GFieldValidatorType, GFieldCountryCode } from '../../gs-forms.enums';
import { LOCATION } from '../../gs-forms.constants';

@Component({
  selector: 'gs-tax-type',
  templateUrl: './tax-type.component.html',
  styleUrls: ['./tax-type.component.sass']
})
export class GsTaxTypeComponent implements OnChanges {
  @Input() public field: GTaxDocumentTypeField;
  @Input() public formGroup: FormGroup;
  @Input() private countryGlobal: GFieldCountryCode;

  public taxTypeOptions: Array<{
    name: string;
    value: any;
  }>;
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

    this.taxTypeOptions = location.tax;

    if (changes.field.currentValue.config && !changes.field.currentValue.config.value) {
      this.field.config.value = '';
      this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    }
  }

  public returnBuildingError() {
    return console.error(
      'GS Form building err: Please provide country for tax document type field:' + '\n\n' +
      'In your component make sure you are passing a valid country to `GTaxDocumentTypeField`:' + '\n\n' +
      '\xa0' + 'public formFields: GFormFields = [' + '\n' +
      '\xa0\xa0' + 'new GTaxDocumentTypeField({' + '\n' +
      '\xa0\xa0\xa0' + `model: 'taxType',` + '\n' +
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
