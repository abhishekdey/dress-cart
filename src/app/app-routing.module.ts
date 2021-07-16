import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRODUCTLIST, HOME_ROOT, PRODUCTDETAILS } from './app.routes';
import { HomeComponent } from './homecomponent/homecomoponent';
import { ProductDetailsComponent } from './productdetailscomponent/productdetailscomponent';
import { ProductListComponent } from './productlistcomponent/productcomponent';
const routes: Routes = [
  {
    path: '',
    redirectTo: PRODUCTLIST,
    pathMatch: 'full',
  },
  {
    path: PRODUCTLIST,
    component: ProductListComponent
  },
  {
    path: PRODUCTDETAILS,
    component: ProductDetailsComponent
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
