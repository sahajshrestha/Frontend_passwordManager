import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwAddedEvent {
  private reloadComponentSubject = new Subject<void>();

  reloadComponent$ = this.reloadComponentSubject.asObservable();

  triggerReload() {
    console.log('Indicator here');
    this.reloadComponentSubject.next();
  }
}