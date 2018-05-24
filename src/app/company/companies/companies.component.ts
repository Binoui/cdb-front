import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  numberOfCompanies: number;

  @Input() _search: string;
  @Input('_search')
  set search(value: string) {
    this._search = value;
    this.companyService.getCompanies(this._search).subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
  }
  @Output() searchChange = new EventEmitter<number>();

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies(this._search).subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
    this.companyService.getCountCompanies().subscribe(
      numberOfCompanies => this.numberOfCompanies,
      error => console.error('Error getting count of Companies', error)
    );
  }



}
