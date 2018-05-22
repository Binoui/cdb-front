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
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    ComputerComponent,
    ComputersComponent,
    ComputerDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
