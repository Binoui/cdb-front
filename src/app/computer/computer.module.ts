import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {ComputerDetailComponent} from './computer-detail/computer-detail.component';
import {ComputersComponent} from './computers/computers.component';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule,
  ],
  declarations: []
})
export class ComputerModule { }
