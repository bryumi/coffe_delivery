import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;

  nav {
    display: flex;
    gap: 1rem;
  }
`
export const Cart = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-style: 'Roboto', sans-serif;
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
`
export const PlaceUser = styled.div`
  width: 9rem;
  height: 2.25rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-style: 'Roboto', sans-serif;
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
`
