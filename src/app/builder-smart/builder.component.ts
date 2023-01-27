import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { FormItem } from '../interfaces/form-item.interface';
import { Store } from '@ngrx/store';
import { Observable, filter, map, takeUntil, Subject } from 'rxjs';
import { closeError, deleteItem, dropItem, getDroppedItems, getFormStyles, getItems, updateFormStyles, updateItem } from '../store/actions/builder.actions';
import { SmartComponent } from '../shared/smart.component';
import { ServerError } from '../interfaces/error.interface';
import { FormStyles } from '../interfaces/form-styles.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuilderComponent extends SmartComponent implements OnInit, OnDestroy {

  formItems: FormItem[] = [];
  selectedItem!: FormItem;
  droppedItems$: Observable<FormItem[]> = this.store.select(state => state.builder.droppedItems);
  items$: Observable<FormItem[]> = this.store.select(state => state.builder.items);
  formStyles!: FormStyles; 
  error$: Observable<ServerError> = this.store.select(state => state.builder.error);
  formStyles$ = this.store.select(state => state.builder.formStyles);
  isMoving: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private store: Store<{ builder: { 
    items: FormItem[], droppedItems: FormItem[], formStyles: FormStyles, error: ServerError } }>) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(getItems());
    this.store.dispatch(getDroppedItems());
    this.store.dispatch(getFormStyles());

    this.error$.pipe(this.untilComponentDestroy())
    .subscribe((error: any) => setTimeout(() => {
      if(error.status) {
        return this.closeError();
      }
    }, 3000));

    this.droppedItems$.pipe(this.untilComponentDestroy())
    .subscribe((items: any) => {
      this.formItems = [...items];
      this.cdr.detectChanges();
    });

    this.formStyles$
    .pipe(this.untilComponentDestroy()).subscribe((styles: any) => {
      if(Object.keys(styles).length > 0) {
        this.formStyles = styles;
        this.cdr.detectChanges();
      }
    });
  }

  setSelectedItem(id: number) {
    this.droppedItems$.pipe(this.untilComponentDestroy())
    .subscribe((items: any) => {
      let elem = items.filter((elem: FormItem) => elem.id === id);
      this.selectedItem = elem[0];
    });
  }

  changeFormStyles() {
    this.store.dispatch(updateFormStyles({ newFormStyles: this.formStyles }));
  }

  changeItemStyles() { 
    this.store.dispatch(updateItem({ item: this.selectedItem }));
  }

  deleteItem(event: CdkDragDrop<any>) {
    const id = event.previousContainer.data[event.previousIndex].id;

    if(id) {
      this.store.dispatch(deleteItem({ id: event.previousContainer.data[event.previousIndex].id }));
    }
  }

  logout() {
    document.cookie = 'accessToken=';
    this.router.navigate(['login']);
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.store.dispatch(dropItem({ droppedItem: event.previousContainer.data[event.previousIndex] }));
    }
  }
  
  closeError() {
    this.store.dispatch(closeError());
  }
}