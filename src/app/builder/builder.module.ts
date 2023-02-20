import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LetModule, PushModule } from '@ngrx/component';
import { BuilderComponent } from './builder-smart/builder.component';
import { FormStylesComponent } from './form-styles/form-styles.component';
import { ItemComponent } from './item/item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { SelectedStylesComponent } from './selected-styles/selected-styles.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ItemComponent,
        ItemsListComponent,
        BuilderComponent,
        SelectedStylesComponent,
        FormStylesComponent,
    ],
    imports: [
        CdkAccordionModule,
        MatInputModule,
        MatButtonModule,
        DragDropModule,
        MatCheckboxModule,
        MatSelectModule,
        MatGridListModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        LetModule,
        PushModule,
        SharedModule
    ]
})
export class BuilderModule {}