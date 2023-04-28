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
    
    this.http.get(`http://192.168.77.104:8080/spring-hibernate-jpa/employee/getall`, options).subscribe(response => {
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
    const formData = new FormData();
    formData.append('empID', this.empID);
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('emp_role', this.selectedEmpRole);
    formData.append('department', this.department);

    try {
      const response: HttpResponse<Object> | undefined = await this.http.post(`http://192.168.77.104:8080/spring-hibernate-jpa/employee/create`, formData, { observe: 'response' }).toPromise();
      if(response && response.status === 200){
        console.log(response.status)
        this.modalService.showDialog = false
        this.router.navigate(['/userlhra'])
      } else {

      }
    } catch (error) {
      console.log(error);
      // Handle the error
    }

  }


}
