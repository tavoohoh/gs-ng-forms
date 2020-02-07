import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GSeparatedByComma } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-separated-by-comma',
  templateUrl: './separated-by-comma.component.html',
  styleUrls: ['./separated-by-comma.component.sass']
})
export class GsSeparatedByCommaComponent implements OnChanges {
  @Input() public field: GSeparatedByComma;
  @Input() public formGroup: FormGroup;
  @Input() public fieldOption: Array<string> = [];
  @ViewChild('inputElement', { static: true }) inputElement: ElementRef;

  public fieldValidatorType = GFieldValidatorType;
  public value = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fieldOption && changes.fieldOption.currentValue) {
      this.fieldOption = changes.fieldOption.currentValue;
    } else {
      this.fieldOption = this.field.config.optionValues || [];
    }
  }

  public focusInput() {
    this.inputElement.nativeElement.focus();
  }

  public removeValue(valIndex: number) {
    this.fieldOption.splice(valIndex, 1);
  }

  public disableEnter(event: Event) {
    event.preventDefault();
  }

  public removeLastValue(event: any) {
    if (this.value === '' && event.keyCode === 8) {
      this.fieldOption.pop();
      return;
    }
  }

  public removeAll() {
    this.fieldOption = [];
  }

  public addValue(event: any) {
    if (this.value === '' || this.value === ',') {
      return;
    }

    if (event.keyCode === 188 || event.keyCode === 13) {
      const value = this.value.replace(/,/g, '');

      if (value === '') {
        return;
      }

      this.fieldOption.push(value);
      this.value = '';
      return;
    }
  }
}
