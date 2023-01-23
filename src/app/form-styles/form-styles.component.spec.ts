import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStylesComponent } from './form-styles.component';

describe('FormStylesComponent', () => {
  let component: FormStylesComponent;
  let fixture: ComponentFixture<FormStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormStylesComponent]
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
