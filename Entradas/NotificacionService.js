export class NotificacionService {
    enviarConfirmacion(ticket) {
        console.log(`\n//[Email Enviado] a ${ticket.cliente.email}//`);
        console.log(`//¡Hola ${ticket.cliente.nombre} / Tu entrada para ${ticket.concierto.artista} está lista.//`);
        console.log(`//Código Ticket: ${ticket.id} | Total: $${ticket.total}//`);
    }
}