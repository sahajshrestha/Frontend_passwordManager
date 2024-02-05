import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Passwords } from '../../../passwords';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'http://localhost:5000/passwords';

  constructor(private http:HttpClient) { }

  getPasswords() {
    return this.http.get(this.apiUrl);
  }
}
