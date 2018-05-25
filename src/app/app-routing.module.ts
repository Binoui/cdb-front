import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from './company/companies/companies.component';
import {CompanyDetailComponent} from './company/company-detail/company-detail.component';
import {ComputersComponent} from './computer/computers/computers.component';
import {ComputerDetailComponent} from './computer/computer-detail/computer-detail.component';
import {CompanyFormAddComponent} from './company/company-form-add/company-form-add.component';
import {ComputerFormAddComponent} from './computer/computer-form-add/computer-form-add.component';
import {HomeComponent} from './home/home.component';
import {CompanyFormEditComponent} from './company/company-form-edit/company-form-edit.component';
import {ComputerFormEditComponent} from './computer/computer-form-edit/computer-form-edit.component';
import {UserConnectionFormComponent} from './user-connection-form/user-connection-form.component';
import {AdminGuard} from './admin-guard.service';
import {UserAddFormComponent} from './user-add-form/user-add-form.component';

const routes: Routes = [
  {
    path: 'computer/edit/:id',
    component: ComputerFormEditComponent,
    canActivate: [AdminGuard],
    pathMatch: 'full',
  },
  {
    path: 'company/edit/:id',
    component: CompanyFormEditComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard],
  },
  {
    path: 'computer/add',
    component: ComputerFormAddComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard],
  },
  {
    path: 'company/add',
    component: CompanyFormAddComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard],
  },
  {
    path: 'computer/:id',
    component: ComputerDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'company/:id',
    component: CompanyDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'computers',
    component: ComputersComponent,
    pathMatch: 'full'
  },
  {
    path: 'companies/:page',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: UserAddFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserConnectionFormComponent,
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
