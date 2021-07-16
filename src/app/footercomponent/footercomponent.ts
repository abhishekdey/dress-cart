import { Component } from "@angular/core";

@Component({
  templateUrl: './footercomponent.html',
  selector: 'footer-component'
})

export class FooterComponent {
  footer = [{ type: 'Contact US' }, { type: 'Sitemap' }, { type: 'Location' }];
}