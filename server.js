const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
require('dotenv').config();

const config = {
    appUrl: process.env.APP_URL ? process.env.APP_URL : 'http://localhost:9000',
};

console.log(config.appUrl);

const users = [
    {
        id: '512c9dfa-7489-4e48-a439-b25ce1f376f6',
        username: 'Thomas',
        password: 'abc012', // never store unhashed, unsalted password on the server, this is just an example for development
        userInfo: {
            name: 'Thomas',
            surname: 'James',
            age: 28,
        },
    },
];

app.use(cookieParser());

app.use((__req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors({
    origin: config.appUrl,
    credentials: true,
}));

app.use(bodyParser.json());

app.post('/login', function (req, res) {
    const user = users.find((user) => user.username === req.body.username);

    if (user) {
        if (user.password === req.body.password) {
            const generateId = uuidv4();

            user.id = generateId;
            res.status(200);
            res.cookie('MVC-LogInApp', generateId);
            res.send();
            return;
        }
    }
    res.status(401).send();

});

app.post('/userprofile', function (req, res) {
    const accessCookie = req.cookies['MVC-LogInApp'];
    const user = users.find((user) => user.id === accessCookie);

    if (user) {
        res.status(200);
        res.send(user.userInfo);
        return;
    }
    res.status(404);
    res.send();
});

app.post('/register', function (req, res) {
    const user = users.find((user) => user.username === req.body.username);

    if (user) {
        res.status(409);
        res.send();
        return;
    }
    const generateId = uuidv4();
    const newUser = {
        id: generateId,
        username: req.body.username,
        password: req.body.password,
        userInfo: {
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
        },
    };

    users.push(newUser);
    console.log(users);
    res.status(200);
    res.cookie('MVC-LogInApp', generateId);
    res.send();
});

app.listen(3000);
