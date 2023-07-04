import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
`
export const RightSide = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3 {
    font-family: 'Fredoka One', cursive;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
`
export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 36rem;
  height: 17rem;
  padding: 2.5rem;
  border: 0.125rem solid;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border: 0.125rem solid ${(props) => props.theme['purple-dark']}; /*2*/
`
export const MaplinkContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`
export const TimeContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`
export const DollarContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`
