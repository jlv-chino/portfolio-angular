import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectoList: any;
  constructor(private datosPortfolio: PortfolioService, private loginPrd: AutentificacionService){

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.proyectoList = data.projects;
    });
  }

  public visualizarBotones():boolean{
    return this.loginPrd.hablitarLogueo()
  }

  public eliminarProyecto(){
    Swal.fire({
      title: '¿Desea eliminar este proyecto?',
      text: "Eliminar definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Proyecto eliminado!!!',
          'Tu proyecto fue eliminado',
          'success'
        )
      }
    })
  }

}
