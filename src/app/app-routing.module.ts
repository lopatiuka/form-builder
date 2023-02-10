import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponent } from './authorization/authorization.component';
import { BuilderComponent } from './builder/builder-smart/builder.component';
import { AuthGuard } from './core/guards/AuthGuard';


const routes: Routes = [
  { path: '', redirectTo: '/builder', pathMatch: 'full' },
  { path: 'login', component: AuthorizationComponent },
  { path: 'builder', canActivate: [AuthGuard], component: BuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
