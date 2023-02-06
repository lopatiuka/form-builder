import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { User } from 'src/app/interfaces/user.interface'
import { AuthService } from './auth.service';

describe('AuthService', () => {
    let user: User;
    let service: AuthService;

    beforeEach(async () => { 
        await TestBed.configureTestingModule({
            imports: [
              StoreModule.forRoot({}),
              EffectsModule.forRoot([]),
              HttpClientModule
            ],
            providers: [
                AuthService
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        service = TestBed.get(AuthService);

        user = {
            email: 'admin@mail.com',
            password: 'admin'
        }
    });

    it('#login should return access token', (done: DoneFn) => {
        service.login(user, false).subscribe((response: any) => {
            expect(response.accessToken).toBeTruthy();
        })
        done();
    });
});