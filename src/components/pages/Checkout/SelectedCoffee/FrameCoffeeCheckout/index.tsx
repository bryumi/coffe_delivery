import { Minus, Plus, Trash } from 'phosphor-react'
import {
  FrameInfo,
  FrameNamePrice,
  FrameQtd,
  FrameTrash,
  FrameTrashQtd,
} from './styles'

export function FrameCoffeeCheckout() {
  return (
    <section>
      <img src="../../../../../../public/img/coffees/arabe.svg" alt="" />
      <FrameInfo>
        <FrameNamePrice>
          <p>Expresso Tradicional</p>
          <p>R$ 9,90</p>
        </FrameNamePrice>
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
      </FrameInfo>
    </section>
  )
}
