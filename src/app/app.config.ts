
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { UserReducer } from './user.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule),  
    provideStore({ user : UserReducer})
  ]
};
