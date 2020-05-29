import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GDatePickerField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';
import { GsFormsService } from '../../gs-forms.service';

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

enum ShowSelector {
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year'
}

@Component({
  selector: 'gs-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass']
})
export class GsDatePickerComponent implements OnInit, OnChanges {
  @Input() public field: GDatePickerField;
  @Input() public formGroup: FormGroup;
  @Input() public rppStyles: boolean;

  public fieldValidatorType = GFieldValidatorType;
  public dateValue: string;
  public lang: string;
  public months: Array<string>;
  public weekdays: Array<string>;

  // displayed date
  public currentMonth;
  public currentYear;
  public daysInPreviousMonthWeek = [];
  public daysInCurrentMonth: Array<{ day: number, status: 'string' }> = [];
  public daysInNextMonthWeek = [];

  // selected day
  private selectedDate = new Date();
  private date = new Date();

  // selectors UI
  public showSelector: ShowSelector = ShowSelector.DAY;
  public showSelectorType = ShowSelector;
  public yearUiArray = new Array(12);
  public yearMultiplier = 0;
  public showDatePickerSelector = false;

  constructor(
    private gsFormService: GsFormsService
  ) { }

  ngOnInit() {
    this.lang = this.gsFormService.getLang() || 'en';
    this.months = MONTHS[this.lang];
    this.weekdays = WEEKDAYS[this.lang];
  }

  ngOnChanges(changes: SimpleChanges) {
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

  private setCalendar() {
    this.currentMonth = this.date.getUTCMonth();
    this.currentYear = this.date.getUTCFullYear();
    this.getDaysInCalendar();
  }

  public changeMonth(next: boolean) {
    this.date.setMonth(next ? this.date.getUTCMonth() + 1 : this.date.getUTCMonth() - 1);
    this.currentMonth = this.date.getUTCMonth();
    this.currentYear = this.date.getUTCFullYear();
    this.setCalendar();

    setTimeout(() => {
      this.showDatePickerSelector = true;
    });
  }

  public navigateSelectors(next: boolean) {
    if (this.showSelector === ShowSelector.YEAR) {
      return this.changeYear(next);
    } else {
      return this.changeMonth(next);
    }
  }

  public changeYear(next: boolean) {
    this.yearMultiplier = next ? this.yearMultiplier + 12 : this.yearMultiplier - 12;
  }

  private getDaysInCalendar() {
    // days in current month
    const daysOfCurrentMonth = new Date(
      this.currentYear, this.currentMonth + 1, 0
    ).getUTCDate();
    const currentMonthDays = [];

    for (let i = 0; i < daysOfCurrentMonth; i++) {
      if (
        this.selectedDate.getUTCFullYear() === this.date.getUTCFullYear() &&
        this.selectedDate.getUTCMonth() === this.date.getUTCMonth() &&
        i + 1 === this.selectedDate.getUTCDate()
      ) {
        currentMonthDays.push({
          day: i + 1,
          status: 'selected'
        });
      } else {
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

  private getPreviousMonth(): Array<number> {
    const daysOfBeforeMonth = new Date(this.currentYear, this.currentMonth, 0).getUTCDate();
    const firstDayOfCurrentMonth = new Date(
      this.currentYear, this.currentMonth, 0
    ).getDay();
    const previousWeekDays = [];

    for (let i = 0; i < firstDayOfCurrentMonth; i++) {
      previousWeekDays.push(daysOfBeforeMonth - i);
    }

    return previousWeekDays.reverse();
  }

  private getNextMonth(): Array<number> {
    const lastDayOfMonth = new Date(
      this.currentYear, this.currentMonth + 2, 0
    ).getDay();
    const nextWeekDays = [];

    for (let i = 0; i < (7 - lastDayOfMonth); i++) {
      nextWeekDays.push(i + 1);
    }

    return nextWeekDays;
  }

  public selectDate(day: number) {
    this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
    this.dateValue = this.formatDate(this.selectedDate);
    this.formGroup.controls[this.field.config.model].patchValue(this.dateValue);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    this.getDaysInCalendar();
    this.toggleDatePickerSelector(false);
  }

  public selectMonth(month: number) {
    this.date.setMonth(month);
    this.currentMonth = this.date.getUTCMonth();
    this.getDaysInCalendar();

    this.showSelector = ShowSelector.DAY;

    setTimeout(() => {
      this.showDatePickerSelector = true;
    });
  }

  public selectYear(year: number) {
    this.date.setFullYear(year);
    this.currentYear = this.date.getUTCFullYear();
    this.getDaysInCalendar();
    this.showSelector = ShowSelector.MONTH;

    setTimeout(() => {
      this.showDatePickerSelector = true;
    });
  }

  public toggleSelector(selector: ShowSelector) {
    this.showSelector = selector;

    setTimeout(() => {
      this.showDatePickerSelector = true;
    });
  }

  public toggleDatePickerSelector(value = !this.showDatePickerSelector) {
    this.showDatePickerSelector = value;
  }

  public disableKeys() {
    return false;
  }

  private formatDate(date: Date) {
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

  public resetField() {
    this.dateValue = null;
  }
}
