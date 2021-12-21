interface SubItemData {
  [key: string]: string | SubItemData[] | undefined
}
interface NextPart extends SubItemData {
  option: string | undefined
}
interface Intro extends SubItemData {
  nextPart: string | undefined
}
interface ItemData {
  [key: string]: string | SubItemData | undefined
  nextPart: string | NextPart | undefined
  _intro: Intro | undefined
  localVariables: SubItemData | undefined
  anyLanguage: string | undefined
}
interface CardData {
  id: number
  name: Record<string, string>
  content: Record<string, ItemData>
}
interface DeckData {
  author: string
  version: number
  languages: string[]
  cards: CardData[]
}
interface CardProps {
  data: DeckData
  currentCard: number
}

export function CardDisplay({ data }: CardProps) {
  const lang = 'pt-br'

  // Criar uma função com While que: percorre o objeto começando pelo _intro
  // até não encontrar mais a prop nextPart. A cada ponto, gerar o texto formatado
  // e colocar em uma array indexada para ser renderizado pelo react. Quando o nextPart
  // for uma array, deve parar o loop e renderizar os botões com as opções. Ao clicar no botão
  // se passa a referência de onde parou o loop e continar renderizando pelo nextPart selecionado

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
        </>
      )}
    </>
  )
}
