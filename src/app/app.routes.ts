import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

// Alatorre Lopez Jose Carlos

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {

        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'explore',
                component: ExploreComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
