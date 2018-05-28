import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from './computer.model';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private baseUrl = 'http://10.0.1.207:8080/cdb-webservice';

  constructor(private httpClient: HttpClient) { }

  getComputer(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.baseUrl + '/computer/' + id);
  }

  getComputers(search: string, page: number, order = 'ID', sort = true, size = 10): Observable<Computer[]> {
    if ((!search)) {
      search = '' ;
    }
      return this.httpClient.get<Computer[]>(this.baseUrl + '/computers/page?page=' + page + '&size=' + size + '&search=' + search
        + '&column=' + order + '&ascending=' + sort);
  }

  getAllComputers() {
    return this.httpClient.get<Computer[]>(this.baseUrl + '/computers');
  }

  getCountComputer() {
    return this.httpClient.get<number>(this.baseUrl + '/computers/count');
  }

  addComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.post<Computer>(this.baseUrl + '/computer', computer);
  }

  getCountPageComputer(search = ''): Observable<number> {
    if (!search) {
      return this.httpClient.get<number>(this.baseUrl + '/computers/page/count');
    } else {
      return this.httpClient.get<number>(this.baseUrl + '/computers/page/count?search=' + search);
    }
  }

  editComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.put<Computer>(this.baseUrl + '/computer', computer);
  }

  deleteComputer(id: number): Observable<number> {
    return this.httpClient.delete<number>(this.baseUrl + '/computer/' + id);
  }

}
