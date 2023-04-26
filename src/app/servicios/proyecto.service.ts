import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private URL = 'http://localhost:8080/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public obtenerProyecto(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(`${this.URL}${id}`);
  }

  public listaDeProyecto():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(`${this.URL}proyectos`);
  }

  public crearProyecto(proyecto: Proyecto):Observable<Object>{
    return this.httpClient.post(`${this.URL}crear`, proyecto);
  }

  public actualizarProyecto(id: number, proyecto: Proyecto): Observable<Object>{
    return this.httpClient.put(`${this.URL}editar/${id}`, proyecto);
  }

  public eliminarProyecto(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}eliminar/${id}`);
  }

}
