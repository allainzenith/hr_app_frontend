import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }
}
