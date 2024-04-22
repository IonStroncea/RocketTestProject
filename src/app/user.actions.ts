import { Action, createAction, props } from '@ngrx/store';
import { User } from './user.model';


export enum UserActionTypes {
 LOGIN = '[User] LOGIN',
 LOGOUT = '[User] LOGOUT'
}
export const Login = createAction('[User] LOGIN',  props<{ user: User }>());
export const Logout = createAction('[User] LOGOUT');

export class Login1 implements Action {
 readonly type = UserActionTypes.LOGIN;
 constructor(public payload: User) {}
}
export class Logout1 implements Action {
 readonly type = UserActionTypes.LOGOUT;
 constructor() {}
}
export type UserActions
= Login1
| Logout1;