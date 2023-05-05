import { Component } from '@angular/core';

import Swal from 'sweetalert2';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoginUsuario } from 'src/app/model/login-usuario';

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

}
