import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../../public/img/logo.svg'
import { HeaderContainer, PlaceUser, Cart } from './styles'
export function Navbar() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <PlaceUser>
          <MapPin size={22} />
          <p>São Paulo, SP</p>
        </PlaceUser>
        <Cart>
          <ShoppingCart size={22} />
        </Cart>
      </nav>
    </HeaderContainer>
  )
}
