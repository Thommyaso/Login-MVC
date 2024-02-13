const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const users = new Map([
    ['Thomas', 'abc012'],
]);

app.use(cookieParser());

app.use((__req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors({
    origin: 'http://localhost:9000',
    credentials: true,
}));

app.use(bodyParser.json());

app.get('/login', function (__req, res) {
    res.cookie('sky', 'blue');
});

app.post('/login', function (req, res) {
    console.log(req.body);
    if (users.has(req.body.login)) {
        const storedPassword = users.get(req.body.login);

        if (storedPassword === req.body.password) {
            res.status(200);
            res.cookie('name', 'Thomas'/* , {maxAge: 3600000, httpOnly: true} */);
            res.send(true);
            return;
        }
    }
    res.status(401).send(false);

});

app.listen(3000);
