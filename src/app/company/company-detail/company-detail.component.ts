import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../company.model';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../company.service';
import {Computer} from '../../computer/computer.model';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  companyId: number;
  company: Company;
  computers: Computer[];

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit() {
    this.companyId = parseInt(this.route.snapshot.paramMap.get('id'), 10 );
    this.companyService.getCompany(this.companyId).subscribe(
      companies => this.company = companies,
      error => console.error('Oups', error)
    );
    this.companyService.getComputer(this.companyId).subscribe(
      computers => this.computers = computers,
      error => console.error('Oups, une erreur est survenue lors de l\'accès à la liste des ordinateurs', error)
    );
  }

}
