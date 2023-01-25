import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { PortfolioService } from '../../servicios/portfolio.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  
  miPortfolio: any;
  constructor(private datosPortfolio: PortfolioService, private loginPrd: AutentificacionService){

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }

  public visualizarBotones():boolean{
    return this.loginPrd.hablitarLogueo()
  }

  public infoContacto(){
    Swal.fire({
      title: 'Email: jose.luis.comvilches@gmail.com Cel: 345 x xxx xxx',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
