# be-assessment-2
## Table of contents
* [Overview](#overview)
* [Server](#server)
* [Database](#setup)
* [Packages](#packages)
* [Requirements](#requirements)

## Overview
For this project i had to maken a server that connects with a database. 

## Server
The server that i have made is a node server with express. To setup this server i used an example.

```
npm install
npm --save
```
To start the server```nodemon app.js```

### Database
For setting up the database i used mongodb. Mongo db is a no-sql database. I had a problem with the setup of mongodb my macOs version is to low to install mongodb via homebrew so i had to pick another tool to make a database, therefore is used an online tool called mLab. To make this database work i had to work with mongoose.

```
DB_URL=mongodb://dbuser:dbpassword@ds147440.mlab.com:47440/dbname
```
## Userschema

To fill this database i have made a form where the user can fill in there.

| user id | gender | Age | Interest |
| - |
| Nathan| Man | 25 | Woman |
| Test | Woman | 23 | Man |
| hallo | Woman | 24 | Unknown |
| hallo | Man | 23 | Unknown |

## Packages
These are the packages i used for this project:
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com)
* [Multer](https://github.com/expressjs/multer)
* [Nodemon](https://github.com/remy/nodemon)
* [Mongoose](http://mongoosejs.com)


## Requirements
* [x] Express Server
* [x] npm install
* [x] DB setup
* [x] Login
* [x] Logout
* [ ] Upload
* [ ] User Session
* [ ] Edit Profile
