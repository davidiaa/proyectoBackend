const mongoose = require('../mongoose');

const clienteSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true, min: 0 },
  
}, { timestamps: true });

module.exports = mongoose.model('Cliente', clienteSchema);