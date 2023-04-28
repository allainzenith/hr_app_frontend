
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from 'src/app/components/header/header.component';

import { ModalserviceService } from 'src/app/service/modalservice.service';

@Component({
  selector: 'app-categorylist-admn',
  templateUrl: './categorylist-admn.component.html',
  styleUrls: ['./categorylist-admn.component.css']
})

export class CategorylistAdmnComponent implements OnInit {
  response:any;
  tooltipText = 'hello'
  
  constructor(private http: HttpClient, public modalService: ModalserviceService){}
  ngOnInit(){
    this.getCategories();
  }

  async token(){
    const token = localStorage.getItem('token');
    if (token) {
      // Use the token value here
      console.log('token: '+token);
    } else {
      // Handle the case where the token value is not present in localStorage
    }

    return token;
  }
  async empID(){
    const empID = localStorage.getItem('empID');
    if (empID) {
      console.log('empID: '+empID);
    } else {
      // Handle the case where the token value is not present in localStorage
    }

    return empID;
  }

  async emp_role(){
    const emp_role = localStorage.getItem('emp_role');
    if (emp_role) {
      console.log('empID: '+emp_role);
    } else {
      // Handle the case where the token value is not present in localStorage
    }

    return emp_role;
  }

  async getCategories(){
    const token = await this.token();

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/requestcategory/join`, options).subscribe(response => {
      console.log(response)
      this.response = Object.values(response);
      console.log(this.response)
    }, error => {
      // Handle errors here
    });
  }

  editCategory(categoryID:any){
    //
  }

  
  deleteCategory(categoryID:any){
    //
  }
}
