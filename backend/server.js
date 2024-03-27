const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser'); // No need for this if you're already using express.json()
const cookieParser = require('cookie-parser');

/* Middleware */
app.use(express.json({ limit: '500000mb' }));
app.use(morgan('tiny'));



/* Other Configurations */
dotenv.config({ path: 'config.env' });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/* Database Connection */
var connectToDatabase = require('./database/databaseOperations');
connectToDatabase();

/******* Intern Routers********/

/*****Get Routers *****/
/* Importing Routers */
const internGetRouter = require('./routes/internRouter/getRouter/getInternRouter');
/* Using Routers */
app.use('/', internGetRouter);

/*****Delete Routers *****/
/* Importing Routers */
const deleteInterRouter=require("./routes/internRouter/deleteRouter/deleteInternRouter")
/* Using Delete Router */
app.use('/',deleteInterRouter);

/*****POST Routers *****/
/* Importing Routers */
const postInterRouter=require("./routes/internRouter/postRouter/postRouter")
/* Using Delete Router */
app.use('/',postInterRouter);

/* Server Listening */
const PORT_PRIMARY = process.env.PORT_PRIMARY;
const PORT_SECONDARY = process.env.PORT_SECONDARY;
app.listen(PORT_PRIMARY || PORT_SECONDARY, () => {
    console.log(`Server is running on http://localhost:${PORT_PRIMARY || PORT_SECONDARY}`);
});
