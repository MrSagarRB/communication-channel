import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../database/models/UserModel"
import main from "../../../database/connection";


export default function handelUser (
    req: NextApiRequest,
    res: NextApiResponse
){
    main().catch((err)=>{ console.log(err)})

    let createUser = () =>{
        const create=new User(req.body)
        create.save((result)=>{
          res.send(result)
        })
      } 

      let getUser=async()=>{
         await User.find({}).then((result:any)=>{res.send(result)})
      }


  switch(req.method){
    case "GET": getUser()
    
    break;

    case "POST":createUser()
    break;
  }



}