import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})

export class SkillService {
  private URL = 'http://localhost:8080/skill/';

  constructor(private httpClient: HttpClient) { }

  public obtenerSkill(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(`${this.URL}${id}`);
  }

  public listaDeSkill():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(`${this.URL}skills`);
  }

  public crearSkill(skill: Skill):Observable<Object>{
    return this.httpClient.post(`${this.URL}crear`, skill);
  }

  public actualizarSkill(id: number, skill: Skill): Observable<Object>{
    return this.httpClient.put(`${this.URL}editar/${id}`, skill);
  }

  public eliminarSkill(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}eliminar/${id}`);
  }

}
