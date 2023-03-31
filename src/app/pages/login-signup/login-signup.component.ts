import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {

  constructor(
    private http: HttpClient, private router: Router
    // private navCtrl: NavController
  ) {
  }
  
  async signIn(email: HTMLInputElement, password: HTMLInputElement){
    //http request
    console.log(email.value)
    console.log(password.value)

    const body = { 
      'email': email.value.toString(),
      'password': password.value.toString()
    };

    try {
      const response = await this.http.post(`http://localhost:8080/spring-hibernate-jpa/employee/login`, body, { observe: 'response' }).toPromise();
      if (response !== undefined) {
        console.log(response.status);
        // Access response properties as needed
        if(response.status === 200){
          //go to dashboard
          this.router.navigate(['/dashboard']);
        } else {
          //stay on the login form
        }
      } else {
        // Handle undefined response
        console.log('undefined')
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

  
}
