export class persona{

    id?: number;
    nombre?: string;
    apellido?: string;
    img?: string;

    contructor(nombre: string, apellido: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }

}