# LOGIN-MVC
## Introduction
 > **This project utilizes a .env file to manage environment variables. This app is set up to run with default values if .env file is not configured. You can change enviroment variables to suit your needs. This README explains how to do it and what variables to include**

## Project Setup

### Dependency Setup:

Open terminal and navigate to root directory of the project. Run:
```sh
npm install
```

### Enviroment Setup:   
#### To create a .env file, follow these steps:
1. Create a new file named `.env` in the root directory of the project.
2. Add the required environment variables (see below) to the `.env` file.

> **Reference `.env.example` file available in the repository.**

#### What to Include in the .env File:
The .env file should include the following variables:

- `API_BASE_URL`: This is the adress on which server side app will run on. This is the server used for back end data handling and storage of user information.

- `WEBPACK_DEV_SERVER_PORT`: This is the port webpack will use to serve live server in development mode, it must match `APP_URL` port for application to run correctly

- `APP_URL`: This is the url that app will be running on, in development mode this will be served by webpack live server. In production you need to set up your own server

- `SESSION_SECRET`: This is your session ID. This is an especially vulnerable data that secures session served by the server. Make sure to keep it safe and private. NOTE: HMAC-256 is used to sign the session ID. For this reason, the secret should contain at least 32 bytes(32 characters) of entropy.

- `SESSION_EXPIRATION_TIME`: This variable defines how long session cookie will last before it expires, it is set in miliseconds. default value is set to 5min

### Start back-end server:

- Open your terminal and navigate to the root directory of your project.
- Run the command: 

```sh
node server.js
```

## Start Project:

### To Compile and Hot-Reload for Development:

Open terminal and navigate to root directory of the project. Run:

```sh
npm run start
```

### To Compile and Minify for Production:

Open terminal and navigate to root directory of the project. Run:

```sh
npm run build
```
Files will be compiled into the 'dist' folder
