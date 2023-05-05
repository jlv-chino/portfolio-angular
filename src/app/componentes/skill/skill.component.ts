import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skillList: any;
  id: number;
  skill: Skill = new Skill();

  isLogged = false;

  porcentaje: string = "%";

  constructor(private skillService: SkillService, private tokenService: TokenService) { }

  ngOnInit(): void {

    this.listSkill(); 

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  public obtenerIdSkill(id: number) {
    this.skillService.obtenerSkill(id).subscribe(data => {
      this.skill = data;
    });
  }

  public limpiarSkill(){
    this.skill = new Skill();
  }

  public updateSkill(id: number) {
    this.skillService.actualizarSkill(id, this.skill).subscribe(data => {
      Swal.fire({
        icon: 'info',
        title: 'Skill Actualizado !!!',
        showConfirmButton: false,
        timer: 1800
      })

      this.listSkill();

    }, err => alert(err.message))
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
