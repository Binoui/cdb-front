import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.scss']
})
export class UserAddFormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });

  message: string;

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.userForm.valid) {
      this.appService.login(this.userForm.get('username').value, this.userForm.get('password').value).then(() => {
        if (this.appService.isLoggedIn()) {
          const redirect = this.appService.redirectUrl ? this.appService.redirectUrl : '/home';
          this.router.navigate([redirect]);
        } else {
          this.message = 'Incorrect username or password';
        }
      });
    }
  }
}
