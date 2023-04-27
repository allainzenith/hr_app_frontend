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
import { TicketsEmployeeComponent } from './pages/tickets-employee/tickets-employee.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { ReportsadminComponent } from './pages/reportsadmin/reportsadmin.component';
import { HeaderHrempComponent } from './components/header-hremp/header-hremp.component';
import { NavbarHrempComponent } from './components/navbar-hremp/navbar-hremp.component';
import { HeaderEmpComponent } from './components/header-emp/header-emp.component';
import { NavbarEmpComponent } from './components/navbar-emp/navbar-emp.component';
import { TicketlistEmpComponent } from './pages/ticketlist-emp/ticketlist-emp.component';
import { TicketThreadEmpComponent } from './pages/ticket-thread-emp/ticket-thread-emp.component'; 
import { TicketlistHradminComponent } from './pages/ticketlist-hradmin/ticketlist-hradmin.component';
import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UserListHrempComponent } from './pages/user-list-hremp/user-list-hremp.component';
import { UserListHradmComponent } from './pages/user-list-hradm/user-list-hradm.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { ProfileHrempComponent } from './pages/profile-hremp/profile-hremp.component';
import { ProfileHradmComponent } from './pages/profile-hradm/profile-hradm.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { TicketThreadAdmComponent } from './pages/ticket-thread-adm/ticket-thread-adm.component';
import { TicketThreadHrempComponent } from './pages/ticket-thread-hremp/ticket-thread-hremp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    DashboardComponent,
    NavbarComponent,
    ReportsComponent,
    HeaderComponent,
    DashboardHrComponent,
    AddTicketComponent,
    TicketsEmployeeComponent,
    ReportsComponent,
    ReportsadminComponent,
    HeaderHrempComponent,
    NavbarHrempComponent,
    HeaderEmpComponent,
    NavbarEmpComponent,
    TicketlistEmpComponent,
    TicketThreadEmpComponent,
    TicketlistHradminComponent,
    AddCategoryComponent,
    ProfileComponent,
    ChangePasswordComponent,
    UserListHrempComponent,
    UserListHradmComponent,
    AddUsersComponent,
    ProfileHrempComponent,
    ProfileHradmComponent,
    EditUsersComponent,
    TicketThreadAdmComponent,
    TicketThreadHrempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
