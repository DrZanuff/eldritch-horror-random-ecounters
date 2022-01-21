import { atom } from 'recoil'

export type Pages = 'main' | 'decks' | 'game'

export const ActivePage = atom({
  key: 'ActivePage',
  default: 'main' as Pages,
})
