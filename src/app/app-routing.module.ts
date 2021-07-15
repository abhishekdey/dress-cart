import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRODUCTLIST, HOME_ROOT } from './app.routes';
import { HomeComponent } from './homecomponent/homecomoponent';
import { ProductListComponent } from './productlistcomponent/productcomponent';
const routes: Routes = [
  {
    path: '',
    redirectTo: PRODUCTLIST,
    pathMatch: 'full',
  },
  {
    path: HOME_ROOT,
    component: HomeComponent
  },
  {
    path: PRODUCTLIST,
    component: ProductListComponent
  },
  {
    path: '**', redirectTo: PRODUCTLIST
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
