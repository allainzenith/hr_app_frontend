import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-reportlistsadmin',
  templateUrl: './reportlistsadmin.component.html',
  styleUrls: ['./reportlistsadmin.component.css']
})
export class ReportlistsadminComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(): void{
      
  }
}
