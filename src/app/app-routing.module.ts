import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { BuilderComponent } from './builder/builder.component';
import { OnlyLoggedInUsersGuard } from './router-guards/only-logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: '/builder', pathMatch: 'full' },
  { path: 'login', component: AuthorizationComponent },
  { path: 'builder', canActivate: [OnlyLoggedInUsersGuard], component: BuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
