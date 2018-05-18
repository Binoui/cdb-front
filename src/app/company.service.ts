import { Injectable } from '@angular/core';
import { Company } from './company/company.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  constructor(private httpClient: HttpClient) { }

  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.baseUrl + '/company/' + id);
  }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.baseUrl + '/companies');
  }
}
