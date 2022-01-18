export interface DeckType {
  author: string
  version: number
  name: VariableType
  languages: string[]
  dependencies: string[]
  cards: CardType[]
}

export interface CardType {
  id: number
  name: VariableType
  type: Locations[]
  variables: Record<string, VariableType[]>
  options: VariableType
}

export type VariableType = Record<string, string>

export type Locations =
  | 'sanFran'
  | 'arkham'
  | 'buenosAires'
  | 'london'
  | 'rome'
  | 'istambul'
  | 'shanghai'
  | 'tokyo'
  | 'sidney'
  | 'city'
  | 'wild'
  | 'sea'
