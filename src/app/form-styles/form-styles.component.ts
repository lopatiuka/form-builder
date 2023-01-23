import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { DumbComponent } from '../shared/dumb.component';
import { SelectedStylesComponent } from '../selected-styles/selected-styles.component';

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
  protected formStyles = new FormGroup({
    padding: new FormControl(''),
    borderStyle: new FormControl(''),
    borderWidth: new FormControl(''),
    borderColor: new FormControl(''),
    borderRadius: new FormControl(''),
  })

  constructor() {
    super();
  }

  @Input() 
  set styles(item: any) {
    
    if(item) {
      setTimeout(() => {
        this.formStyles.setValue({
          padding: item.padding,
          borderStyle: item.borderStyle,
          borderWidth: item.borderWidth,
          borderColor: item.borderColor,
          borderRadius: item.borderRadius,
        })
      });
    }
  };

  @Output() changeFormStylesEvent = new EventEmitter();

  changeFormStyles() {
    this.changeFormStylesEvent.emit();
  }

  registerOnChange(onChange: any) {
    this.formStyles.valueChanges.pipe(takeUntil(this.unsubscribe$))
    .subscribe(onChange);
  }

  writeValue(value: any) { 
    if(value) {
      this.formStyles.setValue(value);
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
