import { Component } from '@angular/core';
import { ProfileSettingsComponent } from "../../components/profile-settings/profile-settings.component";
import { SettingCardComponent } from "../../components/setting-card/setting-card.component";
import { AppearanceSettingsComponent } from "../../components/appearance-settings/appearance-settings.component";
import { NotificationSettingsComponent } from "../../components/notification-settings/notification-settings.component";

@Component({
  selector: 'app-settings-page',
  imports: [ProfileSettingsComponent, SettingCardComponent, AppearanceSettingsComponent, NotificationSettingsComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {

  darkModeEnabled = false;

  onDarkModeChanged(value: boolean) {
    this.darkModeEnabled = value;
  }

}
