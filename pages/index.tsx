import { useEffect } from 'react'

export default function Main() {
  useEffect(() => {
    async function getData() {
      const response = await (
        await fetch('/api/getCardData?card=defaultCards')
      ).json()
      console.log('Here is the data', response)
    }

    getData()
  }, [])

  return <h1>Hello World</h1>
}
