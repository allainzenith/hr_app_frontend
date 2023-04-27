import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-user-list-hremp',
  templateUrl: './user-list-hremp.component.html',
  styleUrls: ['./user-list-hremp.component.css']
})
export class UserListHrempComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }
}
