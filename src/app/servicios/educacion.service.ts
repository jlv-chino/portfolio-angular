import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  private URL:string = environment.apiURL + 'educacion/';

  constructor(private httpClient: HttpClient) { }

  public obtenerEducacion(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(`${this.URL}${id}`);
  }

  public listaDeEducacion():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(`${this.URL}educaciones`);
  }

  public crearEducacion(educacion: Educacion):Observable<Object>{
    return this.httpClient.post(`${this.URL}crear`, educacion);
  }

  public actualizarEducacion(id: number, educacion: Educacion): Observable<Object>{
    return this.httpClient.put(`${this.URL}editar/${id}`, educacion);
  }

  public eliminarEducacion(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}eliminar/${id}`);
  }

}
