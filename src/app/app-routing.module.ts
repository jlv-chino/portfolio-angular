import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { PersonaEditarComponent } from './componentes/perfil/persona-editar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'editar', component: PersonaEditarComponent},
  {path: 'prueba', component: PruebaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
