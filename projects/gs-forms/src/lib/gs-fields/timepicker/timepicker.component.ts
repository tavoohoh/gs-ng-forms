import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GTimeField } from '../../gs-forms.widgets';
import { GsFormsService } from '../../gs-forms.service';

@Component({
  selector: 'gs-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.sass']
})
export class GsTimePickerComponent implements OnChanges {
  @Input() public field: GTimeField;
  @Input() public formGroup: FormGroup;

  public fieldValueHours: any;
  public fieldValueMinutes: any;
  public fieldTouchedHours = false;
  public fieldTouchedMinutes = false;
  public validateFormatHours = false;
  public validateFormatMinutes = false;
  public validateRequiredHours = false;
  public validateRequiredMinutes = false;

  public requiredTextArray = [
    'ERR_REQUIRED_MIN',
    'ERR_REQUIRED_HOUR',
    'ERR_REQUIRED_FULLTIME'
  ];

  public patternTextArray = [
    'ERR_PATTERN_MIN',
    'ERR_PATTERN_HOUR',
    'ERR_PATTERN_FULLTIME'
  ];

  constructor(private gsService: GsFormsService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field.currentValue) {
      this.field = changes.field.currentValue;
      if (this.field.config.value) {
        this.fieldValueHours = this.field.config.value.toString().split(':')[0] || '';
        this.fieldValueMinutes = this.field.config.value.toString().split(':')[1] || '';
      }
    }
  }

  public onUpdateValue(isMinuteInput: boolean = false) {
    this.validateFormatHours = false;
    this.validateFormatMinutes = false;
    if (!this.fieldTouchedMinutes && isMinuteInput) {
      this.fieldTouchedMinutes = true;
    }

    if (!this.fieldTouchedHours && !isMinuteInput) {
      this.fieldTouchedHours = true;
    }

    if (this.fieldValueHours && !(this.fieldValueHours > 0 && this.fieldValueHours <= 24) && this.fieldTouchedHours) {
      this.validateFormatHours = true;
    }

    if (this.fieldValueMinutes && !(this.fieldValueMinutes > 0 && this.fieldValueMinutes <= 60) && this.fieldTouchedMinutes) {
      this.validateFormatMinutes = true;
    }

    const updatedValue = {
      fullTime: `${this.fieldValueHours}:${this.fieldValueMinutes}`,
      hour: this.fieldValueHours,
      min: this.fieldValueMinutes
    };

    if (updatedValue.hour && updatedValue.min && !this.validateFormatHours && !this.validateFormatMinutes) {
      this.formGroup.controls[this.field.config.model].patchValue(updatedValue);
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    } else {
      this.formGroup.controls[this.field.config.model].patchValue(null);
    }
  }

  public getErrorText(index: number, isRequiredError: boolean = false) {
    return isRequiredError ?
      this.gsService.getValidationMessage(this.requiredTextArray[index]) :
      this.gsService.getValidationMessage(this.patternTextArray[index]);
  }

  public validateRequired(isMinuteInput: boolean) {
    const input = isMinuteInput ? 'Minutes' : 'Hours';
    this[`validateRequired${input}`] = this[`fieldTouched${input}`] &&
      (this[`fieldValue${input}`] === undefined || this[`fieldValue${input}`] === '');
    return this[`validateRequired${input}`];
  }
}
