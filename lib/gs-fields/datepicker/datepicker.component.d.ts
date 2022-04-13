import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GDatePickerField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
declare enum ShowSelector {
    DAY = "day",
    MONTH = "month",
    YEAR = "year"
}
export declare class GsDatePickerComponent extends GsGenericFieldComponent implements OnInit, OnChanges {
    field: GDatePickerField;
    dateValue: string;
    lang: string;
    months: Array<string>;
    weekdays: Array<string>;
    currentMonth: any;
    currentYear: any;
    daysInPreviousMonthWeek: any[];
    daysInCurrentMonth: Array<{
        day: number;
        status: 'string';
    }>;
    daysInNextMonthWeek: any[];
    private selectedDate;
    private date;
    showSelector: ShowSelector;
    showSelectorType: typeof ShowSelector;
    yearUiArray: any[];
    yearMultiplier: number;
    showDatePickerSelector: boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setCalendar;
    changeMonth(next: boolean): void;
    navigateSelectors(next: boolean): void;
    changeYear(next: boolean): void;
    private getDaysInCalendar;
    private getPreviousMonth;
    private getNextMonth;
    selectDate(day: number): void;
    selectMonth(month: number): void;
    selectYear(year: number): void;
    toggleSelector(selector: ShowSelector): void;
    toggleDatePickerSelector(value?: boolean): void;
    disableKeys(): boolean;
    private formatDate;
    resetField(): void;
}
export {};
