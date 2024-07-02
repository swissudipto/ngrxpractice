import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputsComponent } from './counter/counter-outputs/counter-outputs.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducers';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputsComponent,
    CounterButtonsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter : counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
