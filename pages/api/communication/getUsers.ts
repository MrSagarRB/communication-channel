import { NextApiRequest, NextApiResponse } from "next";
import main from "../../database/connection";
import UsersModel from "../../database/UsersDetails"

export default function getAllUsers (
    req: NextApiRequest,
    res: NextApiResponse
){
 main().catch((err)=>{console.log(err)})

const create=new UsersModel({userName:"sagar borude6"})
create.save().then((data)=>console.log(data))

   res.send("Done")

   
}