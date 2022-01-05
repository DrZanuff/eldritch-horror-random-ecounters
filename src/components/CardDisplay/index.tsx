import { useCallback } from 'react'
import {
  CardData,
  DeckData,
  Locations,
  GlobalVariables,
} from '../../types/DeckType'
import { superEval } from '../myJs'
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
    (
      card: CardData,
      language: string,
      location: Locations,
      globals: GlobalVariables
    ) => {
      const searchStatus = Status.Start
      const textArray = [] as Array<string>

      console.log(card, language, location)

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      nextStep(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        card.content.intro.languageOptions![language],
        globals,
        location,
        language
      )

      console.log(superEval())
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const nextStep = useCallback(
    (
      text: string,
      globals: GlobalVariables,
      location: string,
      language: string
    ) => {
      //Global Variables
      const regexGlobal = /\$(.*?)\/\$/g
      const globalsArray = [...text.matchAll(regexGlobal)].map((result) => {
        return result[1]
      })

      const resultingText = ''

      if (globalsArray.length > 0) {
        console.log('Arrays de Globals', globalsArray[0])
        console.log('Globals', globals)
        // console.log(globals[0][location].languageOptions[lang])
        console.log(
          'Globals Smallscrope ',
          globals[globalsArray[0]]?.[location].languageOptions[language]
        )
        console.log('_______________________________')
      }

      //Local Variables
      const regexLocal = /\[(.*?)\]/g
      const localArray = [...text.matchAll(regexLocal)].map((result) => {
        const array = result[1].split('|').map((element) => element.trim())

        console.log(
          text
            .replace(result[1], array[0])
            .replaceAll(/\[/g, '')
            .replaceAll(/\]/g, '')
        )

        return shuffle(array)
      })

      console.log('GLOBALS', globalsArray, 'LOCAL', localArray)

      // localArray.forEach((variables) => {
      //   const text =
      //     currentDeck.cards?.[currentCard].content.intro.localVariables[
      //       variables[0][0]
      //     ]?.languageOptions[lang]
      //   // ?.[
      //   //   variables[0]
      //   // ][lang]

      //   console.log(text, variables, lang)
      // })
    },
    []
  )

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
          {generateCard(
            currentDeck.cards[currentCard],
            lang,
            currentLocation,
            currentDeck.cards[currentCard].variables
          )}
          <div
            dangerouslySetInnerHTML={{ __html: superEval('pt-br', 'rome') }}
          ></div>
        </>
      )}
    </>
  )
}
