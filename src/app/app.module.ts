import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardRoutes } from './app.routes';
import { AppService } from './app.service';
import { FooterComponent } from './footercomponent/footercomponent';
import { HeaderComponent } from './headercomponent/headercomponent';
import { HomeComponent } from './homecomponent/homecomoponent';
import { ProductDetailsComponent } from './productdetailscomponent/productdetailscomponent';
import { ProductListComponent } from './productlistcomponent/productcomponent';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DashboardRoutes, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
