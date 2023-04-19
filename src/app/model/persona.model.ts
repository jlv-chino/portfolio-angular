export class persona{

    id?: number;
    nombre?: string;
    apellido?: string;
    imagen?: string;
    puesto?: string;
    compania?: string;
    ubicacion?: string;
    telefono?: string;
    email?: string;
    titulo_acerca_de?: string;
    acerca_de?: string;
    user?: string;
    password?: string;

    constructor(nombre: string, apellido: string, imagen: string,
               puesto: string, compania: string, ubicacion: string,
               telefono: string, email: string, titulo_acerca_de: string,
               acerca_de: string, user: string, password: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
        this.puesto = puesto;
        this.compania = compania;
        this.ubicacion = ubicacion;
        this.telefono= telefono;
        this.email = email;
        this.titulo_acerca_de = titulo_acerca_de;
        this.acerca_de = acerca_de;
        this.user = user;
        this.password = password;
    }

}