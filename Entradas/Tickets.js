export class Ticket {
    constructor(id, cliente, concierto, cantidadAsientos, total) {
        this.id = id;
        this.cliente = cliente;
        this.concierto = concierto;
        this.cantidadAsientos = cantidadAsientos;
        this.total = total;
        this.fechaEmision = new Date();
    }
}