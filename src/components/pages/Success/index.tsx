import { CurrencyDollar, MapPinLine, Timer } from 'phosphor-react'
import {
  DollarContent,
  InfoContent,
  MaplinkContent,
  RightSide,
  SuccessContainer,
  Text,
  TimeContent,
} from './styles'
import { Icon } from '../Home/styles'

const image = new URL(
  '../../../../public/img/illustrationSucess.svg',
  import.meta.url,
).href

export function Success() {
  return (
    <div>
      <SuccessContainer>
        <RightSide>
          <Text>
            <h3>Uhu! Pedido confirmado</h3>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </Text>
          <InfoContent>
            <MaplinkContent>
              <Icon variant="purple">
                <MapPinLine size={22} weight="fill" color="#ffff" />
              </Icon>
              <p>
                Entrega em Avenida Paulista, 2000
                <br />
                Jardins - São Paulo, SP
              </p>
            </MaplinkContent>
            <TimeContent>
              <Icon variant="yellow">
                <Timer size={22} weight="fill" color="#ffff" />
              </Icon>
              <p>
                Previsão de Entrega <br />
              </p>
              <strong>20 min - 30 min</strong>
            </TimeContent>
            <DollarContent>
              <Icon variant="orange">
                <CurrencyDollar size={22} weight="fill" color="#ffff" />
              </Icon>
              <p>
                Pagamento na entrega
                <br />
              </p>
              <strong>Cartão de crédito</strong>
            </DollarContent>
          </InfoContent>
        </RightSide>
        <img src={image} alt="" />
      </SuccessContainer>
    </div>
  )
}
