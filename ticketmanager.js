class TicketManager {
  constructor() {
    this._eventos = [];
    this._precioBaseDeGanancia = 10;
  }

  getEventos() {
    console.log(this._eventos);
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const id = this._eventos.length + 1;
    const evento = {
      id,
      nombre,
      lugar,
      precio: precio * 1.15 + this._precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: []
    };
    this._eventos.push(evento);
    console.log(`Evento ${nombre} agregado con éxito`);
  }

  agregarUsuario(eventoId, usuarioId) {
    const evento = this._eventos.find(e => e.id === eventoId);
    if (!evento) {
      console.log(`Evento con id ${eventoId} no existe`);
      return;
    }
    if (evento.participantes.includes(usuarioId)) {
      console.log(`Usuario con id ${usuarioId} ya está registrado en el evento`);
      return;
    }
    evento.participantes.push(usuarioId);
    console.log(`Usuario con id ${usuarioId} agregado con éxito al evento ${evento.nombre}`);
  }

  ponerEventoEnGira(eventoId, nuevaLocalidad, nuevaFecha) {
    const evento = this._eventos.find(e => e.id === eventoId);
    if (!evento) {
      console.log(`Evento con id ${eventoId} no existe`);
      return;
    }
    const nuevoId = this._eventos.length + 1;
    const nuevoEvento = {
      id: nuevoId,
      nombre: evento.nombre,
      lugar: nuevaLocalidad,
      precio: evento.precio,
      capacidad: evento.capacidad,
      fecha: nuevaFecha,
      participantes: []
    };
    this._eventos.push(nuevoEvento);
    console.log(`Evento ${evento.nombre} puesto en gira con éxito`);
  }
}

// Ejemplo de uso
const ticketManager = new TicketManager();
ticketManager.agregarEvento("Concierto 1", "Teatro Nacional", 500, 100);
ticketManager.agregarEvento("Concierto 2", "Anfiteatro Municipal", 1000, 200);
ticketManager.getEventos();
ticketManager.agregarUsuario(1, "user1");
ticketManager.agregarUsuario(1, "user1"); // Intentando agregar usuario duplicado
ticketManager.agregarUsuario(2, "user2");
ticketManager.ponerEventoEnGira(1, "Parque Central", new Date("2023-04-15"));
ticketManager.getEventos();
