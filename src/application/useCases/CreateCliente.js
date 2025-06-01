const Cliente = require('../../domain/entities/Cliente');
 
class CreateCliente {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }
 
  async execute(clienteData) {
    const cliente = new Cliente(clienteData);
    return await this.clienteRepository.create(cliente);
  }
}
 
module.exports = CreateCliente;