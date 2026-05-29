import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-appearance-settings',
  imports: [MatSlideToggleModule],
  templateUrl: './appearance-settings.component.html',
  styleUrl: './appearance-settings.component.scss',
})
export class AppearanceSettingsComponent {

  darkMode = false;

  @Output() darkModeChange = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    
    localStorage.setItem(
      'darkMode',
      JSON.stringify(this.darkMode)
    );

    this.darkModeChange.emit(this.darkMode);

  }

}
