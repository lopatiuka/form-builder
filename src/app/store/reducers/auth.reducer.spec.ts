import { closeError, loginFail } from '../actions/auth.actions';
import * as fromReducer from './auth.reducer';


describe('AuthReducer', () => {
  describe('fail action', () => {
    it('should set error status to true', () => {
        const initialState = {
            error: {
                status: false,
                message: ''
            }
        };
        
        const action = loginFail({ message: '' });
        const state = fromReducer.authReducer(initialState, action);

        expect(state.error.status).toBeTrue();
    });
  });

  describe('close error action', () => {
    it('should set error status to false', () => {
        const initialState = {
            error: {
                status: true,
                message: ''
            }
        };
        
        const action = closeError();
        const state = fromReducer.authReducer(initialState, action);

        expect(state.error.status).toBeFalse();
    });
  });
});