import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  HeaderCard,
  TextDescription,
  PriceAndShop,
  AmountQtd,
  Shop,
} from './styles'
export function CoffeeCard() {
  return (
    <CardContainer>
      <HeaderCard>
        <img src="../../../public/img/coffees/arabe.svg" alt="" />
        <p>Tradicional</p>
      </HeaderCard>
      <TextDescription>
        <strong>Expresso Tradicional</strong>
        <p>O tradicional café feito com água e grãos moídos</p>
      </TextDescription>
      <PriceAndShop>
        <AmountQtd>
          <button>
            <Minus />
          </button>
          <span>0</span>
          <button>
            <Plus />
          </button>
        </AmountQtd>
        <Shop>
          <button>
            <ShoppingCart />
          </button>
        </Shop>
      </PriceAndShop>
    </CardContainer>
  )
}
