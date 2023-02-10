import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './core/http-interceptors';
import { CoreModule } from './store/core.module';
import { AuthModule } from './authorization/auth.module';
import { BuilderModule } from './builder/builder.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BuilderModule,
    CoreModule,
    AuthModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }