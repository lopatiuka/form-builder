import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PushModule } from '@ngrx/component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BuilderComponent } from './builder.component';
import { FormItem } from '../../shared/interfaces/form-item.interface';
import { BuilderEffects } from '../../store/effects/builder.effects';
import { FormStyles } from '../../shared/interfaces/form-styles.interface';
import { builderReducer } from '../../store/reducers/builder.reducer';


describe('BuilderComponent', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;
  let store: MockStore<{ builderReducer: { droppedItems: Array<FormItem>, items: Array<FormItem>, formStyles: FormStyles } }>;
  let effects: BuilderEffects;
  const initialState = builderReducer;

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
