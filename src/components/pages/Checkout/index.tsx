import { Navbar } from '../../Navbar'
import { FormCheckout } from './FormCheckout'
import { SelectedCoffee } from './SelectedCoffee'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <div>
      <CheckoutContainer>
        <FormCheckout />
        <SelectedCoffee />
      </CheckoutContainer>
    </div>
  )
}
