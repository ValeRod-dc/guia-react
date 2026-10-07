import { useNavigate, useParams } from 'react-router'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import { buscarProducto, formatearPrecio } from '../datos/productos.js'

export default function DetalleProducto() {
    const { id } = useParams()
    const navegar = useNavigate()
    const producto = buscarProducto(id)

    if (!producto) {
        return (
            <Alert variant="danger">No encontramos ningún producto con el id <code>{id}</code>.</Alert>
        )
    }

    const agregarAlCarrito = () => {
        // aún no hace nada :b
    }

    return (
        <>
            <Button variant="outline-secondary" className="mb-3" onClick={() => navegar(-1)}>Volver</Button>
            <div className="display-1 text-center" aria-hidden="true">{producto.emoji}</div>
            <h1 className="h3">{producto.nombre}</h1>
            <Badge bg="light" text="dark" className="text-capitalize mb-2">{producto.categoria}</Badge>
            <p>{producto.descripcion}</p>
            <p className="fw-semibold fs-5">{formatearPrecio(producto.precio)}</p>
            <p className="text-muted">
                {producto.stock > 0 ? `${producto.stock} unidades disponibles` : 'Sin stock'}
            </p>

            <div className='d-flex gap-2 mt-3'>
                <Button className='gap-2' variant={producto.stock === 0 ? 'secondary' : 'primary'} onClick={agregarAlCarrito} disabled={producto.stock === 0}>
                    {producto.stock === 0 ? 'No disponible' : 'Agregar al carrito'}
                </Button>
                <Button variant='outline-secondary' onClick={() => navegar('/catalogo')}>
                    Seguir comprando
                </Button>
            </div>
        </>
    )
}