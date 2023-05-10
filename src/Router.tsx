import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Checkout } from './components/pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
