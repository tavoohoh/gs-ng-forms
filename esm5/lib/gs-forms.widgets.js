import { GFieldSelector } from './gs-forms.enums';
/**
 * Text widget
 */
var GTextField = /** @class */ (function () {
    function GTextField(config) {
        this.config = config;
        this.selector = GFieldSelector.TEXT;
    }
    return GTextField;
}());
export { GTextField };
/**
 * Textarea widget
 */
var GTextareaField = /** @class */ (function () {
    function GTextareaField(config) {
        this.config = config;
        this.selector = GFieldSelector.TEXTAREA;
    }
    return GTextareaField;
}());
export { GTextareaField };
/**
 * Password widget
 */
var GPasswordField = /** @class */ (function () {
    function GPasswordField(config) {
        this.config = config;
        this.selector = GFieldSelector.PASSWORD;
    }
    return GPasswordField;
}());
export { GPasswordField };
/**
 * Number widget
 */
var GNumberField = /** @class */ (function () {
    function GNumberField(config) {
        this.config = config;
        this.selector = GFieldSelector.NUMBER;
    }
    return GNumberField;
}());
export { GNumberField };
/**
 * Toggle widget
 */
var GToggleField = /** @class */ (function () {
    function GToggleField(config) {
        this.config = config;
        this.selector = GFieldSelector.TOGGLE;
    }
    return GToggleField;
}());
export { GToggleField };
/**
 * Checkbox widget
 */
var GCheckboxField = /** @class */ (function () {
    function GCheckboxField(config) {
        this.config = config;
        this.selector = GFieldSelector.CHECKBOX;
    }
    return GCheckboxField;
}());
export { GCheckboxField };
/**
 * Radio widget
 */
var GRadioField = /** @class */ (function () {
    function GRadioField(config) {
        this.config = config;
        this.selector = GFieldSelector.RADIO;
    }
    return GRadioField;
}());
export { GRadioField };
/**
 * Dropdown widget
 */
var GDropdownField = /** @class */ (function () {
    function GDropdownField(config) {
        this.config = config;
        this.selector = GFieldSelector.DROPDOWN;
    }
    return GDropdownField;
}());
export { GDropdownField };
/**
 * Tax document widget
 * @deprecated
 */
var GTaxDocumentTypeField = /** @class */ (function () {
    function GTaxDocumentTypeField(config) {
        this.config = config;
        this.selector = GFieldSelector.TAX_TYPE;
    }
    return GTaxDocumentTypeField;
}());
export { GTaxDocumentTypeField };
/**
 * Currency widget
 */
var GCurrencyField = /** @class */ (function () {
    function GCurrencyField(config) {
        this.config = config;
        this.selector = GFieldSelector.CURRENCY;
    }
    return GCurrencyField;
}());
export { GCurrencyField };
/**
 * Phone widget
 */
var GPhoneField = /** @class */ (function () {
    function GPhoneField(config) {
        this.config = config;
        this.selector = GFieldSelector.PHONE;
    }
    return GPhoneField;
}());
export { GPhoneField };
/**
 * Datepicker widget
 */
var GDatePickerField = /** @class */ (function () {
    function GDatePickerField(config) {
        this.config = config;
        this.selector = GFieldSelector.DATE;
    }
    return GDatePickerField;
}());
export { GDatePickerField };
/**
 * Separated by Comma widget
 */
var GSeparatedByComma = /** @class */ (function () {
    function GSeparatedByComma(config) {
        this.config = config;
        this.selector = GFieldSelector.COMMA;
    }
    return GSeparatedByComma;
}());
export { GSeparatedByComma };
/**
 * Image/File widget
 */
var GFieldFile = /** @class */ (function () {
    function GFieldFile(config) {
        this.config = config;
        this.selector = GFieldSelector.FILE;
    }
    return GFieldFile;
}());
export { GFieldFile };
/**
 * Two data input widget
 */
var GTwoDataInput = /** @class */ (function () {
    function GTwoDataInput(config) {
        this.config = config;
        this.selector = GFieldSelector.TWO_DATA;
    }
    return GTwoDataInput;
}());
export { GTwoDataInput };
/**
 * Multiselect widget
 */
var GMultiselectField = /** @class */ (function () {
    function GMultiselectField(config) {
        this.config = config;
        this.selector = GFieldSelector.MULTISELECT;
    }
    return GMultiselectField;
}());
export { GMultiselectField };
/**
 * Color picker widget
 */
var GColorPickerField = /** @class */ (function () {
    function GColorPickerField(config) {
        this.config = config;
        this.selector = GFieldSelector.COLOR;
    }
    return GColorPickerField;
}());
export { GColorPickerField };
/**
 * Map widget
 */
var GMapField = /** @class */ (function () {
    function GMapField(config) {
        this.config = config;
        this.selector = GFieldSelector.MAP;
    }
    return GMapField;
}());
export { GMapField };
/**
 * Time field in 24 hour format
 */
var GTimeField = /** @class */ (function () {
    function GTimeField(config) {
        this.config = config;
        this.selector = GFieldSelector.TIME;
    }
    return GTimeField;
}());
export { GTimeField };
/**
 * Divider widget
 */
var GDivider = /** @class */ (function () {
    function GDivider(config) {
        this.config = config;
        this.selector = GFieldSelector.DIVIDER;
        this.notWidget = true;
    }
    return GDivider;
}());
export { GDivider };
/**
 * Button widget
 */
var GButton = /** @class */ (function () {
    function GButton(config) {
        this.config = config;
        this.selector = GFieldSelector.BUTTON;
        this.notWidget = true;
    }
    return GButton;
}());
export { GButton };
/**
 * Show-data widget
 */
var GShowData = /** @class */ (function () {
    function GShowData(config) {
        this.config = config;
        this.selector = GFieldSelector.SHOW_DATA;
        this.notWidget = true;
    }
    return GShowData;
}());
export { GShowData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMud2lkZ2V0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9uZy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9ncy1mb3Jtcy53aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWVsRDs7R0FFRztBQUNIO0lBR0Usb0JBQW1CLE1BQTJCO1FBQTNCLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBRjlDLGFBQVEsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBRWtCLENBQUM7SUFDcEQsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFFRDs7R0FFRztBQUNIO0lBR0Usd0JBQW1CLE1BQTJCO1FBQTNCLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBRjlDLGFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBRWUsQ0FBQztJQUNyRCxxQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQUVEOztHQUVHO0FBQ0g7SUFHRSx3QkFBbUIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFGOUMsYUFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFFZSxDQUFDO0lBQ3JELHFCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBRUQ7O0dBRUc7QUFDSDtJQUdFLHNCQUFtQixNQUFpQztRQUFqQyxXQUFNLEdBQU4sTUFBTSxDQUEyQjtRQUZwRCxhQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUV1QixDQUFDO0lBQzNELG1CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBRUQ7O0dBRUc7QUFDSDtJQUdFLHNCQUFtQixNQUFrQztRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUE0QjtRQUZyRCxhQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUV3QixDQUFDO0lBQzVELG1CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBRUQ7O0dBRUc7QUFDSDtJ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LENBQUMsQUFKRCxJQUlDOztBQUVEOztHQUVHO0FBQ0g7SUFHRSxvQkFBbUIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFGOUMsYUFBUSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFFa0IsQ0FBQztJQUNwRCxpQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQUVEOztHQUVHO0FBQ0g7SUFJRSxrQkFBbUIsTUFBa0M7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBNEI7UUFIckQsYUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksQ0FBQztJQUV1QyxDQUFDO0lBQzNELGVBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7QUFFRDs7R0FFRztBQUNIO0lBSUUsaUJBQW1CLE1BQWlDO1FBQWpDLFdBQU0sR0FBTixNQUFNLENBQTJCO1FBSHBELGFBQVEsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFFc0MsQ0FBQztJQUMxRCxjQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQ7O0dBRUc7QUFDSDtJQUlFLG1CQUFtQixNQUEyQjtRQUEzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtRQUg5QyxhQUFRLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRWdDLENBQUM7SUFDcEQsZ0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdGaWVsZFNlbGVjdG9yIH0gZnJvbSAnLi9ncy1mb3Jtcy5lbnVtcyc7XG5pbXBvcnQge1xuICBHRmllbGQsXG4gIEdGaWVsZENvbmZpZ3VyYXRpb24sXG4gIEdGaWVsZE9wdGlvblZhbHVlc0NvbmZpZ3VyYXRpb24sXG4gIEdGaWVsZENvdW50cnlGb3JtbWF0Q29uZmlndXJhdGlvbixcbiAgR0ZpZWxkQm9vbGVhbkNvbmZpZ3VyYXRpb24sXG4gIEdGaWVsZE51bWJlckNvbmZpZ3VyYXRpb24sXG4gIEdGaWVsZEZpbGVDb25maWd1cmF0aW9uLFxuICBHRmllbGREaXZpZGVyQ29uZmlndXJhdGlvbixcbiAgR0ZpZWxkVHdvRGF0YUNvbmZpZ3VyYXRpb24sXG4gIEdGaWVsZEJ1dHRvbkNvbmZpZ3VyYXRpb24sXG4gIEdGaWVsZE1hcENvbmZpZ3VyYXRpb25cbn0gZnJvbSAnLi9ncy1mb3Jtcy5tb2RlbHMnO1xuXG4vKipcbiAqIFRleHQgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHVGV4dEZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5URVhUO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvbmZpZ3VyYXRpb24pIHt9XG59XG5cbi8qKlxuICogVGV4dGFyZWEgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHVGV4dGFyZWFGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuVEVYVEFSRUE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogUGFzc3dvcmQgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHUGFzc3dvcmRGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuUEFTU1dPUkQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogTnVtYmVyIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR051bWJlckZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5OVU1CRVI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkTnVtYmVyQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogVG9nZ2xlIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR1RvZ2dsZUZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5UT0dHTEU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkQm9vbGVhbkNvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIENoZWNrYm94IHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR0NoZWNrYm94RmllbGQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLkNIRUNLQk9YO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZEJvb2xlYW5Db25maWd1cmF0aW9uKSB7IH1cbn1cblxuLyoqXG4gKiBSYWRpbyB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdSYWRpb0ZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5SQURJTztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRPcHRpb25WYWx1ZXNDb25maWd1cmF0aW9uKSB7IH1cbn1cblxuLyoqXG4gKiBEcm9wZG93biB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdEcm9wZG93bkZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5EUk9QRE9XTjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRPcHRpb25WYWx1ZXNDb25maWd1cmF0aW9uKSB7IH1cbn1cblxuLyoqXG4gKiBUYXggZG9jdW1lbnQgd2lkZ2V0XG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgR1RheERvY3VtZW50VHlwZUZpZWxkIGltcGxlbWVudHMgR0ZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5UQVhfVFlQRTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRDb3VudHJ5Rm9ybW1hdENvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIEN1cnJlbmN5IHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR0N1cnJlbmN5RmllbGQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLkNVUlJFTkNZO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvdW50cnlGb3JtbWF0Q29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogUGhvbmUgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHUGhvbmVGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuUEhPTkU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkQ291bnRyeUZvcm1tYXRDb25maWd1cmF0aW9uKSB7IH1cbn1cblxuLyoqXG4gKiBEYXRlcGlja2VyIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR0RhdGVQaWNrZXJGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuREFURTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRDb25maWd1cmF0aW9uKSB7IH1cbn1cblxuLyoqXG4gKiBTZXBhcmF0ZWQgYnkgQ29tbWEgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHU2VwYXJhdGVkQnlDb21tYSBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuQ09NTUE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogSW1hZ2UvRmlsZSB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdGaWVsZEZpbGUgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLkZJTEU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkRmlsZUNvbmZpZ3VyYXRpb24pIHsgfVxufVxuXG4vKipcbiAqIFR3byBkYXRhIGlucHV0IHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR1R3b0RhdGFJbnB1dCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuVFdPX0RBVEE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkVHdvRGF0YUNvbmZpZ3VyYXRpb24pIHt9XG59XG5cbi8qKlxuICogTXVsdGlzZWxlY3Qgd2lkZ2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBHTXVsdGlzZWxlY3RGaWVsZCBpbXBsZW1lbnRzIEdGaWVsZCB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuTVVMVElTRUxFQ1Q7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkT3B0aW9uVmFsdWVzQ29uZmlndXJhdGlvbikgeyB9XG59XG5cbi8qKlxuICogQ29sb3IgcGlja2VyIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR0NvbG9yUGlja2VyRmllbGQgaW1wbGVtZW50cyBHRmllbGQge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLkNPTE9SO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvbmZpZ3VyYXRpb24pIHt9XG59XG5cbi8qKlxuICogTWFwIHdpZGdldFxuICovXG5leHBvcnQgY2xhc3MgR01hcEZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5NQVA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogR0ZpZWxkTWFwQ29uZmlndXJhdGlvbikge31cbn1cblxuLyoqXG4gKiBUaW1lIGZpZWxkIGluIDI0IGhvdXIgZm9ybWF0XG4gKi9cbmV4cG9ydCBjbGFzcyBHVGltZUZpZWxkIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5USU1FO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvbmZpZ3VyYXRpb24pIHt9XG59XG5cbi8qKlxuICogRGl2aWRlciB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdEaXZpZGVyIHtcbiAgc2VsZWN0b3IgPSBHRmllbGRTZWxlY3Rvci5ESVZJREVSO1xuICBub3RXaWRnZXQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZERpdmlkZXJDb25maWd1cmF0aW9uKSB7fVxufVxuXG4vKipcbiAqIEJ1dHRvbiB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdCdXR0b24ge1xuICBzZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yLkJVVFRPTjtcbiAgbm90V2lkZ2V0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBHRmllbGRCdXR0b25Db25maWd1cmF0aW9uKSB7fVxufVxuXG4vKipcbiAqIFNob3ctZGF0YSB3aWRnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEdTaG93RGF0YSB7XG4gIHNlbGVjdG9yID0gR0ZpZWxkU2VsZWN0b3IuU0hPV19EQVRBO1xuICBub3RXaWRnZXQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEdGaWVsZENvbmZpZ3VyYXRpb24pIHt9XG59XG4iXX0=