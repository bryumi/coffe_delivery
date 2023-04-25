import styled from 'styled-components'

export type IconVariant = 'orange' | 'yellow' | 'gray' | 'purple'
interface IconVariantProps {
  variant: IconVariant
}

const iconVariants = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const
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
  width: 35rem;
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
export const Description = styled.div`
  margin-top: 1.5rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
  p {
    font-size: 1rem;
  }
`
export const Icon = styled.span<IconVariantProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[iconVariants[props.variant]]};
  z-index: 0;
`
