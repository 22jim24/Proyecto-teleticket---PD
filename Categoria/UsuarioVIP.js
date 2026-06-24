// UsuarioVip.js
import { Usuario } from "./Usuario.js";

export class UsuarioVip extends Usuario {
    constructor(nombre, email, codigoVip) {
        super(nombre, email);
        this.codigoVip = codigoVip;
    }

    accederContenidoPremium() {
        return `MVP ${this.nombre} está accediendo al contenido exclusivo VIP Código: ${this.codigoVip}.`;
    }

    solicitarSoporteInmediato() {
        return `Soporte Conectando a ${this.nombre} con un agente prioritario...`;
    }
}