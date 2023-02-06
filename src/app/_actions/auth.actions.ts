import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user.interface';
import { authActions } from './auth.action.types';
// import { authActions } from './auth.action.types';


export const login = createAction(authActions.LOGIN, props<{ payload: any }>());
export const loginSuccess = createAction(authActions.LOGIN_SUCCESS, props<{ token: string }>());
export const loginFail = createAction(authActions.LOGIN_FAIL, props<{ message: string }>());
export const closeError = createAction(authActions.CLOSE_ERROR);