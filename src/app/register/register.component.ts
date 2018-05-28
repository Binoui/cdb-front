import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });

  message: string;

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService, ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    if (this.userForm.valid) {
      this.appService.register(this.userForm.get('username').value, this.userForm.get('password').value).then(() => {
        if (this.appService.isLoggedIn()) {
          const redirect = this.appService.redirectUrl ? this.appService.redirectUrl : '/home';
          this.router.navigate([redirect]);
        } else {
          this.message = 'Username already in use';
        }
      });
    }
  }
}
