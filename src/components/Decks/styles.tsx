import styled from 'styled-components'

export const DecksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  min-height: 500px;
  flex-direction: column;
`
export const TopBarMenu = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding: 8px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`

export const LanguageContainer = styled.div`
  display: flex;
  gap: 8px;
`
export const BackButtonContainer = styled.div`
  display: flex;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`
export const InnerBodyContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  gap: 20px;
`
