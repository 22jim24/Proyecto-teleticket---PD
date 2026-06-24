import { Ticket } from "./Tickets.js";

export class VentaTicketService {
    constructor() {
        this.ticketsEmitidos = [];
    }

    comprarTicket(cliente, concierto, cantidadAsientos) {

        concierto.venderAsiento(cantidadAsientos);

        const total = concierto.precioBase * cantidadAsientos;

        const nuevoTicket = new Ticket(
            Date.now(), 
            cliente, 
            concierto, 
            cantidadAsientos, 
            total
        );

        this.ticketsEmitidos.push(nuevoTicket);
        return nuevoTicket;
    }
}