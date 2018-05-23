import { Injectable } from '@angular/core';
import { Company } from './company/company.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from './computer/computer.model';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  constructor(private httpClient: HttpClient, private appService: AppService) { }

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
    return this.httpClient.get<Computer[]>(this.baseUrl + '/company/' + id + '/computers/');
  }

  addCompany(company: string): Observable<Company> {
    console.log(company, 'addCompany entered');

    let credentials = { username: "user", password: "password" };
    const header = new HttpHeaders({
      authorization: 'Bearer ' + btoa(credentials.username + ':' + credentials.password)
    });

    return this.httpClient.post<Company>(this.baseUrl + '/companies', { headers: header, body: company });
  }

  getCountCompanies(): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl + '/companies/count');
  }

  editCompany(company: Company): Observable<Company> {

    if (this.appService.getToken() != null) {
      this.httpClient.get(this.baseUrl + "/forbidden").subscribe(
        () => console.log("SUCESS FORBIDDEN"),
        (error) => console.log("error : ", error)
      );
    }

    return this.httpClient.put<Company>(this.baseUrl + '/company', company);
  }
}
