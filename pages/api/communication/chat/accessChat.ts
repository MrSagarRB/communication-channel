import { NextApiRequest,NextApiResponse } from "next";
import main from "../../../database/connection";
import Chat from "../../../database/models/ChatModel"


export default async function handelAccessChat(
    req:NextApiRequest,
    res:NextApiResponse
){

    main().catch((err)=>{ console.log(err)})

switch(req.method){
    case "GET" :console.log("get")
    break
    case "POST":console.log("post")
}


res.send(req.method)

let create=new Chat(req.body)
create.save().then((result:object)=>{
    res.send(result)
})

}
