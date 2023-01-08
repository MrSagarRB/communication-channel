import { NextApiRequest,NextApiResponse } from "next";
import main from "../../../database/connection";
import Chat from "../../../database/models/ChatModel"


export default async function handelAccessChat(
    req:NextApiRequest,
    res:NextApiResponse
){

    main().catch((err)=>{ console.log(err)})


   let createChat = () =>{
    let create=new Chat(req.body)
    create.save().then((result:object)=>{
        res.send(result)
    })
}

let geChats=async()=>{
  await Chat.find({}).then((result)=>{
        res.send(result)
    })
}



switch(req.method){
    case "GET" :geChats()
    break
    case "POST":createChat()
    break
}









}
