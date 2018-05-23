import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../company.service';
import {Company} from '../company.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-form-edit',
  templateUrl: './company-form-edit.component.html',
  styleUrls: ['./company-form-edit.component.scss']
})
export class CompanyFormEditComponent implements OnInit {
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
    });
  }

  editCompany() {
    if (this.companyForm.valid) {
      this.company.name = this.companyForm.get('name').value;
      this.companyService.editCompany(this.company).subscribe(() => this.router.navigate(['computer']), () => console.log('ko'));
    }
  }
}
