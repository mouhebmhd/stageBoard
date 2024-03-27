const express = require('express');
var cors=require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const dotenv=require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const cookieParser=require("cookie-parser");
const jwt=require("jsonwebtoken");

var connectToDatabase=require("./database/databaseOperations");
const { json } = require('body-parser');
dotenv.config( { path : 'config.env'} );
app.use(express.json({ limit: '500000mb' }));
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({ extended : true}));
const PORT_PRIMARY=process.env.PORT_PRIMARY; 
const PORT_SECONDARY=process.env.PORT_SECONDARY;
app.use(cookieParser());
connectToDatabase()
app.listen(PORT_PRIMARY || PORT_SECONDARY, ()=> { console.log(`Server is running on http://localhost:${PORT_PRIMARY||PORT_SECONDARY}`)});
