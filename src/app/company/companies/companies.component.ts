import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../company.service';
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

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
    this.companyService.getCountCompanies().subscribe(
      numberOfCompanies => this.numberOfCompanies,
      error => console.error('Error getting count of Companies', error)
    );
  }



}
