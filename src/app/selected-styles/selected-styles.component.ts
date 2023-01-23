import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DumbComponent } from '../shared/dumb.component';
import { FormItem } from '../interfaces/form-item.interface';

@Component({
  selector: 'app-selected-styles',
  templateUrl: './selected-styles.component.html',
  styleUrls: ['./selected-styles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectedStylesComponent),
      multi: true
    }]
})
export class SelectedStylesComponent extends DumbComponent implements ControlValueAccessor, OnDestroy {

  private readonly unsubscribe$ = new Subject();
  private onTouched = () => {};

  constructor() {
    super();
  }

  @Output() changeStylesEvent = new EventEmitter();
  onChangeSub: any;

  protected borderStyle = new FormGroup({
    style: new FormControl(''),
    width: new FormControl(''),
    color: new FormControl('')
  })

  protected selectedItemControl = new FormGroup({
    id: new FormControl(''),
    type: new FormControl(''),
    value: new FormControl(''),
    width: new FormControl(''),
    placeholder: new FormControl(''),
    height: new FormControl(''),
    fontSize: new FormControl(''),
    fontWeight: new FormControl(''),
    border: this.borderStyle,
    required: new FormControl(false),
    color: new FormControl(''),
  });

  @Input() 
  set selectedItem(item: any) {
    if(item) {
      setTimeout(() => {
        this.selectedItemControl.setValue({
          id: item.id,
          type: item.type,
          value: item.value,
          width: item.width,
          placeholder: item.placeholder,
          height: item.height,
          fontSize: item.fontSize,
          fontWeight: item.fontWeight,
          border: {
            style: item.border.style,
            color: item.border.color,
            width: item.border.width
          },
          required: item.required,
          color: item.color,
        })
      });
    }
  };

  registerOnChange(onChange: any) {
    this.selectedItemControl.valueChanges.pipe(takeUntil(this.unsubscribe$))
    .subscribe(onChange);
  }

  writeValue(value: any) { 
    if(value) {
      this.selectedItemControl.setValue(value);
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  changeStyles() {
    this.changeStylesEvent.emit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}