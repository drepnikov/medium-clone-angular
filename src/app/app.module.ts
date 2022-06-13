import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthModule } from 'src/app/auth/auth.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
