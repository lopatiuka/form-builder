import { NgModule } from '@angular/core';

import { CalloutDirective } from './directives/callout';
import { ItemBorderDirective } from './directives/item-border';
import { ViewportHeightDirective } from './directives/viewport-height';
import { DebouncePipe } from './pipes/DebouncePipe';
import { FormatPipe } from './pipes/FormatPipe';
import { NaturalType } from './pipes/NaturalType';


@NgModule({
  declarations: [
    NaturalType,
    FormatPipe,
    DebouncePipe,
    ItemBorderDirective,
    ViewportHeightDirective,
    CalloutDirective
  ],
  exports: [
    NaturalType,
    FormatPipe,
    DebouncePipe,
    ItemBorderDirective,
    ViewportHeightDirective,
    CalloutDirective
  ],
})
export class SharedModule { }