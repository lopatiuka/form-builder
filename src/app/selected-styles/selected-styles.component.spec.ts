import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormItem } from '../shared/interfaces/form-item.interface';
import { SelectedStylesComponent } from './selected-styles.component';

describe('SelectedStylesComponent', () => {
  let component: SelectedStylesComponent;
  let fixture: ComponentFixture<SelectedStylesComponent>;
  let expectedItem: FormItem;
  let selectedItemDe;
  let selectedItemEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedStylesComponent],
      imports: [
        CdkAccordionModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedStylesComponent);
    component = fixture.componentInstance;

    expectedItem = {
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

    component.selectedItemControl.setValue(
      {
        id: expectedItem.id.toString(),
        type: expectedItem.type,
        value: expectedItem.value,
        width: expectedItem.width,
        placeholder: expectedItem.placeholder,
        height: expectedItem.height,
        fontSize: expectedItem.fontSize,
        fontWeight: expectedItem.fontWeight,
        border: {
          style: expectedItem.border.style,
          color: expectedItem.border.color,
          width: expectedItem.border.width
        },
        required: expectedItem.required,
        color: expectedItem.color,
      }
    );
    fixture.detectChanges();

    selectedItemDe = fixture.debugElement.query(By.css('.selected-item-styles--width'));
    selectedItemEl = selectedItemDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display selected item styles', () => {
    const expectedPipedWidth = expectedItem.width;
    expect(selectedItemEl.value).toBe(expectedPipedWidth.toString());
  });

  // it('raises the selectedStyles event when clicked', () => {
  //   const comp = new ItemsListComponent();
  //   const item: FormItem = {
  //     id: 1,
  //     value: '',
  //     type: 'checkbox',
  //     placeholder: 'Check',
  //     width: '',
  //     height: '',
  //     required: false,
  //     border: {
  //       style: '',
  //       width: '',
  //       color: ''
  //     },
  //     fontSize: '',
  //     fontWeight: '',
  //     color: ''
  //   };
  //   comp.currentItem = item;
  
  //   comp.selectedStyles.pipe(first()).subscribe((id: number) => expect(id).toBe(item.id));
  //   comp.getStyles(item.id)
  // });
});