import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 2rem 10rem;
`
export const Intro = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  justify-content: space-around;
  gap: 4rem;
  img {
    width: 29rem;
    height: 22.5rem;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Fredoka One', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
`
export const Description = styled.div``
