import { NextApiRequest,NextApiResponse } from "next";


export default async function handelAccessChat(
    req:NextApiRequest,
    res:NextApiResponse
){
    const {_id}=req.body;

if(!_id){
    res.send("User ID is Empty")
}

    res.send(_id)



}
