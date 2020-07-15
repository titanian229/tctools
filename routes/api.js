const Item = require('../models/item');

module.exports.search = async ({ params: { search } }, res) => {
    const localSearchResults = await Item.find({ localNumber: { $regex: `${search}` } });
    const foreignSearchResults = await Item.find({ foreignNumber: { $regex: `${search}` } });
    res.json({ localSearchResults, foreignSearchResults });
};
