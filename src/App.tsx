import { ThemeProvider } from 'styled-components'
import { CoffeeCard } from './components/CoffeeCard'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Navbar } from './components/Navbar'
import { Home } from './components/pages/Home'
import { Checkout } from './components/pages/Checkout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Checkout />
      <GlobalStyle />
    </ThemeProvider>
  )
}
