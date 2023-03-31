import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  response: any;
  
  constructor(
    private http: HttpClient
  ) {
  }
  
  signIn(email: HTMLInputElement, password: HTMLInputElement){
    //http request
    this.http.get(`http://localhost:8080/spring-hibernate-jpa/ticket/getall`).subscribe((data) => {
      if (typeof data === 'string') {
        this.response = JSON.parse(data);
        console.log(this.response)
      } else {
        this.response = Object.values(data);
        console.log(this.response)
      }
    });
  }
  
  goToSignIn(container:HTMLDivElement){
    container.classList.add('right-panel-active');
  }

  goToSignUp(container:HTMLDivElement){
    container.classList.remove('right-panel-active');
  }

  
}
