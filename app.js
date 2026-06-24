
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

// Creamos las instancias (los usuarios reales)
const clienteInvitado = new Invitado();
const clienteNormal = new Usuario("Carlos Gómez", "carlos@correo.com");
const clienteVip = new UsuarioVip("Ana Silva", "ana@vip.com", "VIP-2026");

// --- SIMULACIÓN DE LA APLICACIÓN ---

console.log("=== RECORRIDO DE USUARIOS EN LA APP ===");

// 1. Caso Invitado
console.log("\n--- Caso: Navegante Anónimo ---");
console.log(clienteInvitado.verInformacionPublica());

// 2. Caso Usuario Estándar
console.log("\n--- Caso: Usuario Registrado ---");
console.log(clienteNormal.verPerfil());
console.log(clienteNormal.accederPanelControl());

// 3. Caso Usuario VIP
console.log("\n--- Caso: Usuario Premium ---");
console.log(clienteVip.verPerfil());                  // Lo hereda de Usuario
console.log(clienteVip.accederPanelControl());         // Lo hereda de Usuario
console.log(clienteVip.accederContenidoPremium());     // Método propio de VIP
console.log(clienteVip.solicitarSoporteInmediato());   // Método propio de VIP