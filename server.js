const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
require('dotenv').config();
const bcrypt = require('bcrypt');

const config = {
    appUrl: process.env.APP_URL ? process.env.APP_URL : 'http://localhost:9000',
};

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, salt);
    return hash;
};

const logIn = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    return result;
};

const users = [
    /*

    Users will be added here.
    Each user will be stored as an individual object.
    Sotred passwords will be hashed and salted using bcrypt
    Example:

        {
            id: 'f4db803b-cdcd-4f28-833d-3936c7925700',
            username: 'Jesse01',
            password: '$2b$10$phdxe7Pr2ZrDRK7N/rOfvuStYLmSqggQ1upagGIv2.B7S3od13NK.',
            name: 'Jesse',
            surname: 'James',
            age: 28
        },

    Id changes each time cookie is generated.

    */
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

app.post('/login', async function (req, res) {
    const user = users.find((user) => user.username === req.body.username);

    if (user) {
        if (await logIn(req.body.password, user.password)) {
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
        res.send({
            name: user.name,
            surname: user.surname,
            username: user.username,
            age: user.age,
        });
        return;
    }
    res.status(404);
    res.send();
});

app.post('/register', async function (req, res) {
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
        password: await hashPassword(req.body.password),
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
    };

    users.push(newUser);
    res.status(200);
    res.cookie('MVC-LogInApp', generateId);
    res.send();
});

app.listen(3000);
