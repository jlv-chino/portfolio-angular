import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../servicios/portfolio.service';
import { AutentificacionService } from '../../servicios/autentificacion.service';

import Swal from 'sweetalert2';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  public inputs: boolean = true;
  buttonText: string = 'Login';

  constructor(private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.inputs = false;
      this.buttonText = 'Logout';
    }
  }

  onLogin(): void {

    if (this.buttonText === "Logout") {
      this.buttonText = 'Login';
      this.inputs = true;

      this.tokenService.logOut();

      Swal.fire({
        icon: 'info',
        title: 'Sesión cerrada con éxito',
        showConfirmButton: false,
        timer: 1800
      })

      setTimeout(function () {
        window.location.reload();
      }, 1800);

    } else {

      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;

        this.inputs = false;
        this.buttonText = 'Logout';

        Swal.fire({
          icon: 'success',
          title: 'Login',
          text: 'Usuario correcto!!!',
          showConfirmButton: false,
          timer: 1800
        })

        setTimeout(function () {
          window.location.reload();
        }, 1800);

      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o password invalido'
        })
      })

    }

  }




  /*buttonText: string = 'Login';
  public inputs: boolean = true;
  public myForm!: FormGroup;
  miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService, private fb: FormBuilder, private loginPrd: AutentificacionService,
    private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public submitFormulario() {

    if (this.buttonText === "Logout") {
      this.buttonText = 'Login';
      this.inputs = true;

      Swal.fire({
        icon: 'info',
        title: 'Sesión cerrada con éxito',
        showConfirmButton: false,
        timer: 1800
      })

      setTimeout(function () {
        window.location.reload();
      }, 1800);

      return;
    }

    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }

    if (!this.loginPrd.ingresarAplicativo(this.myForm.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o password invalido'
      })
    }

    if (this.loginPrd.ingresarAplicativo(this.myForm.value)) {
      Swal.fire({
        icon: 'success',
        title: 'Login',
        text: 'Usuario correcto!!!'
      })
      this.buttonText = 'Logout';
      this.inputs = false;
    }

  }

  public get f(): any {
    return this.myForm.controls;
  }*/

}
