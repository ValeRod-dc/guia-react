import { Link } from 'react-router'
import Button from 'react-bootstrap/Button'

export default function Inicio() {
    return (
        <>
            <h1 className="h3 mb-3">Bienvenido a Lo quieres, te lo vendo</h1>
            <p>Tienda en línea del Equipo 1 para la asignatura Desarrollo Fullstack II. Explora el catálogo, entra al detalle de un producto y comprueba que la dirección del navegador cambia.</p>
            <Button as={Link} to="/catalogo" variant="primary">Ver catálogo</Button>
        </>
    )
}