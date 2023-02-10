import { ChangeDetectionStrategy } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DumbComponent } from '../../shared/components/dumb.component';
import { FormItem } from '../../shared/interfaces/form-item.interface';

enum ElemTypes {
  checkbox = 'checkbox',
  select = 'select',
  textarea = 'textarea',
  text = 'text',
  button = 'button'
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent extends DumbComponent {

  constructor() {
    super();
  }

  elemTypes = ElemTypes;

  boxStyles = {};
  textStyles = {};
  currentBoxStyles = {};
  currentTextStyles = {};
  item!: FormItem;
  currentItem!: FormItem;

  @Input()
  set currentStyles(inputItem: FormItem) {

    if(inputItem) {
      this.currentBoxStyles = {
        'width.px': inputItem.width,
        'height.px': inputItem.height,
        'borderStyle': inputItem.border.style,
        'borderColor': inputItem.border.color,
        'borderWidth.px': inputItem.border.width,
      }

      this.currentTextStyles = {
        'fontSize.px': inputItem.fontSize,
        'fontWeight': inputItem.fontWeight,
        'color': inputItem.color,
      }
      this.currentItem = inputItem;
    }
  };

  @Input() 
  set stylesInput(inputItem: FormItem) {

    if(inputItem) {
      this.boxStyles = {
        'width.px': inputItem.width,
        'height.px': inputItem.height,
        'borderStyle': inputItem.border.style,
        'borderColor': inputItem.border.color,
        'borderWidth.px': inputItem.border.width,
      }

      this.textStyles = {
        'fontSize.px': inputItem.fontSize,
        'fontWeight': inputItem.fontWeight,
        'color': inputItem.color,
      }
      this.item = inputItem;  
    }
  };
  @Output() selectedStyles = new EventEmitter();
  @Output() value = new EventEmitter();

  getAllStyles(current: boolean = false) {
    return current ? { ...this.currentBoxStyles, ...this.currentTextStyles } : { ...this.boxStyles, ...this.textStyles };
  }

  getStyles(id: number): void {
    this.selectedStyles.emit(id);
  }

  getValue(value: string): void {
    this.value.emit(value);
  }
}
