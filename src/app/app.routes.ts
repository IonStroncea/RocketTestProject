import { Routes } from '@angular/router';
import { LoginPageComponent } from './login_page.component';
import { AdminComponent } from './admin.component';

export const routes: Routes = [
    {path : 'admin', component : AdminComponent},
    {path : '', component : AdminComponent},
    {path : 'login', component : LoginPageComponent},
];
