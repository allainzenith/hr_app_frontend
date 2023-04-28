import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-categorylist-admn',
  templateUrl: './categorylist-admn.component.html',
  styleUrls: ['./categorylist-admn.component.css']
})
export class CategorylistAdmnComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }
}
