import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-hr',
  templateUrl: './dashboard-hr.component.html',
  styleUrls: ['./dashboard-hr.component.css']
})
export class DashboardHrComponent {
  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void{
    this.getEmployeesData();
  }

  getEmployeesData(){

    const headers = new HttpHeaders({
      'Authorization': `Bearer` + localStorage.getItem('token')
    });

    this.http.get(`http://localhost:8080/spring-hibernate-jpa/ticket/tickets`, { headers}).subscribe(res => {
      console.log(res)
    });
    
  }
}
