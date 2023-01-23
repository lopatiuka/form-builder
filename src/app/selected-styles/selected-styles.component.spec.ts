import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStylesComponent } from './selected-styles.component';

describe('SelectedStylesComponent', () => {
  let component: SelectedStylesComponent;
  let fixture: ComponentFixture<SelectedStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
