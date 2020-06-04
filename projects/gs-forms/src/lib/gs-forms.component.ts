import {
  Component,
  Input,
  Inject,
  HostBinding,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  AfterViewChecked,
  ViewChildren,
  QueryList
} from '@angular/core';
import { FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

import { GsFormsService } from './gs-forms.service';
import { GFieldSelector, GFieldValidatorType, GFieldValueButtonType } from './gs-forms.enums';
import { GFormFields, GStyles, GFormOptions, GField } from './gs-forms.models';
import { GsFileInputComponent } from './gs-fields/file-input/file-input.component';
import { GsDatePickerComponent } from './gs-fields/datepicker/datepicker.component';

@Component({
  selector: 'gs-form',
  templateUrl: './gs-forms.component.html',
  styleUrls: ['./gs-forms.component.sass']
})
export class GsFormsComponent implements AfterViewChecked, OnChanges {
  /**
   * Input: formOptions: GFormOptions
   *
   * @description
   * Set custom configuration to the form
   *
   * @example
   * public formOptions: GFormOptions = {
   *   country: GFieldCountryCode.CO,
   *   fieldValues: {
   *     checkbox: [
   *       {
   *         value: true,
   *         text: 'true'
   *       }
   *     ]
   *   },
   *   layout: {
   *     columns: 'repeat(4, 1fr)',
   *   }
   * };
   */
  @Input() public formOptions: GFormOptions;
  /**
   * Input: formFields: GFormFields
   *
   * @description
   * Form fields array
   *
   * @example
   * public formFields: GFormFields = [
   *   new GTextField({
   *     model: 'text',
   *     label: 'TEXT',
   *     placeholder: 'TEXT_INPUT',
   *     value: 'Hello text input',
   *     validators: {
   *       [GFieldValidatorType.REQUIRED]: true
   *     },
   *   }),
   * ];
   */
  @Input() public formFields: GFormFields;
  /**
   * Get form values. formGroup: FormGroup `form.values`
   *
   * @deprecated
   */
  @Output() private formValue = new EventEmitter<[{ key: string }]>();
  /**
   * Get form group. formGroup: FormGroup `form`
   */
  @Output() private form = new EventEmitter<FormGroup>();
  /**
   * Get form group changes. formGroup: FormGroup `form`
   */
  @Output() private formChanges = new EventEmitter<FormGroup>();
  /**
   * Get button event selected
   */
  @Output() private customButtonClick = new EventEmitter<string>();

  @ViewChildren(GsFileInputComponent) fileInputComponent: QueryList<GsFileInputComponent>;
  @ViewChildren(GsDatePickerComponent) datePickerComponent: QueryList<GsDatePickerComponent>;

  public formGroup: FormGroup;
  public fieldSelector = GFieldSelector;
  public fieldValidatorType = GFieldValidatorType;
  private customStyles: GStyles;
  private destroyed$ = new Subject();
  public googleMapApiKey: string;
  public rppStyles: boolean;

  constructor(
    private formsService: GsFormsService,
    private sanitizer: DomSanitizer,
    private cdRef: ChangeDetectorRef,
    @Inject('customStyles') customStyles,
    @Inject('googleMapApiKey') apikey,
    @Inject('rppStyles') rppStyles
  ) {
    this.customStyles = customStyles;
    this.googleMapApiKey = apikey;
    this.rppStyles = rppStyles;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.formFields && changes.formFields.currentValue) {
      if (this.formGroup) {
        this.formGroup.reset();
      }

      const form = this.formsService.buildForm(changes.formFields.currentValue);

      this.formFields = changes.formFields.currentValue;
      this.formGroup = form;

      if (this.rppStyles) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.formFields.length; i++) {
          if (this.formFields[i].config.value && !this.formFields[i].notWidget
            || (this.getNameObject(this.formFields[i]) !== 'GTextField' && this.getNameObject(this.formFields[i]) !== 'GNumberField')) {
            this.formFields[i] = {
              ... this.formFields[i],
              rappyStyle: {
                displayInput: true
              }
            };
          }
        }
      }

      this.formGroup.updateValueAndValidity();
    }

    if (this.formGroup) {
      this.onFormChanges();
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  private onFormChanges(): void {
    this.formGroup.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.formChanges.emit(this.formGroup);
      });

    const fieldWithDisplay = this.formFields.find((field: GField) => {
      if (field.config.displayIf && !field.notWidget) {
        return field;
      }
    });

    if (fieldWithDisplay) {
      this.formGroup.controls[fieldWithDisplay.config.displayIf.model].valueChanges
        .subscribe(() => {
          this.formGroup.controls[fieldWithDisplay.config.model].patchValue('');
          this.formGroup.controls[fieldWithDisplay.config.model].clearValidators();
          this.formGroup.controls[fieldWithDisplay.config.model].updateValueAndValidity();
        });
    }
  }

  public submit(): void {
    this.form.emit(this.formGroup);
    // tslint:disable-next-line: deprecation
    this.formValue.emit(this.formGroup.value);
  }

  public canSubmit($event): void {
    if (this.formOptions.onErrorDisableSubmit && this.formGroup.invalid) {
      $event.preventDefault();
      return;
    } else {
      this.submit();
    }
  }

  private getNameObject(field: any) {
    return field.__proto__.constructor.name;
  }

  public isRequired(field: any): boolean {
    return field.config.validators ? field.config.validators[this.fieldValidatorType.REQUIRED] : false;
  }

  public validateField(field: any): ValidationErrors {
    return this.formGroup.controls[field].dirty && this.formGroup.controls[field].errors;
  }

  public getFieldError(field: any): string {
    return this.formsService.fieldError(this.formGroup.controls[field]);
  }

  public sanitizeStyle(value: string) {
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }

  public checkCondition(field: GField) {
    if (!field.config.displayIf) {
      return true;
    }

    if (this.formGroup.controls[field.config.displayIf.model].value === field.config.displayIf.hasValue) {
      const validators = [];
      const fields = field.config.validators;

      for (const validator in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, validator) && fields[validator]) {
          validators.push(this.formsService.buildErrors(validator, fields[validator]));
        }
      }

      if (this.formGroup.controls[field.config.model]) {
        this.formGroup.controls[field.config.model].setValidators(Validators.compose(validators));
        this.formGroup.controls[field.config.model].updateValueAndValidity();
      }

      return true;
    } else if (this.formGroup.controls[field.config.model]) {
      this.formGroup.controls[field.config.model].clearValidators();
      this.formGroup.controls[field.config.model].updateValueAndValidity();
    }

    return false;
  }

  /**
   * Custom styles
   */
  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    if (this.rppStyles) {
      let variables = '';
      variables = variables + `--gs-input-padding: none !important;`;
      variables = variables + `--gs-input-color: #332927 !important;`;
      variables = variables + `--gs-input-font-weight: 600 !important;`;
      variables = variables + `--gs-input-border-size: none !important;`;
      variables = variables + `--gs-input-border-style: none !important;`;
      variables = variables + `--gs-input-border-color: none !important;`;
      variables = variables + `--gs-input-margin-bottom: 2px !important;`;

      variables = variables + `--gs-color-neutral: #332927 !important;`;
      variables = variables + `--gs-color-primary: #332927 !important;`;

      variables = variables + `--gs-primary-button-background: #706967 !important;`;
      variables = variables + `--gs-primary-button-border-color: none !important;`;

      variables = variables + `--gs-layout-padding: 1rem 0 !important;`;


      if (this.formOptions && this.formOptions.layout) {

        if (this.formOptions.layout.columns) {
          if (typeof this.formOptions.layout.columns === 'number') {
            // if typeof number
            variables = variables + `--gs-layout-columns-quantity: repeat(${this.formOptions.layout.columns}, 1fr)!important;`;
          } else {
            // if typeof string
            variables = variables + `--gs-layout-columns-quantity: ${this.formOptions.layout.columns}!important;`;
          }
        }
      }
      return this.sanitizer.bypassSecurityTrustStyle(
        variables
      );
    }

    if (this.customStyles) {
      let variables = '';

      // colors
      if (this.customStyles.color) {
        if (this.customStyles.color.font) {
          variables = variables + `--gs-color-font: ${this.customStyles.color.font}!important;`;
        }

        if (this.customStyles.color.primary) {
          variables = variables + `--gs-color-primary: ${this.customStyles.color.primary}!important;`;
        }

        if (this.customStyles.color.secondary) {
          variables = variables + `--gs-color-secondary: ${this.customStyles.color.secondary}!important;`;
        }

        if (this.customStyles.color.neutral) {
          variables = variables + `--gs-color-neutral: ${this.customStyles.color.neutral}!important;`;
        }

        if (this.customStyles.color.border) {
          variables = variables + `--gs-color-border: ${this.customStyles.color.border}!important;`;
        }

        if (this.customStyles.color.white) {
          variables = variables + `--gs-color-white: ${this.customStyles.color.white}!important;`;
        }
      }

      // ui
      if (this.customStyles.ui) {
        // font
        if (this.customStyles.ui.fontSize) {
          variables = variables + `--gs-font-size: ${this.customStyles.ui.fontSize}!important;`;
        }

        // padding
        if (this.customStyles.ui.padding) {
          variables = variables + `--gs-padding: ${this.customStyles.ui.padding}!important;`;
        }

        // opacity
        if (this.customStyles.ui.disabledOpacity) {
          variables = variables + `--gs-disabled-opacity: ${this.customStyles.ui.disabledOpacity}!important;`;
        }

        // ui input
        if (this.customStyles.ui.input) {
          if (this.customStyles.ui.input.padding) {
            variables = variables + `--gs-input-padding: ${this.customStyles.ui.input.padding}!important;`;
          }

          if (this.customStyles.ui.input.color) {
            variables = variables + `--gs-input-color: ${this.customStyles.ui.input.color}!important;`;
          }

          if (this.customStyles.ui.input.background) {
            variables = variables + `--gs-input-background: ${this.customStyles.ui.input.background}!important;`;
          }

          if (this.customStyles.ui.input.borderSize) {
            variables = variables + `--gs-input-border-size: ${this.customStyles.ui.input.borderSize}!important;`;
          }

          if (this.customStyles.ui.input.borderStyle) {
            variables = variables + `--gs-input-border-style: ${this.customStyles.ui.input.borderStyle}!important;`;
          }

          if (this.customStyles.ui.input.borderColor) {
            variables = variables + `--gs-input-border-color: ${this.customStyles.ui.input.borderColor}!important;`;
          }

          if (this.customStyles.ui.input.borderRadius) {
            variables = variables + `--gs-input-border-radius: ${this.customStyles.ui.input.borderRadius}!important;`;
          }

          if (this.customStyles.ui.input.borderTop) {
            variables = variables + `--gs-input-border-top: ${this.customStyles.ui.input.borderTop}!important;`;
          }

          if (this.customStyles.ui.input.borderRight) {
            variables = variables + `--gs-input-border-right: ${this.customStyles.ui.input.borderRight}!important;`;
          }

          if (this.customStyles.ui.input.borderBottom) {
            variables = variables + `--gs-input-border-bottom: ${this.customStyles.ui.input.borderRadius}!important;`;
          }

          if (this.customStyles.ui.input.borderLeft) {
            variables = variables + `--gs-input-border-left: ${this.customStyles.ui.input.borderLeft}!important;`;
          }
        }

        // ui primary button
        if (this.customStyles.ui.primaryButton) {
          if (this.customStyles.ui.primaryButton.padding) {
            variables = variables + `--gs-primary-button-padding: ${this.customStyles.ui.primaryButton.padding}!important;`;
          }

          if (this.customStyles.ui.primaryButton.color) {
            variables = variables + `--gs-primary-button-color: ${this.customStyles.ui.primaryButton.color}!important;`;
          }

          if (this.customStyles.ui.primaryButton.background) {
            variables = variables + `--gs-primary-button-background: ${this.customStyles.ui.primaryButton.background}!important;`;
          }

          if (this.customStyles.ui.primaryButton.borderColor) {
            variables = variables + `--gs-primary-button-border-color: ${this.customStyles.ui.primaryButton.borderColor}!important;`;
          }

          if (this.customStyles.ui.primaryButton.borderRadius) {
            variables = variables + `--gs-primary-button-border-radius: ${this.customStyles.ui.primaryButton.borderRadius}!important;`;
          }
        }

        // ui secondary button
        if (this.customStyles.ui.secondaryButton) {
          if (this.customStyles.ui.secondaryButton.padding) {
            variables = variables + `--gs-secondary-button-padding: ${this.customStyles.ui.secondaryButton.padding}!important;`;
          }

          if (this.customStyles.ui.secondaryButton.color) {
            variables = variables + `--gs-secondary-button-color: ${this.customStyles.ui.secondaryButton.color}!important;`;
          }

          if (this.customStyles.ui.secondaryButton.background) {
            variables = variables + `--gs-secondary-button-background: ${this.customStyles.ui.secondaryButton.background}!important;`;
          }

          if (this.customStyles.ui.secondaryButton.borderColor) {
            variables = variables + `--gs-secondary-button-border-color: ${this.customStyles.ui.secondaryButton.borderColor}!important;`;
          }

          if (this.customStyles.ui.secondaryButton.borderRadius) {
            variables = variables + `--gs-secondary-button-border-radius: ${this.customStyles.ui.secondaryButton.borderRadius}!important;`;
          }
        }
      }

      // layout
      if (this.formOptions && this.formOptions.layout) {

        if (this.formOptions.layout.columns) {
          if (typeof this.formOptions.layout.columns === 'number') {
            // if typeof number
            variables = variables + `--gs-layout-columns-quantity: repeat(${this.formOptions.layout.columns}, 1fr)!important;`;
          } else {
            // if typeof string
            variables = variables + `--gs-layout-columns-quantity: ${this.formOptions.layout.columns}!important;`;
          }
        }

        if (this.formOptions.layout.innerPadding) {
          variables = variables + `--gs-layout-padding: ${this.formOptions.layout.innerPadding}!important;`;
        }
      }

      return this.sanitizer.bypassSecurityTrustStyle(
        variables
      );
    }
  }

  public focusInput(index: number) {
    if (!this.rppStyles ||
      (this.formFields[index] && this.formFields[index].rappyStyle && this.formFields[index].rappyStyle.displayInput)) {
      return;
    }

    this.formFields[index] = {
      ... this.formFields[index],
      rappyStyle: {
        displayInput: true
      }
    };

    setTimeout(() => {
      document.getElementById(`label${index}`).click();
    }, 500);

  }

  public formActions(action: string, id?: string) {
    switch (action) {
      case GFieldValueButtonType.SUBMIT:
        this.submit();
        break;
      case GFieldValueButtonType.RESET:
        if (this.formGroup) {
          this.formGroup.reset();

          if (this.fileInputComponent !== undefined) {
            this.fileInputComponent.forEach(el => el.resetField());
          }

          if (this.datePickerComponent !== undefined) {
            this.datePickerComponent.forEach(el => el.resetField());
          }
        }
        break;
      case GFieldValueButtonType.CUSTOM:
        this.customButtonClick.emit(id);
        break;
    }
  }
}
