import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardRoutes } from './app.routes';
import { ProductListComponent } from './productlistcomponent/productcomponent';


@NgModule({
  declarations: [
    AppComponent, ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DashboardRoutes],
  bootstrap: [AppComponent]
})
export class AppModule { }
