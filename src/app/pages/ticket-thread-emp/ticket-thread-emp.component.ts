import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-ticket-thread-emp',
  templateUrl: './ticket-thread-emp.component.html',
  styleUrls: ['./ticket-thread-emp.component.css']
})
export class TicketThreadEmpComponent implements OnInit {
  ticketID: string = '';
  category: string = '';
  description:  string = '';
  subject: string = '';
  status:  string = '';
  date_needed:  string = '';
  assigned_to: string = '';
  response: any;

  thread_content = '';

  header = this.emp_role();
  isDisabled = false;
  name:any;
  
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
  async ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    if (queryParams['ticketID']) {
      this.ticketID = queryParams['ticketID'];
    }
    if (queryParams['category']) {
      this.category = queryParams['category'];
    }
    if (queryParams['description']) {
      this.description = queryParams['description'];
    }
    if (queryParams['status']) {
      this.status = queryParams['status'];
    }
    if (queryParams['date_needed']) {
      this.date_needed = queryParams['date_needed'];
    }
    if (queryParams['assigned_to']) {
      this.assigned_to = queryParams['assigned_to'];
    }
    if (queryParams['subject']) {
      this.subject = queryParams['subject'];
    }

    if(this.status == '3' || this.status == '2'){
      this.isDisabled = true
    }
    this.getThread();
    this.name = await this.emp_name();
  }

  async emp_name(){
    const emp_name = localStorage.getItem('name');
    if (emp_name) {
      console.log('name: '+emp_name);
    } else {
      // Handle the case where the token value is not present in localStorage
      console.log('cant see')
    }
    this.name = emp_name;
    return emp_name;
  }

  async token(){
    const token = await localStorage.getItem('token');
    if (token) {
      // Use the token value here
      console.log('token: '+token);
    } else {
      // Handle the case where the token value is not present in localStorage
    }

    return token;
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

  async empID(){
    const empID = localStorage.getItem('empID');
    if (empID) {
      console.log('empID: '+empID);
    } else {
      // Handle the case where the token value is not present in localStorage
    }

    return empID;
  }

  async getThread(){
    const token = await this.token();


    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` 
      })
    };

    console.log(options);
    
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/ticketthread/ticketID/${this.ticketID}`, options).subscribe(response => {
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

  async updateTicketThread(){
    const now = new Date();
    const mysqlDatetime = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log(mysqlDatetime); // output: e.g. 2023-04-29 16:47:23

    const formData = {
      'ticketID': this.ticketID,
      'thread_content': this.thread_content,
      'created_at': mysqlDatetime,
      'sent_by': await this.empID(), 
      'file_attachment':''
    }

    console.log(formData)

    const token = await this.token();


    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      
      const response = await this.http.post(`http://localhost:8080/spring-hibernate-jpa/ticketthread/updateticketthread`, formData, { headers, observe: 'response' }).toPromise();
      
      if (response instanceof HttpResponse) {
        if (response.status === 200) {
          console.log(response.status);
          location.replace(location.href);
        } else {
          console.log(`Server returned status code ${response.status}`);
        }
      } else {
        console.log(`Unexpected response type: ${typeof response}`);
      }

      this.getThread();
    } catch (error) {
      console.log(error);
      // Handle the error
    }
    

  }

  async cancelTicket(){
    const token = await this.token();
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    };
      const data = {};
    try{
      axios.put(`http://localhost:8080/spring-hibernate-jpa/ticket/updatestatus/${this.ticketID}/3`, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        // handle response
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
      // const response = await axios.put(`http://localhost:8080/spring-hibernate-jpa/ticket/updatestatus/${this.ticketID}/3`, options);
      // const loadingPromise = new Promise(resolve => setTimeout(resolve, 2000));

      // return await Promise.all([response,loadingPromise])
      // .then(([response]) =>{
      //   console.log(response);
      //   this.isDisabled = true;
      //   location.replace(location.href);
      // }).catch(error =>{
      //   console.log(error);
      // });
    }catch(error){
      console.error(error);
    }

    // const options = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Bearer ${token}`
    //   })
    // };

    // try {
    //   const response = await this.http.put(`http://localhost:8080/spring-hibernate-jpa/ticket/updatestatus/${this.ticketID}/3`, { options, observe: 'response' }).toPromise();
    //   if (response !== undefined) {
    //     console.log(response)
    //     this.isDisabled = true
    //     location.replace(location.href);
    //   } else {
    //     console.log('undefined')
    //   }
    // } catch (error) {
    //   console.log(error);
    //   // Handle the error
    // }
  }

  async markResolved(){
    const token = await this.token();
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    };
      const data = {};
    try{
      axios.put(`http://localhost:8080/spring-hibernate-jpa/ticket/updatestatus/${this.ticketID}/2`, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        // handle response
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });

    }catch(error){
      console.error(error);
    }
  }
  
}
