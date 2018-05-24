import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserConnectionFormComponent } from './user-connection-form/user-connection-form.component';
import { CompanyModule } from './company/company.module';
import { ComputerModule } from './computer/computer.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserConnectionFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule {



}
