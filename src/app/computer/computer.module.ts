import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../custom-material/custom-material.module';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule
  ],
  declarations: []
})
export class ComputerModule { }
