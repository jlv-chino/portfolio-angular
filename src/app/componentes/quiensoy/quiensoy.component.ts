import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';

import Swal from 'sweetalert2';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent {

  persona: persona = new persona("", "", "", "", "","", "", "", "", "", "","");

  miPortfolio: any;
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

}
