import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  HeaderCard,
  TextDescription,
  PriceAndShop,
  AmountQtd,
  Shop,
  PriceContainer,
} from './styles'
export function CoffeeCard() {
  return (
    <CardContainer>
      <HeaderCard>
        <img src="../../../public/img/coffees/arabe.svg" alt="" />
        <span>
          <p>Tradicional</p>
        </span>
      </HeaderCard>
      <TextDescription>
        <h4>
          <strong>Expresso Tradicional</strong>
        </h4>
        <p>O tradicional café feito com água e grãos moídos</p>
      </TextDescription>
      <PriceAndShop>
        <PriceContainer>
          <span>R$</span>
          <span>
            <p>9,90</p>
          </span>
        </PriceContainer>
        <AmountQtd>
          <button>
            <Minus size={14} weight="bold" />
          </button>
          <span>0</span>
          <button>
            <Plus size={14} weight="bold" />
          </button>
        </AmountQtd>
        <Shop>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </Shop>
      </PriceAndShop>
    </CardContainer>
  )
}
