import mongoose, { Connection } from "mongoose";


type ConnectionObject ={
    isConnected?: number
}


const connection : ConnectionObject ={}


async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Alredy connected");
        return
    }
    try{
      const db =  await mongoose.connect(process.env.MONGO_URI || "")

      connection.isConnected = db.connections[0].readyState
      console.log("DB Connected")
    }
    catch(error){
      process.exit(1)
      console.log("DB Coonection  faild")
    }
}


export default dbConnect;