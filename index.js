const express    = require('express');
const mongoose   = require('mongoose');
const path       = require('path');
const favicon    = require('serve-favicon');
const logger     = require('morgan');
const bodyParser = require('body-parser');

const Link       = require('./models/Schema/link');
const config     = require('./models/config');


mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, {server: {socketOptions: {keepAlive: 120}}});

var app = express();

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Routers

app.get('/links',function (req, res, next) {
  Link.findOne({ 'userid': req.body.userid },function (err,data) {
    if(err){return next(err);}
    res.json(data.link);
  });
});

//

app.use((err, req, res, next) => {
    var status = err.status || 500;
    if (status >= 400 && status < 500 && err.message)
        var message = err.message;
    else var message = ''
    res.status(status).send(message);
});

var server = app.listen(config.port);
console.log('Listening at http://localhost:%s in %s mode',
    server.address().port, app.get('env'));

module.exports = app;
