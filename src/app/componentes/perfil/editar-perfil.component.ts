import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
  //closeResult = '';

  id: number;
  persona: Persona;

  constructor(private personaService: PersonaService,
    private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    this.id = 1;
    this.persona = new Persona("", "", "", "", "", "", "", "", "", "", "","");
    this.personaService.obtenerPerfil(this.id).subscribe(data => {
    this.persona= data;
    });

  }

  updatePersona(){
    this.personaService.actualizarPersona(this.id,this.persona).subscribe(data => {
      alert("Perfecto!!!");
      this.router.navigate(['']);
    },err => alert(err.message));
  }

  /*updatePersona(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.actualizarPersona(id, this.persona).subscribe(data => {
        alert("Persona actualizada!!!");
        console.log(data);
      }, err => {
        alert("Error "+ err.message);
      }) 
  }*/

  /*updatePersona() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.actualizarPersona(id, this.persona).subscribe(data => {
      //this.irAlaListaDeEmpleados();
    }, err => alert("Error " + err.message));
  }*/

  /*closeModal() {
    this.activeModal.dismiss('Cerrar');
  }

  saveData() {
    // Lógica para guardar datos
    this.activeModal.close('Guardar');
  }*/

}
