import { Component, Input } from '@angular/core';
import { GShowData } from './../../gs-forms.widgets';

@Component({
  selector: 'gs-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.sass']
})
export class GsShowDataComponent {

  @Input() public data: GShowData;
}
