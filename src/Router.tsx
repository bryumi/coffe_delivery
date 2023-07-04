import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Checkout } from './components/pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Success } from './components/pages/Success'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
