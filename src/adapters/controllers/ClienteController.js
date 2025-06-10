const CreateCliente = require('../../application/useCases/CreateCliente');
const GetAllClientes = require('../../application/useCases/GetAllClientes');
const ClienteDTO = require('../../application/dtos/ClienteDTO');
 
class ClienteController {
  constructor(clienteRepository) {
    this.CreateCliente = new CreateCliente(clienteRepository);
    this.GetAllClientes = new GetAllClientes(clienteRepository);
  }
 
  async create(req, res) {
    try {
      const cliente = await this.CreateCliente.execute(req.body);
      res.status(201).json(new ClienteDTO(cliente));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getAll(req, res) {
    try {
      const clientes = await this.GetAllClientes.execute(); // Execute the use case
      
      // Map each client entity to a ClienteDTO
      const clientesDTO = clientes.map(cliente => new ClienteDTO(cliente));
      
      res.status(200).json(clientesDTO); // Send a 200 OK status with the array of DTOs
    } catch (error) {
      // In a real application, you might differentiate between server errors (500)
      // and client-related errors if, for example, filtering parameters were bad (400).
      // For a simple getAll, a 500 Internal Server Error is often appropriate for unexpected errors.
      res.status(500).json({ message: error.message });
    }
  }

  /*
  async getAll(req, res) {
    try {
      const clientes = await this.clienteRepository.getAll();
      res.status(200).json(clientes);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving products' });
    }
  }*/

}
 
module.exports = ClienteController;
 