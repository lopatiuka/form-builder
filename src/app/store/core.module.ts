import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AuthEffects } from './effects/auth.effects';
import { BuilderEffects } from './effects/builder.effects';
import { authReducer } from './reducers/auth.reducer';
import { builderReducer } from './reducers/builder.reducer';

@NgModule({
    imports: [
        StoreModule.forRoot({ builder: builderReducer, auth: authReducer }),
        EffectsModule.forRoot([BuilderEffects, AuthEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ]
})
export class CoreModule {}