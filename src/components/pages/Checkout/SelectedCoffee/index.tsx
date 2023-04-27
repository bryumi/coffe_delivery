import {
  CoffeeCardCheckout,
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
        <button>Confirmar Pedido</button>
      </CoffeeCardCheckout>
    </ContainerShop>
  )
}
