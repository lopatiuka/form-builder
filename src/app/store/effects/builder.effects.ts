import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { builderActions } from '../actions/builder.action.types';
import { dropItem, dropItemSuccess, getDroppedItems, getDroppedItemsSuccess, getItems, getItemsSuccess, updateItem, updateItemSuccess, fail, getFormStylesSuccess, updateFormStyles, deleteItem, deleteItemSuccess } from '../actions/builder.actions';
import { BuilderService } from '../services/builder.service';

@Injectable()
export class BuilderEffects {

  constructor(
      private actions$: Actions,
      private builderService: BuilderService
  ) {}

  getItems$ = createEffect(() => { return this.actions$.pipe(
    ofType(getItems),
    switchMap(action => this.builderService.getItems()
      .pipe(
        map(items => getItemsSuccess({ items: items })),
        catchError((error) => of(fail({ errorMessage: error.statusText })))
      ))
    ) }
  );

  getDroppedItems$ = createEffect(() => { return this.actions$.pipe(
    ofType(getDroppedItems),
    switchMap(action => this.builderService.getDroppedItems()
      .pipe(
        map(items => getDroppedItemsSuccess({ droppedItems: items })),
        catchError((error) => of(fail({ errorMessage: error.statusText })))
      ))
    ) }
  );

  dropItem$ = createEffect(() => { return this.actions$.pipe(
    ofType(dropItem),
    switchMap(action => { 
      return this.builderService.dropItem(action.droppedItem)
      .pipe(
        map((item: any) => {
          return dropItemSuccess({ newItem: item })}),
        catchError((error) => of(fail({ errorMessage: error.statusText })))
      )})
    )}
  );

  updateItem$ = createEffect(() => { return this.actions$.pipe(
    ofType(updateItem),
    switchMap(action => { 
      return this.builderService.updateItem(action.item)
      .pipe(
        map((item: any) => {
          return updateItemSuccess({ updatedItem: item })}),
          catchError((error) => of(fail({ errorMessage: error.statusText })))
      )})
    )}
  );

  deleteItem$ = createEffect(() => { return this.actions$.pipe(
    ofType(deleteItem),
    switchMap(action => { 
      return this.builderService.deleteItem(action.id)
      .pipe(
        map(() => {
          return deleteItemSuccess({ id: action.id })}),
          catchError((error) => of(fail({ errorMessage: error.statusText })))
      )})
    )}
  );

  getFormStyles$ = createEffect(() => { return this.actions$.pipe(
    ofType(getItems),
    switchMap(action => this.builderService.getFormStyles()
      .pipe(
        map(styles => {
          return getFormStylesSuccess({ formStyles: styles })}),
        catchError((error) => of(fail({ errorMessage: error.statusText })))
      ))
    ) }
  );

  updateFormStyles$ = createEffect(() => { return this.actions$.pipe(
    ofType(updateFormStyles),
    switchMap(action => this.builderService.updateFormStyles(action.newFormStyles)
      .pipe(
        map(styles => {
          return getFormStylesSuccess({ formStyles: styles })}),
        catchError((error) => of(fail({ errorMessage: error.statusText })))
      ))
    )}
  );
}