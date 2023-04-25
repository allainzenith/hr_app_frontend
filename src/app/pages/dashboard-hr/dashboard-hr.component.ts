import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-dashboard-hr',
  templateUrl: './dashboard-hr.component.html',
  styleUrls: ['./dashboard-hr.component.css']
})
export class DashboardHrComponent implements OnInit {
  response:any;


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

  async empID(){
    const empID = localStorage.getItem('empID');
    if (empID) {
      console.log('empID: '+empID);
    } else {
      // Handle the case where the token value is not present in localStorage
    }

    return empID;
  }

  async emp_role(){
    const emp_role = localStorage.getItem('emp_role');
    if (emp_role) {
      console.log('empID: '+emp_role);
    } else {
      // Handle the case where the token value is not present in localStorage
    }

    return emp_role;
  }


  async getAllTickets(){
    const token = this.token();
    const empID = await this.empID();
    const emp_role = await this.emp_role();

    const usertype = emp_role == 'hr' ? 'assigned_to' : 'empID';

    console.log('this is the empID'+empID)
    console.log('this is the usertype'+usertype)
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/ticket/findAllTickets/${usertype}/${empID}`, options).subscribe(response => {
      // Handle the response here
      console.log(response)
      this.response = Object.values(response);
      console.log(this.response)
      // console.log(response.data[0].ticketID)      
      // console.log(response.created_at);
    }, error => {
      // Handle errors here
    });

  }

  async getAgingTickets(){
    const token = this.token();

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get('http://localhost:8080/spring-hibernate-jpa/ticket/findAgingTickets/empID/1232', options).subscribe(response => {
      // Handle the response here
      console.log(response)
      this.response = Object.values(response);
      console.log(this.response)
      // console.log(response.data[0].ticketID)      
      // console.log(response.created_at);
    }, error => {
      // Handle errors here
    });
  }

  onSelectionChange(event: Event) {
    const target = event.target as HTMLSelectElement;

    if(target.value === 'All'){
      this.getAllTickets();
    }
    else if(target.value === 'Aging'){
      this.getAgingTickets();
    }
  }


  
  
  



}
