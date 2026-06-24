
//inversion de dependencia A//
import { PagoPlin } from "./Pagos/PagoPlin.js";
import { MetodoPago } from "./Pagos/MetodoPago.js";
import { PagoTarjeta } from "./Pagos/PagoTarjeta.js";
import { PagoYape } from "./Pagos/PagoYape.js";



//inversion de dependencia A //
const pagoConTarjeta = new PagoTarjeta();
const pagoConPlin = new PagoPlin();
const pagoConYape = new PagoYape();

const NuevoPago = new MetodoPago(pagoConYape);
const MensajePagado = NuevoPago.procesarPago(150);

document.getElementById("MensajeDePago").innerText = MensajePagado;


//responsabilidad unica J //
import { Concierto } from "./Entradas/Concierto.js";
import { Cliente } from "./Entradas/Cliente.js";
import { VentaTicketService } from "./Entradas/VentaTicketService.js";
import { NotificacionService } from "./Entradas/NotificacionService.js";

//responsabilidad unica J //
const conciertoRock = new Concierto(101, "Linkin Park", "2026-11-15", 75, 50);
const clientePersona = new Cliente(1, "Carlos Gómez", "carlos@email.com");

const ventaService = new VentaTicketService();
const notificador = new NotificacionService();

try {
    console.log("/*- Iniciando proceso de compra -*/");
    
    const miTicket = ventaService.comprarTicket(clientePersona, conciertoRock, 2);
    
    console.log("¡Compra exitosa en el sistema! - siuuu.");
    console.log(`Asientos restantes de ${conciertoRock.artista}: ${conciertoRock.asientosDisponibles}`);

    notificador.enviarConfirmacion(miTicket);

} catch (error) {
    console.error(`Error en la operación: ${error.message}`);
}


//Sustitucion J //
import { Invitado } from "./Categoria/Invitado.js";
import { Usuario } from "./Categoria/Usuario.js";
import { UsuarioVip } from "./Categoria/UsuarioVIP.js";

const clienteInvitado = new Invitado();
const clienteNormal = new Usuario("Carlos Gómez", "carlos@correo.com");
const clienteVip = new UsuarioVip("Ana Silva", "ana@vip.com", "VIP-2026");


console.log("=== RECORRIDO DE USUARIOS EN LA APP ===");

console.log("\n--- Caso: Navegante Anónimo ---");
console.log(clienteInvitado.verInformacionPublica());

console.log("\n--- Caso: Usuario Registrado ---");
console.log(clienteNormal.verPerfil());
console.log(clienteNormal.accederPanelControl());

console.log("\n--- Caso: Usuario Premium ---");
console.log(clienteVip.verPerfil());                  
console.log(clienteVip.accederPanelControl());         
console.log(clienteVip.accederContenidoPremium());     
console.log(clienteVip.solicitarSoporteInmediato());   

//Abioerto y cerrado J

import { CalculadoraNotificacion } from "./Notificaciones/CalculadoraNotificacion.js";
import { NotificacionGmail } from "./Notificaciones/NotificacionGmail.js";
import { NotificacionWhatsapp } from "./Notificaciones/NotificacionWhatsapp.js";
import { NotificacionSms } from "./Notificaciones/NotificacionSms.js";

document.addEventListener("DOMContentLoaded", () => {
    const alertaUsuario = "Tu paquete ya está en camino";
    const calculadora = new CalculadoraNotificacion();
    
    // Inyectamos dinámicamente el comportamiento que queremos
    const resultadoGmail = calculadora.enviar(new NotificacionGmail(), alertaUsuario);
    const resultadoWhatsapp = calculadora.enviar(new NotificacionWhatsapp(), alertaUsuario);
    const resultadoSms = calculadora.enviar(new NotificacionSms(), alertaUsuario);

    console.log(resultadoGmail);
    console.log(resultadoWhatsapp);
    console.log(resultadoSms);
});