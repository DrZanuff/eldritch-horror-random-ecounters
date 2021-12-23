import { useCallback } from 'react'
import { CardData, DeckData } from '../../types/DeckType'

interface CardProps {
  data: DeckData
  currentCard: number
}

export function CardDisplay({ data }: CardProps) {
  const lang = 'pt-br'

  enum Status {
    Start,
    Search,
    Pause,
    Stop,
  }

  // Criar uma função com While que: percorre o objeto começando pelo _intro
  // até não encontrar mais a prop nextPart. A cada ponto, gerar o texto formatado
  // e colocar em uma array indexada para ser renderizado pelo react. Quando o nextPart
  // for uma array, deve parar o loop e renderizar os botões com as opções. Ao clicar no botão
  // se passa a referência de onde parou o loop e continar renderizando pelo nextPart selecionado
  const generateCard = useCallback((card: CardData, language: string) => {
    const searchStatus = Status.Start
    const textArray = [] as Array<string>

    // while (searchStatus === Status.Start || searchStatus === Status.Search) {
    //   if (searchStatus === Status.Start) {
    //     if (typeof card.content._intro === 'string') {
    //       const text = card.content._intro
    //       textArray.push(text)
    //     } else {
    //       if (typeof card.content._intro[language] === 'string') {
    //         const text = card.content._intro[language] as string
    //         textArray.push(text)
    //       } else {
    //         const size = card.content._intro[language]?.length
    //         if (typeof size === 'number') {
    //           const text =
    //             card.content._intro[language]?.[
    //               Math.floor(Math.random() * size)
    //             ]
    //           text && textArray.push(text)
    //         }
    //       }
    //     }
    //   }
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('DATA INSIDE', data)

  return (
    <>
      {data.cards?.[0] && (
        <>
          <h2>{data.author}</h2>
          <h3>{data.cards[0].name[lang]}</h3>
          <h4>{data.cards[0].content._intro[lang]}</h4>
          <h5>{data.cards[0].content._intro.nextPart}</h5>
          <h6>
            {
              data.cards[0].content[
                data.cards[0].content._intro.nextPart as string
              ].anyLanguage
            }
          </h6>
          {generateCard(data.cards[0], lang)}
        </>
      )}
    </>
  )
}
