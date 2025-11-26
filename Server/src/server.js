require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const route = require('./routes/router');

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(PORT,()=>{
    console.log(`This Server running On ${PORT}`)
});