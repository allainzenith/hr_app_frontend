import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHrComponent } from './pages/dashboard-hr/dashboard-hr.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { HeaderComponent } from './components/header/header.component';
const routes: Routes = [
  { path: '', component: LoginSignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'hrdashboard', component: DashboardHrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }















