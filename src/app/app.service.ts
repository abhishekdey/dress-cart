import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AppService {
  public readonly activateNext: Subject<number> = new BehaviorSubject(-1);

  constructor() {
  }

  routingChange(index: number) {
    this.activateNext.next(index);
  }

  getActivatedRoute(): Subject<number> {
    return this.activateNext;
  }
}