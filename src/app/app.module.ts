import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { ItemsListComponent } from './items-list/items-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { builderReducer } from './_reducers/builder.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BuilderEffects } from './_effects/builder.effects';
import { HttpClientModule } from '@angular/common/http';
import { LetModule } from '@ngrx/component';
import { PushModule } from '@ngrx/component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthEffects } from './_effects/auth.effects';
import { PortalModule } from '@angular/cdk/portal';
import { OnlyLoggedInUsersGuard } from './router-guards/only-logged-in.guard';
import { httpInterceptorProviders } from './http-interceptors';
import { SelectedStylesComponent } from './selected-styles/selected-styles.component';
import { authReducer } from './_reducers/auth.reducer';
import { FormatPipe } from './pipes/FormatPipe';
import { FormStylesComponent } from './form-styles/form-styles.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    BuilderComponent,
    AuthorizationComponent,
    SelectedStylesComponent,
    FormatPipe,
    FormStylesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkAccordionModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    StoreModule.forRoot({ builder: builderReducer, auth: authReducer }),
    EffectsModule.forRoot([BuilderEffects, AuthEffects]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LetModule,
    PushModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    PortalModule
  ],
  providers: [OnlyLoggedInUsersGuard, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
