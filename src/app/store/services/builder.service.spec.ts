import { BuilderService } from './builder.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStyles } from 'src/app/interfaces/form-styles.interface';


describe('BuilderService', () => {
    let service: BuilderService;
    let item: any;
    let formStyles:FormStyles;
    
    beforeEach(async () => { 
        await TestBed.configureTestingModule({
            imports: [
              StoreModule.forRoot({}),
              EffectsModule.forRoot([]),
              HttpClientModule
            ],
            providers: [
                BuilderService
            ]
        });
        service = TestBed.get(BuilderService);

        item = {
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

        formStyles = {
            padding: '15',
            borderColor: '#d0d5d7',
            borderWidth: '3',
            borderRadius: '10',
            borderStyle: 'solid'
        }
    })
  
    it('#getItems should return value from observable',
        (done: DoneFn) => {
        service.getItems().subscribe(value => {
            expect(value.length).toBeTruthy();
        });
        done();
    });

      
    it('#getDroppedItems should return value from observable',
        (done: DoneFn) => {
        service.getDroppedItems().subscribe(value => {
            expect(value.length).toBeTruthy();
        });
        done();
    });

    it('#dropItem should return new form item',
        (done: DoneFn) => {
        service.dropItem(item).subscribe(value => {
            expect(value.id).toBeTruthy();
        });
        done();
    });

    it('#updateItem should return updated item',
    (done: DoneFn) => {
        let item = {
            id: 13,
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
        service.updateItem(item).subscribe(value => {
            expect(value).toEqual(item);
            done();
        });
    });

    it('#getFormStyles should return form styles',
    (done: DoneFn) => {
        service.getFormStyles().subscribe(value => {
            expect(value.padding).toBeTruthy();
        });
        done();
    });

    it('#updateFormStyles should return updated form styles',
    (done: DoneFn) => {
        service.updateFormStyles(formStyles).subscribe(value => {
            expect(value.padding).toEqual(formStyles.padding);
        });
        done();
    });
});