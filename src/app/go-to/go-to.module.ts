import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoToRoutingModule } from './go-to-routing.module';
import { GoToPageComponent } from './go-to-page/go-to-page.component';
import { Goto2Component } from './goto2/goto2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GoToPageComponent, Goto2Component],
  imports: [
    CommonModule,
    GoToRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GoToModule { }
