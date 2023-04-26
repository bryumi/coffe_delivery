import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 16rem;
  height: 19rem;
  background: ${(props) => props.theme['base-card']};

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;

  padding: 2rem;
`

export const HeaderCard = styled.div`
    span{
        display: flex;

    }
  p {
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    text-align: center;
    vertical-align: middle;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    width: 5.5rem;
    height: 1.5rem;

    border-radius: 8px;
  }
  img {
    height: 7.5rem;
    width: 7.5rem;

    margin-top: -3.5rem;
  }
`
export const TextDescription = styled.div`
  font-family: 'Roboto', sans-serif;
`
export const PriceAndShop = styled.div``
export const AmountQtd = styled.div``
export const Shop = styled.div``
