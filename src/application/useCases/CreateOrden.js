const Orden = require('../../domain/entities/Orden');
 
class CreateOrden {
  constructor(ordenRepository) {
    this.ordenRepository = ordenRepository;
  }
 
  async execute(ordenData) {
    const orden = new Orden(ordenData);
    return await this.ordenRepository.create(orden);
  }
}
 
module.exports = CreateOrden;