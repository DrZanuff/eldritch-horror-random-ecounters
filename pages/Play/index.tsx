import { useRecoilState } from 'recoil'
import { ActivePage } from '../../src/Atoms'
import { Main } from '../../src/components/Main'
import { Decks } from '../../src/components/Decks'
import * as S from '../../styles/Play/styles'

export default function Play() {
  const [page] = useRecoilState(ActivePage)

  return (
    <S.Body>
      <S.Content>
        {page === 'main' && <Main />}
        {page === 'decks' && <Decks />}
      </S.Content>
    </S.Body>
  )
}
