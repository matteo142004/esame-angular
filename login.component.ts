import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'P4$sW0Rd') {
      this.router.navigate(['/people']);
    } else {
      alert('Credenziali errate');
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
