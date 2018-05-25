import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../computer/computer.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  constructor(private httpClient: HttpClient) { }

  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.baseUrl + '/company/' + id);
  }

  getCompanies(search: string, page: number, order = 'ID', sort = true, size = 10 ): Observable<Company[]> {
    if ((!search)) {
      search = '' ;
    }
      return this.httpClient.get<Company[]>(this.baseUrl + '/companies/page?page=' + page + '&size=' + size + '&search=' + search
        + '&column=' + order + '&ascending=' + sort);

  }

  getAllCompanies() {
    return this.httpClient.get<Company[]>(this.baseUrl + '/companies');
  }

  getComputersFromCompany(id: number): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>( this.baseUrl + '/company/' + id + '/computers/' );
  }

  addCompany(company: string): Observable<Company> {
    console.log(company, 'addCompany entered');
    return this.httpClient.post<Company>(this.baseUrl + '/companies', company);
  }

  getCountCompanies(search = ''): Observable<number> {
    if (!search) {
      return this.httpClient.get<number>(this.baseUrl + '/companies/count');
    } else {
      return this.httpClient.get<number>(this.baseUrl + '/companies/count?searchWord=' + search);
    }
  }


  getCountPageCompanies(search = ''): Observable<number> {
    if (!search) {
      return this.httpClient.get<number>(this.baseUrl + '/companies/page/count');
    } else {
      return this.httpClient.get<number>(this.baseUrl + '/companies/page/count?search=' + search);
    }
  }

  editCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.baseUrl + '/company', company);
  }

  deleteCompany(id: number): Observable<number> {
    return this.httpClient.delete<number>(this.baseUrl + '/company/' + id);
  }
}
