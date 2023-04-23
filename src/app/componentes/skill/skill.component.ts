import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { PortfolioService } from '../../servicios/portfolio.service';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/servicios/skill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skillList: any;

  id?: number;
  porcentaje: string = "%";
  skill: Skill = new Skill("", this.id);

  constructor(private datosPortfolio: PortfolioService, private loginPrd: AutentificacionService,
    private skillService: SkillService, private router: Router) {

  }

  ngOnInit(): void {

    /*this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.skillList = data.skill;
    });*/

    this.skillService.listaDeSkill().subscribe(data => {
      this.skillList = data;
    });

    /*this.id = 1;
    this.skill = new Skill("", 1);
    this.skillService.obtenerSkill(this.id).subscribe(data => {
      this.skill = data;
    });*/
  }

  public visualizarBotones(): boolean {
    return this.loginPrd.hablitarLogueo()
  }

  public addSkill() {
    this.skillService.crearSkill(this.skill).subscribe(dato => {
      Swal.fire({
        icon: 'info',
        title: 'Skill Agregado !!!',
        showConfirmButton: false,
        timer: 1800
      })

      setTimeout(function () {
        window.location.reload();
      }, 1800);

      this.router.navigate(['']);
    }, err => alert(err.message));
  }

  public eliminarSkill() {
    Swal.fire({
      title: '¿Desea eliminar este Skill?',
      text: "Eliminar definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Skill eliminado!!!',
          'Tu skill fue eliminado',
          'success'
        )
      }
    })

  }

}
