import './navbar.css'
import appleLogo from '../../assets/apple-logo.png'
import CartWidget from '../Cart/CartWidget'

function NavBar() {
  return (
    <nav className="navbar">
      <img src={appleLogo} alt="Logo" className="logo" />
      <ul className="categories">
        <li>IPhones</li>
        <li>Macbooks</li>
        <li>Ipads</li>
        <li>Accesorios</li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
