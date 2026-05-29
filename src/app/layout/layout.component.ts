import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent {
  public loggedUser: { name: string, key: string } = {
    name: 'Jose Carlos',
    key: 'admin'
  }

  public userOptions: Array<{
    label: string,
    icon: string,
  }> = [
    {
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      label: 'Notifications',
      icon: 'notifications'
    },
    {
      label: 'Activity Log',
      icon: 'history'
    },
    {
      label: 'Sign Out',
      icon: 'logout'
    }
  ]

}
//Alatorre Lopez Jose Carlos