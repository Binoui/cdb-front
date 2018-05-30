import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-company-form-edit',
  templateUrl: './company-form-edit.component.html',
  styleUrls: ['./company-form-edit.component.scss']
})
export class CompanyFormEditComponent implements OnInit {
  companyForm = new FormGroup ({
    name: new FormControl()
  });

  companyToEdit: Company;

  message: string;

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.companyService.getCompany(id).subscribe((company) => { this.companyToEdit = company; this.createForm(company.name) });
  }

  createForm(name: string) {
    this.companyForm = this.fb.group({
      name: [name, Validators.required],
    });
  }

  editCompany() {
    if (this.companyForm.valid) {
      this.companyToEdit.name = this.companyForm.get('name').value;
      this.companyService.editCompany(this.companyToEdit).subscribe(
        () => this.router.navigate(['computer']),
        error => {console.error('Error editing company'); this.message = 'Error editing company'; });
    }
  }
}
