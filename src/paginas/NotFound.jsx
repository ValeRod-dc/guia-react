import { Link, useLocation } from 'react-router'
import Button from 'react-bootstrap/Button'

export default function NotFound() {
  const ubicacion = useLocation()

  return (
    <>
      <h1 className="h3">Página no encontrada</h1>
      <p>
        No encontramos nada en <code>{ubicacion.pathname}</code>.
      </p>
      <Button as={Link} to="/" variant="primary">
        Volver al inicio
      </Button>
    </>
  )
}