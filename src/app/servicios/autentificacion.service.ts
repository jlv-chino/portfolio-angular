import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private ingresar:boolean = false;

  constructor() { }

  public ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'admin' && obj.password == '12345';
    return this.ingresar;
  }

  public hablitarLogueo(){
    return this.ingresar;
  }

}
