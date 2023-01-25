import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectoList: any;
  constructor(private datosPortfolio: PortfolioService, private loginPrd: AutentificacionService){

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.proyectoList = data.projects;
    });
  }

  public visualizarBotones():boolean{
    return this.loginPrd.hablitarLogueo()
  }

}
