import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {ComputerDetailComponent} from './computer-detail/computer-detail.component';
import {Company} from '../company/company.model';
import {CompanyComponent} from '../company/company.component';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule,
    Company,
    CompanyComponent
  ],
  declarations: [ComputerDetailComponent]
})
export class ComputerModule { }
