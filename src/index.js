const express = require('express');
const config = require('./config');
console.log('>>> Config leída:', config);
const MongoProductRepository = require('./infraestructure/repositories/MongoProductRepository');
const MySQLProductRepository = require('./infraestructure/repositories/MySQLProductRepository');
const ProductController = require('./adapters/controllers/ProductController');

const MongoClienteRepository = require('./infraestructure/repositories/MongoClienteRepository');
const ClienteController = require('./adapters/controllers/ClienteController');

const productRoutes = require('./adapters/routes/productRoutes');
const clienteRoutes = require('./adapters/routes/clienteRoutes');
const { verifyToken } = require('./adapters/middlewares/authJwt');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./infraestructure/docs/swaggerConfig');


const app = express();
const port = config.port;

// Dependencies
const dbType = config.DB_TYPE || 'mongodb'; // 'mongo' o 'mysql'
//let productRepository;
let clienteRepository;
console.log('>>> DB_TYPE:', dbType);
if (dbType === 'mysql') {
  productRepository = new MySQLProductRepository();
} else {
  //productRepository = new MongoProductRepository();
  clienteRepository = new MongoClienteRepository();
}


//const productController = new ProductController(productRepository);
const clienteController = new ClienteController(clienteRepository);


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
// Routes
//app.use('/api/v1/products', verifyToken, productRoutes(productController));
app.use('/api/v1/clientes', verifyToken, clienteRoutes(clienteController));
 
// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});
 
// Start Server
app.listen(port, () => {
  console.log(`E-commerce server running on port ${port}`);
});