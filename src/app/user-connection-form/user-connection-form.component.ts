import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-connection-form',
  templateUrl: './user-connection-form.component.html',
  styleUrls: ['./user-connection-form.component.scss']
})
export class UserConnectionFormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });

  message: string;

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService, ) {
    this.createForm();
    if (router.url.indexOf('error=admin') !== -1) {
      this.message = 'You don\'t have rights to access this page';
    }
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.userForm.valid) {
      if (this.appService.isLoggedIn()) { 
        this.appService.logout();
      }

      this.appService.login(this.userForm.get('username').value, this.userForm.get('password').value).then(() => {
        if (this.appService.isLoggedIn()) {
            const redirect = this.appService.redirectUrl ? this.appService.redirectUrl : '/home';
            this.router.navigate([redirect]);
        } else {
          this.message = 'Incorrect username or password';
        }
      },
        (error) => { console.log("couldn't log in"); this.message = 'Incorrect username or password'; });
    }
  }
}
