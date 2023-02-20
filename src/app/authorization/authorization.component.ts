import { Portal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ServerError } from '../shared/interfaces/error.interface';
import { closeError, login } from '../core/store/actions/auth.actions';

enum ErrorMessages {
  uncorrectData = 'Bad Request'
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationComponent implements AfterViewInit, OnDestroy {

  constructor(private cdr: ChangeDetectorRef, private store: Store<{auth: { error: ServerError }}>) {}

  protected selectedPortal!: Portal<any>;
  protected error$: Observable<ServerError> = this.store.select(state => state.auth.error);
  errorMessages = ErrorMessages;

  @ViewChild('loginForm') 
  loginFormPortal!: TemplatePortal<any>;
  @ViewChild('signupForm') 
  signupFormPortal!: TemplatePortal<any>;

  user = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  login(register: boolean = false): void {

    const body = {
      email: this.user.controls.email.value,
      password: this.user.controls.password.value
    }
    
    this.store.dispatch(login({ payload: { body, register: register } }))
  }

  ngAfterViewInit(): void {
    this.selectedPortal = this.loginFormPortal;
    this.cdr.detectChanges();
  } 

  closeError(): void {
    this.store.dispatch(closeError());
  }

  ngOnDestroy(): void {
    this.closeError();
  }
}
