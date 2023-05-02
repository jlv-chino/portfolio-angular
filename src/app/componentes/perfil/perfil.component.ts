import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import Swal from 'sweetalert2';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  personaList: any;
  id: number;
  persona: Persona;
  
  isLogged = false;

  constructor(private personaService: PersonaService, private loginPrd: AutentificacionService,
    private route: ActivatedRoute, private router: Router,  private tokenService: TokenService) { }

  ngOnInit(): void {

    this.id = 1;
    this.persona = new Persona();
    this.personaService.obtenerPerfil(this.id).subscribe(data => {
      this.persona = data;
    });
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  /*public visualizarBotones(): boolean {
    return this.loginPrd.hablitarLogueo()
  }*/

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

  public listPersona() {
    this.personaService.listaDePersona().subscribe(data => {
      this.personaList = data;
    });
  }

  public updatePerfil() {
    this.personaService.actualizarPersona(this.id, this.persona).subscribe(data => {
      Swal.fire({
        icon: 'info',
        title: 'Perfil actualizado !!!',
        showConfirmButton: false,
        timer: 1800
      })

      this.listPersona();

    }, err => alert(err.message));
  }
  
}
