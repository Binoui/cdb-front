import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  authenticationToken = null;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): void {

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let body = 'username=' + username + '&password=' + password;
    this.httpClient.post(this.baseUrl + "/login", body, { headers: headers, responseType: 'text' })
      .subscribe(
        (token) => {
          this.authenticationToken = token;
          console.log("token complete service : " + token);
        },
        (error) => console.log("error : ", error)
      )
  }

  getToken(): string {
    return this.authenticationToken;
  }

}