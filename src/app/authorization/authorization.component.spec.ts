import { PortalModule } from '@angular/cdk/portal';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { AuthorizationComponent } from './authorization.component';


describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorizationComponent],
      imports: [
        StoreModule.forRoot({}),
        PortalModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
