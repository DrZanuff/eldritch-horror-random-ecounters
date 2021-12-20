import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  async function getJson(query: string | string[]) {
    const data = await require(`../../src/cards/${query}/data.json`) 

    console.log(data)
    res.status(200).json(data)
  }

  const { query } = req
  if (query.card) {
    getJson(query.card)
  }
  
}
