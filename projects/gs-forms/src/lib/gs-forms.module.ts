import { GsButtonComponent } from './gs-fields/button/button.component';
import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import { GStyles } from './gs-forms.models';
import { DigitOnlyDirective } from './gs-directives/digit-only/digit-only.directive';
import { ClickOutsideDirective } from './gs-directives/click-outside/click-outside.directive';
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
import { GsTaxTypeComponent } from './gs-fields/tax-type/tax-type.component';
import { GsSeparatedByCommaComponent } from './gs-fields/separated-by-comma/separated-by-comma.component';
import { GsFileInputComponent } from './gs-fields/file-input/file-input.component';
import { GsDividerComponent } from './gs-fields/divider/divider.component';
import { GsTwoDataInputComponent } from './gs-fields/two-data-input/two-data-input.component';
import { GsMultiselectComponent } from './gs-fields/multiselect/multiselect.component';
import { GsMapFieldComponent } from './gs-fields/map-field/map-field.component';
import { GsColorPickerComponent } from './gs-fields/color-picker/color-picker.component';
import { GsShowDataComponent } from './gs-fields/show-data/show-data.component';
import { GsFormsComponent } from './gs-forms.component';
import { GsFormsService } from './gs-forms.service';
import { GsTimePickerComponent } from './gs-fields';

const directive = [
  DigitOnlyDirective,
  ClickOutsideDirective,
];

const widgets = [
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
  GsTaxTypeComponent,
  GsSeparatedByCommaComponent,
  GsFileInputComponent,
  GsDividerComponent,
  GsTwoDataInputComponent,
  GsMultiselectComponent,
  GsColorPickerComponent,
  GsMapFieldComponent,
  GsTimePickerComponent,
  GsButtonComponent,
  GsShowDataComponent,
  GsFormsComponent
];

@NgModule({
  declarations: [
    ...directive,
    ...widgets
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    GsFormsService
  ],
  exports: [
    ...directive,
    ...widgets
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class GsFormsModule {
  public static forRoot(styles?: GStyles, googleMapApiKey?: string, rppStyles = false): ModuleWithProviders {
    if (googleMapApiKey && !document.getElementById('google-map-script')) {
      const googleScript = document.createElement('script');
      googleScript.defer = true;
      googleScript.async = true;
      googleScript.id = 'google-map-script';
      googleScript.type = 'text/javascript';
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&libraries=places`;
      document.body.appendChild(googleScript);
    }

    return {
      ngModule: GsFormsModule,
      providers: [
        {
          provide: 'customStyles',
          useValue: styles
        },
        {
          provide: 'googleMapApiKey',
          useValue: googleMapApiKey
        },
        {
          provide: 'rppStyles',
          useValue: rppStyles
        }
      ]
    };
  }
}
