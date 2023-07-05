import { Minus, Plus } from 'phosphor-react'
import { ButtonMinus, ButtonPlus, FrameQtd } from './styles'

interface QuantityButtonProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityButton({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityButtonProps) {
  return (
    <FrameQtd>
      <ButtonMinus disabled={quantity <= 0} onClick={onDecrease}>
        <Minus weight="bold" size={14} />
      </ButtonMinus>
      <span>{quantity}</span>
      <ButtonPlus onClick={onIncrease}>
        <Plus weight="bold" size={14} />
      </ButtonPlus>
    </FrameQtd>
  )
}
