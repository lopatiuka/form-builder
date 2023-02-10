import { createReducer, on } from '@ngrx/store';

import { closeError, deleteItemSuccess, dropItemSuccess, fail, getDroppedItemsSuccess, getFormStylesSuccess, getItemsSuccess, updateFormStylesSuccess, updateItemSuccess } from '../actions/builder.actions';
import { FormItem } from '../../../shared/interfaces/form-item.interface';


export const initialState = {
    items: [] as FormItem[],
    droppedItems: [] as FormItem[],
    formStyles: {},
    error: {
        status: false,
        message: ''
    }
};

export const builderReducer = createReducer(
    initialState,
    on(getItemsSuccess, (state, { items }) => ({ ...state, items: [...items] })),
    on(getFormStylesSuccess, (state, { formStyles }) => ({ ...state, formStyles: { ...formStyles } })),
    on(getDroppedItemsSuccess, (state, { droppedItems }) => ({ ...state, droppedItems: [...droppedItems] })),
    on(dropItemSuccess, (state, { newItem }) => ({ ...state, droppedItems: [...state.droppedItems, newItem] })),
    on(updateItemSuccess, (state, { updatedItem }) => ({ ...state, droppedItems: state.droppedItems.map(item => item.id === updatedItem.id ? updatedItem : item) })),
    on(deleteItemSuccess, (state, { id }) => ({ ...state, droppedItems: state.droppedItems.filter(item => item.id !== id) })),
    on(updateFormStylesSuccess, (state, { updatedFormStyles }) => ({ ...state, formStyles: updatedFormStyles })),
    on(fail, (state, { errorMessage }) => ({ ...state, error: { status: true, message: errorMessage } })),
    on(closeError, (state) => ({ ...state, error: { status: false, message: '' } }))
);