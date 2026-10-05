import { Link } from 'react-router'
import { formatearPrecio } from '../datos/productos.js'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function TarjetaProducto({ producto, onVerDetalle }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="fs-1 text-center" aria-hidden="true">
          {producto.emoji}
        </div>

        <Card.Title as="h3" className="h6">
          {producto.nombre}
        </Card.Title>

        <Badge bg="light" text="dark" className="align-self-start mb-2 text-capitalize">
          {producto.categoria}
        </Badge>

        <Card.Text className="fw-semibold mb-3">
          {formatearPrecio(producto.precio)}
        </Card.Text>

        <div className="mt-auto d-grid">
          <Link to={`/producto/${producto.id}`} className="btn btn-outline-primary mt-auto">Ver detalle </Link>
        </div>
      </Card.Body>
    </Card>
  )
}
