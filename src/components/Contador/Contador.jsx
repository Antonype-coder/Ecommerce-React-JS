import { useState } from 'react'

function EjemploContador() {
  const [contador, setContador] = useState(1)

  const aumentar = () => {
    setContador(contador + 1)
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <p>Contador: {contador}</p>
      <button onClick={aumentar}>Sumar</button>
    </div>
  )
}

export default EjemploContador
