import { Component } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  templateUrl: './headercomponent.html',
  selector: 'header-component'
})

export class HeaderComponent {
  routeParams = [{ type: 'Tshirts' }, { type: 'Suits' }, { type: 'Tie' }];
  activeNavLinks: any = [];
  recordsList: any = [];
  activatedIndex: number = -1;

  constructor(private appService: AppService) { }

  contentData(routeName: number) {
    this.activeNavLinks = this.recordsList[routeName];
    this.appService.routingChange(routeName);
  }

  searchRecords(event: string) {

  }

  resetFiltererd() {
    // this.isFilterSearch = false;
    // this.filteredData = [];
    // this.details = {};
    // this.recordsSearch = '';
  }
}