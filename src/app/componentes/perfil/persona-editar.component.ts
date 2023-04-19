import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})
export class PersonaEditarComponent {
  

  //title?: string;
  //body?: string;

  /*persona: persona = new persona();

  constructor(private personaService: PersonaService, public modal: NgbActiveModal) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      // Agregar más campos según sea necesario
    });
  }

  ngOnInit(): void {

    this.cargarPersona();

  }

  public infoContacto() {
    Swal.fire({
      title: `Email: ${this.persona.email} Cel: ${this.persona.telefono}`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  cargarPersona() {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data;
    });
  }

  updatePersona(): void {
    this.personaService.actualizarPersona(1, this.persona).subscribe(data => {
      console.log("Perfil modificado");
    });
    this.modal.close('Ok click')
  }

  guardarDatos() {
    const datos = this.formulario.value;
    console.log(datos);
    // Realizar acciones con los datos obtenidos, CREAR FUNCION EN FORM
  }*/
  
}
