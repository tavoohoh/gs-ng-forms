import { Component, Input, OnInit } from '@angular/core';
import { GShowData } from './../../gs-forms.widgets';

@Component({
  selector: 'gs-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.sass']
})
export class GsShowDataComponent implements OnInit {
  @Input() public data: GShowData;
  @Input() public rppStyles: boolean;
  public fieldValue = '';

  ngOnInit() {
    this.fieldValue = this.data.config && this.data.config.value ? this.data.config.value.toString() :
      this.data.config.placeholder ||
      this.data.config.label ||
      this.data.config.model;
  }
}
