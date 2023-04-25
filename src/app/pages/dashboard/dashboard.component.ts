import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private http: HttpClient){
  
  }
  async ngOnInit() {
    this.getAllTickets();
  }
  
  async token(){
    const token = localStorage.getItem('token');
    if (token) {
      // Use the token value here
      console.log('token: '+token);
    } else {
      // Handle the case where the token value is not present in localStorage
    }

    return token;
  }


  async getAllTickets(){
    const token = this.token();

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get('http://localhost:8080/spring-hibernate-jpa/ticket/empID/1232', options).subscribe(response => {
      // Handle the response here
      console.log(response);
      // console.log(response.created_at);
    }, error => {
      // Handle errors here
    });

  }
}
