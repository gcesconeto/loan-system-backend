const { loan } = require('../../database/models');

module.exports = async () => {
    const saleList = await loan.findAll({});
    return saleList;
};