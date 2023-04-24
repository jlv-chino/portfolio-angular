import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/servicios/skill.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skillList: any;
  id?: number;
  skill: Skill = new Skill();

  porcentaje: string = "%";

  constructor(private loginPrd: AutentificacionService, private skillService: SkillService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.listSkill();

    this.id = 1;
    this.skillService.obtenerSkill(this.id).subscribe(data => {
      this.skill = data;
    });

  }

  public updateSkill(): void{
    this.skillService.actualizarSkill(this.id, this.skill).subscribe(data => {
      alert("Perfecto!!!");

      this.listSkill();

    }, err => alert(err.message))
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

      this.listSkill();

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

        });

        Swal.fire({
          icon: 'info',
          title: 'Skill Eliminado !!!',
          showConfirmButton: false,
          timer: 1800
        })

        this.listSkill();

      }
    })

  }

  private listSkill() {
    this.skillService.listaDeSkill().subscribe(data => {
      this.skillList = data;
    });
  } 

}
