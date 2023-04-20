import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  private URL = 'http://localhost:8080/persona/';

  constructor(private httpClient: HttpClient) { }

  public obtenerPerfil(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.URL}${id}`);
  }

  /*public getPersona(): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL+ 'detalle/1');
  }*/

  public listaDePersona():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.URL}personas`);
  }

  public crearPersona(persona: Persona):Observable<Object>{
    return this.httpClient.post(`${this.URL}personas/crear`, persona);
  }

  /*public actualizarPersona(id: number, persona: any): Observable<any>{
    const formData: FormData = new FormData();
    for(const key in persona){
      if(persona.hasOwnProperty(key)){
        const element = persona[key];
        formData.append(key, element);
      }
    }
    return this.httpClient.put<any>(`${this.URL}editar/${id}`, formData);
  }*/

  public actualizarPersona(id: number, persona: Persona): Observable<Object>{
    return this.httpClient.put(`${this.URL}editar/${id}`, persona);
  }

  public eliminarPersona(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}${id}`);
  }

}
