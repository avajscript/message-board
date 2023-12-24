const express = require('express');
const index = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// set view engine
app.set('view engine', 'ejs');

app.set('views', './views');

app.use('/', index);


app.listen(3000, () => {
    console.log("App Started");
});