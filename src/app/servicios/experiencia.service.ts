import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private URL = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public obtenerExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(`${this.URL}${id}`);
  }

  public listaDeExperiencia():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(`${this.URL}experiencias`);
  }

  public crearExperiencia(experiencia: Experiencia):Observable<Object>{
    return this.httpClient.post(`${this.URL}crear`, experiencia);
  }

  public actualizarExperiencia(id: number, experiencia: Experiencia): Observable<Object>{
    return this.httpClient.put(`${this.URL}editar/${id}`, experiencia);
  }

  public eliminarExperiencia(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}eliminar/${id}`);
  }
  
}
