import { Injectable } from '@angular/core';
import { Company } from './company/company.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Computer} from './computer/computer.model';

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

  getComputer(id: number): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>( this.baseUrl + '/company/' + id + '/computers/' );
  }
}
