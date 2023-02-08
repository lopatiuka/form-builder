import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { login, loginFail, loginSuccess } from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}

    login$ = createEffect(() => { return this.actions$.pipe(
        ofType(login),
        switchMap(action => this.authService.login(action.payload.body, action.payload.register)
        .pipe(
            map((response: any) => {
                document.cookie = `accessToken=${ response.accessToken }`;
                this.router.navigate(['builder']);
                return loginSuccess({ token: response.accessToken })
            }),
            catchError((error) => {
            return of(loginFail({ message: error.statusText }))})
        ))
        ) }
    );
}