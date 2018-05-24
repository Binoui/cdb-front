import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './company.service';
import { CompanyComponent } from './company.component';
import { CompanyFormAddComponent } from './company-form-add/company-form-add.component';
import { CompanyFormEditComponent } from './company-form-edit/company-form-edit.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompaniesComponent } from './companies/companies.component';
import { ComputerModule } from '../computer/computer.module';

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComputerModule
  ],
  providers: [
    CompanyService
  ],
  declarations: [
    CompanyComponent,
    CompanyFormAddComponent,
    CompanyFormEditComponent,
    CompanyDetailComponent,
    CompaniesComponent
  ],
  exports: []
})
export class CompanyModule { }
