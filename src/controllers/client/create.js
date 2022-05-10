const { CREATED } = require('http-status-codes').StatusCodes;

const { client } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { name, phone, street, city, neighborhood, state, rg, cpf, notes } = req.body;
      
    const createdClient = await client.create(
      { name, phone, street, city, neighborhood, state, rg, cpf, notes },
    );
    res.status(CREATED).json(createdClient);
  } catch (err) {
    next(err);
  }
};
