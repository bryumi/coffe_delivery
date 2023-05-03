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
export const FrameInfo = styled.div``
export const FrameName = styled.div`
  width: 10.7rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

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
export const FrameQtd = styled.div``
export const FrameTrash = styled.button``
