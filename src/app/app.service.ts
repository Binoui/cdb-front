import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  authenticationToken = null;

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    this.httpClient.get(this.baseUrl + "/login?user=" + username + "&password=" + password);
  }

}
