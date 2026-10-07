import { Link } from 'react-router'

export default function Carrito() {
  return (
    <>
      <h1 className="h3 mb-3">Carrito</h1>
      <p className="text-muted">Tu carrito está vacío.</p>
      <Link to="/catalogo" className="btn btn-primary">
        Ir al catálogo
      </Link>
    </>
  )
}