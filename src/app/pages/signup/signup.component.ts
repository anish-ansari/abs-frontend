import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      username: [''],
      password: [''],
      address: [''],
      phone: ['']
    });
  }

  signUp(): void {
    const user = this.signUpForm.value;
    console.log(user);
    
    this.userService.signUp(user).subscribe((result: string) => {
      if (result === 'success') {
        alert('Sign up success');
        this.router.navigate(['']);
      }
      else if (result === 'User already exists')
        alert(result);
      else
        alert('Unable to register user');
    });
  }
}
