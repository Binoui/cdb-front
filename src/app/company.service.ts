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
    return this.httpClient.get<Company>(this.baseUrl + '/company/' + id);
  }

  getCompanies(search: string, order = 'ID', sort = true ): Observable<Company[]> {
    if ((!search) && (order === 'ID') && (sort = true)) {
      return this.httpClient.get<Computer[]>(this.baseUrl + '/companies/');
    }
      return this.httpClient.get<Company[]>(this.baseUrl + '/companies/page?page=0&search=' + search
        + '&column=' + order + '&ascending=' + sort);
  }

  getComputersFromCompany(id: number): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>( this.baseUrl + '/company/' + id + '/computers/' );
  }

  addCompany(company: string): Observable<Company> {
    console.log(company, 'addCompany entered');
    return this.httpClient.post<Company>(this.baseUrl + '/companies', company);
  }

  getCountCompanies(): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl + '/companies/count');
  }

  editCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.baseUrl + '/company', company);
  }

  deleteCompany(id: number): Observable<number> {
    return this.httpClient.delete<number>(this.baseUrl + '/company/' + id);
  }
}
