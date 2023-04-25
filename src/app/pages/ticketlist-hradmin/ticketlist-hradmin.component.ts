import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ticketlist-hradmin',
  templateUrl: './ticketlist-hradmin.component.html',
  styleUrls: ['./ticketlist-hradmin.component.css']
})
export class TicketlistHradminComponent implements OnInit{
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

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/ticket/getall`, options).subscribe(response => {
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
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/ticket/getall/aging`, options).subscribe(response => {
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
      console.log(target.value)
      this.getAllTickets();
    }
    else if(target.value === 'Aging'){
      console.log(target.value)
      this.getAgingTickets();
    }
  }


  
  
}
