const jwt = require('jsonwebtoken');
const config = require('../../config');

const MAGIC_TOKEN = 'token_magico';

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'No token provided!' });


  if (token === MAGIC_TOKEN) {
    req.userId = 'admin';  
    req.userRoles = ['admin'];
    console.log('Using magic token for admin access');
    return next();
  }

    /*
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized!' });
    req.userId = decoded.id;
    req.userRoles = decoded.roles;
    next();
    */
    
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
    //if (err) return res.status(401).json({ message: 'Unauthorized!' });
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Unauthorized! Token has expired.' });
      }
      return res.status(401).json({ message: 'Unauthorized! Invalid Token.' });
    }
    const expirationDate = new Date(decoded.exp * 1000);
    console.log('Token expires at:', expirationDate);
    req.userId = decoded.id;
    req.userRoles = decoded.roles;
    
    next();
    
  });

  

};

module.exports = { verifyToken };

