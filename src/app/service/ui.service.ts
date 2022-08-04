import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private ediable: boolean = false;
  private showAddObj: boolean = false;

  private subject = new Subject<any>();

  constructor() {}
  toggleEdit(): void {
    this.ediable = !this.ediable;
    this.subject.next(this.ediable);
  }
  toggleAddObj() {
    this.showAddObj = !this.showAddObj;
    this.subject.next(this.showAddObj);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
