import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  experienciaList: any;
  id: number;
  experiencia: Experiencia = new Experiencia();

  isLogged = false;

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  ngOnInit(): void {

    this.listExperiencia();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  public obtenerIdExperiencia(id: number) {
    this.experienciaService.obtenerExperiencia(id).subscribe(data => {
      this.experiencia = data;
    });
  }

  public limpiarExperiencia() {
    this.experiencia = new Experiencia();
  }

  public updateExperiencia(id: number) {

    if (this.experiencia.inicio_experiencia === "") {
      Swal.fire({
        icon: 'error',
        title: 'Error !!!',
        text: 'La fecha de inicio no puede estar vacía',
        timer: 1800
      })

      this.listExperiencia();

      return;
    }

    if (this.experiencia.fin_experiencia === "") {
      this.experiencia.fin_experiencia = "Actualmente";

      const fechaActual = new Date(Date.now());
      const fechaInicio = new Date(this.experiencia.inicio_experiencia);
      const yearDiff = fechaActual.getFullYear() - fechaInicio.getFullYear();
      const monthDiff = fechaActual.getMonth() - fechaInicio.getMonth();
      const totalMonthDiff = (yearDiff * 12) + monthDiff;
      this.experiencia.tiempo_experiencia = totalMonthDiff;

    }else{

      const fechaFin = new Date(this.experiencia.fin_experiencia);
      const fechaInicio = new Date(this.experiencia.inicio_experiencia);
      const yearDiff = fechaFin.getFullYear() - fechaInicio.getFullYear();
      const monthDiff = fechaFin.getMonth() - fechaInicio.getMonth();
      const totalMonthDiff = (yearDiff * 12) + monthDiff;
      this.experiencia.tiempo_experiencia = totalMonthDiff;

    }

    this.experienciaService.actualizarExperiencia(id, this.experiencia).subscribe(data => {
      Swal.fire({
        icon: 'info',
        title: 'Experiencia Actualizada!!!',
        showConfirmButton: false,
        timer: 1800
      })

      this.listExperiencia();

    }, err => alert(err.message))
  }

  public addExperiencia() {
    if (this.experiencia.inicio_experiencia === "") {
      Swal.fire({
        icon: 'error',
        title: 'Error !!!',
        text: 'La fecha de inicio no puede estar vacía',
        timer: 1800
      })

      this.listExperiencia();

      return;
    }

    if (this.experiencia.fin_experiencia === "") {
      this.experiencia.fin_experiencia = "Actualmente";

      const fechaActual = new Date(Date.now());
      const fechaInicio = new Date(this.experiencia.inicio_experiencia);
      const yearDiff = fechaActual.getFullYear() - fechaInicio.getFullYear();
      const monthDiff = fechaActual.getMonth() - fechaInicio.getMonth();
      const totalMonthDiff = (yearDiff * 12) + monthDiff;
      this.experiencia.tiempo_experiencia = totalMonthDiff;

    }else{

      const fechaFin = new Date(this.experiencia.fin_experiencia);
      const fechaInicio = new Date(this.experiencia.inicio_experiencia);
      const yearDiff = fechaFin.getFullYear() - fechaInicio.getFullYear();
      const monthDiff = fechaFin.getMonth() - fechaInicio.getMonth();
      const totalMonthDiff = (yearDiff * 12) + monthDiff;
      this.experiencia.tiempo_experiencia = totalMonthDiff;

    }

    this.experienciaService.crearExperiencia(this.experiencia).subscribe(dato => {
      Swal.fire({
        icon: 'info',
        title: 'Experiencia Agregada!!!',
        showConfirmButton: false,
        timer: 1800
      })

      this.listExperiencia();

    }, err => alert(err.message));
  }

  public deleteExperiencia(id: number) {
    Swal.fire({
      title: '¿Desea eliminar este experiencia?',
      text: "Eliminar definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {

        this.experienciaService.eliminarExperiencia(id).subscribe(data => {

        });

        Swal.fire({
          icon: 'info',
          title: 'Experiencia Eliminada !!!',
          showConfirmButton: false,
          timer: 1800
        })

        this.listExperiencia();

      }
    })

  }

  private listExperiencia() {
    this.experienciaService.listaDeExperiencia().subscribe(data => {
      this.experienciaList = data;
    });
  }

}
