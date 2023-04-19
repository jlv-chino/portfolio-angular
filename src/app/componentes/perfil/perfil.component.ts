import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PersonaEditarComponent } from './persona-editar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  persona: persona = new persona("", "", "", "", "", "", "", "", "", "","","");

  constructor(private personaService: PersonaService, private loginPrd: AutentificacionService, 
    private modalService: NgbModal, private router: Router) {

  }

  ngOnInit(): void {

    this.cargarPersona();

  }

  public visualizarBotones(): boolean {
    return this.loginPrd.hablitarLogueo()
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
    this.personaService.actualizarPersona(1, this.persona).subscribe(
      data => {
      console.log("Persona actualizado");
      }, err => {
        console.log("ERROR" + err.message);
      }
    );
  }

  /*openFormulario() {
    const modalRef = this.modalService.open(PersonaEditarComponent);
    modalRef.componentInstance.name = 'Formulario';
    const modalRef = this.modalService.open(PersonaEditarComponent);
    modalRef.componentInstance.title = 'Modal title';
    modalRef.componentInstance.body = 'Modal body';
  }*/

  openFormulario(){
    this.router.navigate(['/prueba']);
  }

}
