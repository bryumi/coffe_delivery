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
  CreditPay,
  FormAddress,
  FormContainer,
  MoneyPay,
  Payment,
  PaymentCards,
  PaymentContainer,
} from './styles'

export function FormCheckout() {
  return (
    <div>
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
          <input type="number" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="number" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </FormAddress>
      </FormContainer>
      <PaymentContainer>
        <Payment>
          <span>
            <CurrencyDollar />
            <p>Pagamento</p>
          </span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
    </div>
  )
}
