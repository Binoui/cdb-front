import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {MatListModule} from '@angular/material';
import {CompaniesComponent} from './companies/companies.component';
import {CompanyComponent} from './company.component';
import {Company} from './company.model';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyFormAddComponent} from './company-form-add/company-form-add.component';
import {CompanyFormEditComponent} from './company-form-edit/company-form-edit.component';
import {ComputerComponent} from '../computer/computer.component';

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComputerComponent
  ],
  declarations: [CompanyDetailComponent,
  CompaniesComponent,
  CompanyComponent,
  CompanyFormAddComponent,
  CompanyFormEditComponent],
  exports : [Company, CompanyComponent]
})
export class CompanyModule { }
