import { useEffect, useState } from 'react'
import { CardDisplay } from '../src/components/CardDisplay'

interface CardData {
  id: number
  name: Record<string, unknown>
  content: Record<string, unknown>
}

interface DeckData {
  author: string
  version: number
  languages: string[]
  cards: CardData[]
}

export default function Main() {
  const [dataIsReady, setDataIsReady] = useState(false)
  const [currentCard, setCurrentCard] = useState<DeckData>({} as DeckData)
  // const [ currentDeck , setCurrentDeck ] = useState({})

  useEffect(() => {
    async function getData() {
      const response = await (
        await fetch('/api/getCardData?card=defaultCards')
      ).json()

      setDataIsReady(true)
      setCurrentCard(response)
    }

    getData()
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      {dataIsReady && <CardDisplay data={currentCard} currentCard={0} />}
    </>
  )
}
