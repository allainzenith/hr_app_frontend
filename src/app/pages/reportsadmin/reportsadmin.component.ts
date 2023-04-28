import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-reportsadmin',
  templateUrl: './reportsadmin.component.html',
  styleUrls: ['./reportsadmin.component.css']
})
export class ReportsadminComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }
}
