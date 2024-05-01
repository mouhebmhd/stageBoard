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

app.use(cors({
  origin: 'http://localhost:3000',
}));

/* Other Configurations */
dotenv.config({ path: 'config.env' });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/* Database Connection */
var connectToDatabase= require('./database/databaseOperations');
connectToDatabase();
/*Creating tables if they do not exists */
const {createInternTable}=require("./schemas/createInternTable");
createInternTable()
const {createAdminTable}=require("./schemas/createAdminTable")
createAdminTable()
const {createEducationTable}=require("./schemas/createEducationTable")
createEducationTable()
const {createExperienceTable}=require("./schemas/createExperienceTable")
createExperienceTable()
 const {createMessageTable}=require("./schemas/createMessageTable")
createMessageTable() 
const {createNotificationTable}=require("./schemas/createNotificationTable")
createNotificationTable()
const {createProjectTable}=require("./schemas/createProjectTable")
createProjectTable()
const {createRequirementTable}=require("./schemas/createRequirementTable")
createRequirementTable()
const {createSkillTable}=require("./schemas/createSkillTable")
createSkillTable()
const {createSupervisorTable}=require("./schemas/createSupervisorTable")
createSupervisorTable()

/******* Intern Routers********/

/*****Get Routers *****/
/* Importing Routers */
const internGetRouter = require('./routes/internRouter/getRouter/getInternRouter');
/* Using Routers */
app.use('/', internGetRouter);
/* Importing Routers */
const supervisorGetRouter = require('./routes/supervisorRouter/getRouter/getSupervisorRouter');
/* Using Routers */
app.use('/', supervisorGetRouter);

/*****Auth Routers *****/
/* Importing Routers */
const authRouter=require("./routes/authentificationRouters/authetificationRouter")
/* Using Delete Router */
app.use("/",authRouter);
/*****Delete Routers *****/
/* Importing Routers */
const deleteInterRouter=require("./routes/internRouter/deleteRouter/deleteInternRouter")
/* Using Delete Router */
app.use('/',deleteInterRouter);

/*****POST Routers *****/
/* Importing Routers */
const postInterRouter=require("./routes/internRouter/postRouter/postRouter");
const postSupervisorRouter=require("./routes/supervisorRouter/postRouter/postSupervisor")
/* Using Post Router */
app.use('/',postInterRouter);
app.use('/',postSupervisorRouter);
/*****Update Routers *****/
/* Importing Routers */
const updateInterRouter=require("./routes/internRouter/updateRouter/updateRouter")
/* Using Update Router */
app.use('/',updateInterRouter);
/* Server Listening */
const PORT_PRIMARY = process.env.PORT_PRIMARY;
const PORT_SECONDARY = process.env.PORT_SECONDARY;
app.listen(PORT_PRIMARY || PORT_SECONDARY, () => {
    console.log(`Server is running on http://localhost:${PORT_PRIMARY || PORT_SECONDARY}`);
});
