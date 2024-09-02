const mongoose =require('mongoose');

mongoose.set('strictQuery',false);

const connectToDB = async () =>{
    try{
        const {connection} =  await mongoose.connect(
        process.env.MONGO_URI  // || //the local mongo url
        )
        if(connection){
            console.log(`Connection to MongoDB :${connection.host}`);
            
        }
    } catch(e){
       console.log(e);
       process.exit(1);
       
    }
}

module.exports = connectToDB;