class ClienteDTO {
  constructor(cliente) {
    this.id = cliente._id;
    this.name = cliente.name;
    this.email = cliente.email;
    this.phone = cliente.phone;   
  }
}
 
module.exports = ClienteDTO;