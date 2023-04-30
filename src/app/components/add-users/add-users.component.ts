import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ModalserviceService } from 'src/app/service/modalservice.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})


export class AddUsersComponent {
  response:any;

  selectedEmpRole:any
  empID = '';
  name = '';
  email = '';
  emp_role = '';
  department = '';

  form: FormGroup = new FormGroup({});

  constructor(public modalService: ModalserviceService, private http: HttpClient, private fb: FormBuilder, private router: Router){
    this.form = this.fb.group({
      empID: [''],
      name: [''],
      email: [''],
      emp_role: [''],
      department: ['']
    });
  }

  
  ngOnInit(){
    this.getEmployees();
  }

  async getEmployees(){
    const token = await this.token();

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/employee/getall`, options).subscribe(response => {
      // Handle the response here
      console.log(response)
      this.response = Object.values(response);

    }, error => {
      // Handle errors here
    });
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

  // onSelectionChange(event: Event) {
  //   const target = event.target as HTMLSelectElement;

  //   console.log(target.value)
  //   for(let category of this.response[0]){
  //     if(category.categoryID == target.value){

  //       this.chosen_hr = category.default_assignee
  //       console.log(this.chosen_hr)
  //     }
  //   }

    
  // }

  onSelectionChange(event: any) {
    this.selectedEmpRole = event.target.value;
    console.log(this.selectedEmpRole);
  }


  async onSubmit(){
    const pin = this.generateSixDigitPin();
    const formData = new FormData();
    formData.append('empID', this.empID);
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('emp_role', this.selectedEmpRole);
    formData.append('department', this.department);
    formData.append('password', pin.toString());
    formData.append('password_hashed', 'b7e283a09511d95d6eac86e39e7942c0');

    const token = await this.token();
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    try {
      const response = await this.http.post(`http://localhost:8080/spring-hibernate-jpa/employee/create`, formData, { headers, observe: 'response' }).toPromise();
      if (response !== undefined) {
        console.log((response.body as any))  
        this.sendMail(this.email, pin);
        this.getEmployees();
      }
    } catch (error) {
      console.log(error);
      // Handle the error
    }

  }

  async sendMail(email:any, pin:any){
    
    const headers = {
      "Accept": "application/json;charset=UTF-8"
    }

    //this.signIn()

    const credentials = {
      'email': email.toString(),
      'password': pin.toString()
    }


    try {
      const response = await this.http.post(`http://localhost:8080/spring-hibernate-jpa/mail/usercreation`, credentials, { headers, observe: 'response' }).toPromise();
      if (response !== undefined) {
        if(response.status as any == 200){
          console.log(response)
        }

      } else {
        console.log('undefined')
      }

    } catch (error) {
      console.log(error);
      // Handle the error
    }
  }

  generateSixDigitPin() {
    const min = 100000; // Minimum PIN value
    const max = 999999; // Maximum PIN value
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // Generate random number within range
    return randomNum.toString();
  }


}
