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
  span {
    display: flex;
  }
  p {
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    text-align: center;
    vertical-align: middle;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    width: 5.75rem;
    height: 1.5rem;

    border-radius: 8px;
  }
  img {
    height: 7.5rem;
    width: 7.5rem;

    margin-top: -3.5rem;
  }
`
export const Price = styled.div`
  width: 55px;
  height: 21px;

  display: flex;
  align-items: center;
  text-align: right;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  span {
    margin-left: 0.25rem;
  }
`
export const TextDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  h4 {
    font-family: 'Fredoka One', cursive;
  }
  p {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`

export const PriceAndShop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 0.75rem;
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  span {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1rem;
    color: ${(props) => props.theme['base-label']};
  }
  p {
    font-family: 'Fredoka One', cursive;
    font-size: 24px;
    font-weight: 800;
    line-height: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const AmountQtd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 4.5rem;
  height: 2.375rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    border: none;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
  }
  button:hover {
    color: ${(props) => props.theme['purple-dark']};
    transition: 0.2s;
  }
`
export const Shop = styled.div`
  height: 2.375rem;
  width: 2.375rem;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: ${(props) => props.theme.purple};
    transition: 0.2s;
  }
  button {
    background: ${(props) => props.theme['purple-dark']};
    border: none;
    color: ${(props) => props.theme.white};
  }

  button:hover {
    background: ${(props) => props.theme.purple};
    transition: 0.2s;
  }
`
