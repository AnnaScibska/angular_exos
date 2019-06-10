import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoToPageComponent} from './go-to-page/go-to-page.component';
import {Goto2Component} from './goto2/goto2.component';

const routes: Routes = [
  {
    path: '',
    component: GoToPageComponent
  },
  {
    path: 'goto2',
    component: Goto2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoToRoutingModule { }
