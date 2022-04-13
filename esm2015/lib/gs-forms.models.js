import { GFieldValidatorType } from './gs-forms.enums';
/**
 * Default field configuration
 */
export class GFieldConfiguration {
    constructor() {
        /**
         * Dynamically display/hide this field by setting this property
         */
        this.displayIf = null;
    }
}
/**
 * Field configuration for only string fields
 */
export class GFieldStringConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration for only string fields
 */
export class GFieldMapConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration for only number fields
 */
export class GFieldNumberConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration for only boolean fields
 */
export class GFieldBooleanConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration including option values for `GRadioField` and `GDropdownField`
 */
export class GFieldOptionValuesConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration including country option for `GCurrencyField` and `GPhoneField`
 */
export class GFieldCountryFormmatConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration for `GFieldFile`
 */
export class GFieldFileConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration for `GTwoDataInput`
 */
export class GFieldTwoDataConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration for `GDivider`
 */
export class GFieldDividerConfiguration extends GFieldConfiguration {
}
/**
 * Field configuration for `GButton`
 */
export class GFieldButtonConfiguration extends GFieldConfiguration {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMubW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdzL25nLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2dzLWZvcm1zLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFDLG1CQUFtQixFQUEwQyxNQUFNLGtCQUFrQixDQUFDO0FBaUdsSTs7R0FFRztBQUNILE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFtQ0U7O1dBRUc7UUFDSCxjQUFTLEdBU0wsSUFBSSxDQUFDO0lBbUJYLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjtDQUtqRTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG1CQUFtQjtDQUs5RDtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjtDQWFqRTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjtDQUtsRTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLG1CQUFtQjtDQVN2RTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLG1CQUFtQjtDQVN6RTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG1CQUFtQjtDQW9DL0Q7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSxtQkFBbUI7Q0E2QmxFO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsbUJBQW1CO0NBcUJsRTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjtDQVNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdGaWVsZENvdW50cnlDb2RlLCBHRmllbGRTZWxlY3RvciwgR0ZpZWxkVmFsaWRhdG9yVHlwZSwgR0ZpZWxkVmFsdWVUeXBlLCBHRmllbGRWYWx1ZUJ1dHRvblR5cGUgfSBmcm9tICcuL2dzLWZvcm1zLmVudW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBHRmllbGRPcHRpb25WYWx1ZSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR0ZpZWxkT3B0aW9uVmFsdWVFeGlzdHMgZXh0ZW5kcyBHRmllbGRPcHRpb25WYWx1ZSB7XG4gIGV4aXN0cz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIEdGaWVsZE9wdGlvblZhbHVlcyA9IEFycmF5PEdGaWVsZE9wdGlvblZhbHVlPjtcbmV4cG9ydCB0eXBlIEdGaWVsZEV4aXN0c09wdGlvblZhbHVlcyA9IEFycmF5PEdGaWVsZE9wdGlvblZhbHVlRXhpc3RzPjtcblxuZXhwb3J0IGludGVyZmFjZSBHRmllbGRUd29EYXRhSW5wdXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFZhbHVlIHR5cGVcbiAgICovXG4gIHR5cGU/OiBHRmllbGRWYWx1ZVR5cGU7XG4gIC8qKlxuICAgKiBJbnB1dCB2YWxpZGF0b3JcbiAgICpcbiAgICogSWYgbnVsbCBpdCB3aWxsIHRyeSB0byB1c2UgdGhlIGBjb25maWcudmFsaWRhdG9yc2BcbiAgICovXG4gIHZhbGlkYXRvcnM/OiBHRmllbGRWYWxpZGF0b3JzO1xuICAvKipcbiAgICogUGxhY2Vob2xkZXJcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZvcm0gb3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEdGb3JtT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQYXNzIGFueSBhcmd1bWVudCB0byB0aGUgZm9ybTpcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPGZvcm0gW2F1dG9jb21wbGV0ZV09XCJ5b3VyT3B0aW9ucy5hdXRvY29tcGxldGVcIj5cbiAgICovXG4gIGF1dG9jb21wbGV0ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIERpc2FibGUgc3VibWl0IGlmIHRoZSBmb3JtIGhhcyBlcnJvcnMuXG4gICAqL1xuICBvbkVycm9yRGlzYWJsZVN1Ym1pdD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCBjb3VudHJ5IHVzaW5nIGBHRmllbGRDb3VudHJ5Q29kZWAgZW51bSBmb3JtIGdzLWZpZWxkXG4gICAqL1xuICBjb3VudHJ5PzogR0ZpZWxkQ291bnRyeUNvZGU7XG4gIC8qKlxuICAgKiBPYmplY3QgY29udGFpbmluZyBvcHRpb25zIGZvciBmaWVsZHMgbGlrZSBgR0Ryb3Bkb3duRmllbGRgIHdoZXJlIGBba2V5OiBzdHJpbmddYCBpcyB0aGUgbW9kZWwgbmFtZSBvZiB0aGUgYEdGaWVsZGAuXG4gICAqL1xuICBmaWVsZFZhbHVlcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBHRmllbGRPcHRpb25WYWx1ZXM7XG4gIH07XG4gIGxheW91dD86IHtcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgdG8gc3BlY2lmeSB0aGUgcXVhbnRpdHkgb2YgY29sdW1ucywgYW4gc3RyaW5nIHRvIHBhc3MgYW55IHZhbGlkIHZhbHVlIGZvciBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYFxuICAgICAqIE51bWJlciBleGFtcGxlOiAzICh3aWxsIHJlbmRlciAzIGNvbHVtbnMgZm9yIGVhY2ggcm93KVxuICAgICAqIFN0cmluZyBleGFtcGxlOiBhdXRvIDIwMHB4IHJlcGVhdCgyLCAxZnIpXG4gICAgICovXG4gICAgY29sdW1ucz86IG51bWJlciB8IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgZm9ybSBsYWJlbHMgd2lsbCBub3QgYmUgZGlzcGxheWVkLlxuICAgICAqL1xuICAgIGhpZGVGb3JtTGFiZWxzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBQYWRkaW5nIGZvciB0aGUgYm9keSBhbmQgZm9vdGVyIG9mIHRoZSBmb3JtXG4gICAgICovXG4gICAgaW5uZXJQYWRkaW5nPzogc3RyaW5nO1xuICB9O1xuICBjb250ZXh0Pzoge1xuICAgIHNhdmVCdXR0b24/OiB7XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgICAgc2hvdz86IGJvb2xlYW47XG4gICAgfTtcbiAgICBjYW5jZWxCdXR0b24/OiB7XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgICAgc2hvdz86IGJvb2xlYW47XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEZpZWxkIHZhbGlkYXRvcnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHRmllbGRWYWxpZGF0b3JzIHtcbiAgW0dGaWVsZFZhbGlkYXRvclR5cGUuTUlOXT86IG51bWJlcjtcbiAgW0dGaWVsZFZhbGlkYXRvclR5cGUuTUFYXT86IG51bWJlcjtcbiAgW0dGaWVsZFZhbGlkYXRvclR5cGUuUkVRVUlSRURdPzogYm9vbGVhbjtcbiAgW0dGaWVsZFZhbGlkYXRvclR5cGUuRU1BSUxdPzogYm9vbGVhbjtcbiAgW0dGaWVsZFZhbGlkYXRvclR5cGUuTUlOX0xFTkdUSF0/OiBudW1iZXI7XG4gIFtHRmllbGRWYWxpZGF0b3JUeXBlLk1BWF9MRU5HVEhdPzogbnVtYmVyO1xuICBbR0ZpZWxkVmFsaWRhdG9yVHlwZS5QQVRURVJOXT86IHN0cmluZyB8IFJlZ0V4cDtcbn1cblxuLyoqXG4gKiBEZWZhdWx0IGZpZWxkIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdGaWVsZENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogZm9ybSBjb250cm9sIG5hbWVcbiAgICovXG4gIG1vZGVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGaWVsZCB2YWxpZGF0b3JzXG4gICAqXG4gICAqIEF2YWlsYWJsZSB2YWxpZGF0b3JzIGFyZTpcbiAgICogICBbR0ZpZWxkVmFsaWRhdG9yVHlwZS5NSU5dPzogbnVtYmVyO1xuICAgKiAgIFtHRmllbGRWYWxpZGF0b3JUeXBlLk1BWF0/OiBudW1iZXI7XG4gICAqICAgW0dGaWVsZFZhbGlkYXRvclR5cGUuUkVRVUlSRURdPzogYm9vbGVhbjtcbiAgICogICBbR0ZpZWxkVmFsaWRhdG9yVHlwZS5FTUFJTF0/OiBib29sZWFuO1xuICAgKiAgIFtHRmllbGRWYWxpZGF0b3JUeXBlLk1JTl9MRU5HVEhdPzogbnVtYmVyO1xuICAgKiAgIFtHRmllbGRWYWxpZGF0b3JUeXBlLk1BWF9MRU5HVEhdPzogbnVtYmVyO1xuICAgKiAgIFtHRmllbGRWYWxpZGF0b3JUeXBlLlBBVFRFUk5dPzogc3RyaW5nIHwgUmVnRXhwO1xuICAgKlxuICAgKi9cbiAgdmFsaWRhdG9ycz86IEdGaWVsZFZhbGlkYXRvcnM7XG4gIC8qKlxuICAgKiBGaWVsZCBsYWJlbC4gVG8gaGlkZSBsYWJlbCBzZXQgaXRzIHZhbHVlIHRvIG51bGxcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogRmllbGQgcGxhY2Vob2xkZXIuIElmIG5vdCBzcGVjaWZpZWQgd2lsbCB1c2UgbGFiZWwgb3IgbW9kZWxcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICogRmllbGQgZGVmYXVsdCB2YWx1ZVxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0O1xuICAvKipcbiAgICogU2V0IHRoZSBgYXV0b2NvbXBsZXRlYCBhdHRyaWJ1dGUgb2YgYW4gYGlucHV0YFxuICAgKi9cbiAgYXV0b2NvbXBsZXRlPzogc3RyaW5nO1xuICAvKipcbiAgICogRHluYW1pY2FsbHkgZGlzcGxheS9oaWRlIHRoaXMgZmllbGQgYnkgc2V0dGluZyB0aGlzIHByb3BlcnR5XG4gICAqL1xuICBkaXNwbGF5SWY/OiB7XG4gICAgLyoqXG4gICAgICogTW9kZWwgdGhhdCB3aWxsIGJlIGV2YWx1YXRlZFxuICAgICAqL1xuICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRGlzcGxheSB0aGlzIGZpZWxkIGlmIHRoYXQgbW9kZWwgaGFzIHRoaXMgdmFsdWVcbiAgICAgKi9cbiAgICBoYXNWYWx1ZTogYW55XG4gIH0gPSBudWxsO1xuICAvKipcbiAgICogRmllbGQgcG9zaXRpb24gb24gdGhlIGdyaWQgY29sdW1uc1xuICAgKiBIYXMgdG8gYmUgYSB2YWxpZCB2YWx1ZSBmb3IgY3NzIGBncmlkLWNvbHVtbmAgYXR0cmlidXRlXG4gICAqXG4gICAqIEZvciBleGFtcGxlOiAnMSAvIDMnIHwgJzInXG4gICAqL1xuICBncmlkQ29sdW1uPzogc3RyaW5nO1xuICAvKipcbiAgICogRmllbGQgcG9zaXRpb24gb24gdGhlIGdyaWQgcm93c1xuICAgKiBIYXMgdG8gYmUgYSB2YWxpZCB2YWx1ZSBmb3IgY3NzIGBncmlkLXJvd2AgYXR0cmlidXRlXG4gICAqXG4gICAqIEZvciBleGFtcGxlOiAnMSAvIDMnIHwgJzInXG4gICAqL1xuICBncmlkUm93Pzogc3RyaW5nO1xuICAvKipcbiAgICogU2hvdyBzeW1ib2wgaW4gdGhpcyBmaWVsZCBpZiBpdCdzIG5lY2Vzc2FyeVxuICAgKi9cbiAgc3ltYm9sPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZpZWxkIGNvbmZpZ3VyYXRpb24gZm9yIG9ubHkgc3RyaW5nIGZpZWxkc1xuICovXG5leHBvcnQgY2xhc3MgR0ZpZWxkU3RyaW5nQ29uZmlndXJhdGlvbiBleHRlbmRzIEdGaWVsZENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogRmllbGQgZGVmYXVsdCB2YWx1ZVxuICAgKi9cbiAgdmFsdWU/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEZpZWxkIGNvbmZpZ3VyYXRpb24gZm9yIG9ubHkgc3RyaW5nIGZpZWxkc1xuICovXG5leHBvcnQgY2xhc3MgR0ZpZWxkTWFwQ29uZmlndXJhdGlvbiBleHRlbmRzIEdGaWVsZENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogSWYgdHJ1ZSB3aWxsIGRpc3BsYXkgR29vZ2xlIE1hcCBtb2RhbFxuICAgKi9cbiAgc2hvd01hcD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogRmllbGQgY29uZmlndXJhdGlvbiBmb3Igb25seSBudW1iZXIgZmllbGRzXG4gKi9cbmV4cG9ydCBjbGFzcyBHRmllbGROdW1iZXJDb25maWd1cmF0aW9uIGV4dGVuZHMgR0ZpZWxkQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAgKiBGaWVsZCBkZWZhdWx0IHZhbHVlXG4gICAqL1xuICB2YWx1ZT86IG51bWJlciB8IHN0cmluZztcbiAgLyoqXG4gICAqIHNldCBpbnB1dCBkZWNpbWFsXG4gICAqL1xuICBkZWNpbWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHNldCBwcmVjaXNpb24gZGVjaW1hbFxuICAgKi9cbiAgcHJlY2lzaW9uPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEZpZWxkIGNvbmZpZ3VyYXRpb24gZm9yIG9ubHkgYm9vbGVhbiBmaWVsZHNcbiAqL1xuZXhwb3J0IGNsYXNzIEdGaWVsZEJvb2xlYW5Db25maWd1cmF0aW9uIGV4dGVuZHMgR0ZpZWxkQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAgKiBGaWVsZCBkZWZhdWx0IHZhbHVlXG4gICAqL1xuICB2YWx1ZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogRmllbGQgY29uZmlndXJhdGlvbiBpbmNsdWRpbmcgb3B0aW9uIHZhbHVlcyBmb3IgYEdSYWRpb0ZpZWxkYCBhbmQgYEdEcm9wZG93bkZpZWxkYFxuICovXG5leHBvcnQgY2xhc3MgR0ZpZWxkT3B0aW9uVmFsdWVzQ29uZmlndXJhdGlvbiBleHRlbmRzIEdGaWVsZENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogRmllbGQgdmFsdWUgb3B0aW9uc1xuICAgKi9cbiAgb3B0aW9uVmFsdWVzPzogR0ZpZWxkT3B0aW9uVmFsdWVzO1xuICAvKipcbiAgICogSWYgdHJ1ZSB0aGlzIGZpZWxkIHdpbGwgcmVwbGFjZSBpdHMgYG9wdGlvblZhbHVlc2Agd2l0aCBvbmUgcGFzc2VkIGluIGBGb3JtT3B0aW9uc2BcbiAgICovXG4gIGV4dGVybmFsT3B0aW9ucz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogRmllbGQgY29uZmlndXJhdGlvbiBpbmNsdWRpbmcgY291bnRyeSBvcHRpb24gZm9yIGBHQ3VycmVuY3lGaWVsZGAgYW5kIGBHUGhvbmVGaWVsZGBcbiAqL1xuZXhwb3J0IGNsYXNzIEdGaWVsZENvdW50cnlGb3JtbWF0Q29uZmlndXJhdGlvbiBleHRlbmRzIEdGaWVsZENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogQ291bnRyeSBjb25maWd1cmF0aW9uXG4gICAqL1xuICBjb3VudHJ5PzogR0ZpZWxkQ291bnRyeUNvZGU7XG4gIC8qKlxuICAgKiBJZiB0cnVlIHRoZSBjb3VudHJ5IGNhbiBiZSBjaGFuZ2VkXG4gICAqL1xuICBlZGl0Q291bnRyeT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogRmllbGQgY29uZmlndXJhdGlvbiBmb3IgYEdGaWVsZEZpbGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBHRmllbGRGaWxlQ29uZmlndXJhdGlvbiBleHRlbmRzIEdGaWVsZENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogSWYgdHJ1ZSBpdCB3aWxsIHJldHVybiB0aGUgZmlsZSBhcyBiaW5hcnkgaW5zdGVhZCBvZiB0cnlpbmcgdG8gdXBsb2FkIGl0XG4gICAqL1xuICByZXR1cm5GaWxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFVwbG9hZCB1cmwgY29uZmlndXJhdGlvblxuICAgKi9cbiAgYXBpPzoge1xuICAgIC8qKlxuICAgICAqIFVybCB0byBtYWtlIHRoZSBodHRwIHJlcXVlc3RcbiAgICAgKi9cbiAgICB1cmw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBIdHRwIG1ldGhvZCBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBPbmUgb2Y6ICdwb3N0JyB8fCAncHV0J1xuICAgICAqL1xuICAgIG1ldGhvZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWUgaW4gbXVsdGlwYXJ0IGZvcm1cbiAgICAgKi9cbiAgICBmaWxlUGFyYW1OYW1lOiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBTdXBwb3J0ZWQgZmlsZSBleHRlbnNpb25zXG4gICAqIEZvciBleGFtcGxlOiAnLnBkZiwgLmRvYywgLnhtbCwgZXRjJ1xuICAgKi9cbiAgYWNjZXB0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdmFsaWQgbGltaXQgc2l6ZVxuICAgKi9cbiAgc2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIERlZmF1bHQgZmlsZSB2YWx1ZVxuICAgKi9cbiAgdmFsdWU/OiBGaWxlO1xufVxuXG4vKipcbiAqIEZpZWxkIGNvbmZpZ3VyYXRpb24gZm9yIGBHVHdvRGF0YUlucHV0YFxuICovXG5leHBvcnQgY2xhc3MgR0ZpZWxkVHdvRGF0YUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBHRmllbGRDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIElmIGhhcyB2YWx1ZSBpdCB3aWxsIHNob3cgaXQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdG8gaW5wdXRzXG4gICAqL1xuICBkaXZpZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9ucyBmb3IgZWFjaCBpbnB1dFxuICAgKi9cbiAgb3B0aW9ucz86IHtcbiAgICBsZWZ0PzogR0ZpZWxkVHdvRGF0YUlucHV0T3B0aW9ucztcbiAgICByaWdodD86IEdGaWVsZFR3b0RhdGFJbnB1dE9wdGlvbnM7XG4gIH07XG4gIC8qKlxuICAgKiBHcmlkIGNvbHVtbiBzaXplIGZvciBlYWNoIGlucHV0XG4gICAqL1xuICBncmlkPzogW3N0cmluZywgc3RyaW5nXTtcbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgZWFjaCBpbnB1dFxuICAgKi9cbiAgdmFsdWU/OiB7XG4gICAgLyoqXG4gICAgICogbGVmdCBpbnB1dCB2YWx1ZVxuICAgICAqL1xuICAgIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiByaWdodCBpbnB1dCB2YWx1ZVxuICAgICAqL1xuICAgIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIH07XG59XG5cbi8qKlxuICogRmllbGQgY29uZmlndXJhdGlvbiBmb3IgYEdEaXZpZGVyYFxuICovXG5leHBvcnQgY2xhc3MgR0ZpZWxkRGl2aWRlckNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBHRmllbGRDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIFVzZSB0aGUgZGl2aWRlciBhcyBhIHNlY3Rpb24gaGVhZGxpbmUgd2l0aCBhIHRpdGxlXG4gICAqL1xuICBzZWNjaW9uTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIERpdmlkZXIgcGFkZGluZ1xuICAgKi9cbiAgcGFkZGluZz86IHN0cmluZztcbiAgLyoqXG4gICAqIERpdmlkZXIgcGFkZGluZ1xuICAgKi9cbiAgZGl2aWRlckNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogSWYgdHJ1ZSB0aGUgZGl2aWRlciBob3Jpem9udGFsIGxpbmUgd29udCBiZSBzaG93ZWRcbiAgICovXG4gIGhpZGVMaW5lPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgbGl0dGxlIGRlc2NyaXB0aW9uXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBGaWVsZCBjb25maWd1cmF0aW9uIGZvciBgR0J1dHRvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIEdGaWVsZEJ1dHRvbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBHRmllbGRDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIGFjdGlvbiBidXR0b25cbiAgICovXG4gIGFjdGlvbjogR0ZpZWxkVmFsdWVCdXR0b25UeXBlO1xuICAvKipcbiAgICogaWRlbnRpZmllciBidXR0b25cbiAgICovXG4gIGlkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZpZWxkIGludGVyZmFjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdGaWVsZCB7XG4gIHNlbGVjdG9yOiBHRmllbGRTZWxlY3RvcjtcbiAgY29uZmlnOiBHRmllbGRDb25maWd1cmF0aW9uIHwgR0ZpZWxkT3B0aW9uVmFsdWVzQ29uZmlndXJhdGlvbiB8IEdGaWVsZENvdW50cnlGb3JtbWF0Q29uZmlndXJhdGlvbiB8IEdGaWVsZERpdmlkZXJDb25maWd1cmF0aW9uO1xuICBub3RXaWRnZXQ/OiBib29sZWFuO1xuICByYXBweVN0eWxlPzoge307XG59XG5cbi8qKlxuICogRm9ybSBmaWVsZHMgdHlwZVxuICovXG5leHBvcnQgdHlwZSBHRm9ybUZpZWxkcyA9IEFycmF5PEdGaWVsZD47XG5cbi8qKlxuICogRm9ybSBmaWVsZHMgdHlwZSBhcyByZWFkb25seSB0eXBlXG4gKi9cbmV4cG9ydCB0eXBlIEdGb3JtRmllbGRzUmVhZE9ubHkgPSBSZWFkb25seUFycmF5PEdGaWVsZD47XG5cbi8qKlxuICogTG9jYXRpb24gaW50ZXJmYWNlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR0xvY2F0aW9uIHtcbiAgdGF4OiBBcnJheTx7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gIH0+O1xuICBjb3VudHJ5OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFscGhhMkNvZGU6IHN0cmluZztcbiAgfTtcbiAgcGhvbmVGb3JtYXQ6IHtcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgbWFzazogc3RyaW5nO1xuICB9O1xuICBjdXJyZW5jeUZvcm1hdDoge1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBzeW1ib2w6IHN0cmluZztcbiAgICB0aG91c2FuZHM6IHN0cmluZztcbiAgICBkZWNpbWFsOiBzdHJpbmc7XG4gICAgcHJlY2lzaW9uOiBudW1iZXI7XG4gIH07XG4gIGxhbkxuZz86IHtcbiAgICBsYXQ6IG51bWJlcixcbiAgICBsbmc6IG51bWJlclxuICB9O1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR0lucHV0U3R5bGUge1xuICAvKiBJbnB1dCBwYWRkaW5nICovXG4gIHBhZGRpbmc/OiBzdHJpbmc7XG4gIC8qIElucHV0IHRleHQgY29sb3IgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG4gIC8qIElucHV0IGJhY2tncm91ZCAqL1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICAvKiBJbnB1dCBib3JkZXIgc2l6ZSAqL1xuICBib3JkZXJTaXplPzogc3RyaW5nO1xuICAvKiBJbnB1dCBib3JkZXIgc3R5bGUgKi9cbiAgYm9yZGVyU3R5bGU/OiBzdHJpbmc7XG4gIC8qIElucHV0IGJvcmRlciBjb2xvciAqL1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbiAgLyogSW5wdXQgcmFkaW91cyAqL1xuICBib3JkZXJSYWRpdXM/OiBzdHJpbmc7XG4gIC8qIElucHV0IGJvcmRlciB0b3Agd2lkdGgvc2l6ZSAqL1xuICBib3JkZXJUb3A/OiBzdHJpbmc7XG4gIC8qIElucHV0IGJvcmRlciByaWdodCB3aWR0aC9zaXplICovXG4gIGJvcmRlclJpZ2h0Pzogc3RyaW5nO1xuICAvKiBJbnB1dCBib3JkZXIgYm90dG9tIHdpZHRoL3NpemUgKi9cbiAgYm9yZGVyQm90dG9tPzogc3RyaW5nO1xuICAvKiBJbnB1dCBib3JkZXIgbGVmdCB3aWR0aC9zaXplICovXG4gIGJvcmRlckxlZnQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogTGlicmFyeSBzdHlsZXNcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNlbmQgc3R5bGUgcGFyYW1ldGVycyB0byB0aGUgbGlicmFyeVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHU3R5bGVzIHtcbiAgY29sb3I/OiB7XG4gICAgLyoqXG4gICAgICogRm9udCBjb2xvclxuICAgICAqIGRlZmF1bHQ6IFwiaW5oZXJpdFwiXG4gICAgICovXG4gICAgZm9udD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFByaW1hcnkgY29sb3IsIHVzZWQgaW4gaW1wb3J0YW50IFVJIGVsZW1lbnRzIGJhY2tncm91bmQgYW5kIGNvbG9yXG4gICAgICogZGVmYXVsdDogXCIjNDU4OGZkXCJcbiAgICAgKi9cbiAgICBwcmltYXJ5Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2Vjb25kYXJ5IGNvbG9yLCB1c2VkIGluIHNvbWUgVUkgZWxlbWVudHMgYmFja2dyb3VuZCBhbmQgY29sb3JcbiAgICAgKiBkZWZhdWx0OiBcIiM3YTllOWZcIlxuICAgICAqL1xuICAgIHNlY29uZGFyeT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIE5ldXRyYWwgY29sb3IsIHVzZWQgaW4gc29tZSBVSSBlbGVtZW50cyBiYWNrZ3JvdW5kIGFuZCBjb2xvclxuICAgICAqIGRlZmF1bHQ6IFwiIzRmNjM2N1wiXG4gICAgICovXG4gICAgbmV1dHJhbD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEJvcmRlciBjb2xvclxuICAgICAqIGRlZmF1bHQ6IFwiI2VlZWVlZVwiXG4gICAgICovXG4gICAgYm9yZGVyPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogV2hpdGUgY29sb3IsIGFsbCB3aGl0ZSBjb2xvcnMgdXNlZCBpbiBVSSBlbGVtZW50c1xuICAgICAqIGRlZmF1bHQ6IFwiI2ZmZmZmZlwiXG4gICAgICovXG4gICAgd2hpdGU/OiBzdHJpbmc7XG4gIH07XG4gIHVpPzoge1xuICAgIC8qKlxuICAgICAqIEZvbnQgc2l6ZSwgYWxsIGZvbnRzIHNpemVcbiAgICAgKiBkZWZhdWx0OiBcIi45cmVtXCJcbiAgICAgKi9cbiAgICBmb250U2l6ZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIElubmVyIHBhZGRpbmdcbiAgICAgKi9cbiAgICBwYWRkaW5nPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogSW5wdXQgb3BhY2l0eSB3aGVuIGl0J3MgZGlzYWJsZWRcbiAgICAgKiBkZWZhdWx0OiBcIi43XCJcbiAgICAgKi9cbiAgICBkaXNhYmxlZE9wYWNpdHk/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBJbnB1dCBhbmQgYnV0dG9uIHN0eWxlXG4gICAgICogR28gdG8gYEdJbnB1dFN0eWxlYCBmb3IgZGV0YWlsXG4gICAgICovXG4gICAgaW5wdXQ/OiBHSW5wdXRTdHlsZTtcbiAgICBwcmltYXJ5QnV0dG9uPzogR0lucHV0U3R5bGU7XG4gICAgc2Vjb25kYXJ5QnV0dG9uPzogR0lucHV0U3R5bGU7XG4gIH07XG59XG4iXX0=