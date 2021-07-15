import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cart-app';

  constructor(private router: DashboardRoutes) { }
}
