import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { FormItem } from '../../shared/interfaces/form-item.interface';
import { delay, Observable, Subject } from 'rxjs';
import { closeError, deleteItem, dropItem, getDroppedItems, getFormStyles, getItems, updateFormStyles, updateItem } from '../../core/store/actions/builder.actions';
import { SmartComponent } from '../../shared/components/smart.component';
import { ServerError } from '../../shared/interfaces/error.interface';
import { FormStyles } from '../../shared/interfaces/form-styles.interface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuilderComponent extends SmartComponent implements OnInit, OnDestroy {

  title = 'Build your form';
  formItems: FormItem[] = [];
  selectedItem!: FormItem;
  droppedItems$: Observable<FormItem[]> = this.store.select(state => state.builder.droppedItems);
  items$: Observable<FormItem[]> = this.store.select(state => state.builder.items);
  formStyles = new FormControl();
  itemStyles = new FormControl();
  error$: Observable<ServerError> = this.store.select(state => state.builder.error);
  formStyles$: Subject<FormStyles> = this.store.select(state => state.builder.formStyles) as Subject<FormStyles>;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private store: Store<{ builder: { 
    items: FormItem[], droppedItems: FormItem[], formStyles: FormStyles, error: ServerError } }>) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(getItems());
    this.store.dispatch(getDroppedItems());
    this.store.dispatch(getFormStyles());

    this.error$
      .pipe(
        this.untilComponentDestroy(),
        delay(3000))
      .subscribe((uError) => {
        const error = uError as ServerError;
        if(error.status) {
          this.closeError();
        }
      });

    this.droppedItems$
      .pipe(this.untilComponentDestroy())
      .subscribe((uItems) => {
        this.formItems = [...uItems as FormItem[]];
        this.cdr.detectChanges();
      });

    this.formStyles$
      .pipe(this.untilComponentDestroy())
      .subscribe((uStyles) => {
        const formStyles = uStyles as FormStyles;
        if(Object.keys(formStyles).length > 0) {
          this.formStyles.setValue({
              ...formStyles
          });
          this.cdr.detectChanges();
        }
      });
  }

  setSelectedItem(id: number): void {
    this.droppedItems$
      .pipe(this.untilComponentDestroy())
      .subscribe((items: any) => {
        let elem = items.filter((elem: FormItem) => elem.id === id);
          this.itemStyles.setValue(elem[0]);
      });
  }

  changeFormStyles(): void {
    this.store.dispatch(updateFormStyles({ newFormStyles: this.formStyles.value }));
  }

  changeItemStyles(): void { 
    if(this.itemStyles.value.id) {
      this.store.dispatch(updateItem({ item: this.itemStyles.value }));
    }
  }

  deleteItem(event: CdkDragDrop<any>): void {
    const id = event.previousContainer.data[event.previousIndex].id;

    if(id) {
      this.store.dispatch(deleteItem({ id: event.previousContainer.data[event.previousIndex].id }));
    }
  }

  logout(): void {
    document.cookie = 'accessToken=';
    this.router.navigate(['login']);
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.store.dispatch(dropItem({ droppedItem: event.previousContainer.data[event.previousIndex] }));
    }
  }
  
  closeError(): void {
    this.store.dispatch(closeError());
  }
}