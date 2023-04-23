import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/servicios/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skillList: any;

  id?: number;
  porcentaje: string = "%";
  skill: Skill = new Skill();

  constructor(private loginPrd: AutentificacionService, private skillService: SkillService,
    private router: Router) { }

  ngOnInit(): void {

    this.listSkill();

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

  public deleteSkill(id: number) {
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

        this.skillService.eliminarSkill(id).subscribe(data => {
          console.log(data);
        });

        Swal.fire({
          icon: 'info',
          title: 'Skill Eliminado !!!',
          showConfirmButton: false,
          timer: 1800
        })

        setTimeout(function () {
          window.location.reload();
        }, 1800);

        this.router.navigate(['']);
      }
    })

  }

  private listSkill() {
    this.skillService.listaDeSkill().subscribe(data => {
      this.skillList = data;
    });
  }

  public editSkill() {

    this.id = 8;
    this.skill = new Skill();
    this.skillService.obtenerSkill(this.id).subscribe(data => {
      this.skill = data;
    });

    this.skillService.actualizarSkill(8, this.skill).subscribe(data => {
      alert("Perfecto!!!");

      this.listSkill();

    }, err => alert(err.message))
  }

}
