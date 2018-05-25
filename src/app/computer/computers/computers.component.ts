import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from '../computer.model';
import {ComputerService} from '../computer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  computers: Computer[];
  @Input() _search: string;
  @Input('_search')
  set search(value: string) {
    this._search = value;
    this.computerService.getComputers(this._search, this.page - 1).subscribe(
      companies => this.computers = companies,
      error => console.error('Error getting list of Companies', error)
    );
    this.computerService.getCountPageComputer(this._search).subscribe(
      numberOfCompanies => {this.numberOfPage = numberOfCompanies; this.calculatePages(); },
      error => console.error('Error getting count of Companies', error)
    );
    this.calculatePages();
  }
  @Output() searchChange = new EventEmitter<number>();
  numberOfPage: number;
  numberOfComputers: number;
  after: number[];
  before: number[];
  page: number;
  previous: number;
  next: number;
  order: string;
  asc = true;

  constructor(private router: Router, private route: ActivatedRoute, private computerService: ComputerService) { }

  setOrder(value: string) {
    this.order = value;
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc).subscribe(
      computers => {this.computers = computers; },
      error => console.error('Error getting list of Computers', error)
    );
    this.computerService.getCountPageComputer(this._search).subscribe(
      numberOfCompanies => {this.numberOfPage = numberOfCompanies; this.calculatePages(); },
      error => console.error('Error getting count of Computers', error)
    );
    this.calculatePages();
  }

  setAsc(value: boolean) {
    this.asc = value;
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc).subscribe(
      computers => {this.computers = computers; },
      error => console.error('Error getting list of Computers', error)
    );
    this.computerService.getCountPageComputer(this._search).subscribe(
      numberOfCompanies => {this.numberOfPage = numberOfCompanies; this.calculatePages(); },
      error => console.error('Error getting count of Computers', error)
    );
    this.calculatePages();
  }

  calculatePages(size = 10) {
    let PageMax;
    PageMax  = this.numberOfPage;
    if (this.page > 1) {
      if (!(this.page < PageMax)) {
        this.page = PageMax;
      }
    } else {
      this.page = 1;
    }
    this.before = [];
    this.after = [];
    if (this.page > 1) {
      this.before.push(1);
    }
    for ( let i = -3; i < 0; i++) {
      if ((this.page + i > 1) && (i !== 0) && (this.page + i < PageMax)) {
        this.before.push(this.page + i);
      }
    }
    for ( let i = 1; i < 4; i++) {
      if ((this.page + i > 1) && (i !== 0) && (this.page + i < PageMax)) {
        this.after.push(this.page + i);
      }
    }
    if (this.page < PageMax) {
      this.after.push(PageMax);
    }
    this.previous = 0;
    if (this.page > 1) {
      this.previous = this.page - 1;
    }
    this.next = 0;
    if (this.page < PageMax) {
      this.next = this.page + 1;
    }
  }

  updatePage(page: number, size = 10 ) {
    this.page = page;
    this.calculatePages(size);
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc).subscribe(
      companies => this.computers = companies,
      error => console.error('Error getting list of Computers', error)
    );
  }

  ngOnInit() {
    this.page = parseInt(this.route.snapshot.paramMap.get('page'), 10 );
    if (!this.page) {
      this.page = 1;
    }
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc).subscribe(
      companies => this.computers = companies,
      error => console.error('Error getting list of Computers', error)
    );
    this.computerService.getCountPageComputer().subscribe(
      numberOfCompanies => { this.numberOfPage = numberOfCompanies; this.calculatePages(); },
      error => console.error('Error getting count of Computers', error)
    );
    this.computerService.getCountComputer().subscribe(
      numberOfCompanies => { this.numberOfComputers = numberOfCompanies; this.calculatePages(); },
      error => console.error('Error getting count of Computers', error)
    );
  }

}
