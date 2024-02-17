import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  telefone: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  @ViewChild('passwordInput') passwordInputRef: ElementRef | undefined;
  @ViewChild('confirmPasswordInput') confirmPasswordInputRef: ElementRef | undefined;

  constructor() {}

  ngOnInit() {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    if (this.passwordInputRef) {
      this.passwordInputRef.nativeElement.type = this.showPassword ? 'text' : 'password';
    }
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
    if (this.confirmPasswordInputRef) {
      this.confirmPasswordInputRef.nativeElement.type = this.showConfirmPassword ? 'text' : 'password';
    }
  }
}
