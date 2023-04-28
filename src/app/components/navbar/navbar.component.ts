import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
