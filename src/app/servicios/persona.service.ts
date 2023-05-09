import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  private URL:string = environment.apiURL + 'persona/';

  constructor(private httpClient: HttpClient) { }

  public obtenerPerfil(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.URL}${id}`);
  }

  public listaDePersona():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.URL}personas`);
  }

  public crearPersona(persona: Persona):Observable<Object>{
    return this.httpClient.post(`${this.URL}crear`, persona);
  }

  public actualizarPersona(id: number, persona: Persona): Observable<Object>{
    return this.httpClient.put(`${this.URL}editar/${id}`, persona);
  }

  public eliminarPersona(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}eliminar/${id}`);
  }

}
