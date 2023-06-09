import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHrComponent } from './pages/dashboard-hr/dashboard-hr.component';
import { TicketsEmployeeComponent } from './pages/tickets-employee/tickets-employee.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { HeaderEmpComponent } from './components/header-emp/header-emp.component';
import { HeaderHrempComponent } from './components/header-hremp/header-hremp.component';
import { TicketThreadEmpComponent } from './pages/ticket-thread-emp/ticket-thread-emp.component';
import { TicketlistHradminComponent } from './pages/ticketlist-hradmin/ticketlist-hradmin.component';
import { TicketlistEmpComponent } from './pages/ticketlist-emp/ticketlist-emp.component';
import { CategorylistAdmnComponent } from './pages/categorylist-admn/categorylist-admn.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { GeneratereportsComponent } from './components/generatereports/generatereports.component';
import { ReportsadminComponent } from './pages/reportsadmin/reportsadmin.component';
import { ReportlistsadminComponent } from './pages/reportlistsadmin/reportlistsadmin.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UserListHrempComponent } from './pages/user-list-hremp/user-list-hremp.component';
import { UserListHradmComponent } from './pages/user-list-hradm/user-list-hradm.component';
import { ProfileHrempComponent } from './pages/profile-hremp/profile-hremp.component';
import { ProfileHradmComponent } from './pages/profile-hradm/profile-hradm.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { TicketThreadAdmComponent } from './pages/ticket-thread-adm/ticket-thread-adm.component';
import { TicketThreadHrempComponent } from './pages/ticket-thread-hremp/ticket-thread-hremp.component';

const routes: Routes = [
  { path: '', component: LoginSignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adminreports', component: ReportsadminComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'empheader', component: HeaderEmpComponent },
  { path: 'hrempheader', component: HeaderHrempComponent },
  { path: 'hrdashboard', component: DashboardHrComponent },
  { path: 'employee/tickets', component: TicketsEmployeeComponent },
  { path: 'modal', component: AddTicketComponent },
  { path: 'hrreports', component: ReportsComponent },
  { path: 'ticket_thread' , component: TicketThreadEmpComponent},
  { path: 'ticketlist_hradmin' , component: TicketlistHradminComponent},
  { path: 'ticketlist_employee' , component: TicketsEmployeeComponent},
  { path: 'categories' , component:CategorylistAdmnComponent},
  { path: 'add-category' , component:AddCategoryComponent},
  { path: 'profile_emp' , component:ProfileComponent},
  { path: 'changepass' , component:ChangePasswordComponent},
  { path: 'generatereports' , component:GeneratereportsComponent},
  { path: 'reportlistsadmin' , component:ReportlistsadminComponent},
  { path: 'edit-category' , component:EditCategoryComponent},
  { path: 'add-users' , component:AddUsersComponent},
  { path: 'users_hr' , component:UserListHrempComponent},
  { path: 'users_admin' , component:UserListHradmComponent},
  { path: 'editUser' , component:EditUsersComponent},
  { path: 'userlhre' , component:UserListHrempComponent},
  { path: 'userlhra' , component:UserListHradmComponent},
  { path: 'addU' , component:AddUsersComponent},
  { path: 'profile_hr' , component:ProfileHrempComponent},
  { path: 'profile_admin' , component:ProfileHradmComponent},
  { path: 'editUser' , component:EditUsersComponent},
  { path: 'ticket_threadAdm', component:TicketThreadAdmComponent},
  { path: 'ticket_threadHrE' , component:TicketThreadHrempComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }















