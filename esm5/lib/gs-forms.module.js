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
var directive = [
    DigitOnlyDirective,
    ClickOutsideDirective,
];
var widgets = [
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
var GsFormsModule = /** @class */ (function () {
    function GsFormsModule() {
    }
    GsFormsModule_1 = GsFormsModule;
    GsFormsModule.forRoot = function (styles, googleMapApiKey) {
        if (googleMapApiKey && !document.getElementById('google-map-script')) {
            var googleScript = document.createElement('script');
            googleScript.defer = true;
            googleScript.async = true;
            googleScript.id = 'google-map-script';
            googleScript.type = 'text/javascript';
            googleScript.src = "https://maps.googleapis.com/maps/api/js?key=" + googleMapApiKey + "&libraries=places";
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
    };
    var GsFormsModule_1;
    GsFormsModule = GsFormsModule_1 = tslib_1.__decorate([
        NgModule({
            declarations: tslib_1.__spread(directive, widgets),
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
            exports: tslib_1.__spread(directive, widgets),
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
    ], GsFormsModule);
    return GsFormsModule;
}());
export { GsFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdzL25nLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2dzLWZvcm1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBdUIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1B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akI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsY0FBYzthQUNmO1lBQ0QsT0FBTyxtQkFDRixTQUFTLEVBQ1QsT0FBTyxDQUNYO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdzQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgR1N0eWxlcyB9IGZyb20gJy4vZ3MtZm9ybXMubW9kZWxzJztcbmltcG9ydCB7IEdzR2VuZXJpY0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvX2dlbmVyaWMtZmllbGQvX2dlbmVyaWMtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IERpZ2l0T25seURpcmVjdGl2ZSB9IGZyb20gJy4vZ3MtZGlyZWN0aXZlcy9kaWdpdC1vbmx5L2RpZ2l0LW9ubHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vZ3MtZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdzVGV4dElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc1RleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IEdzUGFzc3dvcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL3Bhc3N3b3JkLWlucHV0L3Bhc3N3b3JkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc051bWJlcklucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvbnVtYmVyLWlucHV0L251bWJlci1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NUb2dnbGVDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0NoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEdzUmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0Ryb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IEdzQ3VycmVuY3lJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL2N1cnJlbmN5LWlucHV0L2N1cnJlbmN5LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc1Bob25lSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9waG9uZS1pbnB1dC9waG9uZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc1NlcGFyYXRlZEJ5Q29tbWFDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9zZXBhcmF0ZWQtYnktY29tbWEvc2VwYXJhdGVkLWJ5LWNvbW1hLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0ZpbGVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NEaXZpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvZGl2aWRlci9kaXZpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc1R3b0RhdGFJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL3R3by1kYXRhLWlucHV0L3R3by1kYXRhLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc011bHRpc2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEdzTWFwRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2dzLWZpZWxkcy9tYXAtZmllbGQvbWFwLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0NvbG9yUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NTaG93RGF0YUNvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzL3Nob3ctZGF0YS9zaG93LWRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IEdzVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzJztcbmltcG9ydCB7IEdzRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZ3MtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NGb3Jtc1NlcnZpY2UgfSBmcm9tICcuL2dzLWZvcm1zLnNlcnZpY2UnO1xuXG5jb25zdCBkaXJlY3RpdmUgPSBbXG4gIERpZ2l0T25seURpcmVjdGl2ZSxcbiAgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLFxuXTtcblxuY29uc3Qgd2lkZ2V0cyA9IFtcbiAgR3NHZW5lcmljRmllbGRDb21wb25lbnQsXG4gIEdzVGV4dElucHV0Q29tcG9uZW50LFxuICBHc1RleHRhcmVhQ29tcG9uZW50LFxuICBHc1Bhc3N3b3JkSW5wdXRDb21wb25lbnQsXG4gIEdzTnVtYmVySW5wdXRDb21wb25lbnQsXG4gIEdzVG9nZ2xlQ29tcG9uZW50LFxuICBHc0NoZWNrYm94Q29tcG9uZW50LFxuICBHc1JhZGlvQnV0dG9uQ29tcG9uZW50LFxuICBHc0Ryb3Bkb3duQ29tcG9uZW50LFxuICBHc0N1cnJlbmN5SW5wdXRDb21wb25lbnQsXG4gIEdzUGhvbmVJbnB1dENvbXBvbmVudCxcbiAgR3NEYXRlUGlja2VyQ29tcG9uZW50LFxuICBHc1NlcGFyYXRlZEJ5Q29tbWFDb21wb25lbnQsXG4gIEdzRmlsZUlucHV0Q29tcG9uZW50LFxuICBHc0RpdmlkZXJDb21wb25lbnQsXG4gIEdzVHdvRGF0YUlucHV0Q29tcG9uZW50LFxuICBHc011bHRpc2VsZWN0Q29tcG9uZW50LFxuICBHc0NvbG9yUGlja2VyQ29tcG9uZW50LFxuICBHc01hcEZpZWxkQ29tcG9uZW50LFxuICBHc1RpbWVQaWNrZXJDb21wb25lbnQsXG4gIEdzQnV0dG9uQ29tcG9uZW50LFxuICBHc1Nob3dEYXRhQ29tcG9uZW50LFxuICBHc0Zvcm1Db21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmRpcmVjdGl2ZSxcbiAgICAuLi53aWRnZXRzXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBHc0Zvcm1zU2VydmljZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uZGlyZWN0aXZlLFxuICAgIC4uLndpZGdldHNcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBHc0Zvcm1zTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KHN0eWxlcz86IEdTdHlsZXMsIGdvb2dsZU1hcEFwaUtleT86IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIGlmIChnb29nbGVNYXBBcGlLZXkgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29nbGUtbWFwLXNjcmlwdCcpKSB7XG4gICAgICBjb25zdCBnb29nbGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIGdvb2dsZVNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICBnb29nbGVTY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgZ29vZ2xlU2NyaXB0LmlkID0gJ2dvb2dsZS1tYXAtc2NyaXB0JztcbiAgICAgIGdvb2dsZVNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBnb29nbGVTY3JpcHQuc3JjID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHtnb29nbGVNYXBBcGlLZXl9JmxpYnJhcmllcz1wbGFjZXNgO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnb29nbGVTY3JpcHQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR3NGb3Jtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ2N1c3RvbVN0eWxlcycsXG4gICAgICAgICAgdXNlVmFsdWU6IHN0eWxlc1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ2dvb2dsZU1hcEFwaUtleScsXG4gICAgICAgICAgdXNlVmFsdWU6IGdvb2dsZU1hcEFwaUtleVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19