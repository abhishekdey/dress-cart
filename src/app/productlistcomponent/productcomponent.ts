import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  templateUrl: './productcomponent.html',
})

export class ProductListComponent implements OnInit {
  recordsList: any = [];
  footer = [{ type: 'Contact US' }, { type: 'Sitemap' }, { type: 'Location' }];
  activeNavLinks: any = -1;
  details: any = {};
  recordsSearch: string = '';
  activeIndex: Number = -1;
  filteredData: any = [];
  isFilterSearch: boolean = false;
  constructor(private appService: AppService) {
    this.appService.getActivatedRoute().subscribe(data => this.activeNavLinks = data);
  }

  productdetails(imageIndex: number) {
    this.details = this.recordsList[this.activeNavLinks][imageIndex];
  }

  ngOnInit() {
    import(`../file.json`).then(data => {
      this.recordsList = data;
    });
  }

  getRecordList() {
    return Object.keys(this.details).length;
  }

  searchRecords(event: string) {
    this.isFilterSearch = event.length ? true : false;
    this.filteredData = [];
    event.length && this.activeNavLinks.length > 0 && this.activeNavLinks.forEach((ele: any) => {
      if (ele['name'].toString().toLowerCase().includes(event.toLowerCase())) {
        this.filteredData.push(ele);
      }
    });
    this.activeNavLinks = [...this.filteredData];
    this.activeIndex = event.length ? this.activeIndex : -1;
  }

  resetFiltererd() {
    this.isFilterSearch = false;
    this.filteredData = [];
    this.details = {};
    this.recordsSearch = '';
  }
}