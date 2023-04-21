import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';

import Swal from 'sweetalert2';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  id: number;
  persona: Persona;

  constructor(private personaService: PersonaService, private loginPrd: AutentificacionService,
              private route: ActivatedRoute, private router: Router)
              {}

  ngOnInit(): void {

    this.id = 1;
    this.persona = new Persona("", "", "", "", "", "", "", "", "", "", "","");
    this.personaService.obtenerPerfil(this.id).subscribe(data => {
    this.persona= data;
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

  updatePersona(){
    this.personaService.actualizarPersona(this.id,this.persona).subscribe(data => {
      alert("Perfecto!!!");
      this.router.navigate(['']);
    },err => alert(err.message));
  }

}
