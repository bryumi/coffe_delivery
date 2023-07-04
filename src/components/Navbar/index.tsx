import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../../public/img/logo.svg'
import { HeaderContainer, PlaceUser, Cart } from './styles'
import { NavLink } from 'react-router-dom'
export function Navbar() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <PlaceUser>
          <MapPin size={22} weight="fill" />
          <p>São Paulo, SP</p>
        </PlaceUser>
        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
