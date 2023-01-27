import { Portal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServerError } from '../interfaces/error.interface';
import { closeError, login } from '../store/actions/auth.actions';

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

  @ViewChild('loginForm') 
  loginFormPortal!: TemplatePortal<any>;
  @ViewChild('signupForm') 
  signupFormPortal!: TemplatePortal<any>;

  user = {
    email: '',
    password: ''
  }

  login(register: boolean = false) {

    const body = {
      email: this.user.email,
      password: this.user.password
    }
    
    this.store.dispatch(login({ payload: { body, register: register } }))
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.selectedPortal = this.loginFormPortal;
      this.cdr.detectChanges();
    })
  } 

  closeError() {
    this.store.dispatch(closeError());
  }

  ngOnDestroy() {
    this.closeError();
  }
}
