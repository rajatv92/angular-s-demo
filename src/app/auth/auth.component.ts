import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  error: string;
  showError: boolean = false;
  isLoginForm: boolean = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.isLoginForm) {
      this.authService.login(form.value.email, form.value.password).subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(['/employees']);
      },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.showError = true;
        }
      );
    } else {
      this.authService.register(form.value.email, form.value.password).subscribe(responseData => {
        console.log(responseData);
      },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.showError = true;
        }
      );
    }
  }

  switchToLogin() {
    this.isLoginForm = true;
  }

}
