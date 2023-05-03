import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 2rem;
  width: 40rem;
  height: 23.25rem;
  background: ${(props) => props.theme['base-card']};

  border-radius: 6px;

  padding: 2.25rem;
`
export const AddressInfo = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`
export const Address = styled.span`
  display: flex;
  gap: 0.25rem;
  color: ${(props) => props.theme['yellow-dark']};
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const FormAddress = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`
const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  border: none;
  height: 2.625rem;
  padding: 0.5rem;
`
export const CEPInput = styled(BaseInput)`
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 12.5rem;
`
export const StreetInput = styled(BaseInput)`
  align-self: stretch;
  flex-grow: 0;
  width: 36rem;
`
export const NumberInput = styled(BaseInput)`
  flex: none;
  flex-grow: 0;
  width: 12.5rem;
`
export const ComplementInput = styled(BaseInput)`
  flex: none;
  flex-grow: 1;
  width: 22.75rem;
`
export const NeighborhoodInput = styled(BaseInput)`
  flex: none;
  order: 0;
  flex-grow: 0;

  width: 12.5rem;
`
export const CityInput = styled(BaseInput)`
  flex: none;
  order: 1;
  flex-grow: 1;
  width: 17.25rem;
`
export const StateInput = styled(BaseInput)`
  flex: none;
  order: 1;
  flex-grow: 1;

  width: 4.75rem;
`
export const NumberAndComp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`
export const CityAndState = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`
export const PaymentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  height: 13rem;
  width: 40rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px;
`
export const Payment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  :first-child {
    color: ${(props) => props.theme['purple-dark']};
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;

    p:first-child {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }
`
export const PaymentCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  gap: 0.75rem;

  width: 35rem;
  height: 3.25rem;
`
const BaseButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;

  border: none;
  width: 11rem;
  height: 2.25rem;

  background: ${(props) => props.theme['base-button']};

  cursor: pointer;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
    transition: 0.2s;
  }
`
export const CreditPay = styled(BaseButton)``
export const BankPay = styled(BaseButton)``
export const MoneyPay = styled(BaseButton)``
