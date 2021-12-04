
const mongoose  = require('mongoose');

const connectDB  = async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex : true
    })
    //console.log(mongoose.connection._connectionString)
     console.log("connected")
  } catch (error) {
    console.log(error);
    process.exit(1);

  }
}

module.exports = {connectDB}
