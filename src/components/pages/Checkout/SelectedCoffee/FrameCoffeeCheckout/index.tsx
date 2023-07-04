import { Trash } from 'phosphor-react'
import {
  Frame,
  FrameInfo,
  FrameName,
  FrameTrash,
  FrameTrashQtd,
} from './styles'
import { Price } from '../../../../CoffeeCard/styles'
import { QuantityButton } from '../../../../QuantityButton/QuantityButton'

export function FrameCoffeeCheckout() {
  return (
    <Frame>
      <FrameInfo>
        <img src="../../../../../../public/img/coffees/arabe.svg" alt="" />
        <FrameName>
          <p>Expresso Tradicional</p>
          <FrameTrashQtd>
            <QuantityButton />
            <FrameTrash>
              <Trash size={16} />
              <p>Remover</p>
            </FrameTrash>
          </FrameTrashQtd>
        </FrameName>
      </FrameInfo>
      <Price>
        <p>R$</p>
        <span>9,90</span>
      </Price>
    </Frame>
  )
}
