import { Component, OnInit, Input, Inject, HostBinding, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { GsFormsService } from './gs-forms.service';
import { GFieldSelector, GFieldValidatorType } from './gs-forms.enums';
import { GFormFields, GStyles, GFormOptions } from './gs-forms.models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gs-form',
  templateUrl: './gs-forms.component.html',
  styleUrls: ['./gs-forms.component.sass']
})
export class GsFormsComponent implements OnChanges {
  @Input() public formOptions: GFormOptions;
  @Input() public formFields: GFormFields;
  @Output() private formValue = new EventEmitter<[{ key: string }]>();
  @Output() private form = new EventEmitter<FormGroup>();

  public formGroup: FormGroup;
  public fieldSelector = GFieldSelector;
  public fieldValidatorType = GFieldValidatorType;

  private customStyles: GStyles;

  constructor(
    private formsService: GsFormsService,
    private sanitizer: DomSanitizer,
    @Inject('customStyles') customStyles
  ) {
    this.customStyles = customStyles;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.formFields && changes.formFields.currentValue) {
      this.formGroup = this.formsService.buildForm(changes.formFields.currentValue);
      this.formGroup.updateValueAndValidity();
    }
  }

  public submit() {
    this.form.emit(this.formGroup);
    this.formValue.emit(this.formGroup.value);
  }

  public validateField(field: any) {
    return this.formGroup.controls[field].dirty && this.formGroup.controls[field].errors;
  }

  public getFieldError(field: any): string {
    return this.formsService.fieldError(this.formGroup.controls[field]);
  }

  /**
   * Custom styles
   */
  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    if (this.customStyles) {
      let variables = '';

      // colors
      if (this.customStyles.color) {
        if (this.customStyles.color.font) {
          variables = variables + `--color-font: ${this.customStyles.color.font}!important;`;
        }

        if (this.customStyles.color.primary) {
          variables = variables + `--color-primary: ${this.customStyles.color.primary}!important;`;
        }

        if (this.customStyles.color.secondary) {
          variables = variables + `--color-secondary: ${this.customStyles.color.secondary}!important;`;
        }

        if (this.customStyles.color.neutral) {
          variables = variables + `--color-neutral: ${this.customStyles.color.neutral}!important;`;
        }

        if (this.customStyles.color.white) {
          variables = variables + `--color-white: ${this.customStyles.color.white}!important;`;
        }
      }

      // ui
      if (this.customStyles.ui) {
        // font
        if (this.customStyles.ui.fontSize) {
          variables = variables + `--ui-font-size: ${this.customStyles.ui.fontSize}!important;`;
        }

        // ui input
        if (this.customStyles.ui.input) {
          if (this.customStyles.ui.input.padding) {
            variables = variables + `--ui-input-padding: ${this.customStyles.ui.input.padding}!important;`;
          }

          if (this.customStyles.ui.input.color) {
            variables = variables + `--ui-input-color: ${this.customStyles.ui.input.color}!important;`;
          }

          if (this.customStyles.ui.input.background) {
            variables = variables + `--ui-input-background: ${this.customStyles.ui.input.background}!important;`;
          }

          if (this.customStyles.ui.input.borderSize) {
            variables = variables + `--ui-input-border-size: ${this.customStyles.ui.input.borderSize}!important;`;
          }

          if (this.customStyles.ui.input.borderStyle) {
            variables = variables + `--ui-input-border-style: ${this.customStyles.ui.input.borderStyle}!important;`;
          }

          if (this.customStyles.ui.input.borderColor) {
            variables = variables + `--ui-input-border-color: ${this.customStyles.ui.input.borderColor}!important;`;
          }

          if (this.customStyles.ui.input.borderRadius) {
            variables = variables + `--ui-input-border-radius: ${this.customStyles.ui.input.borderRadius}!important;`;
          }

          if (this.customStyles.ui.input.borderTop) {
            variables = variables + `--ui-input-border-top: ${this.customStyles.ui.input.borderTop}!important;`;
          }

          if (this.customStyles.ui.input.borderRight) {
            variables = variables + `--ui-input-border-right: ${this.customStyles.ui.input.borderRight}!important;`;
          }

          if (this.customStyles.ui.input.borderBottom) {
            variables = variables + `--ui-input-border-bottom: ${this.customStyles.ui.input.borderRadius}!important;`;
          }

          if (this.customStyles.ui.input.borderLeft) {
            variables = variables + `--ui-input-border-left: ${this.customStyles.ui.input.borderLeft}!important;`;
          }
        }

        // ui primary button
        if (this.customStyles.ui.primaryButton) {
          if (this.customStyles.ui.primaryButton.padding) {
            variables = variables + `--ui-primary-button-padding: ${this.customStyles.ui.primaryButton.padding}!important;`;
          }

          if (this.customStyles.ui.primaryButton.color) {
            variables = variables + `--ui-primary-button-color: ${this.customStyles.ui.primaryButton.color}!important;`;
          }

          if (this.customStyles.ui.primaryButton.background) {
            variables = variables + `--ui-primary-button-background: ${this.customStyles.ui.primaryButton.background}!important;`;
          }

          if (this.customStyles.ui.primaryButton.borderColor) {
            variables = variables + `--ui-primary-button-border-color: ${this.customStyles.ui.primaryButton.borderColor}!important;`;
          }

          if (this.customStyles.ui.primaryButton.borderRadius) {
            variables = variables + `--ui-primary-button-border-radius: ${this.customStyles.ui.primaryButton.borderRadius}!important;`;
          }
        }

        // ui secondary button
        if (this.customStyles.ui.secondaryButton) {
          if (this.customStyles.ui.secondaryButton.padding) {
            variables = variables + `--ui-secondary-button-padding: ${this.customStyles.ui.secondaryButton.padding}!important;`;
          }

          if (this.customStyles.ui.secondaryButton.color) {
            variables = variables + `--ui-secondary-button-color: ${this.customStyles.ui.secondaryButton.color}!important;`;
          }

          if (this.customStyles.ui.secondaryButton.background) {
            variables = variables + `--ui-secondary-button-background: ${this.customStyles.ui.secondaryButton.background}!important;`;
          }

          if (this.customStyles.ui.secondaryButton.borderColor) {
            variables = variables + `--ui-secondary-button-border-color: ${this.customStyles.ui.secondaryButton.borderColor}!important;`;
          }

          if (this.customStyles.ui.secondaryButton.borderRadius) {
            variables = variables + `--ui-secondary-button-border-radius: ${this.customStyles.ui.secondaryButton.borderRadius}!important;`;
          }
        }
      }

      // layout
      if (this.formOptions && this.formOptions.layout) {

        if (this.formOptions.layout.columns) {
          if (typeof this.formOptions.layout.columns === 'number') {
            // if typeof number
            variables = variables + `--layout-columns-quantity: repeat(${this.formOptions.layout.columns}, 1fr)!important;`;
          } else {
            // if typeof string
            variables = variables + `--layout-columns-quantity: ${this.formOptions.layout.columns}!important;`;
          }
        }

        if (this.formOptions.layout.innerPadding) {
          variables = variables + `--layout-padding: ${this.formOptions.layout.innerPadding}!important;`;
        }
      }

      return this.sanitizer.bypassSecurityTrustStyle(
        variables
      );
    }
  }

}
