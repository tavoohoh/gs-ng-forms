export var GFieldSelector;
(function (GFieldSelector) {
    /**
     * Any string value:
     * For example: text, email, address, etc.
     * <input type="text"/>
     */
    GFieldSelector["TEXT"] = "text";
    /**
     * Any long string value:
     * <textarea>
     */
    GFieldSelector["TEXTAREA"] = "textarea";
    /**
     * Any sensitive value:
     * For example: password, token, etc.
     * <input type="password"/>
     * This will create a non native password type input with an eye button to toggle the input type from password to text.
     */
    GFieldSelector["PASSWORD"] = "password";
    /**
     * Any numeric value:
     * For example: age or quantity.
     * <input type="number"/>
     */
    GFieldSelector["NUMBER"] = "number";
    /**
     * Any boolean value:
     * For example: A true or false question.
     * This will create a non native toggle type input
     */
    GFieldSelector["TOGGLE"] = "toggle";
    /**
     * Any boolean value:
     * For example: A true or false question.
     * This will create a non native checkbox type input
     */
    GFieldSelector["CHECKBOX"] = "checkbox";
    /**
     * Any array of options:
     * For example: gender selection.
     * This will create a non native radio type input for each option.
     */
    GFieldSelector["RADIO"] = "radio";
    /**
     * Any array of options:
     * For example: select and its options.
     */
    GFieldSelector["DROPDOWN"] = "dropdown";
    /**
     * Tax type selector
     */
    GFieldSelector["TAX_TYPE"] = "tax_type";
    /**
     * Any currency value:
     * For example: any masked string formatted as currency value ($ 1.300,20)
     * This will create a non native currency type input with currency format and symbol.
     *
     * Requires `currency pattern` and `currency symbol`.
     */
    GFieldSelector["CURRENCY"] = "currency";
    /**
     * Any phone value:
     * For example: any masked string formatted as phone value (+57 300 123 0031)
     * This will create a non native phone type input.
     *
     * Requires `country code`.
     */
    GFieldSelector["PHONE"] = "phone";
    /**
     * Any date value
     * This will create a non native date picker
     */
    GFieldSelector["DATE"] = "date";
    /**
     * Separated by comma field
     */
    GFieldSelector["COMMA"] = "comma";
    /**
     * Any type file
     * For Example: .pdf, .doc, .xml, etc
     * <input type="file"/>
     */
    GFieldSelector["FILE"] = "file";
    /**
     * Two data input
     * Creates a two inputs field
     */
    GFieldSelector["TWO_DATA"] = "two_data";
    /**
     * Multiselect field
     */
    GFieldSelector["MULTISELECT"] = "multiselect";
    /**
     * Any string value:
     * For example: color string.
     * <input type="color"/>
     */
    GFieldSelector["COLOR"] = "color";
    /**
     * Map input
     * Get latitude and longitude using Google Maps
     */
    GFieldSelector["MAP"] = "map";
    /**
     * TimePicker Input
     * Any time value
     */
    GFieldSelector["TIME"] = "time";
    /**
     * Divider
     * This is not a field, it is a component to divide your form in sections
     */
    GFieldSelector["DIVIDER"] = "divider";
    /**
     * Button
     * This is not a field, it is a normal button to save, reset or anything else
     */
    GFieldSelector["BUTTON"] = "button";
    /**
     * Show data
     * This looks like a text field but is not.
     * This is really useful to display a field like it was disabled but without the issue of having your input tag edited in the dom.
     */
    GFieldSelector["SHOW_DATA"] = "show_data";
})(GFieldSelector || (GFieldSelector = {}));
export var GFieldValueType;
(function (GFieldValueType) {
    GFieldValueType["STRING"] = "string";
    GFieldValueType["NUMBER"] = "number";
})(GFieldValueType || (GFieldValueType = {}));
export var GFieldValidatorType;
(function (GFieldValidatorType) {
    GFieldValidatorType["MIN"] = "min";
    GFieldValidatorType["MAX"] = "max";
    GFieldValidatorType["REQUIRED"] = "required";
    GFieldValidatorType["EMAIL"] = "email";
    GFieldValidatorType["MIN_LENGTH"] = "minlength";
    GFieldValidatorType["MAX_LENGTH"] = "maxlength";
    GFieldValidatorType["PATTERN"] = "pattern";
})(GFieldValidatorType || (GFieldValidatorType = {}));
export var GFieldCountryCode;
(function (GFieldCountryCode) {
    GFieldCountryCode["AR"] = "ar";
    GFieldCountryCode["BO"] = "bo";
    GFieldCountryCode["BR"] = "br";
    GFieldCountryCode["CA"] = "ca";
    GFieldCountryCode["CL"] = "cl";
    GFieldCountryCode["CO"] = "co";
    GFieldCountryCode["CR"] = "cr";
    GFieldCountryCode["EC"] = "ec";
    GFieldCountryCode["MX"] = "mx";
    GFieldCountryCode["PE"] = "pe";
    GFieldCountryCode["US"] = "us";
    GFieldCountryCode["UY"] = "uy";
    GFieldCountryCode["VE"] = "ve";
})(GFieldCountryCode || (GFieldCountryCode = {}));
export var GFieldValueButtonType;
(function (GFieldValueButtonType) {
    GFieldValueButtonType["SUBMIT"] = "submit";
    GFieldValueButtonType["RESET"] = "reset";
    GFieldValueButtonType["CUSTOM"] = "custom";
})(GFieldValueButtonType || (GFieldValueButtonType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMuZW51bXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZm9ybXMuZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksY0FrSlg7QUFsSkQsV0FBWSxjQUFjO0lBRXhCOzs7O09BSUc7SUFDSCwrQkFBYSxDQUFBO0lBRWI7OztPQUdHO0lBQ0gsdUNBQXFCLENBQUE7SUFFckI7Ozs7O09BS0c7SUFDSCx1Q0FBcUIsQ0FBQTtJQUVyQjs7OztPQUlHO0lBQ0gsbUNBQWlCLENBQUE7SUFFakI7Ozs7T0FJRztJQUNILG1DQUFpQixDQUFBO0lBRWpCOzs7O09BSUc7SUFDSCx1Q0FBcUIsQ0FBQTtJQUVyQjs7OztPQUlHO0lBQ0gsaUNBQWUsQ0FBQTtJQUVmOzs7T0FHRztJQUNILHVDQUFxQixDQUFBO0lBRXJCOztPQUVHO0lBQ0gsdUNBQXFCLENBQUE7SUFFckI7Ozs7OztPQU1HO0lBQ0gsdUNBQXFCLENBQUE7SUFFckI7Ozs7OztPQU1HO0lBQ0gsaUNBQWUsQ0FBQTtJQUVmOzs7T0FHRztJQUNILCtCQUFhLENBQUE7SUFFYjs7T0FFRztJQUNILGlDQUFlLENBQUE7SUFFZjs7OztPQUlHO0lBQ0gsK0JBQWEsQ0FBQTtJQUViOzs7T0FHRztJQUNILHVDQUFxQixDQUFBO0lBRXJCOztPQUVHO0lBQ0gsNkNBQTJCLENBQUE7SUFFM0I7Ozs7T0FJRztJQUNILGlDQUFlLENBQUE7SUFFZjs7O09BR0c7SUFDSCw2QkFBVyxDQUFBO0lBRVg7OztPQUdHO0lBQ0gsK0JBQWEsQ0FBQTtJQUViOzs7T0FHRztJQUNILHFDQUFtQixDQUFBO0lBRW5COzs7T0FHRztJQUNILG1DQUFpQixDQUFBO0lBRWpCOzs7O09BSUc7SUFDSCx5Q0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBbEpXLGNBQWMsS0FBZCxjQUFjLFFBa0p6QjtBQUVELE1BQU0sQ0FBTixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsb0NBQWlCLENBQUE7SUFDakIsb0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCO0FBRUQsTUFBTSxDQUFOLElBQVksbUJBUVg7QUFSRCxXQUFZLG1CQUFtQjtJQUM3QixrQ0FBVyxDQUFBO0lBQ1gsa0NBQVcsQ0FBQTtJQUNYLDRDQUFxQixDQUFBO0lBQ3JCLHNDQUFlLENBQUE7SUFDZiwrQ0FBd0IsQ0FBQTtJQUN4QiwrQ0FBd0IsQ0FBQTtJQUN4QiwwQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBUlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQVE5QjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQWNYO0FBZEQsV0FBWSxpQkFBaUI7SUFDM0IsOEJBQVMsQ0FBQTtJQUNULDhCQUFTLENBQUE7SUFDVCw4QkFBUyxDQUFBO0lBQ1QsOEJBQVMsQ0FBQTtJQUNULDhCQUFTLENBQUE7SUFDVCw4QkFBUyxDQUFBO0lBQ1QsOEJBQVMsQ0FBQTtJQUNULDhCQUFTLENBQUE7SUFDVCw4QkFBUyxDQUFBO0lBQ1QsOEJBQVMsQ0FBQTtJQUNULDhCQUFTLENBQUE7SUFDVCw4QkFBUyxDQUFBO0lBQ1QsOEJBQVMsQ0FBQTtBQUNYLENBQUMsRUFkVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBYzVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBSVg7QUFKRCxXQUFZLHFCQUFxQjtJQUMvQiwwQ0FBaUIsQ0FBQTtJQUNqQix3Q0FBZSxDQUFBO0lBQ2YsMENBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFJaEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBHRmllbGRTZWxlY3RvciB7XG5cbiAgLyoqXG4gICAqIEFueSBzdHJpbmcgdmFsdWU6XG4gICAqIEZvciBleGFtcGxlOiB0ZXh0LCBlbWFpbCwgYWRkcmVzcywgZXRjLlxuICAgKiA8aW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAqL1xuICBURVhUID0gJ3RleHQnLFxuXG4gIC8qKlxuICAgKiBBbnkgbG9uZyBzdHJpbmcgdmFsdWU6XG4gICAqIDx0ZXh0YXJlYT5cbiAgICovXG4gIFRFWFRBUkVBID0gJ3RleHRhcmVhJyxcblxuICAvKipcbiAgICogQW55IHNlbnNpdGl2ZSB2YWx1ZTpcbiAgICogRm9yIGV4YW1wbGU6IHBhc3N3b3JkLCB0b2tlbiwgZXRjLlxuICAgKiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIvPlxuICAgKiBUaGlzIHdpbGwgY3JlYXRlIGEgbm9uIG5hdGl2ZSBwYXNzd29yZCB0eXBlIGlucHV0IHdpdGggYW4gZXllIGJ1dHRvbiB0byB0b2dnbGUgdGhlIGlucHV0IHR5cGUgZnJvbSBwYXNzd29yZCB0byB0ZXh0LlxuICAgKi9cbiAgUEFTU1dPUkQgPSAncGFzc3dvcmQnLFxuXG4gIC8qKlxuICAgKiBBbnkgbnVtZXJpYyB2YWx1ZTpcbiAgICogRm9yIGV4YW1wbGU6IGFnZSBvciBxdWFudGl0eS5cbiAgICogPGlucHV0IHR5cGU9XCJudW1iZXJcIi8+XG4gICAqL1xuICBOVU1CRVIgPSAnbnVtYmVyJyxcblxuICAvKipcbiAgICogQW55IGJvb2xlYW4gdmFsdWU6XG4gICAqIEZvciBleGFtcGxlOiBBIHRydWUgb3IgZmFsc2UgcXVlc3Rpb24uXG4gICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBub24gbmF0aXZlIHRvZ2dsZSB0eXBlIGlucHV0XG4gICAqL1xuICBUT0dHTEUgPSAndG9nZ2xlJyxcblxuICAvKipcbiAgICogQW55IGJvb2xlYW4gdmFsdWU6XG4gICAqIEZvciBleGFtcGxlOiBBIHRydWUgb3IgZmFsc2UgcXVlc3Rpb24uXG4gICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBub24gbmF0aXZlIGNoZWNrYm94IHR5cGUgaW5wdXRcbiAgICovXG4gIENIRUNLQk9YID0gJ2NoZWNrYm94JyxcblxuICAvKipcbiAgICogQW55IGFycmF5IG9mIG9wdGlvbnM6XG4gICAqIEZvciBleGFtcGxlOiBnZW5kZXIgc2VsZWN0aW9uLlxuICAgKiBUaGlzIHdpbGwgY3JlYXRlIGEgbm9uIG5hdGl2ZSByYWRpbyB0eXBlIGlucHV0IGZvciBlYWNoIG9wdGlvbi5cbiAgICovXG4gIFJBRElPID0gJ3JhZGlvJyxcblxuICAvKipcbiAgICogQW55IGFycmF5IG9mIG9wdGlvbnM6XG4gICAqIEZvciBleGFtcGxlOiBzZWxlY3QgYW5kIGl0cyBvcHRpb25zLlxuICAgKi9cbiAgRFJPUERPV04gPSAnZHJvcGRvd24nLFxuXG4gIC8qKlxuICAgKiBUYXggdHlwZSBzZWxlY3RvclxuICAgKi9cbiAgVEFYX1RZUEUgPSAndGF4X3R5cGUnLFxuXG4gIC8qKlxuICAgKiBBbnkgY3VycmVuY3kgdmFsdWU6XG4gICAqIEZvciBleGFtcGxlOiBhbnkgbWFza2VkIHN0cmluZyBmb3JtYXR0ZWQgYXMgY3VycmVuY3kgdmFsdWUgKCQgMS4zMDAsMjApXG4gICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBub24gbmF0aXZlIGN1cnJlbmN5IHR5cGUgaW5wdXQgd2l0aCBjdXJyZW5jeSBmb3JtYXQgYW5kIHN5bWJvbC5cbiAgICpcbiAgICogUmVxdWlyZXMgYGN1cnJlbmN5IHBhdHRlcm5gIGFuZCBgY3VycmVuY3kgc3ltYm9sYC5cbiAgICovXG4gIENVUlJFTkNZID0gJ2N1cnJlbmN5JyxcblxuICAvKipcbiAgICogQW55IHBob25lIHZhbHVlOlxuICAgKiBGb3IgZXhhbXBsZTogYW55IG1hc2tlZCBzdHJpbmcgZm9ybWF0dGVkIGFzIHBob25lIHZhbHVlICgrNTcgMzAwIDEyMyAwMDMxKVxuICAgKiBUaGlzIHdpbGwgY3JlYXRlIGEgbm9uIG5hdGl2ZSBwaG9uZSB0eXBlIGlucHV0LlxuICAgKlxuICAgKiBSZXF1aXJlcyBgY291bnRyeSBjb2RlYC5cbiAgICovXG4gIFBIT05FID0gJ3Bob25lJyxcblxuICAvKipcbiAgICogQW55IGRhdGUgdmFsdWVcbiAgICogVGhpcyB3aWxsIGNyZWF0ZSBhIG5vbiBuYXRpdmUgZGF0ZSBwaWNrZXJcbiAgICovXG4gIERBVEUgPSAnZGF0ZScsXG5cbiAgLyoqXG4gICAqIFNlcGFyYXRlZCBieSBjb21tYSBmaWVsZFxuICAgKi9cbiAgQ09NTUEgPSAnY29tbWEnLFxuXG4gIC8qKlxuICAgKiBBbnkgdHlwZSBmaWxlXG4gICAqIEZvciBFeGFtcGxlOiAucGRmLCAuZG9jLCAueG1sLCBldGNcbiAgICogPGlucHV0IHR5cGU9XCJmaWxlXCIvPlxuICAgKi9cbiAgRklMRSA9ICdmaWxlJyxcblxuICAvKipcbiAgICogVHdvIGRhdGEgaW5wdXRcbiAgICogQ3JlYXRlcyBhIHR3byBpbnB1dHMgZmllbGRcbiAgICovXG4gIFRXT19EQVRBID0gJ3R3b19kYXRhJyxcblxuICAvKipcbiAgICogTXVsdGlzZWxlY3QgZmllbGRcbiAgICovXG4gIE1VTFRJU0VMRUNUID0gJ211bHRpc2VsZWN0JyxcblxuICAvKipcbiAgICogQW55IHN0cmluZyB2YWx1ZTpcbiAgICogRm9yIGV4YW1wbGU6IGNvbG9yIHN0cmluZy5cbiAgICogPGlucHV0IHR5cGU9XCJjb2xvclwiLz5cbiAgICovXG4gIENPTE9SID0gJ2NvbG9yJyxcblxuICAvKipcbiAgICogTWFwIGlucHV0XG4gICAqIEdldCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHVzaW5nIEdvb2dsZSBNYXBzXG4gICAqL1xuICBNQVAgPSAnbWFwJyxcblxuICAvKipcbiAgICogVGltZVBpY2tlciBJbnB1dFxuICAgKiBBbnkgdGltZSB2YWx1ZVxuICAgKi9cbiAgVElNRSA9ICd0aW1lJyxcblxuICAvKipcbiAgICogRGl2aWRlclxuICAgKiBUaGlzIGlzIG5vdCBhIGZpZWxkLCBpdCBpcyBhIGNvbXBvbmVudCB0byBkaXZpZGUgeW91ciBmb3JtIGluIHNlY3Rpb25zXG4gICAqL1xuICBESVZJREVSID0gJ2RpdmlkZXInLFxuXG4gIC8qKlxuICAgKiBCdXR0b25cbiAgICogVGhpcyBpcyBub3QgYSBmaWVsZCwgaXQgaXMgYSBub3JtYWwgYnV0dG9uIHRvIHNhdmUsIHJlc2V0IG9yIGFueXRoaW5nIGVsc2VcbiAgICovXG4gIEJVVFRPTiA9ICdidXR0b24nLFxuXG4gIC8qKlxuICAgKiBTaG93IGRhdGFcbiAgICogVGhpcyBsb29rcyBsaWtlIGEgdGV4dCBmaWVsZCBidXQgaXMgbm90LlxuICAgKiBUaGlzIGlzIHJlYWxseSB1c2VmdWwgdG8gZGlzcGxheSBhIGZpZWxkIGxpa2UgaXQgd2FzIGRpc2FibGVkIGJ1dCB3aXRob3V0IHRoZSBpc3N1ZSBvZiBoYXZpbmcgeW91ciBpbnB1dCB0YWcgZWRpdGVkIGluIHRoZSBkb20uXG4gICAqL1xuICBTSE9XX0RBVEEgPSAnc2hvd19kYXRhJ1xufVxuXG5leHBvcnQgZW51bSBHRmllbGRWYWx1ZVR5cGUge1xuICBTVFJJTkcgPSAnc3RyaW5nJyxcbiAgTlVNQkVSID0gJ251bWJlcidcbn1cblxuZXhwb3J0IGVudW0gR0ZpZWxkVmFsaWRhdG9yVHlwZSB7XG4gIE1JTiA9ICdtaW4nLFxuICBNQVggPSAnbWF4JyxcbiAgUkVRVUlSRUQgPSAncmVxdWlyZWQnLFxuICBFTUFJTCA9ICdlbWFpbCcsXG4gIE1JTl9MRU5HVEggPSAnbWlubGVuZ3RoJyxcbiAgTUFYX0xFTkdUSCA9ICdtYXhsZW5ndGgnLFxuICBQQVRURVJOID0gJ3BhdHRlcm4nXG59XG5cbmV4cG9ydCBlbnVtIEdGaWVsZENvdW50cnlDb2RlIHtcbiAgQVIgPSAnYXInLFxuICBCTyA9ICdibycsXG4gIEJSID0gJ2JyJyxcbiAgQ0EgPSAnY2EnLFxuICBDTCA9ICdjbCcsXG4gIENPID0gJ2NvJyxcbiAgQ1IgPSAnY3InLFxuICBFQyA9ICdlYycsXG4gIE1YID0gJ214JyxcbiAgUEUgPSAncGUnLFxuICBVUyA9ICd1cycsXG4gIFVZID0gJ3V5JyxcbiAgVkUgPSAndmUnXG59XG5cbmV4cG9ydCBlbnVtIEdGaWVsZFZhbHVlQnV0dG9uVHlwZSB7XG4gIFNVQk1JVCA9ICdzdWJtaXQnLFxuICBSRVNFVCA9ICdyZXNldCcsXG4gIENVU1RPTSA9ICdjdXN0b20nXG59XG4iXX0=