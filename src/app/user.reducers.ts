import { createReducer, on } from "@ngrx/store";
import { State } from "./state.model";
import { Login, Logout, UserActionTypes, UserActions } from "./user.actions";
import { User } from "./user.model";

const initialState: State = {
  user :{
    loggedIn : false,
    email : "",
    password : ""
  }
}

export const UserReducer = createReducer(
  initialState,
  on( Login, (state, {user}) => {
    
    var result = {
      ...state,user:{loggedIn:true, email:user.email, password:user.password}
    };
    return result;
  }
  ),
  on( Logout, state => {
    return {
    ...state,user:{loggedIn:false, email:"", password:""}
  }}
),
);

export function UserReducer1(
   state: State = initialState,
   action: UserActions
) {
   switch (action.type) {
     case UserActionTypes.LOGIN:
       return {...state,user:{loggedIn:true, email:action.payload.email, password:action.payload.password} };
       case UserActionTypes.LOGOUT:
       return {...state, user:{loggedIn:false, email:"", password:""}}
     default:
       return state;
   }
}