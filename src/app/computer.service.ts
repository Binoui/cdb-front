import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from './computer/computer.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  constructor(private httpClient: HttpClient) { }

  getComputer(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.baseUrl + '/computer/' + id);
  }

  getComputers(search: string): Observable<Computer[]> {
    if (!search) {
      return this.httpClient.get<Computer[]>(this.baseUrl + '/computers');
    } else {
      return this.httpClient.get<Computer[]>(this.baseUrl + '/computers/page?page=0&search=' + search);
    }
  }

  addComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.post<Computer>(this.baseUrl + '/computer', computer);
  }

  editComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.put<Computer>(this.baseUrl + '/computer', computer);
  }

  deleteComputer(id: number): Observable<number> {
    return this.httpClient.delete<number>(this.baseUrl + '/computer/' + id);
  }

}
