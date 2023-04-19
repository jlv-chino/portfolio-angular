import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './componentes/header/header.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactameComponent } from './componentes/contactame/contactame.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    QuiensoyComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    ContactameComponent,
    FooterComponent,
    InicioComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
