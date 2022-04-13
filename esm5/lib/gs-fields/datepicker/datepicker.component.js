import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
var MONTHS = {
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
var WEEKDAYS = {
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
var GsDatePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GsDatePickerComponent, _super);
    function GsDatePickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.daysInPreviousMonthWeek = [];
        _this.daysInCurrentMonth = [];
        _this.daysInNextMonthWeek = [];
        // selected day
        _this.selectedDate = new Date();
        _this.date = new Date();
        // selectors UI
        _this.showSelector = ShowSelector.DAY;
        _this.showSelectorType = ShowSelector;
        _this.yearUiArray = new Array(12);
        _this.yearMultiplier = 0;
        _this.showDatePickerSelector = false;
        return _this;
    }
    GsDatePickerComponent.prototype.ngOnInit = function () {
        this.lang = this.formsService.getLang() || 'en';
        this.months = MONTHS[this.lang];
        this.weekdays = WEEKDAYS[this.lang];
    };
    GsDatePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.field.currentValue.config && changes.field.currentValue.config.value) {
            this.dateValue = changes.field.currentValue.config.value.toString();
            if (this.dateValue.split('-')) {
                var date = this.dateValue.split('-');
                this.selectedDate = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]));
                this.date = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]));
            }
        }
        this.setCalendar();
    };
    GsDatePickerComponent.prototype.setCalendar = function () {
        this.currentMonth = this.date.getUTCMonth();
        this.currentYear = this.date.getUTCFullYear();
        this.getDaysInCalendar();
    };
    GsDatePickerComponent.prototype.changeMonth = function (next) {
        var _this = this;
        this.date.setMonth(next ? this.date.getUTCMonth() + 1 : this.date.getUTCMonth() - 1);
        this.currentMonth = this.date.getUTCMonth();
        this.currentYear = this.date.getUTCFullYear();
        this.setCalendar();
        setTimeout(function () {
            _this.showDatePickerSelector = true;
        });
    };
    GsDatePickerComponent.prototype.navigateSelectors = function (next) {
        if (this.showSelector === ShowSelector.YEAR) {
            return this.changeYear(next);
        }
        else {
            return this.changeMonth(next);
        }
    };
    GsDatePickerComponent.prototype.changeYear = function (next) {
        this.yearMultiplier = next ? this.yearMultiplier + 12 : this.yearMultiplier - 12;
    };
    GsDatePickerComponent.prototype.getDaysInCalendar = function () {
        // days in current month
        var daysOfCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getUTCDate();
        var currentMonthDays = [];
        for (var i = 0; i < daysOfCurrentMonth; i++) {
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
    };
    GsDatePickerComponent.prototype.getPreviousMonth = function () {
        var daysOfBeforeMonth = new Date(this.currentYear, this.currentMonth, 0).getUTCDate();
        var firstDayOfCurrentMonth = new Date(this.currentYear, this.currentMonth, 0).getDay();
        var previousWeekDays = [];
        for (var i = 0; i < firstDayOfCurrentMonth; i++) {
            previousWeekDays.push(daysOfBeforeMonth - i);
        }
        return previousWeekDays.reverse();
    };
    GsDatePickerComponent.prototype.getNextMonth = function () {
        var lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 2, 0).getDay();
        var nextWeekDays = [];
        for (var i = 0; i < (7 - lastDayOfMonth); i++) {
            nextWeekDays.push(i + 1);
        }
        return nextWeekDays;
    };
    GsDatePickerComponent.prototype.selectDate = function (day) {
        this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
        this.dateValue = this.formatDate(this.selectedDate);
        this.formGroup.controls[this.field.config.model].patchValue(this.dateValue);
        this.formGroup.controls[this.field.config.model].updateValueAndValidity();
        this.getDaysInCalendar();
        this.toggleDatePickerSelector(false);
    };
    GsDatePickerComponent.prototype.selectMonth = function (month) {
        var _this = this;
        this.date.setMonth(month);
        this.currentMonth = this.date.getUTCMonth();
        this.getDaysInCalendar();
        this.showSelector = ShowSelector.DAY;
        setTimeout(function () {
            _this.showDatePickerSelector = true;
        });
    };
    GsDatePickerComponent.prototype.selectYear = function (year) {
        var _this = this;
        this.date.setFullYear(year);
        this.currentYear = this.date.getUTCFullYear();
        this.getDaysInCalendar();
        this.showSelector = ShowSelector.MONTH;
        setTimeout(function () {
            _this.showDatePickerSelector = true;
        });
    };
    GsDatePickerComponent.prototype.toggleSelector = function (selector) {
        var _this = this;
        this.showSelector = selector;
        setTimeout(function () {
            _this.showDatePickerSelector = true;
        });
    };
    GsDatePickerComponent.prototype.toggleDatePickerSelector = function (value) {
        if (value === void 0) { value = !this.showDatePickerSelector; }
        this.showDatePickerSelector = value;
    };
    GsDatePickerComponent.prototype.disableKeys = function () {
        return false;
    };
    GsDatePickerComponent.prototype.formatDate = function (date) {
        var year = date.getUTCFullYear();
        var month = (date.getUTCMonth() + 1).toString();
        var day = date.getUTCDate().toString();
        if (month.length < 2) {
            month = "0" + month;
        }
        if (day.length < 2) {
            day = "0" + day;
        }
        return [year, month, day].join('-');
    };
    GsDatePickerComponent.prototype.resetField = function () {
        this.dateValue = null;
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
    return GsDatePickerComponent;
}(GsGenericFieldComponent));
export { GsDatePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZmllbGRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVyRixJQUFNLE1BQU0sR0FBRztJQUNiLEVBQUUsRUFBRTtRQUNGLFNBQVM7UUFDVCxVQUFVO1FBQ1YsT0FBTztRQUNQLE9BQU87UUFDUCxLQUFLO1FBQ0wsTUFBTTtRQUNOLE1BQU07UUFDTixRQUFRO1FBQ1IsV0FBVztRQUNYLFNBQVM7UUFDVCxVQUFVO1FBQ1YsVUFBVTtLQUNYO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsT0FBTztRQUNQLFNBQVM7UUFDVCxPQUFPO1FBQ1AsT0FBTztRQUNQLE1BQU07UUFDTixPQUFPO1FBQ1AsT0FBTztRQUNQLFFBQVE7UUFDUixZQUFZO1FBQ1osU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO0tBQ1o7SUFDRCxFQUFFLEVBQUU7UUFDRixTQUFTO1FBQ1QsV0FBVztRQUNYLFFBQVE7UUFDUixPQUFPO1FBQ1AsTUFBTTtRQUNOLE9BQU87UUFDUCxPQUFPO1FBQ1AsUUFBUTtRQUNSLFVBQVU7UUFDVixTQUFTO1FBQ1QsVUFBVTtRQUNWLFVBQVU7S0FDWDtDQUNGLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLEVBQUUsRUFBRTtRQUNGLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7S0FDbEM7SUFDRCxFQUFFLEVBQUU7UUFDRixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcs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VyxxQkFBcUIsQ0EyTWpDO0lBQUQsNEJBQUM7Q0FBQSxBQTNNRCxDQUEyQyx1QkFBdUIsR0EyTWpFO1NBM01ZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHRGF0ZVBpY2tlckZpZWxkIH0gZnJvbSAnLi4vLi4vZ3MtZm9ybXMud2lkZ2V0cyc7XG5pbXBvcnQgeyBHc0dlbmVyaWNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL19nZW5lcmljLWZpZWxkL19nZW5lcmljLWZpZWxkLmNvbXBvbmVudCc7XG5cbmNvbnN0IE1PTlRIUyA9IHtcbiAgZW46IFtcbiAgICAnamFudWFyeScsXG4gICAgJ2ZlYnJ1YXJ5JyxcbiAgICAnbWFyY2gnLFxuICAgICdhcHJpbCcsXG4gICAgJ21heScsXG4gICAgJ2p1bmUnLFxuICAgICdqdWx5JyxcbiAgICAnYXVndXN0JyxcbiAgICAnc2VwdGVtYmVyJyxcbiAgICAnb2N0b2JlcicsXG4gICAgJ25vdmVtYmVyJyxcbiAgICAnZGVjZW1iZXInXG4gIF0sXG4gIGVzOiBbXG4gICAgJ2VuZXJvJyxcbiAgICAnZmVicmVybycsXG4gICAgJ21hcnpvJyxcbiAgICAnYWJyaWwnLFxuICAgICdtYXlvJyxcbiAgICAnanVuaW8nLFxuICAgICdqdWxpbycsXG4gICAgJ2Fnb3N0bycsXG4gICAgJ3NlcHRpZW1icmUnLFxuICAgICdvY3R1YnJlJyxcbiAgICAnbm92aWVtYnJlJyxcbiAgICAnZGljaWVtYnJlJ1xuICBdLFxuICBwcjogW1xuICAgICdqYW5laXJvJyxcbiAgICAnZmV2ZXJlaXJvJyxcbiAgICAnbWFyY2hhJyxcbiAgICAnYWJyaWwnLFxuICAgICdwb2RlJyxcbiAgICAnanVuaG8nLFxuICAgICdqdWxobycsXG4gICAgJ2Fnb3N0bycsXG4gICAgJ3NldGVtYnJvJyxcbiAgICAnb3V0dWJybycsXG4gICAgJ25vdmVtYnJvJyxcbiAgICAnZGV6ZW1icm8nXG4gIF1cbn07XG5cbmNvbnN0IFdFRUtEQVlTID0ge1xuICBlbjogW1xuICAgICdtJywgJ3QnLCAndycsICd0JywgJ2YnLCAncycsICdzJ1xuICBdLFxuICBlczogW1xuICAgICdsJywgJ20nLCAnbScsICdqJywgJ3YnLCAncycsICdkJ1xuICBdLFxuICBwcjogW1xuICAgICdzJywgJ3QnLCAncScsICdxJywgJ3MnLCAncycsICdkJ1xuICBdXG59O1xuXG5lbnVtIFNob3dTZWxlY3RvciB7XG4gIERBWSA9ICdkYXknLFxuICBNT05USCA9ICdtb250aCcsXG4gIFlFQVIgPSAneWVhcidcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEdzR2VuZXJpY0ZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBwdWJsaWMgZmllbGQ6IEdEYXRlUGlja2VyRmllbGQ7XG4gIHB1YmxpYyBkYXRlVmFsdWU6IHN0cmluZztcbiAgcHVibGljIGxhbmc6IHN0cmluZztcbiAgcHVibGljIG1vbnRoczogQXJyYXk8c3RyaW5nPjtcbiAgcHVibGljIHdlZWtkYXlzOiBBcnJheTxzdHJpbmc+O1xuXG4gIC8vIGRpc3BsYXllZCBkYXRlXG4gIHB1YmxpYyBjdXJyZW50TW9udGg7XG4gIHB1YmxpYyBjdXJyZW50WWVhcjtcbiAgcHVibGljIGRheXNJblByZXZpb3VzTW9udGhXZWVrID0gW107XG4gIHB1YmxpYyBkYXlzSW5DdXJyZW50TW9udGg6IEFycmF5PHsgZGF5OiBudW1iZXIsIHN0YXR1czogJ3N0cmluZycgfT4gPSBbXTtcbiAgcHVibGljIGRheXNJbk5leHRNb250aFdlZWsgPSBbXTtcblxuICAvLyBzZWxlY3RlZCBkYXlcbiAgcHJpdmF0ZSBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcml2YXRlIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIC8vIHNlbGVjdG9ycyBVSVxuICBwdWJsaWMgc2hvd1NlbGVjdG9yOiBTaG93U2VsZWN0b3IgPSBTaG93U2VsZWN0b3IuREFZO1xuICBwdWJsaWMgc2hvd1NlbGVjdG9yVHlwZSA9IFNob3dTZWxlY3RvcjtcbiAgcHVibGljIHllYXJVaUFycmF5ID0gbmV3IEFycmF5KDEyKTtcbiAgcHVibGljIHllYXJNdWx0aXBsaWVyID0gMDtcbiAgcHVibGljIHNob3dEYXRlUGlja2VyU2VsZWN0b3IgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxhbmcgPSB0aGlzLmZvcm1zU2VydmljZS5nZXRMYW5nKCkgfHwgJ2VuJztcbiAgICB0aGlzLm1vbnRocyA9IE1PTlRIU1t0aGlzLmxhbmddO1xuICAgIHRoaXMud2Vla2RheXMgPSBXRUVLREFZU1t0aGlzLmxhbmddO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmZpZWxkLmN1cnJlbnRWYWx1ZS5jb25maWcgJiYgY2hhbmdlcy5maWVsZC5jdXJyZW50VmFsdWUuY29uZmlnLnZhbHVlKSB7XG4gICAgICB0aGlzLmRhdGVWYWx1ZSA9IGNoYW5nZXMuZmllbGQuY3VycmVudFZhbHVlLmNvbmZpZy52YWx1ZS50b1N0cmluZygpO1xuXG4gICAgICBpZiAodGhpcy5kYXRlVmFsdWUuc3BsaXQoJy0nKSkge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlVmFsdWUuc3BsaXQoJy0nKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShOdW1iZXIoZGF0ZVswXSksIE51bWJlcihkYXRlWzFdKSAtIDEsIE51bWJlcihkYXRlWzJdKSk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKE51bWJlcihkYXRlWzBdKSwgTnVtYmVyKGRhdGVbMV0pIC0gMSwgTnVtYmVyKGRhdGVbMl0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldENhbGVuZGFyKCk7XG4gIH1cblxuICBwcml2YXRlIHNldENhbGVuZGFyKCkge1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gdGhpcy5kYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgdGhpcy5jdXJyZW50WWVhciA9IHRoaXMuZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHRoaXMuZ2V0RGF5c0luQ2FsZW5kYXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VNb250aChuZXh0OiBib29sZWFuKSB7XG4gICAgdGhpcy5kYXRlLnNldE1vbnRoKG5leHQgPyB0aGlzLmRhdGUuZ2V0VVRDTW9udGgoKSArIDEgOiB0aGlzLmRhdGUuZ2V0VVRDTW9udGgoKSAtIDEpO1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gdGhpcy5kYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgdGhpcy5jdXJyZW50WWVhciA9IHRoaXMuZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHRoaXMuc2V0Q2FsZW5kYXIoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RGF0ZVBpY2tlclNlbGVjdG9yID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVNlbGVjdG9ycyhuZXh0OiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yID09PSBTaG93U2VsZWN0b3IuWUVBUikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlWWVhcihuZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlTW9udGgobmV4dCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoYW5nZVllYXIobmV4dDogYm9vbGVhbikge1xuICAgIHRoaXMueWVhck11bHRpcGxpZXIgPSBuZXh0ID8gdGhpcy55ZWFyTXVsdGlwbGllciArIDEyIDogdGhpcy55ZWFyTXVsdGlwbGllciAtIDEyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXlzSW5DYWxlbmRhcigpIHtcbiAgICAvLyBkYXlzIGluIGN1cnJlbnQgbW9udGhcbiAgICBjb25zdCBkYXlzT2ZDdXJyZW50TW9udGggPSBuZXcgRGF0ZShcbiAgICAgIHRoaXMuY3VycmVudFllYXIsIHRoaXMuY3VycmVudE1vbnRoICsgMSwgMFxuICAgICkuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRNb250aERheXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5c09mQ3VycmVudE1vbnRoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUuZ2V0VVRDRnVsbFllYXIoKSA9PT0gdGhpcy5kYXRlLmdldFVUQ0Z1bGxZZWFyKCkgJiZcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUuZ2V0VVRDTW9udGgoKSA9PT0gdGhpcy5kYXRlLmdldFVUQ01vbnRoKCkgJiZcbiAgICAgICAgaSArIDEgPT09IHRoaXMuc2VsZWN0ZWREYXRlLmdldFVUQ0RhdGUoKVxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRNb250aERheXMucHVzaCh7XG4gICAgICAgICAgZGF5OiBpICsgMSxcbiAgICAgICAgICBzdGF0dXM6ICdzZWxlY3RlZCdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50TW9udGhEYXlzLnB1c2goe1xuICAgICAgICAgIGRheTogaSArIDEsXG4gICAgICAgICAgc3RhdHVzOiAnYXZhaWxhYmxlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRheXNJbkN1cnJlbnRNb250aCA9IGN1cnJlbnRNb250aERheXM7XG5cbiAgICAvLyBkYXN5IGluIHByZXZpb3VzIG1vbnRoIHdlZWtcbiAgICB0aGlzLmRheXNJblByZXZpb3VzTW9udGhXZWVrID0gdGhpcy5nZXRQcmV2aW91c01vbnRoKCk7XG5cbiAgICAvLyBkYXlzIGluIG5leHQgbW9udGggd2Vla1xuICAgIHRoaXMuZGF5c0luTmV4dE1vbnRoV2VlayA9IHRoaXMuZ2V0TmV4dE1vbnRoKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFByZXZpb3VzTW9udGgoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgY29uc3QgZGF5c09mQmVmb3JlTW9udGggPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnRNb250aCwgMCkuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZDdXJyZW50TW9udGggPSBuZXcgRGF0ZShcbiAgICAgIHRoaXMuY3VycmVudFllYXIsIHRoaXMuY3VycmVudE1vbnRoLCAwXG4gICAgKS5nZXREYXkoKTtcbiAgICBjb25zdCBwcmV2aW91c1dlZWtEYXlzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpcnN0RGF5T2ZDdXJyZW50TW9udGg7IGkrKykge1xuICAgICAgcHJldmlvdXNXZWVrRGF5cy5wdXNoKGRheXNPZkJlZm9yZU1vbnRoIC0gaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpb3VzV2Vla0RheXMucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0TW9udGgoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgY29uc3QgbGFzdERheU9mTW9udGggPSBuZXcgRGF0ZShcbiAgICAgIHRoaXMuY3VycmVudFllYXIsIHRoaXMuY3VycmVudE1vbnRoICsgMiwgMFxuICAgICkuZ2V0RGF5KCk7XG4gICAgY29uc3QgbmV4dFdlZWtEYXlzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICg3IC0gbGFzdERheU9mTW9udGgpOyBpKyspIHtcbiAgICAgIG5leHRXZWVrRGF5cy5wdXNoKGkgKyAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFdlZWtEYXlzO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdERhdGUoZGF5OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudFllYXIsIHRoaXMuY3VycmVudE1vbnRoLCBkYXkpO1xuICAgIHRoaXMuZGF0ZVZhbHVlID0gdGhpcy5mb3JtYXREYXRlKHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0ucGF0Y2hWYWx1ZSh0aGlzLmRhdGVWYWx1ZSk7XG4gICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLmdldERheXNJbkNhbGVuZGFyKCk7XG4gICAgdGhpcy50b2dnbGVEYXRlUGlja2VyU2VsZWN0b3IoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1vbnRoKG1vbnRoOiBudW1iZXIpIHtcbiAgICB0aGlzLmRhdGUuc2V0TW9udGgobW9udGgpO1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gdGhpcy5kYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgdGhpcy5nZXREYXlzSW5DYWxlbmRhcigpO1xuXG4gICAgdGhpcy5zaG93U2VsZWN0b3IgPSBTaG93U2VsZWN0b3IuREFZO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlUGlja2VyU2VsZWN0b3IgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFllYXIoeWVhcjogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLmRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICB0aGlzLmdldERheXNJbkNhbGVuZGFyKCk7XG4gICAgdGhpcy5zaG93U2VsZWN0b3IgPSBTaG93U2VsZWN0b3IuTU9OVEg7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RhdGVQaWNrZXJTZWxlY3RvciA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0b3Ioc2VsZWN0b3I6IFNob3dTZWxlY3Rvcikge1xuICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RhdGVQaWNrZXJTZWxlY3RvciA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRGF0ZVBpY2tlclNlbGVjdG9yKHZhbHVlID0gIXRoaXMuc2hvd0RhdGVQaWNrZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuc2hvd0RhdGVQaWNrZXJTZWxlY3RvciA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGVLZXlzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0RGF0ZShkYXRlOiBEYXRlKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcblxuICAgIGxldCBtb250aCA9IChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICAgIGxldCBkYXkgPSBkYXRlLmdldFVUQ0RhdGUoKS50b1N0cmluZygpO1xuXG4gICAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpIHtcbiAgICAgIG1vbnRoID0gYDAke21vbnRofWA7XG4gICAgfVxuXG4gICAgaWYgKGRheS5sZW5ndGggPCAyKSB7XG4gICAgICBkYXkgPSBgMCR7ZGF5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRGaWVsZCgpIHtcbiAgICB0aGlzLmRhdGVWYWx1ZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==