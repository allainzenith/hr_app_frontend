import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';

@Component({
  selector: 'app-generatereports',
  templateUrl: './generatereports.component.html',
  styleUrls: ['./generatereports.component.css']
})
export class GeneratereportsComponent {
  constructor(public modalService: ModalserviceService){}
  ngOnInit(){

  }

  exportPdf(){
    window.open(`http://localhost:8080/spring-hibernate-jpa/file/Transmittal%20Letter.pdf`)
  }
}
