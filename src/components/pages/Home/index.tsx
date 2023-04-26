import { Navbar } from '../../Navbar'
import coffeeCup from '../../../../public/img/imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  Intro,
  TextContainer,
  Title,
  Description,
  Icon,
  ProductsContainer,
  CoffeeContainer,
} from './styles'
import { CoffeeCard } from '../../CoffeeCard'

export function Home() {
  return (
    <div>
      <Navbar />
      <HomeContainer>
        <Intro>
          <TextContainer>
            <Title>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </Title>
            <Description>
              <div>
                <Icon variant="orange">
                  <ShoppingCart size={22} weight="fill" color="#ffff" />
                </Icon>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <Icon variant="yellow">
                  <Timer size={22} weight="fill" color="#ffff" />
                </Icon>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <Icon variant="gray">
                  <Package size={22} weight="fill" color="#ffff" />
                </Icon>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <Icon variant="purple">
                  <Coffee size={22} weight="fill" color="#ffff" />
                </Icon>
                <p>O café chega fresquinho até você</p>
              </div>
            </Description>
          </TextContainer>
          <img src={coffeeCup} alt="" />
        </Intro>

        <ProductsContainer>
          <h2>Nossos Cafés</h2>
          <CoffeeContainer>
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
          </CoffeeContainer>
        </ProductsContainer>
      </HomeContainer>
    </div>
  )
}
