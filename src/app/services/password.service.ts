import { Injectable } from '@angular/core';
import { Passwords } from '../../../passwords';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  getPasswords() {
    const passwords = of(Passwords);
    return passwords;
  }
}
