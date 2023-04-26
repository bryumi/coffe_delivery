import { MapPinLine } from 'phosphor-react'
import { Navbar } from '../../Navbar'
export function CheckoutForm() {
  return (
    <div>
      <Navbar />
      <h3>Complete seu Pedido</h3>
      <FormContainer>
        <div>
          <span>
            <MapPinLine />
            <p>Endereço de Entrega</p>
          </span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
        <form>
          <input type="number" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="number" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </form>
      </FormContainer>
    </div>
  )
}
