import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from "uuid";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public user!: any;
  constructor(private router: Router) {
    this.user = {
      email: '',
      password: ''
    }
  }

  
  loginUser() {
    let token = uuidv4();
    console.log(this.user, token);
    localStorage.setItem('token', token)
    localStorage.setItem('user', this.user.toString())
    this.router.navigate(['pages/student-list']);
  }

}
