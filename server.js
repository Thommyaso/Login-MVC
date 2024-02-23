const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const config = {
    appUrl: process.env.APP_URL ? process.env.APP_URL : 'http://localhost:9000',
    sessionSecret: process.env.SESSION_SECRET ? process.env.SESSION_SECRET : 'f4db803b-cdcd-4f28-833d-3936c7925700',
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
                username: 'Jesse01',
                password: '$2b$10$phdxe7Pr2ZrDRK7N/rOfvuStYLmSqggQ1upagGIv2.B7S3od13NK.',
                name: 'Jesse',
                surname: 'James',
                age: 28
            },

    */
];

app.use(cookieParser());

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 5},
}));

app.use(cors({
    origin: config.appUrl,
    credentials: true,
}));

app.use(bodyParser.json());

app.post('/login', async function (req, res) {
    const user = users.find((user) => user.username === req.body.username);

    if (user) {
        const isMatched = await logIn(req.body.password, user.password);
        if (isMatched) {
            req.session.user = {
                name: user.name,
                surname: user.surname,
                username: user.username,
                age: user.age,
            };
            res.status(200);
            res.send();
            return;
        }
    } else {
        res.clearCookie('connect.sid', {path: '/'});
        res.status(401);
        res.send();
    }
});

app.post('/userprofile', function (req, res) {
    console.log(req.session, 'session');
    console.log(req.session.user, 'user');
    if (req.session && req.session.user) {
        const {name, surname, username, age} = req.session.user;

        res.status(200);
        res.send({
            name: name,
            surname: surname,
            username: username,
            age: age,
        });
        return;
    }

    res.clearCookie('connect.sid', {path: '/'});
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

    const newUser = {
        username: req.body.username,
        password: await hashPassword(req.body.password),
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
    };

    req.session.user = newUser;

    users.push(newUser);
    res.status(200);
    res.send();
});

app.get('/logout', function (req, res) {
    req.session.destroy();
    res.clearCookie('connect.sid', {path: '/'});
    res.status(200);
    res.send();
});

app.listen(3000);
