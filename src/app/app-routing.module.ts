import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartComponent } from './smart-dumb/smart/smart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'smart',
    component: SmartComponent
  },
  {
    path: '',
    redirectTo: 'smart',
    pathMatch: 'full'
  },
  {
    path: 'goto',
    loadChildren: './go-to/go-to.module#GoToModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
