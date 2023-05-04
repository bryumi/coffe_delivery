import styled from 'styled-components'

export const ContainerShop = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const CoffeeCardCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;

  width: 28rem;
  height: 31rem;

  background: ${(props) => props.theme['base-card']};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
`
const BaseTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  width: 23rem;
  height: 1.25rem;
`
export const TotalValue = styled(BaseTotal)``
export const DeliveryValue = styled(BaseTotal)``
export const Total = styled(BaseTotal)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  height: 1.625rem;
`
export const ConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  width: 23rem;
  height: 3rem;

  border-radius: 6px;
  border: none;
  cursor: pointer;

  background-color: ${(props) => props.theme.yellow};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;

  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  :hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-card']};
    transition: 0.3s;
  }
`
