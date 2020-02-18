import { Component, Input } from '@angular/core';
import { GDivider } from '../../gs-forms.widgets';

@Component({
  selector: 'gs-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.sass']
})
export class GsDividerComponent {
  @Input() public divider: GDivider;
}
