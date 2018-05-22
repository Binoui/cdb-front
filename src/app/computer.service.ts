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

  getComputers(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.baseUrl + '/computers');
  }

}
