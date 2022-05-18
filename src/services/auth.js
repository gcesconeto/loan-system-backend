const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_KEY;

module.exports.generateJwt = (payload) => jwt.sign(payload, jwtKey, { expiresIn: '7d' });

module.exports.verifyJwt = (token) => {
  try {
    return jwt.verify(token, jwtKey);
  } catch (err) {
    err.status = 401;
    throw err;
  }
};
