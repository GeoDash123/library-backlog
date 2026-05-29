import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-setting-card',
  imports: [],
  templateUrl: './setting-card.component.html',
  styleUrl: './setting-card.component.scss',
})
export class SettingCardComponent {
  @Input() title = '';
  @Input() description = '';
}
