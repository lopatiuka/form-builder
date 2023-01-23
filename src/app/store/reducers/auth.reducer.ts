import { createReducer, on } from '@ngrx/store';
import { closeError, loginFail } from '../actions/auth.actions';


export const initialState = {
    error: {
        status: false,
        message: ''
    }
};

export const authReducer = createReducer(
    initialState,
    on(loginFail, (state, { message }) => ({ ...state, error: { status: true, message: message } })),
    on(closeError, (state) => ({ ...state, error: { status: false, message: '' } })),  
);