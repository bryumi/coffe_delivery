import { Minus, Plus, ShoppingCart, Tag } from 'phosphor-react'
import {
  CardContainer,
  HeaderCard,
  TextDescription,
  PriceAndShop,
  Shop,
  PriceContainer,
  CoffeeTag,
} from './styles'
import { formatMoney } from '../../utils/formatMoney'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { QuantityButton } from '../QuantityButton/QuantityButton'
import { useCart } from '../../hooks/useCart'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}
interface CoffeeProps {
  coffee: Coffee
}
export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(0)
  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }
  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
  }
  const formatedPrice = formatMoney(coffee.price)
  return (
    <CardContainer>
      <HeaderCard>
        <img src={`${coffee.photo}`} alt="" />
        <CoffeeTag>
          {coffee.tags.map((tag) => {
            return <span key={`${coffee.id} ${tag}`}>{tag}</span>
          })}
        </CoffeeTag>
      </HeaderCard>
      <TextDescription>
        <h4>
          <strong>{coffee.name}</strong>
        </h4>
        <p>{coffee.description}</p>
      </TextDescription>
      <PriceAndShop>
        <PriceContainer>
          <span>R$</span>
          <span>
            <p>{formatedPrice}</p>
          </span>
        </PriceContainer>
        <QuantityButton
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
        <Shop>
          <NavLink to="/checkout">
            <button onClick={handleAddToCart}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </NavLink>
        </Shop>
      </PriceAndShop>
    </CardContainer>
  )
}
