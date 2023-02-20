import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observer, Subject, takeUntil } from 'rxjs';

import { DumbComponent } from '../../shared/components/dumb.component';
import { FormStyles } from '../../shared/interfaces/form-styles.interface';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormStylesComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormStylesComponent extends DumbComponent implements ControlValueAccessor {

  private onTouched = () => {};
  private readonly unsubscribe$ = new Subject();

  constructor() {
    super();
  }

  formStyles = new FormGroup({
    'padding.px': new FormControl(''),
    'borderRadius.px': new FormControl(''),
    'borderWidth.px': new FormControl(''),
    borderStyle: new FormControl(''),
    borderColor: new FormControl(''),
  })

  @Input() 
  set styles(item: FormStyles) {
    if(item) {
      this.formStyles.setValue({
        'padding.px': item['padding.px'],
        'borderRadius.px': item['borderRadius.px'],
        'borderWidth.px': item['borderWidth.px'],
        borderStyle: item.borderStyle,
        borderColor: item.borderColor,
      })
    }
  };

  @Output() changeFormStylesEvent = new EventEmitter();

  changeFormStyles(): void {
    this.changeFormStylesEvent.emit();
  }

  registerOnChange(onChange: Partial<Observer<Partial<{ padding: string | null; borderStyle: string | null; borderWidth: string | null; borderColor: string | null; borderRadius: string | null; }>>> | undefined): void {
    this.formStyles.valueChanges.pipe(takeUntil(this.unsubscribe$))
    .subscribe(onChange);
  }

  writeValue(value: FormStyles): void { 
    if(value) {
      this.formStyles.setValue(value);
    }
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
