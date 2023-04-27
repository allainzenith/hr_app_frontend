import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tickets-employee',
  templateUrl: './tickets-employee.component.html',
  styleUrls: ['./tickets-employee.component.css']
})
export class TicketsEmployeeComponent implements OnInit {
  response:any;
  constructor(public modalService: ModalserviceService, private http: HttpClient, private router: Router){}

  async ngOnInit() {
    await this.getAllTickets();
  }
  async ngAfterInit() {
    await this.getAllTickets();
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
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/ticket/findAgingTickets/${usertype}/${empID}`, options).subscribe(response => {
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

  viewTicket(ticket:any){
    console.log('okay')
    const data = {
      ticketID: ticket.ticketID,
      category: ticket.category,
      description: ticket.description,
      subject: ticket.subject,
      status: ticket.status,
      date_needed: ticket.date_needed,
      assigned_to: ticket.assigned_to,
    }
    console.log(data)
    this.router.navigate(['/ticket_thread'], { queryParams: data })
  }

  view(ticket:any){
    console.log(ticket.status)
  }
}
