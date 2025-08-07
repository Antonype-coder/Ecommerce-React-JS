import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import EjemploContador from './components/Contador/Contador'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer saludo="¡Bienvenidos a mi tienda!" />
      <EjemploContador />
    </div>
  )
}

export default App
