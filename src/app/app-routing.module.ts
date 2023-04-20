import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditarPerfilComponent } from './componentes/perfil/editar-perfil.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'editar/:id', component: EditarPerfilComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
