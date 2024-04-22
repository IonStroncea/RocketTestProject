import { createReducer, on } from "@ngrx/store";
import { State } from "./state.model";
import { Login, Logout} from "./user.actions";

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