import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';

import Swal from 'sweetalert2';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent {

  id: number;
  persona: Persona;

  miPortfolio: any;
  constructor(private personaService: PersonaService, private loginPrd: AutentificacionService,
    private route: ActivatedRoute, private router: Router){}

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

}
