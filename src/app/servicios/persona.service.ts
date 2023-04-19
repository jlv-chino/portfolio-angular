import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/persona/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+ 'detalle/'+1);
  }

  public actualizarPersona(id:number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL+ `editar/${id}`, persona);
  }
  
}
