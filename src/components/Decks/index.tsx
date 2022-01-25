import { useRecoilState } from 'recoil'
import { ActivePage } from '../../Atoms'
import { LangaugeSelector } from '../LanguageSelector'
import { BoxFilter } from '../BoxFilter'
import * as S from './styles'

export function Decks() {
  const [, setPage] = useRecoilState(ActivePage)

  return (
    <S.DecksContainer>
      <S.TopBarMenu>
        <S.BackButtonContainer onClick={() => setPage('main')}>
          {'<<Back'}
        </S.BackButtonContainer>
        <S.LanguageContainer>
          <span>Filter Language</span>
          <LangaugeSelector />
        </S.LanguageContainer>
      </S.TopBarMenu>
      <S.InnerBodyContainer>
        <h1>Encounter Cards</h1>
        <BoxFilter title="Encounter Cards" />
      </S.InnerBodyContainer>
    </S.DecksContainer>
  )
}
