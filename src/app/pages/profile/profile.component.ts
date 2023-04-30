import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  response:any
  role:any
  constructor(public modalService: ModalserviceService, private http:HttpClient){}
  ngOnInit(){
    this.getEmployee();

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


  async getEmployee(){
    const token = await this.token();
    const empID = await this.empID();
    this.role = await this.emp_role();

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/employee/empID/${empID}`, options).subscribe(response => {
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
}
