import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './company/companies/companies.component';

const routes: Routes = [
  {
    path: 'companies',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'companies',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
