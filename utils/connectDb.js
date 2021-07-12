import mongoose, { mongo } from 'mongoose';

const connection ={};

async function connectDb() {
    if (connection.isConnected){
        //use existing DB Connection
        console.log("Using exisitng connection");
        return;
    }

    //use a new DB Connection
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB Connected");

    connection.isConnected = db.connections[0].readyState;
}

export default connectDb;