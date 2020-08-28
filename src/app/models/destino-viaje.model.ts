export class DestinoViaje {
    pais: string;
    ciudad: string;
    descripcion: string;
    imagen: string;

    constructor(p: string , c: string, d: string, i: string) {
        this.pais = p;
        this.imagen = i;
        this.descripcion = d;
        this.ciudad = c;
    }
}
