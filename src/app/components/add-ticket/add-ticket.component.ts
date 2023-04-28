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
    
    this.http.get(`http://192.168.77.104:8080/spring-hibernate-jpa/requestcategory/join`, options).subscribe(response => {
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

    const num = 1232;
    const formData = new FormData();
    formData.append('status', '1');
    formData.append('description', this.description);
    formData.append('category', this.category);
    formData.append('assigned_to', this.chosen_hr);
    formData.append('empID', '1232');
    formData.append('subject', this.subject);
    formData.append('attachment', this.attach_file);
    formData.append('created_at', '2023-03-03');
    formData.append('priority', 'high');
    formData.append('date_needed', this.date_needed);

    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });
    

    try {
      const response: HttpResponse<Object> | undefined = await this.http.post(`http://192.168.77.104:8080/spring-hibernate-jpa/ticket/createticket`, formData, { observe: 'response' }).toPromise();
      if(response && response.status === 200){
        console.log(response.status)
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
