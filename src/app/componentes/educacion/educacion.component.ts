import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educacionList: any;
  constructor(private datosPortfolio: PortfolioService, private loginPrd: AutentificacionService){

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.educacionList = data.education;
    });
  }

  public visualizarBotones():boolean{
    return this.loginPrd.hablitarLogueo()
  }

  public eliminarEducacion(){
    Swal.fire({
      title: '¿Desea eliminar esta educación?',
      text: "Eliminar definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Educación eliminada!!!',
          'Tu educación fue eliminada',
          'success'
        )
      }
    })
  }

}
