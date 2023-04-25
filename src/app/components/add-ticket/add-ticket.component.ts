import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {

  constructor(public modalService: ModalserviceService){}

  ngOnInit(): void{

  }
}
