import { useCallback } from 'react'
import { CardData, DeckData, Locations } from '../../types/DeckType'

interface CardProps {
  currentDeck: DeckData
  currentCard: number
  currentLocation: Locations
}

export function CardDisplay({
  currentDeck,
  currentCard,
  currentLocation,
}: CardProps) {
  const lang = 'pt-br'

  console.log(
    'CURRENT DECK',
    currentDeck,
    'CURRENT CARD',
    currentCard,
    'CURRENT LOCATION',
    currentLocation
  )
  enum Status {
    Start,
    Search,
    Pause,
    Stop,
  }

  const generateCard = useCallback(
    (card: CardData, language: string, location: Locations) => {
      const searchStatus = Status.Start
      const textArray = [] as Array<string>

      console.log(card, language, location)

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      getVariables(card.content.intro.languageOptions![language])
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const getVariables = useCallback((text: string) => {
    //Global Variables
    const regexGlobal = /\$(.*?)\/\$/g
    const globalsArray = [...text.matchAll(regexGlobal)].map((result) => {
      return result[1]
    })

    //Local Variables
    const regexLocal = /\[(.*?)\]/g
    const localArray = [...text.matchAll(regexLocal)].map((result) => {
      const array = result[1].split('|').map((element) => element.trim())

      return shuffle(array)
    })

    localArray.forEach((variables) => {
      const text =
        currentDeck.cards[currentCard].content.intro.localVariables[
          variables[0]
        ].languageOptions[lang]
      // ?.[
      //   variables[0]
      // ][lang]

      console.log(text, variables, lang)
    })

    console.log('ARRAY', localArray)
  }, [])

  // function shuffle(array: Array<string>) {
  //   return array
  //     .map((value) => ({ value, sort: Math.random() }))
  //     .sort((a, b) => a.sort - b.sort)
  //     .map(({ value }) => value)
  // }

  function shuffle(a: Array<string>) {
    for (let j, i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }

    return a
  }

  return (
    <>
      {currentDeck.cards?.[currentCard] && (
        <>
          <h2>{currentDeck.author}</h2>
          <h3>{currentDeck.cards[currentCard].name[lang]}</h3>
          <h4>
            {
              currentDeck.cards[currentCard].content.intro.localVariables?.[
                lang
              ]
            }
          </h4>
          <h5>{currentDeck.cards[currentCard].content.intro.nextStep}</h5>
          {generateCard(currentDeck.cards[currentCard], lang, currentLocation)}
        </>
      )}
    </>
  )
}
