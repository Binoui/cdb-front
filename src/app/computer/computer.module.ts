import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComputerService } from './computer.service';
import { ComputerFormAddComponent } from './computer-form-add/computer-form-add.component';
import { ComputerFormEditComponent } from './computer-form-edit/computer-form-edit.component';
import { ComputerComponent } from './computer.component';
import { ComputersComponent } from './computers/computers.component';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    ComputerService
  ],
  declarations: [
    ComputerDetailComponent,
    ComputerFormAddComponent,
    ComputerFormEditComponent,
    ComputersComponent,
    ComputerComponent
  ],
  exports: [
    ComputerComponent
  ]
})
export class ComputerModule { }
