import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import {MatListModule} from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    CommonModule
  ],
  declarations: [CompanyDetailComponent]
})
export class CompanyModule { }
