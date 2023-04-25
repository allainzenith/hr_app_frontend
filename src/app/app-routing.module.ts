import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHrComponent } from './pages/dashboard-hr/dashboard-hr.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderEmpComponent } from './components/header-emp/header-emp.component';
import { HeaderHrempComponent } from './components/header-hremp/header-hremp.component';
import { DashboardEmpComponent } from './pages/dashboard-emp/dashboard-emp.component';

const routes: Routes = [
  { path: '', component: LoginSignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'empheader', component: HeaderEmpComponent },
  { path: 'hrempheader', component: HeaderHrempComponent },
  { path: 'hrdashboard', component: DashboardHrComponent },
  { path: 'empdashboard' , component: DashboardEmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }















