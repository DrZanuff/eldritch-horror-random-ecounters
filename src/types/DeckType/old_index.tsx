interface LanguageOptions {
  [key: string]: string
}

interface LocalVariable {
  [key: string]: LanguageOptions
}

export interface GlobalVariables {
  [key: string]: LocalVariable | undefined
}

interface ChoiceStep {
  languageOptions: LanguageOptions
  option: string
}

export interface ItemData {
  languageOptions: LanguageOptions | undefined
  nextStep: string | undefined
  randomStep: string[] | undefined
  choiceStep: ChoiceStep[] | undefined
  localVariables: LocalVariable | undefined
}

export interface CardData {
  id: number
  name: Record<string, string>
  content: Record<string, ItemData>
  variables: GlobalVariables
}

export interface DeckData {
  author: string
  version: number
  languages: string[]
  // type: 'CityLocations' | 'GenericLocations'
  type: 'CityLocations' | 'GenericLocations'
  cards: CardData[]
}

export enum LocationsList {
  sanFran = 'sanFran',
  arkham = 'arkham',
  buenosAires = 'buenosAires',
  london = 'london',
  rome = 'rome',
  istambul = 'istambul',
  shanghai = 'shanghai',
  tokyo = 'tokyo',
  sidney = 'sidney',
  city = 'city',
  wild = 'wild',
  sea = 'sea',
}

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
