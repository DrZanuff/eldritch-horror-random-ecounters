import styled from 'styled-components'

interface BoxFilterContainerProps {
  height?: string
}

export const BoxFilterContainer = styled.div<BoxFilterContainerProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : '170px')};
  display: flex;
  flex-direction: column;
  position: relative;
`
export const TitleBar = styled.div`
  display: flex;
  border: 1px solid black;
  align-items: center;
  width: 100%;
  height: 35px;
  justify-content: center;
  padding: 0px 8px;
`
export const SearchButtonContainer = styled.div`
  position: absolute;
  right: 8px;
  cursor: pointer;
  display: flex;
`
export const BoxFilterInnerBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 5px;
  border: 1px solid black;
  overflow-y: auto;
`
export const SearchFieldContainer = styled.div`
  display: flex;
  border: 1px solid #3b3b3b;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
    border: none;
    height: 20px;
    width: fit-content;
    background-color: black;
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;

    &:hover {
      background-color: white;
      color: black;
    }

    &:disabled {
      cursor: not-allowed;
      color: gray;
      background-color: #252525;
    }
  }
`

export const SearchField = styled.input`
  width: 100%;
  height: 28px;
  padding: 8px;
  outline: none;
  border: none;
  background: none;
`
export const SearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  height: fit-content;
  width: fit-content;
  gap: 8px;
  border-radius: 18px;
  background-color: #4d4dff;
  color: white;
  margin: 3px;
  cursor: pointer;

  > span {
    margin-left: 4px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
export const SearchCloseButton = styled.div`
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3131ff;
  color: white;
  margin-right: 4px;
  height: 20px;
  width: 20px;
  border-radius: 10px;

  b {
    margin-bottom: 2px;
  }
`
