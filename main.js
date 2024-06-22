const express = require('express');
const app = express();

/* importing routes */
const routes = require('./routes/page.routes')

app.use(express.urlencoded({extended: true}));

/* setting up the view engine */
app.set('view engine', 'ejs');

/* setting static routes */
app.use('/public', express.static('public'));