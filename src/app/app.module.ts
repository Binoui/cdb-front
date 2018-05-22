import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CompaniesComponent } from './company/companies/companies.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { ComputerComponent } from './computer/computer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputersComponent } from './computer/computers/computers.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    ComputerComponent,
    ComputersComponent,
    HomeComponent
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
