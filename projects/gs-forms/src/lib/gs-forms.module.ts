import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { GStyles } from './gs-forms.models';
import { DigitOnlyDirective } from './gs-directives/digit-only/digit-only.directive';
import { GsTextInputComponent } from './gs-fields/text-input/text-input.component';
import { GsTextareaComponent } from './gs-fields/textarea/textarea.component';
import { GsPasswordInputComponent } from './gs-fields/password-input/password-input.component';
import { GsNumberInputComponent } from './gs-fields/number-input/number-input.component';
import { GsToggleComponent } from './gs-fields/toggle/toggle.component';
import { GsCheckboxComponent } from './gs-fields/checkbox/checkbox.component';
import { GsRadioButtonComponent } from './gs-fields/radio-button/radio-button.component';
import { GsDropdownComponent } from './gs-fields/dropdown/dropdown.component';
import { GsCurrencyInputComponent } from './gs-fields/currency-input/currency-input.component';
import { GsPhoneInputComponent } from './gs-fields/phone-input/phone-input.component';
import { GsDatePickerComponent } from './gs-fields/datepicker/datepicker.component';
import { GsFormsComponent } from './gs-forms.component';
import { GsFormsService } from './gs-forms.service';

@NgModule({
  declarations: [
    DigitOnlyDirective,
    GsTextInputComponent,
    GsTextareaComponent,
    GsPasswordInputComponent,
    GsNumberInputComponent,
    GsToggleComponent,
    GsCheckboxComponent,
    GsRadioButtonComponent,
    GsDropdownComponent,
    GsCurrencyInputComponent,
    GsPhoneInputComponent,
    GsDatePickerComponent,
    GsFormsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GsFormsService
  ],
  exports: [
    DigitOnlyDirective,
    GsTextInputComponent,
    GsTextareaComponent,
    GsPasswordInputComponent,
    GsNumberInputComponent,
    GsToggleComponent,
    GsCheckboxComponent,
    GsRadioButtonComponent,
    GsDropdownComponent,
    GsCurrencyInputComponent,
    GsPhoneInputComponent,
    GsDatePickerComponent,
    GsFormsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class GsFormsModule {
  public static forRoot(styles?: GStyles): ModuleWithProviders {
    return {
      ngModule: GsFormsModule,
      providers: [
        {
          provide: 'customStyles',
          useValue: styles
        }
      ]
    };
  }
}
