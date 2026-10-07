import { Link } from 'react-router'
import { formatearPrecio } from '../datos/productos.js'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function TarjetaProducto({ producto }) {
 
  const agregarAlCarrito = () => {
    // aún no hace nada sto:b
  }
  
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

        <div className="mt-auto d-flex flex-column flex-sm-row gap-2">
          <Button className='flex-fill' variant={producto.stock === 0 ? 'secondary' : 'primary'} onClick={agregarAlCarrito} disabled={producto.stock === 0}>
            {producto.stock === 0 ? 'No disponible' : 'Agregar al carrito'}
          </Button>
          <Link to={`/producto/${producto.id}`} className="btn btn-outline-primary flex-fill">Ver detalle </Link>

        </div>
      </Card.Body>
    </Card>
  )
}
