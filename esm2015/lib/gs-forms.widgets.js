import { GFieldSelector } from './gs-forms.enums';
/**
 * Text widget
 */
export class GTextField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.TEXT;
    }
}
/**
 * Textarea widget
 */
export class GTextareaField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.TEXTAREA;
    }
}
/**
 * Password widget
 */
export class GPasswordField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.PASSWORD;
    }
}
/**
 * Number widget
 */
export class GNumberField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.NUMBER;
    }
}
/**
 * Toggle widget
 */
export class GToggleField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.TOGGLE;
    }
}
/**
 * Checkbox widget
 */
export class GCheckboxField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.CHECKBOX;
    }
}
/**
 * Radio widget
 */
export class GRadioField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.RADIO;
    }
}
/**
 * Dropdown widget
 */
export class GDropdownField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.DROPDOWN;
    }
}
/**
 * Tax document widget
 * @deprecated
 */
export class GTaxDocumentTypeField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.TAX_TYPE;
    }
}
/**
 * Currency widget
 */
export class GCurrencyField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.CURRENCY;
    }
}
/**
 * Phone widget
 */
export class GPhoneField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.PHONE;
    }
}
/**
 * Datepicker widget
 */
export class GDatePickerField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.DATE;
    }
}
/**
 * Separated by Comma widget
 */
export class GSeparatedByComma {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.COMMA;
    }
}
/**
 * Image/File widget
 */
export class GFieldFile {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.FILE;
    }
}
/**
 * Two data input widget
 */
export class GTwoDataInput {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.TWO_DATA;
    }
}
/**
 * Multiselect widget
 */
export class GMultiselectField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.MULTISELECT;
    }
}
/**
 * Color picker widget
 */
export class GColorPickerField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.COLOR;
    }
}
/**
 * Map widget
 */
export class GMapField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.MAP;
    }
}
/**
 * Time field in 24 hour format
 */
export class GTimeField {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.TIME;
    }
}
/**
 * Divider widget
 */
export class GDivider {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.DIVIDER;
        this.notWidget = true;
    }
}
/**
 * Button widget
 */
export class GButton {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.BUTTON;
        this.notWidget = true;
    }
}
/**
 * Show-data widget
 */
export class GShowData {
    constructor(config) {
        this.config = config;
        this.selector = GFieldSelector.SHOW_DATA;
        this.notWidget = true;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMud2lkZ2V0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9uZy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9ncy1mb3Jtcy53aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWVsRDs7R0FFRztBQUNILE1BQU0sT0FBTyxVQUFVO0lBR3JCLFlBQW1CLE1BQTJCO1FBQTNCLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBRjlDLGFBQVEsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBRWtCLENBQUM7Q0FDbkQ7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQW1CLE1BQTJCO1FBQTNCLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBRjlDLGFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBRWUsQ0FBQztDQUNwRDtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7SUFHekIsWUFBbUIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFGOUMsYUFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFFZSxDQUFDO0NBQ3BEO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFtQixNQUFpQztRQUFqQyxXQUFNLEdBQU4sTUFBTSxDQUEyQjtRQUZwRCxhQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUV1QixDQUFDO0NBQzFEO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFtQixNQUFrQztRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUE0QjtRQUZyRCxhQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUV3QixDQUFDO0NBQzNEO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUFtQixNQUFrQztRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUE0QjtR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R0FBTixNQUFNLENBQTRCO1FBSHJELGFBQVEsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ2xDLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFFdUMsQ0FBQztDQUMxRDtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQU87SUFJbEIsWUFBbUIsTUFBaUM7UUFBakMsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7UUFIcEQsYUFBUSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksQ0FBQztJQUVzQyxDQUFDO0NBQ3pEO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBUztJQUlwQixZQUFtQixNQUEyQjtRQUEzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtRQUg5QyxhQUFRLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRWdDLENBQUM7Q0FDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHRmllbGRTZWxlY3RvciB9IGZyb20gJy4vZ3MtZm9ybXMuZW51bXMnO1xuaW1wb3J0IHtcbiAgR0ZpZWxkLFxuICBHRmllbGRDb25maWd1cmF0aW9uLFxuICBHRmllbGRPcHRpb25WYWx1ZXNDb25maWd1cmF0aW9uLFxuICBHRmllbGRDb3VudHJ5Rm9ybW1hdENvbmZpZ3VyYXRpb24sXG4gIEdGaWVsZEJvb2xlYW5Db25maWd1cmF0aW9uLFxuICBHRmllbGROdW1iZXJDb25maWd1cmF0aW9uLFxuICBHRmllbGRGaWxlQ29uZmlndXJhdGlvbixcbiAgR0ZpZWxkRGl2aWRlckNvbmZpZ3VyYXRpb24sXG4gIEdGaWVsZFR3b0RhdGFDb25maWd1cmF0aW9uLFxuICBHRmllbGRCdXR0b25Db25maWd1cmF0aW9uLFxuICBHRmllbGRNYXBDb25maWd1cmF0aW9uXG59IGZyb20gJy4vZ3MtZm9ybXMubW9kZWxzJztcblxuLyoqXG4gKiBUZXh0IHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR1RleHRGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuVEVYVDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRDb25maWd1cmF0aW9uKSB7fVxufVxuXG4vKipcbiAqIFRleHRhcmVhIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR1RleHRhcmVhRmllbGQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLlRFWFRBUkVBO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIFBhc3N3b3JkIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR1Bhc3N3b3JkRmllbGQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLlBBU1NXT1JEO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIE51bWJlciB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdOdW1iZXJGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuTlVNQkVSO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZE51bWJlckNvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIFRvZ2dsZSB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdUb2dnbGVGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuVE9HR0xFO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZEJvb2xlYW5Db25maWd1cmF0aW9uKSB7IH1cbn1cblxuLyoqXG4gKiBDaGVja2JveCB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdDaGVja2JveEZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5DSEVDS0JPWDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRCb29sZWFuQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogUmFkaW8gd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHUmFkaW9GaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuUkFESU87XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkT3B0aW9uVmFsdWVzQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogRHJvcGRvd24gd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHRHJvcGRvd25GaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuRFJPUERPV047XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkT3B0aW9uVmFsdWVzQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogVGF4IGRvY3VtZW50IHdpZGdldFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIEdUYXhEb2N1bWVudFR5cGVGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuVEFYX1RZUEU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkQ291bnRyeUZvcm1tYXRDb25maWd1cmF0aW9uKSB7IH1cbn1cblxuLyoqXG4gKiBDdXJyZW5jeSB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdDdXJyZW5jeUZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5DVVJSRU5DWTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRDb3VudHJ5Rm9ybW1hdENvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIFBob25lIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR1Bob25lRmllbGQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLlBIT05FO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvdW50cnlGb3JtbWF0Q29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogRGF0ZXBpY2tlciB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdEYXRlUGlja2VyRmllbGQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLkRBVEU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogU2VwYXJhdGVkIGJ5IENvbW1hIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR1NlcGFyYXRlZEJ5Q29tbWEgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLkNPTU1BO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIEltYWdlL0ZpbGUgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHRmllbGRGaWxlIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5GSUxFO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZEZpbGVDb25maWd1cmF0aW9uKSB7IH1cbn1cblxuLyoqXG4gKiBUd28gZGF0YSBpbnB1dCB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdUd29EYXRhSW5wdXQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLlRXT19EQVRBO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZFR3b0RhdGFDb25maWd1cmF0aW9uKSB7fVxufVxuXG4vKipcbiAqIE11bHRpc2VsZWN0IHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR011bHRpc2VsZWN0RmllbGQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLk1VTFRJU0VMRUNUO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZE9wdGlvblZhbHVlc0NvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIENvbG9yIHBpY2tlciB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdDb2xvclBpY2tlckZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5DT0xPUjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRDb25maWd1cmF0aW9uKSB7fVxufVxuXG4vKipcbiAqIE1hcCB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdNYXBGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuTUFQO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZE1hcENvbmZpZ3VyYXRpb24pIHt9XG59XG5cbi8qKlxuICogVGltZSBmaWVsZCBpbiAyNCBob3VyIGZvcm1hdFxuICovXG5leHBvcnQgY2xhc3MgR1RpbWVGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuVElNRTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRDb25maWd1cmF0aW9uKSB7fVxufVxuXG4vKipcbiAqIERpdmlkZXIgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHRGl2aWRlciB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuRElWSURFUjtcbiAgbm90V2lkZ2V0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGREaXZpZGVyQ29uZmlndXJhdGlvbikge31cbn1cblxuLyoqXG4gKiBCdXR0b24gd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHQnV0dG9uIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5CVVRUT047XG4gIG5vdFdpZGdldCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkQnV0dG9uQ29uZmlndXJhdGlvbikge31cbn1cblxuLyoqXG4gKiBTaG93LWRhdGEgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHU2hvd0RhdGEge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLlNIT1dfREFUQTtcbiAgbm90V2lkZ2V0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRDb25maWd1cmF0aW9uKSB7fVxufVxuIl19