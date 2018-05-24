import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ComputerDetailComponent } from './computer/computer-detail/computer-detail.component';
import { ComputersComponent } from './computer/computers/computers.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyFormAddComponent } from './company/company-form-add/company-form-add.component';
import { ComputerFormAddComponent } from './computer/computer-form-add/computer-form-add.component';
import { CompanyFormEditComponent } from './company/company-form-edit/company-form-edit.component';
import { ComputerFormEditComponent } from './computer/computer-form-edit/computer-form-edit.component';
import { TokenInterceptor } from './token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserConnectionFormComponent } from './user-connection-form/user-connection-form.component';
import { AdminGuard } from './admin-guard.service';
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
    CompanyModule,
    ComputerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, AdminGuard,
  { provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule {



}
