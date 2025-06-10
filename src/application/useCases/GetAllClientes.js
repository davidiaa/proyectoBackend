class GetAllClientes {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async execute() {
    
    return await this.clienteRepository.getAll();
  }
}

module.exports = GetAllClientes;