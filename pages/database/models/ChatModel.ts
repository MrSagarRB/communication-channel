const mongoose = require("mongoose")

const ChatModelSchema = new mongoose.Schema(
    {
       users:{
        type:Array
       }
     
    }

)

mongoose.models={}

  const chat = mongoose.model("Chat", ChatModelSchema);

  export default chat