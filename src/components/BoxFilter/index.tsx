import { useState, useRef, useCallback, useEffect } from 'react'
import { SearchIcon } from './icons'
import * as S from './styles'

type statusType = 'empty' | 'search' | 'tag'

export function BoxFilter({ title = 'Title', height = '210px' }) {
  const [status, setStatus] = useState<statusType>('empty')
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const startSearch = useCallback(() => {
    setStatus('search')
  }, [setStatus])

  const resetSearch = useCallback(() => {
    setStatus('empty')
    setSearchValue('')
  }, [setStatus, setSearchValue])

  useEffect(() => {
    inputRef.current?.focus()
  }, [status])

  return (
    <S.BoxFilterContainer height={height}>
      <S.TitleBar>
        <h4>{title}</h4>
        <S.SearchButtonContainer onClick={() => startSearch()}>
          <SearchIcon />
        </S.SearchButtonContainer>
      </S.TitleBar>
      <S.BoxFilterInnerBody>
        {status === 'search' && (
          <S.SearchFieldContainer>
            <S.SearchField
              ref={inputRef}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              disabled={searchValue === ''}
              onClick={() => setStatus('tag')}
            >
              ok
            </button>
          </S.SearchFieldContainer>
        )}
        {status === 'tag' && (
          <S.SearchResultContainer onClick={() => resetSearch()}>
            <span>{searchValue}</span>
            <S.SearchCloseButton>
              <b>x</b>
            </S.SearchCloseButton>
          </S.SearchResultContainer>
        )}
      </S.BoxFilterInnerBody>
    </S.BoxFilterContainer>
  )
}
