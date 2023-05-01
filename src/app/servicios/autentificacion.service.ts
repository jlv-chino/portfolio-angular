import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private ingresar:boolean = false;

  constructor() { }

  public ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'admin' && obj.password == 'admin';
    return this.ingresar;
  }

  public hablitarLogueo(){
    return this.ingresar;
  }

}
