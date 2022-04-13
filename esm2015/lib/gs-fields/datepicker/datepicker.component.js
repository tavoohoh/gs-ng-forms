import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
const MONTHS = {
    en: [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ],
    es: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
    ],
    pr: [
        'janeiro',
        'fevereiro',
        'marcha',
        'abril',
        'pode',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]
};
const WEEKDAYS = {
    en: [
        'm', 't', 'w', 't', 'f', 's', 's'
    ],
    es: [
        'l', 'm', 'm', 'j', 'v', 's', 'd'
    ],
    pr: [
        's', 't', 'q', 'q', 's', 's', 'd'
    ]
};
var ShowSelector;
(function (ShowSelector) {
    ShowSelector["DAY"] = "day";
    ShowSelector["MONTH"] = "month";
    ShowSelector["YEAR"] = "year";
})(ShowSelector || (ShowSelector = {}));
let GsDatePickerComponent = class GsDatePickerComponent extends GsGenericFieldComponent {
    constructor() {
        super(...arguments);
        this.daysInPreviousMonthWeek = [];
        this.daysInCurrentMonth = [];
        this.daysInNextMonthWeek = [];
        // selected day
        this.selectedDate = new Date();
        this.date = new Date();
        // selectors UI
        this.showSelector = ShowSelector.DAY;
        this.showSelectorType = ShowSelector;
        this.yearUiArray = new Array(12);
        this.yearMultiplier = 0;
        this.showDatePickerSelector = false;
    }
    ngOnInit() {
        this.lang = this.formsService.getLang() || 'en';
        this.months = MONTHS[this.lang];
        this.weekdays = WEEKDAYS[this.lang];
    }
    ngOnChanges(changes) {
        if (changes.field.currentValue.config && changes.field.currentValue.config.value) {
            this.dateValue = changes.field.currentValue.config.value.toString();
            if (this.dateValue.split('-')) {
                const date = this.dateValue.split('-');
                this.selectedDate = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]));
                this.date = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]));
            }
        }
        this.setCalendar();
    }
    setCalendar() {
        this.currentMonth = this.date.getUTCMonth();
        this.currentYear = this.date.getUTCFullYear();
        this.getDaysInCalendar();
    }
    changeMonth(next) {
        this.date.setMonth(next ? this.date.getUTCMonth() + 1 : this.date.getUTCMonth() - 1);
        this.currentMonth = this.date.getUTCMonth();
        this.currentYear = this.date.getUTCFullYear();
        this.setCalendar();
        setTimeout(() => {
            this.showDatePickerSelector = true;
        });
    }
    navigateSelectors(next) {
        if (this.showSelector === ShowSelector.YEAR) {
            return this.changeYear(next);
        }
        else {
            return this.changeMonth(next);
        }
    }
    changeYear(next) {
        this.yearMultiplier = next ? this.yearMultiplier + 12 : this.yearMultiplier - 12;
    }
    getDaysInCalendar() {
        // days in current month
        const daysOfCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getUTCDate();
        const currentMonthDays = [];
        for (let i = 0; i < daysOfCurrentMonth; i++) {
            if (this.selectedDate.getUTCFullYear() === this.date.getUTCFullYear() &&
                this.selectedDate.getUTCMonth() === this.date.getUTCMonth() &&
                i + 1 === this.selectedDate.getUTCDate()) {
                currentMonthDays.push({
                    day: i + 1,
                    status: 'selected'
                });
            }
            else {
                currentMonthDays.push({
                    day: i + 1,
                    status: 'available'
                });
            }
        }
        this.daysInCurrentMonth = currentMonthDays;
        // dasy in previous month week
        this.daysInPreviousMonthWeek = this.getPreviousMonth();
        // days in next month week
        this.daysInNextMonthWeek = this.getNextMonth();
    }
    getPreviousMonth() {
        const daysOfBeforeMonth = new Date(this.currentYear, this.currentMonth, 0).getUTCDate();
        const firstDayOfCurrentMonth = new Date(this.currentYear, this.currentMonth, 0).getDay();
        const previousWeekDays = [];
        for (let i = 0; i < firstDayOfCurrentMonth; i++) {
            previousWeekDays.push(daysOfBeforeMonth - i);
        }
        return previousWeekDays.reverse();
    }
    getNextMonth() {
        const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 2, 0).getDay();
        const nextWeekDays = [];
        for (let i = 0; i < (7 - lastDayOfMonth); i++) {
            nextWeekDays.push(i + 1);
        }
        return nextWeekDays;
    }
    selectDate(day) {
        this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
        this.dateValue = this.formatDate(this.selectedDate);
        this.formGroup.controls[this.field.config.model].patchValue(this.dateValue);
        this.formGroup.controls[this.field.config.model].updateValueAndValidity();
        this.getDaysInCalendar();
        this.toggleDatePickerSelector(false);
    }
    selectMonth(month) {
        this.date.setMonth(month);
        this.currentMonth = this.date.getUTCMonth();
        this.getDaysInCalendar();
        this.showSelector = ShowSelector.DAY;
        setTimeout(() => {
            this.showDatePickerSelector = true;
        });
    }
    selectYear(year) {
        this.date.setFullYear(year);
        this.currentYear = this.date.getUTCFullYear();
        this.getDaysInCalendar();
        this.showSelector = ShowSelector.MONTH;
        setTimeout(() => {
            this.showDatePickerSelector = true;
        });
    }
    toggleSelector(selector) {
        this.showSelector = selector;
        setTimeout(() => {
            this.showDatePickerSelector = true;
        });
    }
    toggleDatePickerSelector(value = !this.showDatePickerSelector) {
        this.showDatePickerSelector = value;
    }
    disableKeys() {
        return false;
    }
    formatDate(date) {
        const year = date.getUTCFullYear();
        let month = (date.getUTCMonth() + 1).toString();
        let day = date.getUTCDate().toString();
        if (month.length < 2) {
            month = `0${month}`;
        }
        if (day.length < 2) {
            day = `0${day}`;
        }
        return [year, month, day].join('-');
    }
    resetField() {
        this.dateValue = null;
    }
};
tslib_1.__decorate([
    Input()
], GsDatePickerComponent.prototype, "field", void 0);
GsDatePickerComponent = tslib_1.__decorate([
    Component({
        selector: 'gs-datepicker',
        template: "<div class=\"gs-field\" \n  [class.gs-field-has-error]=\"validateField()\"\n  gsClickOutside \n  (gsClickOutside)=\"toggleDatePickerSelector(false)\">\n  \n  <label class=\"gs-field-box\"\n    [class.gs-form-field-box-full]=\"field.config.label\">\n\n    <span\n      class=\"gs-field-label\"\n      *ngIf=\"field.config.label\">\n      {{ field.config.label | translate }}\n    </span>\n\n    <input\n      #inputElement\n      class=\"gs-field-input gs-field-input-date\"\n      type=\"text\"\n      [id]=\"field.config.model\"\n      [placeholder]=\"'YYYY-MM-DD'\"\n      [(ngModel)]=\"dateValue\"\n      (click)=\"toggleDatePickerSelector()\"\n      (keydown)=\"disableKeys()\"\n      (keyup)=\"disableKeys()\"\n      (keypress)=\"disableKeys()\"\n    />\n  </label>\n\n  <div class=\"gs-datepicker\" *ngIf=\"showDatePickerSelector\">\n    \n    <div class=\"gs-datepicker-header\">\n      <!-- arrow-left -->\n      <button \n        type=\"button\" \n        class=\"gs-datepicker-arrow-left\" \n        (click)=\"navigateSelectors(false)\">\n          <svg \n            xmlns=\"http://www.w3.org/2000/svg\" \n            width=\"24\" \n            height=\"24\" \n            viewBox=\"0 0 24 24\"        \n            *ngIf=\"showSelector !== showSelectorType.MONTH\">\n              <path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/>\n          </svg>\n      </button>\n  \n      <span class=\"gs-datepicker-selector\">\n        <!-- day selector header -->\n        <button\n          type=\"button\"\n          *ngIf=\"showSelector === showSelectorType.DAY\"\n          (click)=\"toggleSelector(showSelectorType.MONTH)\">\n          {{ months[currentMonth] }} {{ currentYear }}\n        </button>\n  \n        <!-- month selector header -->\n        <button\n          type=\"button\"\n          *ngIf=\"showSelector === showSelectorType.MONTH\"\n          (click)=\"toggleSelector(showSelectorType.YEAR)\">\n          {{ currentYear }}\n        </button>\n  \n        <!-- year selector header -->\n        <button\n          type=\"button\"\n          *ngIf=\"showSelector === showSelectorType.YEAR\">\n          {{ currentYear + yearMultiplier }} - {{ currentYear + yearMultiplier + 11 }}\n        </button>\n      </span>\n  \n      <!-- arrow-right -->\n      <button \n        type=\"button\" \n        class=\"gs-datepicker-arrow-right\"\n        (click)=\"navigateSelectors(true)\">\n          <svg \n            xmlns=\"http://www.w3.org/2000/svg\" \n            width=\"24\" \n            height=\"24\" \n            viewBox=\"0 0 24 24\"          \n            *ngIf=\"showSelector !== showSelectorType.MONTH\">\n              <path d=\"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z\"/>\n          </svg>\n      </button>\n    </div>\n  \n    <!-- days selector --> \n    <div class=\"gs-datepicker-day-selector\" *ngIf=\"showSelector === showSelectorType.DAY\">\n      <div class=\"gs-datepicker-weekdays\">\n        <span *ngFor=\"let day of weekdays\">\n          {{ day }}\n        </span>\n      </div>\n  \n      <div class=\"gs-datepicker-days\" *ngIf=\"daysInCurrentMonth\">\n        <!-- previous month -->\n        <span *ngFor=\"let previousDay of daysInPreviousMonthWeek\"\n          class=\"gs-datepicker-previous-days\" \n          (click)=\"changeMonth(false)\">\n          {{ previousDay }}\n        </span>\n  \n        <!-- current and available days for current month -->\n        <span *ngFor=\"let date of daysInCurrentMonth\" \n          class=\"gs-datepicker-current-days\"\n          [class.selected-day]=\"date.status === 'selected'\"\n          (click)=\"selectDate(date.day)\">\n            {{ date.day }}\n        </span>\n  \n        <!-- next month -->\n        <span *ngFor=\"let nextDay of daysInNextMonthWeek\" \n          class=\"gs-datepicker-next-days\"\n          (click)=\"changeMonth(true)\">\n          {{ nextDay }}\n        </span>\n      </div>\n    </div>\n  \n    <!-- months selector --> \n    <div class=\"gs-datepicker-month-selector\" *ngIf=\"showSelector === showSelectorType.MONTH\">\n      <span *ngFor=\"let month of months; let i = index;\" (click)=\"selectMonth(i)\">\n        {{ month | slice:0:3 }}\n      </span>\n    </div>\n  \n    <!-- years selector --> \n    <div class=\"gs-datepicker-month-selector\" *ngIf=\"showSelector === showSelectorType.YEAR\">\n      <span\n        *ngFor=\"let x of yearUiArray; let i = index;\"\n        (click)=\"selectYear(currentYear + yearMultiplier + i)\">\n        {{ currentYear + yearMultiplier + i }}\n      </span>\n    </div>\n  </div>\n\n  <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n    {{ getFieldError(field.config.model) | translate }}\n  </span>\n</div>",
        styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px;position:relative}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-datepicker{border:2px solid #e5e5e4;box-shadow:0 10px 10px rgba(0,0,0,.03),0 5px 5px rgba(0,0,0,.01);position:absolute;color:#706967;background:#fff;border-radius:1rem;top:53px;width:100%;overflow:hidden;z-index:100}.gs-datepicker .gs-datepicker-header{display:-ms-grid;display:grid;-ms-grid-columns:24px auto 24px;grid-template-columns:24px auto 24px;gap:6px;padding:8px;background-color:#332927}.gs-datepicker .gs-datepicker-header *{-ms-grid-row-align:center;align-self:center}.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-left,.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-right,.gs-datepicker .gs-datepicker-header .gs-datepicker-selector{text-align:center;-ms-grid-row-align:center;align-self:center;cursor:pointer}.gs-datepicker .gs-datepicker-header .gs-datepicker-selector button{text-transform:capitalize;cursor:pointer;padding:10px 0;line-height:1;width:100%;margin:0 auto;background-color:transparent;border:none;outline:0;color:#fff}.gs-datepicker .gs-datepicker-header .gs-datepicker-selector button:hover{opacity:.8}.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-left,.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-right{border:none;background:0 0;outline:0;cursor:pointer;line-height:1}.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-left svg,.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-right svg{fill:#fff;width:16px}.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-left:hover,.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-right:hover{opacity:.8}.gs-datepicker .gs-datepicker-day-selector,.gs-datepicker .gs-datepicker-month-selector,.gs-datepicker .gs-datepicker-year-selector{display:-ms-grid;display:grid;min-height:230px}.gs-datepicker .gs-datepicker-day-selector{padding:1rem}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-weekdays{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr);height:24px}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-weekdays span{text-align:center;-ms-grid-row-align:center;align-self:center;font-weight:700;text-transform:uppercase}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr)}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-current-days,.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-next-days,.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-previous-days{padding:4px;text-align:center;-ms-grid-row-align:center;align-self:center;font-size:.8rem;border:1px solid transparent}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-next-days,.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-previous-days{opacity:.4}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-current-days{cursor:pointer}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-current-days:hover{color:#fff;background-color:#ff2426;opacity:.8}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-selected-day{color:#fff;background-color:#ff2426;border:1px solid #ff2426}.gs-datepicker .gs-datepicker-month-selector,.gs-datepicker .gs-datepicker-year-selector{-ms-grid-columns:(1fr)[4];grid-template-columns:repeat(4,1fr)}.gs-datepicker .gs-datepicker-month-selector span,.gs-datepicker .gs-datepicker-year-selector span{padding:24px 0;text-transform:uppercase;letter-spacing:2px;cursor:pointer;text-align:center}.gs-datepicker .gs-datepicker-month-selector span:hover,.gs-datepicker .gs-datepicker-year-selector span:hover{color:#fff;background-color:#ff2426;opacity:.8}"]
    })
], GsDatePickerComponent);
export { GsDatePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZmllbGRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVyRixNQUFNLE1BQU0sR0FBRztJQUNiLEVBQUUsRUFBRTtRQUNGLFNBQVM7UUFDVCxVQUFVO1FBQ1YsT0FBTztRQUNQLE9BQU87UUFDUCxLQUFLO1FBQ0wsTUFBTTtRQUNOLE1BQU07UUFDTixRQUFRO1FBQ1IsV0FBVztRQUNYLFNBQVM7UUFDVCxVQUFVO1FBQ1YsVUFBVTtLQUNYO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsT0FBTztRQUNQLFNBQVM7UUFDVCxPQUFPO1FBQ1AsT0FBTztRQUNQLE1BQU07UUFDTixPQUFPO1FBQ1AsT0FBTztRQUNQLFFBQVE7UUFDUixZQUFZO1FBQ1osU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO0tBQ1o7SUFDRCxFQUFFLEVBQUU7UUFDRixTQUFTO1FBQ1QsV0FBVztRQUNYLFFBQVE7UUFDUixPQUFPO1FBQ1AsTUFBTTtRQUNOLE9BQU87UUFDUCxPQUFPO1FBQ1AsUUFBUTtRQUNSLFVBQVU7UUFDVixTQUFTO1FBQ1QsVUFBVTtRQUNWLFVBQVU7S0FDWDtDQUNGLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLEVBQUUsRUFBRTtRQUNGLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7S0FDbEM7SUFDRCxFQUFFLEVBQUU7UUFDRixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcs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cGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR0RhdGVQaWNrZXJGaWVsZCB9IGZyb20gJy4uLy4uL2dzLWZvcm1zLndpZGdldHMnO1xuaW1wb3J0IHsgR3NHZW5lcmljRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9fZ2VuZXJpYy1maWVsZC9fZ2VuZXJpYy1maWVsZC5jb21wb25lbnQnO1xuXG5jb25zdCBNT05USFMgPSB7XG4gIGVuOiBbXG4gICAgJ2phbnVhcnknLFxuICAgICdmZWJydWFyeScsXG4gICAgJ21hcmNoJyxcbiAgICAnYXByaWwnLFxuICAgICdtYXknLFxuICAgICdqdW5lJyxcbiAgICAnanVseScsXG4gICAgJ2F1Z3VzdCcsXG4gICAgJ3NlcHRlbWJlcicsXG4gICAgJ29jdG9iZXInLFxuICAgICdub3ZlbWJlcicsXG4gICAgJ2RlY2VtYmVyJ1xuICBdLFxuICBlczogW1xuICAgICdlbmVybycsXG4gICAgJ2ZlYnJlcm8nLFxuICAgICdtYXJ6bycsXG4gICAgJ2FicmlsJyxcbiAgICAnbWF5bycsXG4gICAgJ2p1bmlvJyxcbiAgICAnanVsaW8nLFxuICAgICdhZ29zdG8nLFxuICAgICdzZXB0aWVtYnJlJyxcbiAgICAnb2N0dWJyZScsXG4gICAgJ25vdmllbWJyZScsXG4gICAgJ2RpY2llbWJyZSdcbiAgXSxcbiAgcHI6IFtcbiAgICAnamFuZWlybycsXG4gICAgJ2ZldmVyZWlybycsXG4gICAgJ21hcmNoYScsXG4gICAgJ2FicmlsJyxcbiAgICAncG9kZScsXG4gICAgJ2p1bmhvJyxcbiAgICAnanVsaG8nLFxuICAgICdhZ29zdG8nLFxuICAgICdzZXRlbWJybycsXG4gICAgJ291dHVicm8nLFxuICAgICdub3ZlbWJybycsXG4gICAgJ2RlemVtYnJvJ1xuICBdXG59O1xuXG5jb25zdCBXRUVLREFZUyA9IHtcbiAgZW46IFtcbiAgICAnbScsICd0JywgJ3cnLCAndCcsICdmJywgJ3MnLCAncydcbiAgXSxcbiAgZXM6IFtcbiAgICAnbCcsICdtJywgJ20nLCAnaicsICd2JywgJ3MnLCAnZCdcbiAgXSxcbiAgcHI6IFtcbiAgICAncycsICd0JywgJ3EnLCAncScsICdzJywgJ3MnLCAnZCdcbiAgXVxufTtcblxuZW51bSBTaG93U2VsZWN0b3Ige1xuICBEQVkgPSAnZGF5JyxcbiAgTU9OVEggPSAnbW9udGgnLFxuICBZRUFSID0gJ3llYXInXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dzLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGVwaWNrZXIuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHc0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBHc0dlbmVyaWNGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHVibGljIGZpZWxkOiBHRGF0ZVBpY2tlckZpZWxkO1xuICBwdWJsaWMgZGF0ZVZhbHVlOiBzdHJpbmc7XG4gIHB1YmxpYyBsYW5nOiBzdHJpbmc7XG4gIHB1YmxpYyBtb250aHM6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyB3ZWVrZGF5czogQXJyYXk8c3RyaW5nPjtcblxuICAvLyBkaXNwbGF5ZWQgZGF0ZVxuICBwdWJsaWMgY3VycmVudE1vbnRoO1xuICBwdWJsaWMgY3VycmVudFllYXI7XG4gIHB1YmxpYyBkYXlzSW5QcmV2aW91c01vbnRoV2VlayA9IFtdO1xuICBwdWJsaWMgZGF5c0luQ3VycmVudE1vbnRoOiBBcnJheTx7IGRheTogbnVtYmVyLCBzdGF0dXM6ICdzdHJpbmcnIH0+ID0gW107XG4gIHB1YmxpYyBkYXlzSW5OZXh0TW9udGhXZWVrID0gW107XG5cbiAgLy8gc2VsZWN0ZWQgZGF5XG4gIHByaXZhdGUgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBkYXRlID0gbmV3IERhdGUoKTtcblxuICAvLyBzZWxlY3RvcnMgVUlcbiAgcHVibGljIHNob3dTZWxlY3RvcjogU2hvd1NlbGVjdG9yID0gU2hvd1NlbGVjdG9yLkRBWTtcbiAgcHVibGljIHNob3dTZWxlY3RvclR5cGUgPSBTaG93U2VsZWN0b3I7XG4gIHB1YmxpYyB5ZWFyVWlBcnJheSA9IG5ldyBBcnJheSgxMik7XG4gIHB1YmxpYyB5ZWFyTXVsdGlwbGllciA9IDA7XG4gIHB1YmxpYyBzaG93RGF0ZVBpY2tlclNlbGVjdG9yID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYW5nID0gdGhpcy5mb3Jtc1NlcnZpY2UuZ2V0TGFuZygpIHx8ICdlbic7XG4gICAgdGhpcy5tb250aHMgPSBNT05USFNbdGhpcy5sYW5nXTtcbiAgICB0aGlzLndlZWtkYXlzID0gV0VFS0RBWVNbdGhpcy5sYW5nXTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5maWVsZC5jdXJyZW50VmFsdWUuY29uZmlnICYmIGNoYW5nZXMuZmllbGQuY3VycmVudFZhbHVlLmNvbmZpZy52YWx1ZSkge1xuICAgICAgdGhpcy5kYXRlVmFsdWUgPSBjaGFuZ2VzLmZpZWxkLmN1cnJlbnRWYWx1ZS5jb25maWcudmFsdWUudG9TdHJpbmcoKTtcblxuICAgICAgaWYgKHRoaXMuZGF0ZVZhbHVlLnNwbGl0KCctJykpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVZhbHVlLnNwbGl0KCctJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoTnVtYmVyKGRhdGVbMF0pLCBOdW1iZXIoZGF0ZVsxXSkgLSAxLCBOdW1iZXIoZGF0ZVsyXSkpO1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShOdW1iZXIoZGF0ZVswXSksIE51bWJlcihkYXRlWzFdKSAtIDEsIE51bWJlcihkYXRlWzJdKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDYWxlbmRhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYWxlbmRhcigpIHtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IHRoaXMuZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLmRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICB0aGlzLmdldERheXNJbkNhbGVuZGFyKCk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlTW9udGgobmV4dDogYm9vbGVhbikge1xuICAgIHRoaXMuZGF0ZS5zZXRNb250aChuZXh0ID8gdGhpcy5kYXRlLmdldFVUQ01vbnRoKCkgKyAxIDogdGhpcy5kYXRlLmdldFVUQ01vbnRoKCkgLSAxKTtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IHRoaXMuZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLmRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICB0aGlzLnNldENhbGVuZGFyKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RhdGVQaWNrZXJTZWxlY3RvciA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVTZWxlY3RvcnMobmV4dDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnNob3dTZWxlY3RvciA9PT0gU2hvd1NlbGVjdG9yLllFQVIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5nZVllYXIobmV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5nZU1vbnRoKG5leHQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VZZWFyKG5leHQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnllYXJNdWx0aXBsaWVyID0gbmV4dCA/IHRoaXMueWVhck11bHRpcGxpZXIgKyAxMiA6IHRoaXMueWVhck11bHRpcGxpZXIgLSAxMjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF5c0luQ2FsZW5kYXIoKSB7XG4gICAgLy8gZGF5cyBpbiBjdXJyZW50IG1vbnRoXG4gICAgY29uc3QgZGF5c09mQ3VycmVudE1vbnRoID0gbmV3IERhdGUoXG4gICAgICB0aGlzLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnRNb250aCArIDEsIDBcbiAgICApLmdldFVUQ0RhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50TW9udGhEYXlzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXNPZkN1cnJlbnRNb250aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHRoaXMuZGF0ZS5nZXRVVENGdWxsWWVhcigpICYmXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlLmdldFVUQ01vbnRoKCkgPT09IHRoaXMuZGF0ZS5nZXRVVENNb250aCgpICYmXG4gICAgICAgIGkgKyAxID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRVVENEYXRlKClcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50TW9udGhEYXlzLnB1c2goe1xuICAgICAgICAgIGRheTogaSArIDEsXG4gICAgICAgICAgc3RhdHVzOiAnc2VsZWN0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudE1vbnRoRGF5cy5wdXNoKHtcbiAgICAgICAgICBkYXk6IGkgKyAxLFxuICAgICAgICAgIHN0YXR1czogJ2F2YWlsYWJsZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kYXlzSW5DdXJyZW50TW9udGggPSBjdXJyZW50TW9udGhEYXlzO1xuXG4gICAgLy8gZGFzeSBpbiBwcmV2aW91cyBtb250aCB3ZWVrXG4gICAgdGhpcy5kYXlzSW5QcmV2aW91c01vbnRoV2VlayA9IHRoaXMuZ2V0UHJldmlvdXNNb250aCgpO1xuXG4gICAgLy8gZGF5cyBpbiBuZXh0IG1vbnRoIHdlZWtcbiAgICB0aGlzLmRheXNJbk5leHRNb250aFdlZWsgPSB0aGlzLmdldE5leHRNb250aCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmV2aW91c01vbnRoKCk6IEFycmF5PG51bWJlcj4ge1xuICAgIGNvbnN0IGRheXNPZkJlZm9yZU1vbnRoID0gbmV3IERhdGUodGhpcy5jdXJyZW50WWVhciwgdGhpcy5jdXJyZW50TW9udGgsIDApLmdldFVUQ0RhdGUoKTtcbiAgICBjb25zdCBmaXJzdERheU9mQ3VycmVudE1vbnRoID0gbmV3IERhdGUoXG4gICAgICB0aGlzLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnRNb250aCwgMFxuICAgICkuZ2V0RGF5KCk7XG4gICAgY29uc3QgcHJldmlvdXNXZWVrRGF5cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaXJzdERheU9mQ3VycmVudE1vbnRoOyBpKyspIHtcbiAgICAgIHByZXZpb3VzV2Vla0RheXMucHVzaChkYXlzT2ZCZWZvcmVNb250aCAtIGkpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1dlZWtEYXlzLnJldmVyc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dE1vbnRoKCk6IEFycmF5PG51bWJlcj4ge1xuICAgIGNvbnN0IGxhc3REYXlPZk1vbnRoID0gbmV3IERhdGUoXG4gICAgICB0aGlzLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnRNb250aCArIDIsIDBcbiAgICApLmdldERheSgpO1xuICAgIGNvbnN0IG5leHRXZWVrRGF5cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoNyAtIGxhc3REYXlPZk1vbnRoKTsgaSsrKSB7XG4gICAgICBuZXh0V2Vla0RheXMucHVzaChpICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRXZWVrRGF5cztcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3REYXRlKGRheTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnRNb250aCwgZGF5KTtcbiAgICB0aGlzLmRhdGVWYWx1ZSA9IHRoaXMuZm9ybWF0RGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnBhdGNoVmFsdWUodGhpcy5kYXRlVmFsdWUpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5nZXREYXlzSW5DYWxlbmRhcigpO1xuICAgIHRoaXMudG9nZ2xlRGF0ZVBpY2tlclNlbGVjdG9yKGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNb250aChtb250aDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRlLnNldE1vbnRoKG1vbnRoKTtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IHRoaXMuZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHRoaXMuZ2V0RGF5c0luQ2FsZW5kYXIoKTtcblxuICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gU2hvd1NlbGVjdG9yLkRBWTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RGF0ZVBpY2tlclNlbGVjdG9yID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RZZWFyKHllYXI6IG51bWJlcikge1xuICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICB0aGlzLmN1cnJlbnRZZWFyID0gdGhpcy5kYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgdGhpcy5nZXREYXlzSW5DYWxlbmRhcigpO1xuICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gU2hvd1NlbGVjdG9yLk1PTlRIO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlUGlja2VyU2VsZWN0b3IgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNlbGVjdG9yKHNlbGVjdG9yOiBTaG93U2VsZWN0b3IpIHtcbiAgICB0aGlzLnNob3dTZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlUGlja2VyU2VsZWN0b3IgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURhdGVQaWNrZXJTZWxlY3Rvcih2YWx1ZSA9ICF0aGlzLnNob3dEYXRlUGlja2VyU2VsZWN0b3IpIHtcbiAgICB0aGlzLnNob3dEYXRlUGlja2VyU2VsZWN0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlS2V5cygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSkge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG5cbiAgICBsZXQgbW9udGggPSAoZGF0ZS5nZXRVVENNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXRVVENEYXRlKCkudG9TdHJpbmcoKTtcblxuICAgIGlmIChtb250aC5sZW5ndGggPCAyKSB7XG4gICAgICBtb250aCA9IGAwJHttb250aH1gO1xuICAgIH1cblxuICAgIGlmIChkYXkubGVuZ3RoIDwgMikge1xuICAgICAgZGF5ID0gYDAke2RheX1gO1xuICAgIH1cblxuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0RmllbGQoKSB7XG4gICAgdGhpcy5kYXRlVmFsdWUgPSBudWxsO1xuICB9XG59XG4iXX0=