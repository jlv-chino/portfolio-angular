import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { PortfolioService } from '../../servicios/portfolio.service';

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

  miPortfolio: any;

  constructor(public personaService: PersonaService, private datosPortfolio: PortfolioService, private loginPrd: AutentificacionService){

  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data;
    });

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }

  //----------------------------------------------------------------------------------------------------
  
  /*miPortfolio: any;
  constructor(private datosPortfolio: PortfolioService, private loginPrd: AutentificacionService){

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }*/

  //----------------------------------------------------------------------------------------------------

  public visualizarBotones():boolean{
    return this.loginPrd.hablitarLogueo()
  }

  public infoContacto(){
    Swal.fire({
      title: 'Email: jose.luis.comvilches@gmail.com Cel: 345 x xxx xxx',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
