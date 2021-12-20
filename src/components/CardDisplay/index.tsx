interface ItemData {
  _intro?: ItemData | ItemData[]
  nextPart?: string
  any?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localVariables?: Record<string, ItemData | ItemData[]>
}

interface CardData {
  id: number
  name: Record<string, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: Record<string, ItemData | ItemData[] | any>
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

  console.log('DATA INSIDE', data)

  return (
    <>
      <h2>{data.author}</h2>
      <h3>{data.cards?.[0].name[lang] as string}</h3>
      <h4>{data.cards?.[0].content._intro[lang] as string}</h4>
      {data.cards?.[0].content._intro?.nextPart && <h5>Opa Data!</h5>}
      {data.cards[0].content}
    </>
  )
}
