import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  onSubmit(){
    const user = {email: this.email, password: this.password};
    this.authService.loginUser(user).subscribe( data => {
      console.log(data);
    });
  }

}
