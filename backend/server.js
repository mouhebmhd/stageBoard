const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser'); // No need for this if you're already using express.json()
const cookieParser = require('cookie-parser');

/* Importing Routers */
const internRouter = require('./routes/internRouter/getRouter/getInternRouter');

/* Middleware */
app.use(express.json({ limit: '500000mb' }));
app.use(cors());
app.use(morgan('tiny'));
// If you need additional middleware here, add it before the internRouter

/* Using Routers */
app.use('/', internRouter);

/* Other Configurations */
dotenv.config({ path: 'config.env' });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/* Database Connection */
var connectToDatabase = require('./database/databaseOperations');
connectToDatabase();

/* Server Listening */
const PORT_PRIMARY = process.env.PORT_PRIMARY;
const PORT_SECONDARY = process.env.PORT_SECONDARY;
app.listen(PORT_PRIMARY || PORT_SECONDARY, () => {
    console.log(`Server is running on http://localhost:${PORT_PRIMARY || PORT_SECONDARY}`);
});
