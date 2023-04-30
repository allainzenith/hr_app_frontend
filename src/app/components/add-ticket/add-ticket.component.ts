import { Component } from '@angular/core';
import { ModalserviceService } from 'src/app/service/modalservice.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  response:any;

  distinctNames:any[] = [];

  selectedCategory: any;
  selectedAssignedTo: any;

  chosen_hr = '1236';
  category = '1';
  subject = '';
  attach_file = '';
  description = '';
  date_needed = '';

  form: FormGroup = new FormGroup({});

  constructor(public modalService: ModalserviceService, private http: HttpClient, private fb: FormBuilder, private router: Router){
    this.form = this.fb.group({
      category: [''],
      assigned_to: [''],
      subject: [''],
      attach_file: [''],
      description: ['']
    });
  }

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

  async getCategories(){
    const token = await this.token();

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/requestcategory/join`, options).subscribe(response => {
      // Handle the response here
      console.log(response)
      this.response = Object.values(response);

      
      for (let item of this.response[0]) {
        item = {
          name: item.name,
          id: item.default_assignee
        }
        if (!this.distinctNames.some(e => e.name === item.name)) {
          this.distinctNames.push(item);
        }
   
      }

    }, error => {
      // Handle errors here
    });
  }

  onSelectionChange(event: Event) {
    const target = event.target as HTMLSelectElement;

    console.log(target.value)
    for(let category of this.response[0]){
      if(category.categoryID == target.value){

        this.chosen_hr = category.default_assignee
        console.log(this.chosen_hr)
      }
    }

    // this.changeChosen(target.value);
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

  async onSubmit(){
    // const formData = {
    //   'status': 1,
    //   'description' : this.description,
    //   'category' : this.category,
    //   'assigned_to' : this.chosen_hr,
    //   'empID': 1232,
    //   'subject' : this.subject,
    //   'attachment' : this.attach_file,
    //   'created_at': '2023-03-03',
    //   'priority': 'high',
    //   'date_needed': this.date_needed
    // };
    const token = await this.token();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const now = new Date();
    const mysqlDatetime = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log(mysqlDatetime); // output: e.g. 2023-04-29 16:47:23

    const date1 = new Date(this.date_needed);
    const date2 = new Date(mysqlDatetime);

    const diffTime = date1.getTime() - date2.getTime(); // absolute difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert milliseconds to days and round up

    console.log('days')
    console.log(diffDays); // Output: 120

    let priority = ''
    if(diffDays > 10){
      priority = 'low'
    } else if (diffDays <= 10 && diffDays >= 5){
      priority = 'mid'
    } else if(diffDays <= 4){
      priority = 'high'
    }


    const empID = await this.empID();
    const formData = new FormData();
    formData.append('status', '1');
    formData.append('description', this.description);
    formData.append('category', this.category);
    formData.append('assigned_to', this.chosen_hr);
    formData.append('empID', empID+'');
    formData.append('subject', this.subject);
    formData.append('attachment', this.attach_file);
    formData.append('created_at', mysqlDatetime);
    formData.append('priority', priority);
    formData.append('date_needed', this.date_needed+'');

    formData.forEach((value, key) => {
      console.log(key, value);
    });
    

    try {
      const response = await this.http.post(`http://localhost:8080/spring-hibernate-jpa/ticket/createticket`, formData, { headers, observe: 'body' }).toPromise();
      if (response !== undefined){
        console.log(response)
        this.modalService.showDialog = false
        this.router.navigate(['/ticketlist_employee'])
      } else {

      }
    } catch (error) {
      console.log(error);
      // Handle the error
    }

  }
  
  
}
