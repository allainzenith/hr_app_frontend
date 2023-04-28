import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }
}
