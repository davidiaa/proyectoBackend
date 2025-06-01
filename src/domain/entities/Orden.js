class Orden {
  constructor({ clienteId, productos, fecha, estado, total }) {
    this.clienteId = clienteId;
    this.productos = productos; // Array de objetos con información del producto (id, cantidad, etc.)
    this.fecha = fecha;
    this.estado = estado; // "Pendiente", "Procesando", "Enviado", "Entregado", "Cancelado"
    this.total = total;
  }
}
 
module.exports = Orden;