const { Op } = require('sequelize');

const { loan } = require('../../database/models');

module.exports = async (start, end) => {
    const filter = {
        where: { startDate: { [Op.between]: [start, end] } },
    };
    const saleList = await loan.findAll(filter);
    return saleList;
};