import mongoose from 'mongoose';


const main = async () =>{
    await mongoose.connect(
        "mongodb+srv://sagar:sai@cluster0.ycrzv.mongodb.net/comm-data?retryWrites=true&w=majority",  
    ).then( ()=> console.log("DB Connected"))
   
}

export default main