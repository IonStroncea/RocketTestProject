import { createAction, props } from '@ngrx/store';
import { User } from './user.model';


export enum UserActionTypes {
 LOGIN = '[User] LOGIN',
 LOGOUT = '[User] LOGOUT'
}
export const Login = createAction('[User] LOGIN',  props<{ user: User }>());
export const Logout = createAction('[User] LOGOUT');