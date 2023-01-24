import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../servicios/portfolio.service';
import { AutentificacionService } from '../../servicios/autentificacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  buttonText: string = 'Login';

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
      usuario:['', Validators.required],
      password:['', Validators.required]
    });
  }

  public submitFormulario() {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAllAsTouched();
      }) 
    }

    if (!this.loginPrd.ingresarAplicativo(this.myForm.value)) {
      alert("Usuario o password invalido");
    }

    if (this.loginPrd.ingresarAplicativo(this.myForm.value)) {
      alert("Usuario correcto!!!");
      this.buttonText = 'Logout';
    }

    console.log(this.myForm.value);
  }

  public get f(): any {
    return this.myForm.controls;
  }

}
