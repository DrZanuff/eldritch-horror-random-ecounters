import { LangaugeSelector } from '../LanguageSelector'
import { ActivePage } from '../../Atoms'
import { useRecoilState } from 'recoil'
import * as S from './styles'

export function Main() {
  const [, setPage] = useRecoilState(ActivePage)

  return (
    <S.MainContainer>
      <button onClick={() => setPage('decks')}>New Game</button>
      <button>Continue</button>
      <button>Create a Deck</button>
      <button>Edit a Deck</button>
      <S.SelectContainer>
        <LangaugeSelector />
      </S.SelectContainer>
    </S.MainContainer>
  )
}
