import { Notificacion } from "./Notificacion.js";
export class NotificacionGmail extends Notificacion {
    enviar(mensaje) { 
        return ` Gmail enviado: ${mensaje}`; 
    }
}