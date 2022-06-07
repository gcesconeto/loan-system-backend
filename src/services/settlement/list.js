const { Op } = require('sequelize');

const { loan, ledger, client, settlement } = require('../../database/models');
const { settlementProcessor } = require('../helpers');

module.exports = async (start, end) => {
    const filter = {
        where: { startDate: { [Op.and]: [{ [Op.gte]: start }, { [Op.lte]: end }] } },
        include: [{ model: ledger }, { model: loan }, { model: client, attributes: ['name'] }],
    };
    const settlementList = await settlement.findAll(filter);
    if (settlementList.length > 0) {
        const processedList = settlementList.map(
            (selSettlement) => settlementProcessor(selSettlement.toJSON()),
        );
        return processedList;
    }
    return settlementList;
};