import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import {MatListModule} from '@angular/material';
import {CompaniesComponent} from './companies/companies.component';
import {CompanyComponent} from './company.component';
import {Company} from './company.model';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CompanyDetailComponent,
  CompaniesComponent,
  CompanyComponent],
  exports : [Company, CompanyComponent]
})
export class CompanyModule { }
