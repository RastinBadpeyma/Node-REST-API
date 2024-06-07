const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { mongoConnect } = require('./services/mongo');
require('dotenv').config();
const server = http.createServer(app);
const ArticlesRouter = require('./routes/articles');


app.use(express.json());
app.use('/articles', ArticlesRouter);


async function startServer() {
   await mongoConnect();
   server.listen(3000, () => {
     console.log('Listening on port 3000');
   });
 }
 
 startServer();