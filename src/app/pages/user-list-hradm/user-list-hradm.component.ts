import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-user-list-hradm',
  templateUrl: './user-list-hradm.component.html',
  styleUrls: ['./user-list-hradm.component.css']
})
export class UserListHradmComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }
}
