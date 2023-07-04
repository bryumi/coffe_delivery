import styled from 'styled-components'

export const FrameQtd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 4.5rem;
  height: 2rem;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }
`
export const ButtonMinus = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
  border: none;
  :hover {
    color: ${(props) => props.theme['base-hover']};
    transition: 0.2s;
  }
`
export const ButtonPlus = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
  border: none;
  :hover {
    color: ${(props) => props.theme['base-hover']};
    transition: 0.2s;
  }
`
