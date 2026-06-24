import { Notificacion } from "./Notificacion.js";
export class NotificacionWhatsapp extends Notificacion {
    enviar(mensaje) { return `
        WhatsApp enviado: ${mensaje}`; 
    }
}