import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LetModule, PushModule } from '@ngrx/component';
import { AuthorizationComponent } from './authorization.component';


@NgModule({
    declarations: [
        AuthorizationComponent,
    ],
    imports: [
        PortalModule, 
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatGridListModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        LetModule,
        PushModule,
        CommonModule
    ]
})
export class AuthModule {}