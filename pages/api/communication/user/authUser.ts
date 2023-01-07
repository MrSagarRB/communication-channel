import { NextApiRequest,NextApiResponse } from "next";
import User from "../../../database/models/UserModel"
import main from "../../../database/connection";

export default async function  handelAuthUser(
    req:NextApiRequest,
    res:NextApiResponse
){

    let {email,password}=req.body
    

    main().catch((err)=>{ console.log(err)})

    if(!email||!password){
        res.send("Please Enter username/password")
    }else{
        await User.findOne({email}).then((result:object)=>{

            if(result){
                res.send(result)
            }else{
                res.send("User Not Found")
            }
            
        })
    }

    
   



}