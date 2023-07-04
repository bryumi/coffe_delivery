import { NavLink } from 'react-router-dom'
import { FrameCoffeeCheckout } from './FrameCoffeeCheckout'
import {
  CoffeeCardCheckout,
  ConfirmButton,
  ContainerShop,
  DeliveryValue,
  Total,
  TotalValue,
} from './styles'

export function SelectedCoffee() {
  return (
    <ContainerShop>
      <h3>Cafés selecionados</h3>
      <CoffeeCardCheckout>
        <FrameCoffeeCheckout />
        <TotalValue>
          <p>Total de itens</p>
          <span>R$</span>
        </TotalValue>
        <DeliveryValue>
          <p>Entrega</p>
          <span>R$</span>
        </DeliveryValue>
        <Total>
          <p>Total</p>
          <span>R$</span>
        </Total>
        <NavLink to="/success" style={{ textDecoration: 'none' }}>
          <ConfirmButton>Confirmar Pedido</ConfirmButton>
        </NavLink>
      </CoffeeCardCheckout>
    </ContainerShop>
  )
}
