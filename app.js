var express = require('express'),
    path = require('path'),
    http = require('http'),
    mycar = require('./routes/mycars');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/mycars', mycar.findAll);
app.get('/mycars/:id', mycar.findById);
app.post('/mycars', mycar.addmycar);
app.put('/mycars/:id', mycar.updatemycar);
app.delete('/mycars/:id', mycar.deletemycar);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
