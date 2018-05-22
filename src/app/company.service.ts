import { Injectable } from '@angular/core';
import { Company } from './company/company.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from './computer/computer.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  constructor(private httpClient: HttpClient) { }

  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.baseUrl + '/computer/' + id);
  }

  getCompanies(search: string): Observable<Company[]> {
    if (!search) {
      return this.httpClient.get<Company[]>(this.baseUrl + '/companies');
    } else {
      return this.httpClient.get<Company[]>(this.baseUrl + '/companies/page?page=1&search=' + search);
    }
  }

  getComputer(id: number): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>( this.baseUrl + '/computer/' + id + '/computers/' );
  }

   addCompany(company: string): Observable<Company> {
    console.log(company, 'addCompany entered');
    return this.httpClient.post<Company>(this.baseUrl + '/company', company);
  }

  getCountCompanies(): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl + '/companies/count');
  }
}
