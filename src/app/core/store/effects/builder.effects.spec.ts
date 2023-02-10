import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { deleteItemSuccess, dropItemSuccess, getDroppedItemsSuccess, getFormStylesSuccess, getItemsSuccess, updateFormStylesSuccess, updateItemSuccess } from '../actions/builder.actions';
import { FormItem } from '../../shared/interfaces/form-item.interface';
import { BuilderEffects } from '../../store/effects/builder.effects';
import { FormStyles } from '../../shared/interfaces/form-styles.interface';


const mockItems = [
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
];

const mockFormStyles = {
  padding: '15',
  borderColor: '#d0d5d7',
  borderWidth: '3',
  borderRadius: '10',
  borderStyle: 'solid'
}

describe('Builder effects', () => {
  let store: MockStore<{ builderReducer: { droppedItems: Array<FormItem>, items: Array<FormItem>, formStyles: FormStyles } }>;
  let effects: BuilderEffects;

  const initialState = { 
    droppedItems: [] as FormItem[],
    items: [] as FormItem[],
    formStyles: {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule
      ],
      declarations: [],
      providers: [        
        BuilderEffects,
        provideMockStore({ initialState }),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })

    store = TestBed.inject(MockStore);
    effects = TestBed.inject(BuilderEffects);
  });

  it('form items should be fetched', (done) => {
    effects.getItems$.subscribe(res => {
      expect(res).toEqual(getItemsSuccess({ items: mockItems }));
    });
    done()
  })

  it('dropped items should be fetched', () => {
    effects.getDroppedItems$.subscribe(res => {
      expect(res).toEqual(getDroppedItemsSuccess({ droppedItems: mockItems }));
    });
  });
  
  it('form styles should be fetched', () => {
    effects.getFormStyles$.subscribe(res => {
      expect(res).toEqual(getFormStylesSuccess({ formStyles: mockFormStyles }));
    });
  });

  it('item should be dropped', () => {
    effects.dropItem$.subscribe(res => {
      expect(res).toEqual(dropItemSuccess({ newItem: mockItems[0] }));
    });
  });

  it('item should be updated', () => {
    effects.updateItem$.subscribe(res => {
      expect(res).toEqual(updateItemSuccess({ updatedItem: mockItems[0] }));
    });
  });

  it('item should be deleted', () => {
    effects.deleteItem$.subscribe(res => {
      expect(res).toEqual(deleteItemSuccess({ id: mockItems[0].id }));
    });
  });

  it('form styles tshould be updated', () => {
    effects.updateFormStyles$.subscribe(res => {
      expect(res).toEqual(updateFormStylesSuccess({ updatedFormStyles: mockFormStyles }));
    });
  });
});
