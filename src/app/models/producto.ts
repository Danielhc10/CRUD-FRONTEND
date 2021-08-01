export class Producto{
    _id?: number;
    nombre: string;
    presentacion: string;
    categoria: string;
    precio: number;

    constructor(nombre: string, presentacion: string, categoria: string, precio: number){
        this.nombre = nombre;
        this.presentacion = presentacion;
        this.categoria = categoria;
        this.precio;
    }
}
