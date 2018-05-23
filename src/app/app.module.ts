import {NgModule} from '@angular/core';
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CompaniesComponent } from './company/companies/companies.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { ComputerComponent } from './computer/computer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {ComputerDetailComponent} from './computer/computer-detail/computer-detail.component';
import {ComputersComponent} from './computer/computers/computers.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyFormAddComponent} from './company/company-form-add/company-form-add.component';
import {ComputerFormAddComponent} from './computer/computer-form-add/computer-form-add.component';
import {CompanyFormEditComponent} from './company/company-form-edit/company-form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    ComputerComponent,
    ComputersComponent,
    ComputerDetailComponent,
    CompanyFormAddComponent,
    ComputerFormAddComponent,
    CompanyFormEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
