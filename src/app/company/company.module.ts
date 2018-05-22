import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CustomMaterialModule,
    MatListModule,
    CommonModule
  ],
  declarations: []
})
export class CompanyModule { }
