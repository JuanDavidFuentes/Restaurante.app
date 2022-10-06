import mongoose from "mongoose";

const dbConnection =async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNX);
        console.log("Connected to Mongo");
    }catch(error){
        throw new Error("Couldn't connect to Mongo");
    }
}

export {dbConnection}