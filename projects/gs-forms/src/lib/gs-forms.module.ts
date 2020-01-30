import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { GsNumberInputComponent, GsTextInputComponent, GsToggleComponent } from './gs-fields';
import { DigitOnlyDirective } from './gs-directives';
import { GStyles } from './gs-forms.models';

import { GsFormsComponent } from './gs-forms.component';
import { GsTextareaComponent } from './gs-fields/textarea/textarea.component';
import { GsPasswordInputComponent } from './gs-fields/password-input/password-input.component';
import { GsCheckboxComponent } from './gs-fields/checkbox/checkbox.component';
import { GsRadioButtonComponent } from './gs-fields/radio-button/radio-button.component';
import { GsDropdownComponent } from './gs-fields/dropdown/dropdown.component';
import { GsCurrencyInputComponent } from './gs-fields/currency-input/currency-input.component';
import { GsPhoneInputComponent } from './gs-fields/phone-input/phone-input.component';
import { GsDatePickerComponent } from './gs-fields/datepicker/datepicker.component';

const fields = [
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
  GsDatePickerComponent
];

const directives = [
  DigitOnlyDirective
];

@NgModule({
  declarations: [
    ...fields,
    ...directives,
    GsFormsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GsFormsComponent,
    ...fields,
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
