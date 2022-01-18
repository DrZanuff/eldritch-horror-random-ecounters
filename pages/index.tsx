import { useEffect, useState } from 'react'
import { CardDisplay } from '../src/components/CardDisplay'
import { DeckType, Locations } from '../src/types/DeckType'

export default function Main() {
  const [dataIsReady, setDataIsReady] = useState(false)
  const [currentCard, setCurrentCard] = useState<DeckType>({} as DeckType)

  const currentLocation: Locations = 'city'

  useEffect(() => {
    async function getData() {
      const response = await (
        await fetch('/api/getCardData?card=defaultCityLocations')
      ).json()

      setDataIsReady(true)
      setCurrentCard(response)
    }

    getData()
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      {dataIsReady && (
        <CardDisplay
          currentDeck={currentCard}
          currentCard={0}
          currentLocation={currentLocation}
        />
      )}
    </>
  )
}
