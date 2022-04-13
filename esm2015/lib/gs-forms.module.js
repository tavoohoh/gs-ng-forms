var GsFormsModule_1;
import * as tslib_1 from "tslib";
import { GsButtonComponent } from './gs-fields/button/button.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { GsGenericFieldComponent } from './gs-fields/_generic-field/_generic-field.component';
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
import { GsSeparatedByCommaComponent } from './gs-fields/separated-by-comma/separated-by-comma.component';
import { GsFileInputComponent } from './gs-fields/file-input/file-input.component';
import { GsDividerComponent } from './gs-fields/divider/divider.component';
import { GsTwoDataInputComponent } from './gs-fields/two-data-input/two-data-input.component';
import { GsMultiselectComponent } from './gs-fields/multiselect/multiselect.component';
import { GsMapFieldComponent } from './gs-fields/map-field/map-field.component';
import { GsColorPickerComponent } from './gs-fields/color-picker/color-picker.component';
import { GsShowDataComponent } from './gs-fields/show-data/show-data.component';
import { GsTimePickerComponent } from './gs-fields';
import { GsFormComponent } from './gs-form.component';
import { GsFormsService } from './gs-forms.service';
const directive = [
    DigitOnlyDirective,
    ClickOutsideDirective,
];
const widgets = [
    GsGenericFieldComponent,
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
    GsFormComponent
];
let GsFormsModule = GsFormsModule_1 = class GsFormsModule {
    static forRoot(styles, googleMapApiKey) {
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
            ngModule: GsFormsModule_1,
            providers: [
                {
                    provide: 'customStyles',
                    useValue: styles
                },
                {
                    provide: 'googleMapApiKey',
                    useValue: googleMapApiKey
                }
            ]
        };
    }
};
GsFormsModule = GsFormsModule_1 = tslib_1.__decorate([
    NgModule({
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
], GsFormsModule);
export { GsFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdzL25nLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2dzLWZvcm1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQXVCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxN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QUFtQjtZQUNuQixnQkFBZ0I7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxjQUFjO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxHQUFHLFNBQVM7WUFDWixHQUFHLE9BQU87U0FDWDtRQUNELE9BQU8sRUFBRTtZQUNQLGdCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxhQUFhLENBMEJ6QjtTQTFCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3NCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBHU3R5bGVzIH0gZnJvbSAnLi9ncy1mb3Jtcy5tb2RlbHMnO1xuaW1wb3J0IHsgR3NHZW5lcmljRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9fZ2VuZXJpYy1maWVsZC9fZ2VuZXJpYy1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlnaXRPbmx5RGlyZWN0aXZlIH0gZnJvbSAnLi9ncy1kaXJlY3RpdmVzL2RpZ2l0LW9ubHkvZGlnaXQtb25seS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9ncy1kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR3NUZXh0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEdzVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NQYXNzd29yZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvcGFzc3dvcmQtaW5wdXQvcGFzc3dvcmQtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEdzTnVtYmVySW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9udW1iZXItaW5wdXQvbnVtYmVyLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc1RvZ2dsZUNvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL3RvZ2dsZS90b2dnbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEdzQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NSYWRpb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEdzRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NDdXJyZW5jeUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvY3VycmVuY3ktaW5wdXQvY3VycmVuY3ktaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEdzUGhvbmVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL3Bob25lLWlucHV0L3Bob25lLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEdzU2VwYXJhdGVkQnlDb21tYUNvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL3NlcGFyYXRlZC1ieS1jb21tYS9zZXBhcmF0ZWQtYnktY29tbWEuY29tcG9uZW50JztcbmltcG9ydCB7IEdzRmlsZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0RpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEdzVHdvRGF0YUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvdHdvLWRhdGEtaW5wdXQvdHdvLWRhdGEtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEdzTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NNYXBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL21hcC1maWVsZC9tYXAtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEdzQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc1Nob3dEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvc2hvdy1kYXRhL3Nob3ctZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMnO1xuaW1wb3J0IHsgR3NGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0Zvcm1zU2VydmljZSB9IGZyb20gJy4vZ3MtZm9ybXMuc2VydmljZSc7XG5cbmNvbnN0IGRpcmVjdGl2ZSA9IFtcbiAgRGlnaXRPbmx5RGlyZWN0aXZlLFxuICBDbGlja091dHNpZGVEaXJlY3RpdmUsXG5dO1xuXG5jb25zdCB3aWRnZXRzID0gW1xuICBHc0dlbmVyaWNGaWVsZENvbXBvbmVudCxcbiAgR3NUZXh0SW5wdXRDb21wb25lbnQsXG4gIEdzVGV4dGFyZWFDb21wb25lbnQsXG4gIEdzUGFzc3dvcmRJbnB1dENvbXBvbmVudCxcbiAgR3NOdW1iZXJJbnB1dENvbXBvbmVudCxcbiAgR3NUb2dnbGVDb21wb25lbnQsXG4gIEdzQ2hlY2tib3hDb21wb25lbnQsXG4gIEdzUmFkaW9CdXR0b25Db21wb25lbnQsXG4gIEdzRHJvcGRvd25Db21wb25lbnQsXG4gIEdzQ3VycmVuY3lJbnB1dENvbXBvbmVudCxcbiAgR3NQaG9uZUlucHV0Q29tcG9uZW50LFxuICBHc0RhdGVQaWNrZXJDb21wb25lbnQsXG4gIEdzU2VwYXJhdGVkQnlDb21tYUNvbXBvbmVudCxcbiAgR3NGaWxlSW5wdXRDb21wb25lbnQsXG4gIEdzRGl2aWRlckNvbXBvbmVudCxcbiAgR3NUd29EYXRhSW5wdXRDb21wb25lbnQsXG4gIEdzTXVsdGlzZWxlY3RDb21wb25lbnQsXG4gIEdzQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gIEdzTWFwRmllbGRDb21wb25lbnQsXG4gIEdzVGltZVBpY2tlckNvbXBvbmVudCxcbiAgR3NCdXR0b25Db21wb25lbnQsXG4gIEdzU2hvd0RhdGFDb21wb25lbnQsXG4gIEdzRm9ybUNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uZGlyZWN0aXZlLFxuICAgIC4uLndpZGdldHNcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEdzRm9ybXNTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5kaXJlY3RpdmUsXG4gICAgLi4ud2lkZ2V0c1xuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdzRm9ybXNNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3Qoc3R5bGVzPzogR1N0eWxlcywgZ29vZ2xlTWFwQXBpS2V5Pzogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgaWYgKGdvb2dsZU1hcEFwaUtleSAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZS1tYXAtc2NyaXB0JykpIHtcbiAgICAgIGNvbnN0IGdvb2dsZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgZ29vZ2xlU2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICAgIGdvb2dsZVNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICBnb29nbGVTY3JpcHQuaWQgPSAnZ29vZ2xlLW1hcC1zY3JpcHQnO1xuICAgICAgZ29vZ2xlU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIGdvb2dsZVNjcmlwdC5zcmMgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0ke2dvb2dsZU1hcEFwaUtleX0mbGlicmFyaWVzPXBsYWNlc2A7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdvb2dsZVNjcmlwdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHc0Zvcm1zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnY3VzdG9tU3R5bGVzJyxcbiAgICAgICAgICB1c2VWYWx1ZTogc3R5bGVzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnZ29vZ2xlTWFwQXBpS2V5JyxcbiAgICAgICAgICB1c2VWYWx1ZTogZ29vZ2xlTWFwQXBpS2V5XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=