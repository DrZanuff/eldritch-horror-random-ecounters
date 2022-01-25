import styled from 'styled-components'

const SelectorContainer = styled.div`
  display: flex;
  width: 100px;

  select {
    width: 100%;
  }
`

export function LangaugeSelector() {
  return (
    <SelectorContainer>
      <select>
        <option value="pt-br">pt-br</option>
        <option value="en-us">en-us</option>
      </select>
    </SelectorContainer>
  )
}
