import './cartwidget.css'
import carro from '../../assets/carro.png'

function CartWidget() {
  return (
    <div className="cart-widget">
      <img src={carro} alt="Carrito" className="cart-icon" />
      <span className="cart-count">6</span>
    </div>
  )
}

export default CartWidget
