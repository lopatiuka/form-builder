import { createAction, props } from '@ngrx/store';

import { builderActions } from './builder.action.types';
import { FormItem } from '../../shared/interfaces/form-item.interface';
import { ServerError } from '../../shared/interfaces/error.interface';
import { FormStyles } from '../../shared/interfaces/form-styles.interface';


export const getItems = createAction(builderActions.GET_ITEMS);
export const getItemsSuccess = createAction(builderActions.GET_ITEMS_SUCCESS, props<{ items: FormItem[] }>());

export const getDroppedItems = createAction(builderActions.GET_DROPPED_ITEMS);
export const getDroppedItemsSuccess = createAction(builderActions.GET_DROPPED_ITEMS_SUCCESS, props<{ droppedItems: FormItem[] }>());

export const updateItem = createAction(builderActions.UPDATE_ITEM, props<{ item: FormItem }>());
export const updateItemSuccess = createAction(builderActions.UPDATE_ITEM_SUCCESS, props<{ updatedItem: FormItem }>());

export const dropItem = createAction(builderActions.DROP_ITEM, props<{ droppedItem: FormItem }>());
export const dropItemSuccess = createAction(builderActions.DROP_ITEM_SUCCESS, props<{ newItem: FormItem }>());

export const getFormStyles = createAction(builderActions.GET_FORM_STYLES);
export const getFormStylesSuccess = createAction(builderActions.GET_FORM_STYLES_SUCCESS, props<{ formStyles: FormStyles }>());

export const updateFormStyles = createAction(builderActions.UPDATE_FORM_STYLES, props<{ newFormStyles: FormStyles }>());
export const updateFormStylesSuccess = createAction(builderActions.UPDATE_FORM_STYLES_SUCCESS, props<{ updatedFormStyles: FormStyles }>());

export const deleteItem = createAction(builderActions.DELETE_ITEM, props<{ id: number }>());
export const deleteItemSuccess = createAction(builderActions.DELETE_ITEM_SUCCESS, props<{ id: number }>());

export const fail = createAction(builderActions.ERROR, props<{ errorMessage: string }>());
export const closeError = createAction(builderActions.CLOSE_ERROR);