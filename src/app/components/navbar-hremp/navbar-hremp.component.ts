import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-hremp',
  templateUrl: './navbar-hremp.component.html',
  styleUrls: ['./navbar-hremp.component.css']
})
export class NavbarHrempComponent {
  name:any;
  constructor(private router: Router){}

  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }

  async emp_name(){
    this.name = localStorage.getItem('name');
  }
}
