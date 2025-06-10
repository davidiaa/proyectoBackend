
const ClienteRepository = require ('../../domain/repositories/ClienteRepository');
const ClienteModel = require('../database/models/ClienteModel');
const Cliente = require('../../domain/entities/Cliente');

class MongoClienteRepository extends ClienteRepository {
  async getAll() {
    const clientes = await ClienteModel.find();
    console.log('Clientes retrieved from MongoDB:', clientes);
    return clientes.map(p => new Cliente(p.toObject()));
  }

  

  async create(cliente) {
    const newCliente = await ClienteModel.create(cliente);
    return new Cliente(newCliente.toObject());
  }
}

module.exports = MongoClienteRepository;