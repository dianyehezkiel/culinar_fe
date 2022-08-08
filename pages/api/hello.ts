// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  [name: string]: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
  const { data } = await axios.get('http://culinar-ml.herokuapp.com')

  console.log(data)

  res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ "message": "Server error" })
  }
}
