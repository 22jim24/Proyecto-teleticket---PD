import { Notificacion } from "./Notificacion.js";
export class NotificacionSms extends Notificacion {
    enviar(mensaje) { 
        return ` SMS enviado: ${mensaje}`; 
    }
}