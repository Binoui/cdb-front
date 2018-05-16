import { Component, OnInit } from '@angular/core';
import { Company } from './company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company: Company;

  constructor() { }

  ngOnInit() {
    this.company = {
      id: 5,
      name: "testCompany"
    }
  }

}
