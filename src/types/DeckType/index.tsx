interface LanguageOptions {
  [key: string]: string | string[]
}

interface LocalVariable {
  [key: string]: LanguageOptions
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
}

export interface DeckData {
  author: string
  version: number
  languages: string[]
  cards: CardData[]
}
