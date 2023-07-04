import styled from 'styled-components'
export const Frame = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0.25rem;
  gap: 3.7rem;

  width: 23rem;
  height: 5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const FrameInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;
`
export const FrameName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 171px;
  height: 61px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
`
export const FrameTrashQtd = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: row;
`
export const FrameTrash = styled.button`
  box-sizing: border-box;
  width: 6.25rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
  :hover {
    background: ${(props) => props.theme['base-hover']};
    transition: 0.2s;
  }
`
