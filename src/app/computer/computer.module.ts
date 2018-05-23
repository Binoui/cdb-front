import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {ComputerDetailComponent} from './computer-detail/computer-detail.component';
import {Company} from '../company/company.model';
import {CompanyComponent} from '../company/company.component';
import {CompanyFormAddComponent} from '../company/company-form-add/company-form-add.component';
import { ComputerFormAddComponent } from './computer-form-add/computer-form-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ComputerFormEditComponent } from './computer-form-edit/computer-form-edit.component';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule,
    Company,
    CompanyComponent,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [ComputerDetailComponent, ComputerFormAddComponent, ComputerFormEditComponent,
  ]
})
export class ComputerModule { }
