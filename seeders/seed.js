const mongoose = require('mongoose');
const Item = require('../models/item');

mongoose.connect('mongodb://localhost/tctools', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const ItemSeed = [
    {
        localNumber: 1101494,
        foreignNumber: 1001,
        foreignName: 'Mich',
    },
];

ItemSeed.forEach((seed) => Item.create(seed).then(() => mongoose.disconnect()));
