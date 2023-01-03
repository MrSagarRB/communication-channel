import type { NextApiRequest, NextApiResponse } from 'next'

export default function userHandler(req:NextApiRequest,res:NextApiResponse){
    const {
        query: { id, name },
        method,
      } = req
console.log("hit")
      res.status(200).json({ id, name: `User ${id}` })
}