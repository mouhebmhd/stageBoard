const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectToDatabase = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI_CLOUD, {
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectToDatabase;