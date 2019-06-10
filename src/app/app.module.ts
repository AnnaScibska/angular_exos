import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart-dumb/smart/smart.component';
import { DumbComponent } from './smart-dumb/smart/dumb/dumb.component';
import { EventEmitterComponent } from './smart-dumb/smart/event-emitter/event-emitter.component';
import { ObservableComponent } from './smart-dumb/smart/observable/observable.component';
import { EmitOnInitComponent } from './smart-dumb/smart/emit-on-init/emit-on-init.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    EventEmitterComponent,
    ObservableComponent,
    EmitOnInitComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
