import styled from 'styled-components'

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
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  input {
    background: ${(props) => props.theme['base-input']};
    border-radius: 4px;
    border: none;
    height: 2.625rem;
    padding: 0.5rem;
  }
`
export const PaymentContainer = styled.section``
export const Payment = styled.div``
export const PaymentCards = styled.div``
export const CreditPay = styled.div``
export const BankPay = styled.div``
export const MoneyPay = styled.div``
