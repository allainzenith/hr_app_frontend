import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private http: HttpClient){
  
  }
  async ngOnInit() {
  }



}
