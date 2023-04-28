import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }
}
