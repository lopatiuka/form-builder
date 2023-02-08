import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderComponent } from '../builder-smart/builder.component';
import { FormStylesComponent } from './form-styles.component';


describe('FormStylesComponent', () => {
  let component: FormStylesComponent;
  let fixture: ComponentFixture<FormStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormStylesComponent, BuilderComponent],
      imports: [
        CdkAccordionModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
