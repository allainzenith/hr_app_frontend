import { Component } from '@angular/core';

import { ModalserviceService } from 'src/app/service/modalservice.service';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {
constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }

}
