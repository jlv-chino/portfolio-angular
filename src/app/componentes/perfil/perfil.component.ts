import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';

import Swal from 'sweetalert2';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  persona: persona = new persona();

  constructor(public personaService: PersonaService, private loginPrd: AutentificacionService){

  }

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {
      this.persona = data;
    });

  }

  public visualizarBotones():boolean{
    return this.loginPrd.hablitarLogueo()
  }

  public infoContacto(){
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

}
