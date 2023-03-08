import { Navbar } from '../../Navbar'
import coffeeCup from '../../../../public/img/imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  Intro,
  TextContainer,
  Title,
  Description,
} from './styles'

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
              <span>
                <ShoppingCart size={22} weight="fill" />
                <p>Compra simples e segura</p>
              </span>
              <span>
                <Timer size={22} weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </span>
              <span>
                <Package size={22} weight="fill" />
                <p>Embalagem mantém o café intacto</p>
              </span>
              <span>
                <Coffee size={22} weight="fill" />
                <p>O café chega fresquinho até você</p>
              </span>
            </Description>
          </TextContainer>
          <img src={coffeeCup} alt="" />
        </Intro>
      </HomeContainer>
    </div>
  )
}
