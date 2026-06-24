export class Concierto {
    constructor(id, artista, fecha, precioBase, asientosDisponibles) {
        this.id = id;
        this.artista = artista;
        this.fecha = fecha;
        this.precioBase = precioBase;
        this.asientosDisponibles = asientosDisponibles;
    }

    venderAsiento(cantidad) {
        if (this.asientosDisponibles < cantidad) {
            throw new Error(`No hay suficientes asientos para el concierto de ${this.artista}`);
        }
        this.asientosDisponibles -= cantidad;
    }
}