import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from "./state.model";
import { User } from './user.model';



export const selectAppState = createFeatureSelector<State>('user');

export const selectUser=createSelector(
  selectAppState,
  (state : State) => state.user
);

export const selectLoginState = createSelector(
    selectUser,
  (user: User) =>user.loggedIn
);
export const selectLogInEmail = createSelector(
    selectUser,
  (user: User) => user.email
);