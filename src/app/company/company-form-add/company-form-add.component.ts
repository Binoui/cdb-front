import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../company.service';
import {Router} from '@angular/router';
import {Company} from '../company.model';

@Component({
  selector: 'app-company-form-add',
  templateUrl: './company-form-add.component.html',
  styleUrls: ['./company-form-add.component.scss']
})
export class CompanyFormAddComponent implements OnInit {

  company = new Company();
  companyForm = new FormGroup ({
    name: new FormControl()
  });

  constructor(private companyService: CompanyService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      picture: '',
      description: '',
      instructions: '',
    });
  }

  addCompany() {
    if (this.companyForm.valid) {
      this.company.name = this.companyForm.get('name').value;
      this.companyService.addCompany(this.company.name).subscribe(() => this.router.navigate(['recipes']), () => console.log('ko'));
    }
  }


}
