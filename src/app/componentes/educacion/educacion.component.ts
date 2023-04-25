import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educacionList: any;
  id: number;
  educacion: Educacion = new Educacion();

  constructor(private loginPrd: AutentificacionService, private educacionService: EducacionService){

  }

  ngOnInit(): void {
    
    this.listEducacion();

  }

  public visualizarBotones():boolean{
    return this.loginPrd.hablitarLogueo()
  }

  public obtenerIdEducacion(id: number) {
    this.educacionService.obtenerEducacion(id).subscribe(data => {
      this.educacion = data;
    });
  }

  public limpiarEducacion(){
    this.educacion = new Educacion();
  }

  public updateEducacion(id: number) {
    this.educacionService.actualizarEducacion(id, this.educacion).subscribe(data => {
      Swal.fire({
        icon: 'info',
        title: 'Educación Actualizada!!!',
        showConfirmButton: false,
        timer: 1800
      })

      this.listEducacion();

    }, err => alert(err.message))
  }

  public addEducacion() {
    this.educacionService.crearEducacion(this.educacion).subscribe(dato => {
      Swal.fire({
        icon: 'info',
        title: 'Educación Agregada!!!',
        showConfirmButton: false,
        timer: 1800
      })

      this.listEducacion();

    }, err => alert(err.message));
  }

  public deleteEducacion(id: number) {
    Swal.fire({
      title: '¿Desea eliminar esta Educación?',
      text: "Eliminar definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {

        this.educacionService.eliminarEducacion(id).subscribe(data => {

        });

        Swal.fire({
          icon: 'info',
          title: 'Educación eliminada!!!',
          showConfirmButton: false,
          timer: 1800
        })

        this.listEducacion();

      }
    })

  }

  private listEducacion() {
    this.educacionService.listaDeEducacion().subscribe(data => {
      this.educacionList = data;
    });
  }

}
