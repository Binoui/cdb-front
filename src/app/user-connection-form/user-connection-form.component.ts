import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../company/company.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-connection-form',
  templateUrl: './user-connection-form.component.html',
  styleUrls: ['./user-connection-form.component.scss']
})
export class UserConnectionFormComponent implements OnInit {
  userForm = new FormGroup ({
    name: new FormControl(),
    password: new FormControl(),
  });

  constructor(private companyService: CompanyService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  connectUser() {
    if (this.userForm.valid) {
    }
  }
}
