import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login_page.component';
import { AdminComponent } from './admin.component';
import { LoginService } from './loginService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rocket';
  constructor(loginService: LoginService, router: Router) {
    if (!loginService.isLoggedIn()) {
      router.navigate(['login']);
    }
  }
}
