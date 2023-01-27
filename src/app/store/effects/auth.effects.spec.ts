import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthEffects } from './auth.effects';
import { login, loginSuccess } from '../actions/auth.actions';
import { of } from 'rxjs';

let mockToken = 'ACCESS_TOKEN';

describe('Auth effects', () => {
  let store: MockStore<{ authReducer: { error: any, token: string }}>;
  let effects: AuthEffects;
  let initialState = {
    token: '',
    error: {
        status: false,
        message: ''
    }
  }

  beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [
            StoreModule.forRoot({}),
            EffectsModule.forRoot([]),
            HttpClientTestingModule
        ],
        declarations: [],
        providers: [        
            AuthEffects,
            provideMockStore({ initialState }),
        ],
        })

        store = TestBed.inject(MockStore);
        effects = TestBed.inject(AuthEffects);
    });

    it('login should success', (done) => {
        effects.login$.subscribe((action) => {
        expect(action).toEqual(loginSuccess({ token: mockToken }));
        });
        done();
    });
});