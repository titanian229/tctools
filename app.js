require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const routes = require('./routes');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tctools';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use((req, res, next) => {
    // eslint-disable-next-line no-console
    console.log('Request made to ', req.url);
    next();
});

app.use(routes);

app.use(express.static('public'));
// app.use(pageNotFound);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on PORT ${PORT}`);
});
