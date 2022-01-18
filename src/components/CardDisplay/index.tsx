import { useCallback } from 'react'
import {
  DeckType,
  CardType,
  Locations,
  VariableType,
} from '../../types/DeckType'
interface CardProps {
  currentDeck: DeckType
  currentCard: number
  currentLocation: Locations
}

export function CardDisplay({ currentDeck, currentCard }: CardProps) {
  const lang = 'pt-br'

  const generateCard = useCallback(
    (card: CardType, language: string): string => {
      let text = card.options[language]

      const regexGlobal = /\[(.*?)\]/g

      ;[...text.matchAll(regexGlobal)].forEach((result) => {
        const key = result[1]
        const variableList = card.variables[key]
        text = text.replace(key, shuffle(variableList)[language])
      })

      text = text.replaceAll(/[\[\]]/g, '')

      return text
    },
    []
  )

  function shuffle(a: VariableType[]) {
    for (let j, i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }

    return a[0]
  }

  return (
    <>
      {currentDeck.cards?.[currentCard] && (
        <>
          <h2>{currentDeck.author}</h2>
          <h3>{currentDeck.cards[currentCard].name[lang]}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: generateCard(currentDeck.cards[currentCard], 'pt-br'),
            }}
          ></div>
        </>
      )}
    </>
  )
}
