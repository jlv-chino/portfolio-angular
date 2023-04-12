import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';

import Swal from 'sweetalert2';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  experienciaList: any;
  constructor(private datosPortfolio: PortfolioService, private loginPrd: AutentificacionService){

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienciaList = data.experience;
    });
  }

  public visualizarBotones():boolean{
    return this.loginPrd.hablitarLogueo()
  }

  public eliminarExperiencia(){
    Swal.fire({
      title: '¿Desea eliminar esta experiencia?',
      text: "Eliminar definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Experiencia eliminada!!!',
          'Tu experiencia fue eliminada',
          'success'
        )
      }
    })
  }
    
}
