import { Component, OnInit } from '@angular/core';
import {Company} from '../company.model';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  companyId: number;
  company: Company;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit() {
    this.companyId = parseInt(this.route.snapshot.paramMap.get('id'), 10 );
    this.companyService.getCompany(this.companyId).subscribe(
      recipes => this.company = recipes,
      error => console.error('Oups', error)
    );
  }

}
