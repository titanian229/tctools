const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
    localNumber: {
        type: String,
        required: true,
    },
    foreignNumber: {
        type: String,
        required: true,
    },
    foreignName: {
        type: String,
    },
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
