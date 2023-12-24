const express = require('express');
const index = require('./routes/index');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// set view engine
app.set('view engine', 'ejs');

app.set('views', './views');

app.use('/', index);


app.listen(port, () => {
    console.log("App Started");
});