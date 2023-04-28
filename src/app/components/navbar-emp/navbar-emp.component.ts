import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-emp',
  templateUrl: './navbar-emp.component.html',
  styleUrls: ['./navbar-emp.component.css']
})
export class NavbarEmpComponent {
  name:any;
  constructor(private router: Router){}

  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }

  async getname(){
    this.name = await this.emp_name();
  }

  async emp_name(){
    const emp_name = localStorage.getItem('name');
    if (emp_name) {
      console.log('name: '+emp_name);
    } else {
      // Handle the case where the token value is not present in localStorage
      console.log('cant see')
    }
    this.name = emp_name;
    return emp_name;
  }
}
