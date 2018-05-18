import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule
  ],
  declarations: [CompanyDetailComponent]
})
export class CompanyModule { }
