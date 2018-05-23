import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './company/companies/companies.component';
import {CompanyDetailComponent} from './company/company-detail/company-detail.component';
import {ComputersComponent} from './computer/computers/computers.component';
import {ComputerDetailComponent} from './computer/computer-detail/computer-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'computer/:id',
    component: ComputerDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'companies/:id',
    component: CompanyDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'computers',
    component: ComputersComponent,
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
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
