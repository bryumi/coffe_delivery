import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonMinus,
  ButtonPlus,
  Frame,
  FrameInfo,
  FrameName,
  FrameQtd,
  FrameTrash,
  FrameTrashQtd,
} from './styles'
import { Price } from '../../../../CoffeeCard/styles'

export function FrameCoffeeCheckout() {
  return (
    <Frame>
      <FrameInfo>
        <img src="../../../../../../public/img/coffees/arabe.svg" alt="" />
        <FrameName>
          <p>Expresso Tradicional</p>
          <FrameTrashQtd>
            <FrameQtd>
              <ButtonMinus>
                <Minus size={14} />
              </ButtonMinus>
              <span>1</span>
              <ButtonPlus>
                <Plus size={14} />
              </ButtonPlus>
            </FrameQtd>
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
