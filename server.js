const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

const users = [
    {
        id: '001',
        login: 'Thomas',
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
    origin: 'http://localhost:9000',
    credentials: true,
}));

app.use(bodyParser.json());

app.post('/login', function (req, res) {
    console.log(req.body);
    const user = users.find((user) => user.login === req.body.login);

    if (user) {
        const storedPassword = user.password;

        if (storedPassword === req.body.password) {
            res.status(200);
            res.cookie('MVC-LogInApp', '001');
            res.send();
            return;
        }
    }
    res.status(401).send();

});

app.post('/userprofile', function (req, res) {
    const accessCookie = req.cookies['MVC-LogInApp'];
    console.log(accessCookie);
    const user = users.find((user) => user.id === accessCookie);
    console.log(user);
    if (user) {
        res.status(200);
        res.send(user.userInfo);
        return;
    }
    res.status(404);
    res.send();
});

app.listen(3000);
