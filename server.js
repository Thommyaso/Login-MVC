const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const users = [
    {
        id: '001',
        login: 'Thomas',
        password: 'abc012',
    },
];

app.use(
    session({
        secret: 'not a good secret',
        cookie: {},
        resave: false,
        saveUninitialized: false,
    }),
);

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
    const user = users.find((user) => user.login === req.body.login);

    if (user) {
        const storedPassword = user.password;

        if (storedPassword === req.body.password) {
            res.status(200);
            res.cookie('name', 'Thomas'/* , {maxAge: 3600000, httpOnly: true} */);
            res.send();
            return;
        }
    }
    res.status(401).send(false);

});

app.listen(3000);
