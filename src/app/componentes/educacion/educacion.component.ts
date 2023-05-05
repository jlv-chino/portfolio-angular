import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educacionList: any;
  id: number;
  educacion: Educacion = new Educacion();

  isLogged = false;

  constructor(private educacionService: EducacionService, private tokenService: TokenService){}

  ngOnInit(): void {
    
    this.listEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

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
    if(this.educacion.fin_educacion === ""){
      this.educacion.fin_educacion = "En curso";
    }
    
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
