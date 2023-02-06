import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { deleteItemSuccess, dropItemSuccess, getDroppedItemsSuccess, getFormStylesSuccess, getItems, getItemsSuccess, updateFormStylesSuccess, updateItemSuccess } from '../store/actions/builder.actions';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BuilderComponent } from './builder.component';
import { FormItem } from '../interfaces/form-item.interface';
import { PushModule } from '@ngrx/component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BuilderEffects } from '../store/effects/builder.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormStyles } from '../interfaces/form-styles.interface';
import { builderReducer } from '../store/reducers/builder.reducer';


let mockItems = [
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

let mockFormStyles = {
  padding: '15',
  borderColor: '#d0d5d7',
  borderWidth: '3',
  borderRadius: '10',
  borderStyle: 'solid'
}

describe('BuilderComponent', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;
  let store: MockStore<{ builderReducer: { droppedItems: Array<FormItem>, items: Array<FormItem>, formStyles: FormStyles } }>;
  let effects: BuilderEffects;
  const initialState = builderReducer;


  // const initialState = { 
  //   droppedItems: [] as FormItem[],
  //   items: [] as FormItem[],
  //   formStyles: {}
  // };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PushModule,
        CdkAccordionModule,
        StoreModule.forRoot({
          builder: builderReducer
        }),
        EffectsModule.forRoot([]),
        HttpClientTestingModule
      ],
      declarations: [BuilderComponent],
      providers: [        
        BuilderEffects,
        provideMockStore({ initialState }),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })

    store = TestBed.inject(MockStore);
    effects = TestBed.inject(BuilderEffects);

    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
