import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {MatListModule} from '@angular/material';
import {CompaniesComponent} from './companies/companies.component';
import {CompanyComponent} from './company.component';
import {Company} from './company.model';

@NgModule({
  imports: [
    CustomMaterialModule,
    MatListModule,
    CommonModule
  ],
  declarations: [CompanyDetailComponent,
  CompaniesComponent,
  CompanyComponent],
  exports : [Company, CompanyComponent]
})
export class CompanyModule { }
