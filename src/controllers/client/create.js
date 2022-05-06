const { CREATED } = require('http-status-codes').StatusCodes;

const { client } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { name, email, phone, street, city, neighborhood, state, rg, cpf } = req.body;
      
    const createdClient = await client.create(
      { name, email, phone, street, city, neighborhood, state, rg, cpf },
    );
    res.status(CREATED).json(createdClient);
  } catch (err) {
    next(err);
  }
};
