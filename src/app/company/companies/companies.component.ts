import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CompanyService } from '../../company.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];

  @Input() _search: String;
  @Input('_search')
  set search(value: String) {
    this._search = value;
    console.log(this._search);
  }
  @Output() searchChange = new EventEmitter<number>();

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
  }

}
