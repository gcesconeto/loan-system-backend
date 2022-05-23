const { CREATED } = require('http-status-codes').StatusCodes;

const { client } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { clientId } = req.params;

    const { name, phone, street, city, neighborhood, state, rg, cpf, notes } = req.body;
    
    const updatedClient = await client.update(
      clientId,
      { name, phone, street, city, neighborhood, state, rg, cpf, notes },
    );
    res.status(CREATED).json(updatedClient);
  } catch (err) {
    next(err);
  }
};
