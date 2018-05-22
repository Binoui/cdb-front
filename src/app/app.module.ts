import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CompaniesComponent } from './company/companies/companies.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { ComputerComponent } from './computer/computer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import {AppComponent} from './app.component';
import {CompanyComponent} from './company/company.component';
import {CompaniesComponent} from './company/companies/companies.component';
import {CompanyDetailComponent} from './company/company-detail/company-detail.component';
import {ComputerComponent} from './computer/computer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {ComputerDetailComponent} from './computer/computer-detail/computer-detail.component';
import {ComputersComponent} from './computer/computers/computers.component';
>>>>>>> feature/computer-detail

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    ComputerComponent,
    ComputersComponent,
    ComputerDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
