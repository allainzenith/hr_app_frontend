import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardHrComponent } from './pages/dashboard-hr/dashboard-hr.component';
import { HeaderHrempComponent } from './components/header-hremp/header-hremp.component';
import { NavbarHrempComponent } from './components/navbar-hremp/navbar-hremp.component';
import { HeaderEmpComponent } from './components/header-emp/header-emp.component';
import { NavbarEmpComponent } from './components/navbar-emp/navbar-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    DashboardComponent,
    NavbarComponent,
    ReportsComponent,
    HeaderComponent,
    DashboardHrComponent,
    HeaderHrempComponent,
    NavbarHrempComponent,
    HeaderEmpComponent,
    NavbarEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
