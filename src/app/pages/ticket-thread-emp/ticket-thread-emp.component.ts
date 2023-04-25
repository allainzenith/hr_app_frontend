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
  status:  string = '';
  date_needed:  string = '';
  assigned_to: string = '';
  constructor(private route: ActivatedRoute) { }
  
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

  }
  
}
