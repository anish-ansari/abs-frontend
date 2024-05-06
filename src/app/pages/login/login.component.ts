import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(): void {
    const login = this.loginForm.value;
    this.loginService.login(login).subscribe((login: Login) => {
      if (login.userId) {
        // storing userId in local storage to be used for creating appointment
        localStorage.setItem('userId', login.userId + ''); // to set value in local storage
        console.log(localStorage.getItem('userId')); // to get value from local storage
        localStorage.setItem('isAdmin', login.isAdmin + '');
        console.log(localStorage.getItem('isAdmin'));
        localStorage.setItem('fullName', login.fullName);
        console.log(localStorage.getItem('fullName'));

        alert('login success');
        this.router.navigate(['my-appointments']);
      }
      else
        alert('Invalid username or password');
    })
  }
}
