import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  Address,
  AddressInfo,
  BankPay,
  CEPInput,
  CityAndState,
  CityInput,
  ComplementInput,
  Container,
  CreditPay,
  FormAddress,
  FormContainer,
  MoneyPay,
  NeighborhoodInput,
  NumberAndComp,
  NumberInput,
  Payment,
  PaymentCards,
  PaymentContainer,
  StateInput,
  StreetInput,
} from './styles'

export function FormCheckout() {
  return (
    <Container>
      <h3>Complete seu Pedido</h3>
      <FormContainer>
        <AddressInfo>
          <Address>
            <MapPinLine />
            <p>Endereço de Entrega</p>
          </Address>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </AddressInfo>
        <FormAddress>
          <CEPInput type="number" placeholder="CEP" />
          <StreetInput type="text" placeholder="Rua" />
          <NumberAndComp>
            <NumberInput type="number" placeholder="Número" />
            <ComplementInput type="text" placeholder="Complemento" />
          </NumberAndComp>

          <CityAndState>
            <NeighborhoodInput type="text" placeholder="Bairro" />
            <CityInput type="text" placeholder="Cidade" />
            <StateInput type="text" placeholder="UF" />
          </CityAndState>
        </FormAddress>
      </FormContainer>
      <PaymentContainer>
        <Payment>
          <CurrencyDollar />
          <span>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </Payment>
        <PaymentCards>
          <CreditPay>
            <CreditCard />
            <p>CARTÃO DE CRÉDITO</p>
          </CreditPay>
          <BankPay>
            <Bank />
            <p>CARTÃO DE DÉBITO</p>
          </BankPay>
          <MoneyPay>
            <Money />
            <p>Dinheiro</p>
          </MoneyPay>
        </PaymentCards>
      </PaymentContainer>
    </Container>
  )
}
