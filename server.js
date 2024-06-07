const express = require('express');
const app = express();
const mongoose = require('mongoose');




app.use(express.json());



app.listen(3000, () => console.log('Server Started'));