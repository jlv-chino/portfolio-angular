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
  id: number;
  skill: Skill = new Skill();

  porcentaje: string = "%";

  constructor(private loginPrd: AutentificacionService, private skillService: SkillService,
              private skillServiceAdd: SkillService) { }

  ngOnInit(): void {

    this.listSkill();

    

  }

  public obtenerId(id: number) {
    alert(id);
    this.skillService.obtenerSkill(id).subscribe(data => {
      this.skill = data;
    });
  }

  public updateSkill(id: number) {

    this.skillService.actualizarSkill(id, this.skill).subscribe(data => {
      alert("Perfecto!!!");

      this.listSkill();

    }, err => alert(err.message))
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

  public visualizarBotones(): boolean {
    return this.loginPrd.hablitarLogueo()
  }

  public addSkill() {
    this.skillServiceAdd.crearSkill(this.skill).subscribe(dato => {
      Swal.fire({
        icon: 'info',
        title: 'Skill Agregado !!!',
        showConfirmButton: false,
        timer: 1800
      })

      this.listSkill();

    }, err => alert(err.message));
  }

  private listSkill() {
    this.skillService.listaDeSkill().subscribe(data => {
      this.skillList = data;
    });
  }

}
