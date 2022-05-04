const { CREATED } = require('http-status-codes').StatusCodes;

const { client } = require('../../services');

const NOT_PROVIDED = 'Não informado';

module.exports = async (req, res, next) => {
  try {
    const { 
      name, 
      email = NOT_PROVIDED, 
      phone = NOT_PROVIDED, 
      street = NOT_PROVIDED, 
      city = NOT_PROVIDED, 
      neighborhood = NOT_PROVIDED, 
      state = NOT_PROVIDED, 
      rg = NOT_PROVIDED, 
      cpf = NOT_PROVIDED } = req.body;
      
    const createdClient = await client.create(
      { name, email, phone, street, city, neighborhood, state, rg, cpf },
    );
    res.status(CREATED).json(createdClient);
  } catch (err) {
    next(err);
  }
};
