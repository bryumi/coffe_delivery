import { Minus, Plus } from 'phosphor-react'
import { ButtonMinus, ButtonPlus, FrameQtd } from './styles'

export function QuantityButton() {
  return (
    <FrameQtd>
      <ButtonMinus>
        <Minus size={14} />
      </ButtonMinus>
      <span>1</span>
      <ButtonPlus>
        <Plus size={14} />
      </ButtonPlus>
    </FrameQtd>
  )
}
