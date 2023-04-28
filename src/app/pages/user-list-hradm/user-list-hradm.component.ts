
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalserviceService } from 'src/app/service/modalservice.service';


@Component({
  selector: 'app-user-list-hradm',
  templateUrl: './user-list-hradm.component.html',
  styleUrls: ['./user-list-hradm.component.css']
})
export class UserListHradmComponent {

  response:any;


  constructor(private http: HttpClient, private router: Router, public modalService: ModalserviceService){}
  async ngOnInit() {
    
    this.getAllEmployee();
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


  async getAllEmployee(){
    const token = this.token();

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/employee/getall`, options).subscribe(response => {
      // Handle the response here
      console.log(response)
      this.response = Object.values(response);
      console.log(this.response)
      // console.log(response.data[0].ticketID)      
      // console.log(response.created_at);
    }, error => {
      // Handle errors here
    });

  }
  

  deleteEmployee(empID:any){
    if(confirm(`Are you sure u want to delete this employee no. ${empID}?`) ) {
      const token = this.token();
      const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
      this.http.delete(`http://192.168.77.104:8080/spring-hibernate-jpa/employee/delete/${empID}`, options).subscribe();
      this.router.navigate(['/userlhra'])
    } 
  }
}
