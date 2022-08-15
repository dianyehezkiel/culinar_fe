import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

interface PostFormRequest extends NextApiRequest {
  body: {
    mood: string;
    favorite_food: string;
  };
}

export default async function postForm(
  req: PostFormRequest,
  res: NextApiResponse,
) {
  try {
    if (
      'mood' in req.body &&
      typeof req.body.mood === 'string' &&
      'favorite_food' in req.body &&
      typeof req.body.favorite_food === 'string'
    ) {
      await axios.post('https://culinar-ml.herokuapp.com/post_form', {
        ...req.body,
      })
      res.json({ message: 'success' })
    }
    res.status(400).json({ message: 'mood or favorite food value is missing' })
  } catch (err) {
    res.status(500).json({ err })
  }
}
