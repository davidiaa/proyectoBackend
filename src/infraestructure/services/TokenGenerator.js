const jwt = require('jsonwebtoken');
const config = require('../../config');

class TokenGenerator {
  generate(payload) {
    return jwt.sign(
      { id: payload.id, roles: payload.roles },
      config.jwtSecret,
      { expiresIn: '10m' }
    );
  }
}

module.exports = TokenGenerator;