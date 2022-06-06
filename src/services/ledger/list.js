const { Op } = require('sequelize');

const { ledger, loan, settlement, client } = require('../../database/models');

module.exports = async (start, end) => {
    const filter = {
        where: { date: { [Op.between]: [start, end] } },
        include: [
            { 
                model: loan, 
                attributes: ['clientId'], 
                include: { model: client, attributes: ['name'] }, 
            }, 
            { 
                model: settlement, 
                attributes: ['clientId'], 
                include: { model: client, attributes: ['name'] },
            },
        ],
    };
    const ledgerList = await ledger.findAll(filter);
    return ledgerList;
};