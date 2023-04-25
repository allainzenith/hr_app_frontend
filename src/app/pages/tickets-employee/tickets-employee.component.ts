import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';

@Component({
  selector: 'app-tickets-employee',
  templateUrl: './tickets-employee.component.html',
  styleUrls: ['./tickets-employee.component.css']
})
export class TicketsEmployeeComponent {
  constructor(public modalService: ModalserviceService){}
}
