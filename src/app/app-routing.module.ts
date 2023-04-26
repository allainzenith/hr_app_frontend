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
import { UserListHradmComponent } from './pages/user-list-hradm/user-list-hradm.component';
import { UserListHrempComponent } from './pages/user-list-hremp/user-list-hremp.component';
import { AddUsersComponent } from './components/add-users/add-users.component';

const routes: Routes = [
  { path: '', component: LoginSignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'empheader', component: HeaderEmpComponent },
  { path: 'hrempheader', component: HeaderHrempComponent },
  { path: 'hrdashboard', component: DashboardHrComponent },
  { path: 'employee/tickets', component: TicketsEmployeeComponent },
  { path: 'modal', component: AddTicketComponent },
  { path: 'hrreports', component: ReportsComponent },
  { path: 'ticket_thread' , component: TicketThreadEmpComponent},
  { path: 'ticketlist_hradmin' , component: TicketlistHradminComponent},
  { path: 'ticketlist_employee' , component: TicketlistEmpComponent},
  { path: 'categories' , component:CategorylistAdmnComponent},
  { path: 'add-category' , component:AddCategoryComponent},
  { path: 'profile' , component:ProfileComponent},
  { path: 'changepass' , component:ChangePasswordComponent},
  { path: 'userlhre' , component:UserListHrempComponent},
  { path: 'userlhra' , component:UserListHradmComponent},
  { path: 'addU' , component:AddUsersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }















