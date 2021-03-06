import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  numberOfPage: number;
  numberOfCompanies: number;
  after: number[];
  before: number[];
  page: number;
  previous: number;
  next: number;
  order: string;
  asc: boolean;
  size = 10;

  @Input() _search: string;
  @Input('_search')
  set search(value: string) {
    this._search = value;
    this.companyService.getCompanies(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
    this.companyService.getCountPageCompanies(this.size, this._search).subscribe(
      numberOfCompanies => {this.numberOfPage = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.companyService.getCountCompanies(this._search).subscribe(
      numberOfCompanies => { this.numberOfCompanies = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.calculatePages(this.size);
  }
  @Output() searchChange = new EventEmitter<number>();

  constructor(private router: Router, private route: ActivatedRoute, private companyService: CompanyService) { }

  setOrder(value: string) {
    this.order = value;
    this.companyService.getCompanies(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      companies => {this.companies = companies; console.log(companies); },
      error => console.error('Error getting list of Companies', error)
    );
    this.companyService.getCountPageCompanies(this.size, this._search).subscribe(
      numberOfCompanies => {this.numberOfPage = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.companyService.getCountCompanies(this._search).subscribe(
      numberOfCompanies => { this.numberOfCompanies = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.calculatePages(this.size);
  }

  setAsc(value: boolean) {
    this.asc = value;
    this.companyService.getCompanies(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      companies => {this.companies = companies; },
      error => console.error('Error getting list of Companies', error)
    );
    this.companyService.getCountPageCompanies(this.size, this._search).subscribe(
      numberOfCompanies => {this.numberOfPage = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.companyService.getCountCompanies(this._search).subscribe(
      numberOfCompanies => { this.numberOfCompanies = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.calculatePages(this.size);
  }

  setSizeElement(value: number) {
    this.size = value;
    this.companyService.getCompanies(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      companies => {this.companies = companies; },
      error => console.error('Error getting list of Companies', error)
    );
    this.companyService.getCountPageCompanies(this.size, this._search).subscribe(
      numberOfCompanies => {this.numberOfPage = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.companyService.getCountCompanies(this._search).subscribe(
      numberOfCompanies => { this.numberOfCompanies = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.calculatePages(this.size);
  }

  calculatePages(size) {
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

  updatePage(page: number, size) {
    this.page = page;
    this.calculatePages(size);
    this.companyService.getCompanies(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
    this.companyService.getCountCompanies(this._search).subscribe(
      numberOfCompanies => { this.numberOfCompanies = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
  }

  ngOnInit() {
    this.page = parseInt(this.route.snapshot.paramMap.get('page'), 10 );
    if (!this.page) {
      this.page = 1;
    }
    this.companyService.getCompanies(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
    this.companyService.getCountPageCompanies(this.size).subscribe(
      numberOfCompanies => { this.numberOfPage = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.companyService.getCountCompanies(this._search).subscribe(
      numberOfCompanies => { this.numberOfCompanies = numberOfCompanies; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
  }



}
