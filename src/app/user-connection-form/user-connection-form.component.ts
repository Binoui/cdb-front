import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
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

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.createForm();
    this.setMessage();
  }

  setMessage() {
    this.message = "Logged " + this.appService.isLoggedIn() ? "in" : "out";
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.userForm.valid) {
      this.message = "Logging in....";
      this.appService.login(this.userForm.get('name').value, this.userForm.get('password').value);
      if (this.appService.isLoggedIn()) {
        let redirect = this.appService.redirectUrl ? this.appService.redirectUrl : '/home';
        this.router.navigate([redirect]);
      }
    } else {
      this.message = "Incorrect values";
    }
  }
}
