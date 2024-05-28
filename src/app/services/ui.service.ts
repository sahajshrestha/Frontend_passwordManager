import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddPassword: boolean = false;
  private subject = new Subject<any>();
  constructor() { }
  toggleAddPassword():void {
    this.showAddPassword = !this.showAddPassword;
    this.subject.next(this.showAddPassword);
  }

  onToggle():Observable<any> {
    return this.subject.asObservable();
  }
}
