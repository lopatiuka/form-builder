import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AuthEffects } from './store/effects/auth.effects';
import { BuilderEffects } from './store/effects/builder.effects';
import { authReducer } from './store/reducers/auth.reducer';
import { builderReducer } from './store/reducers/builder.reducer';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthGuard } from './guards/AuthGuard';


@NgModule({
    imports: [
        StoreModule.forRoot({ builder: builderReducer, auth: authReducer }),
        EffectsModule.forRoot([BuilderEffects, AuthEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
    providers: [httpInterceptorProviders, AuthGuard]
})
export class CoreModule {}