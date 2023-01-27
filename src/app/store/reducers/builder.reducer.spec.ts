import { closeError, deleteItemSuccess, dropItemSuccess, fail, getDroppedItemsSuccess, getFormStylesSuccess, getItemsSuccess, updateFormStylesSuccess, updateItemSuccess } from '../actions/builder.actions';
import * as fromReducer from './builder.reducer';


describe('BulderReducer', () => {
    describe('unknown action', () => {
        it('should return the default state', () => {
        const { initialState } = fromReducer;
        const action = {
            type: 'Unknown',
        };
        const state = fromReducer.builderReducer(initialState, action);

        expect(state).toBe(initialState);
        });
    });

  describe('getItemsSuccess action', () => {
    it('should retrieve all items and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState = {
        items: [
            {
                id: 1,
                value: '',
                type: 'checkbox',
                placeholder: 'Check',
                width: '',
                height: '',
                required: false,
                border: {
                  style: '',
                  width: '',
                  color: ''
                },
                fontSize: '',
                fontWeight: '',
                color: ''
            }
        ],
        droppedItems: [],
        formStyles: {},
        error: {
            status: false,
            message: ''
        }
      }
        
      const action = getItemsSuccess({ items: newState.items });
      const state = fromReducer.builderReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });

  describe('getDroppedItemsSuccess action', () => {
    it('should retrieve all droppedItems and update the state in an immutable way', () => {
        const { initialState } = fromReducer;
        const newState = {
            items: [],
            droppedItems: [
                {
                    id: 1,
                    value: '',
                    type: 'checkbox',
                    placeholder: 'Check',
                    width: '',
                    height: '',
                    required: false,
                    border: {
                        style: '',
                        width: '',
                        color: ''
                    },
                    fontSize: '',
                    fontWeight: '',
                    color: ''
                }
            ],
            formStyles: {},
            error: {
                status: false,
                message: ''
            }
        }
        
      const action = getDroppedItemsSuccess({ droppedItems: newState.droppedItems });
      const state = fromReducer.builderReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });

  describe('getFormStylesSuccess action', () => {
    it('should retrieve form styles and update the state in an immutable way', () => {
        const { initialState } = fromReducer;
        const newState = {
            items: [],
            droppedItems: [],
            formStyles: {
                padding: '15',
                borderColor: '#d0d5d7',
                borderWidth: '3',
                borderRadius: '10',
                borderStyle: 'solid'
            },
            error: {
                status: false,
                message: ''
            }
        }
        
      const action = getFormStylesSuccess({ formStyles: newState.formStyles });
      const state = fromReducer.builderReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });

  describe('updateFormStylesSuccess action', () => {
    it('should update form styles and update the state in an immutable way', () => {
        const initialState = {
            items: [],
            droppedItems: [],
            formStyles: {
                padding: '',
                borderColor: '',
                borderWidth: '',
                borderRadius: '',
                borderStyle: ''
            },
            error: {
                status: false,
                message: ''
            }
        };

        const newFormStyles = {
            padding: '10',
            borderColor: '',
            borderWidth: '',
            borderRadius: '',
            borderStyle: ''
        }
        
      const action = updateFormStylesSuccess({ updatedFormStyles: newFormStyles });
      const state = fromReducer.builderReducer(initialState, action);

      expect(state.formStyles).toEqual(newFormStyles);
      expect(state.formStyles).not.toEqual(initialState.formStyles);
    });
  });

  describe('dropItemSuccess action', () => {
    it('should add item to droppedItems array', () => {
        const { initialState } = fromReducer;
        const item = {
            id: 1,
            value: '',
            type: 'checkbox',
            placeholder: 'Check',
            width: '',
            height: '',
            required: false,
            border: {
                style: '',
                width: '',
                color: ''
            },
            fontSize: '',
            fontWeight: '',
            color: ''
        }
        
        const action = dropItemSuccess({ newItem: item });
        const state = fromReducer.builderReducer(initialState, action);

        expect(state.droppedItems.length).toEqual(1);
    });
  });

  describe('updateItemSuccess action', () => {
    it('should update item in droppedItems array', () => {
        const initialState = {
            items: [],
            droppedItems: [{
                id: 1,
                value: '',
                type: 'checkbox',
                placeholder: 'Check',
                width: '',
                height: '',
                required: false,
                border: {
                  style: '',
                  width: '',
                  color: ''
                },
                fontSize: '',
                fontWeight: '',
                color: ''
            }],
            formStyles: {},
            error: {
                status: false,
                message: ''
            }
        };

        const item = {
            id: 1,
            value: '',
            type: 'checkbox',
            placeholder: 'New item',
            width: '',
            height: '',
            required: false,
            border: {
                style: '',
                width: '',
                color: ''
            },
            fontSize: '',
            fontWeight: '',
            color: ''
        }
        
        const action = updateItemSuccess({ updatedItem: item });
        const state = fromReducer.builderReducer(initialState, action);

        expect(state.droppedItems[0]).toEqual(item);
        expect(state.droppedItems[0]).not.toEqual(initialState.droppedItems[0]);
    });
  });

  describe('deleteItemSuccess action', () => {
    it('should delete item from droppedItems array', () => {
        const initialState = {
            items: [],
            droppedItems: [{
                id: 1,
                value: '',
                type: 'checkbox',
                placeholder: 'Check',
                width: '',
                height: '',
                required: false,
                border: {
                  style: '',
                  width: '',
                  color: ''
                },
                fontSize: '',
                fontWeight: '',
                color: ''
            }],
            formStyles: {},
            error: {
                status: false,
                message: ''
            }
        };
        
        const action = deleteItemSuccess({ id: 1 });
        const state = fromReducer.builderReducer(initialState, action);

        expect(state.droppedItems.length).toEqual(0);
    });
  });

  describe('fail action', () => {
    it('should set error status to true', () => {
        const initialState = {
            items: [],
            droppedItems: [],
            formStyles: {},
            error: {
                status: false,
                message: ''
            }
        };
        
        const action = fail({ errorMessage: '' });
        const state = fromReducer.builderReducer(initialState, action);

        expect(state.error.status).toBeTrue();
    });
  });

  describe('close error action', () => {
    it('should set error status to false', () => {
        const initialState = {
            items: [],
            droppedItems: [],
            formStyles: {},
            error: {
                status: true,
                message: ''
            }
        };
        
        const action = closeError();
        const state = fromReducer.builderReducer(initialState, action);

        expect(state.error.status).toBeFalse();
    });
  });
});