import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification-settings',
  imports: [MatCheckboxModule, FormsModule],
  templateUrl: './notification-settings.component.html',
  styleUrl: './notification-settings.component.scss',
})
export class NotificationSettingsComponent {

  recommendations = true;
  reminders = false;

}
