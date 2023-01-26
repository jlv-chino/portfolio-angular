import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../servicios/portfolio.service';
import { AutentificacionService } from '../../servicios/autentificacion.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  buttonText: string = 'Login';

  public inputs:boolean = true;

  public myForm!:FormGroup;

  miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService, private fb: FormBuilder, private loginPrd:AutentificacionService) {

  }

  ngOnInit(): void {
    this.myForm = this.createMyForm();

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
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
        position: 'top-end',
        icon: 'info',
        title: 'Sesión cerrada con éxito',
        showConfirmButton: false,
        timer: 1800
      })

      setTimeout(function(){
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
  }

}
