import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login_page.component';
import { AdminComponent } from './admin.component';
import { State } from "./state.model";
import { Store } from '@ngrx/store';
import { selectLoginState } from './user.selectors';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rocket';
  /*constructor(loginService: LoginService, router: Router) {
    if (!loginService.isLoggedIn()) {
      router.navigate(['login']);
    }
  }
  */
  isLoggedIn$:Observable<boolean> = this.store.select(selectLoginState);

  goToLogin(isLoggedIn  :boolean){
    if(!isLoggedIn)      {
        this.router.navigate(['login']);
      }
  }

  constructor(private store:Store<State>,private router: Router) {
    this.isLoggedIn$.subscribe(data =>{
      this.goToLogin(data);
    })
  }
}
