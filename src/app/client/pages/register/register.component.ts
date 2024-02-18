import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
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

  formatarNumeroCelular(): void {
    // Remover caracteres não numéricos
    this.telefone = this.telefone.replace(/\D/g, '');

    // Adicionar parênteses e traço
    if (this.telefone.length >= 2 && this.telefone.length < 3) {
      this.telefone = `(${this.telefone}`;
    } else if (this.telefone.length >= 3 && this.telefone.length < 7) {
      this.telefone = `(${this.telefone.slice(0, 2)}) ${this.telefone.slice(2)}`;
    } else if (this.telefone.length >= 7 && this.telefone.length < 11) {
      this.telefone = `(${this.telefone.slice(0, 2)}) ${this.telefone.slice(2, 6)}-${this.telefone.slice(6)}`;
    } else if (this.telefone.length >= 11) {
      this.telefone = `(${this.telefone.slice(0, 2)}) ${this.telefone.slice(2, 7)}-${this.telefone.slice(7)}`;
    }
  }
}
