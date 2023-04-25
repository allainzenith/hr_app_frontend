import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-thread-emp',
  templateUrl: './ticket-thread-emp.component.html',
  styleUrls: ['./ticket-thread-emp.component.css']
})
export class TicketThreadEmpComponent implements OnInit {
  ticketID: string = '';
  category: string = '';
  description:  string = '';
  subject: string = '';
  status:  string = '';
  date_needed:  string = '';
  assigned_to: string = '';
  response: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    if (queryParams['ticketID']) {
      this.ticketID = queryParams['ticketID'];
    }
    if (queryParams['category']) {
      this.category = queryParams['category'];
    }
    if (queryParams['description']) {
      this.description = queryParams['description'];
    }
    if (queryParams['status']) {
      this.status = queryParams['status'];
    }
    if (queryParams['date_needed']) {
      this.date_needed = queryParams['date_needed'];
    }
    if (queryParams['assigned_to']) {
      this.assigned_to = queryParams['assigned_to'];
    }
    if (queryParams['subject']) {
      this.subject = queryParams['subject'];
    }

    this.getThread();
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


  async getThread(){
    const token = await this.token();


    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };

    console.log(options);
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/ticketthread/ticketID/${this.ticketID}`, options).subscribe(response => {
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
  
}
