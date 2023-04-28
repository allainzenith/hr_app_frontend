import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'zone.js';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  forgotPass = false;
  constructor(
    private http: HttpClient, private router: Router
    // private navCtrl: NavController
  ) {
  }
  
  async signIn(email: HTMLInputElement, password: HTMLInputElement) {
    // http request
    console.log(email.value)
    console.log(password.value)
    
    
    //formdata
    var body = new FormData();
    body.append("username", email.value.toString());
    body.append("password", password.value.toString());
    body.append("grant_type", "password");

    //set the username and password
    const client = 'client';
    const secret = 'secret';
  
    //encode the clientId and secret as base64
    const base64Credential = btoa(`${client}:${secret}`);
  
    const headers = new HttpHeaders({
      'Authorization': `Basic ${base64Credential}`
    });
  
    try {
      const response = await this.http.post(`http://localhost:8080/spring-hibernate-jpa/oauth/token`, body, { headers, observe: 'response' }).toPromise();
      if (response !== undefined) {
        console.log((response.body as any))

        //store the token in local storage
        localStorage.setItem('token', (response.body as any).access_token);
        localStorage.setItem('empID', (response.body as any).empID);
        localStorage.setItem('emp_role', (response.body as any).emp_role);
        localStorage.setItem('name', (response.body as any).name);
        
        if(this.forgotPass == true){
          console.log('okay')
        }
        else {
          if((response.body as any).emp_role === 'hr'){
          this.router.navigate(['/hrdashboard']);
          }

          else if((response.body as any).emp_role === 'admin'){
            this.router.navigate(['/dashboard']);
          }

          else if((response.body as any).emp_role === 'employee'){
            this.router.navigate(['/ticketlist_employee']);
          }

          else {
            console.log('undefined')
          }
        }
      }
    } catch (error) {
      console.log(error);
      // Handle the error
    }
  }
  
  goToSignIn(container:HTMLDivElement){
    container.classList.add('right-panel-active');
  }

  goToSignUp(container:HTMLDivElement){
    container.classList.remove('right-panel-active');
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

  async forgotPassword(forgotemail: any) {
    const pin = this.generateSixDigitPin();
    
    const headers = {
      "Accept": "application/json;charset=UTF-8"
    }

    //this.signIn()

    // const credentials = {
    //   'email': email.toString(),
    //   'password': pin.toString()
    // }

    // const credentials = {
    //   'email': 'janedae@gmail.com',
    //   'password': '1234'
    // }

    // try {
    //   const response = await this.http.post(`http://localhost:8080/spring-hibernate-jpa/employee/recoverPassword`, credentials, { headers, observe: 'response' }).toPromise();
    //   if (response !== undefined) {
    //     if(response.status as any == 200){
    //       console.log(response)
    //     }

    //   } else {
    //     console.log('undefined')
    //   }
    // } catch (error) {
    //   console.log(error);
    //   // Handle the error
    // }
  }

  generateSixDigitPin() {
    const min = 100000; // Minimum PIN value
    const max = 999999; // Maximum PIN value
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // Generate random number within range
    return randomNum.toString();
  }
  

  

  

  




  
}