import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Form } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { FormItem } from '../interfaces/form-item.interface';
import { FormatPipe } from '../pipes/FormatPipe';

import { ItemsListComponent } from './items-list.component';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  let itemDe;
  let itemEl: any;
  let expectedItems: FormItem[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsListComponent, FormatPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    expectedItems = [ 
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
      }, 
      {
        id: 2,
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
    ]
    component.items = expectedItems;
    fixture.detectChanges();

    itemDe = fixture.debugElement.query(By.css('.checkbox-wrapper'));
    itemEl = itemDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selectedStyles event when clicked', () => {
    const comp = new ItemsListComponent();
    const item: FormItem = {
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
    };
    comp.currentItem = item;
  
    comp.selectedStyles.pipe(first()).subscribe((id: number) => expect(id).toBe(item.id));
    comp.getStyles(item.id)
  });

  it('should display items', () => {
    const expectedPipedId = expectedItems[0].id;
    expect(itemEl.id).toBe(expectedPipedId.toString());
  });
})
