import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form } from '@angular/forms';
import { DumbComponent } from '../abstract/dumb.component';
import { FormItem } from '../interfaces/form-item.interface';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent extends DumbComponent {

  constructor() {
    super();
  }
  
  @Input() currentItem!: FormItem;
  @Input() items?: Array<FormItem>;
  @Output() selectedStyles = new EventEmitter();
  @Output() value = new EventEmitter();

  getStyles(id: number) {
    this.selectedStyles.emit(id);
  }

  getValue(value: string) {
    this.value.emit(value);
  }
}
