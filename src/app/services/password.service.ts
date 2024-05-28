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

  deletePassword(password:any) {
    const url = `${this.apiUrl}/${password.id}`;
    return this.http.delete(url);
  }

  addPassword(password: any): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post(url, password, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
