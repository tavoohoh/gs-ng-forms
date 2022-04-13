import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { GSeparatedByComma } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-separated-by-comma',
  templateUrl: './separated-by-comma.component.html',
  styleUrls: ['./separated-by-comma.component.sass']
})
export class GsSeparatedByCommaComponent extends GsGenericFieldComponent implements OnChanges {
  @Input() public field: GSeparatedByComma;
  @ViewChild('inputElement', { static: true }) inputElement: ElementRef;
  public fieldOption: Array<string> = [];
  public value = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field && changes.field.currentValue && changes.field.currentValue.config.value) {
      this.fieldOption = changes.field.currentValue.config.value.split(',');
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
      const valuesAsString = this.fieldOption.join(',');
      this.formGroup.controls[this.field.config.model].patchValue(valuesAsString);
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
      this.value = '';
      return;
    }
  }
}
