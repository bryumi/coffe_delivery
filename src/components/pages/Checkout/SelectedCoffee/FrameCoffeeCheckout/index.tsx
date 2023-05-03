import { Minus, Plus, Trash } from 'phosphor-react'
import {
  Frame,
  FrameInfo,
  FrameName,
  FrameQtd,
  FrameTrash,
  FrameTrashQtd,
} from './styles'

export function FrameCoffeeCheckout() {
  return (
    <Frame>
      <img src="../../../../../../public/img/coffees/arabe.svg" alt="" />
      <FrameInfo>
        <FrameName>
          <p>Expresso Tradicional</p>
          <FrameTrashQtd>
            <FrameQtd>
              <button>
                <Minus />
              </button>
              <span>1</span>
              <button>
                <Plus />
              </button>
            </FrameQtd>
            <FrameTrash>
              <Trash />
              <p>Remover</p>
            </FrameTrash>
          </FrameTrashQtd>
        </FrameName>
      </FrameInfo>
      <p>R$ 9,90</p>
    </Frame>
  )
}
