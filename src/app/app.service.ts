import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  redirectUrl: string;
  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  constructor(private httpClient: HttpClient) { }

  async login(username: string, password: string): Promise<void> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const body = 'username=' + username + '&password=' + password;
    return await this.httpClient.post(this.baseUrl + '/login', body, { headers: headers, responseType: 'text' }).toPromise().then(
      (token) => localStorage.setItem('token', token),
      (error) => console.log('error : ', error));

  }

  logout(): Observable<Object> {
    return this.httpClient.get(this.baseUrl + '/logout?token=' + this.getToken());
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  async isAdmin(): Promise<boolean> {
    if (!this.isLoggedIn()) { return false; }

    return await this.httpClient.get(this.baseUrl + '/current?token=' + this.getToken()).toPromise().then(
      (user) => {
        if (user['roles'].some(item => item.label === 'ROLE_ADMIN')) {
          return true;
        } else {
          return false;
        }
      },
      (error) => { console.log('error : ' + error); return false; }
    );
  }
}
