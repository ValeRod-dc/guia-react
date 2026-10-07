import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export default function Contacto() {

  const detenerEnvio = (evento) => evento.preventDefault()

  return (
    <>
      <h1 className="h3 mb-3">Contacto</h1>
      <p>
        Escríbenos y te respondemos a la brevedad. También puedes escribirnos
        directo a <a href="mailto:equipo1@duocuc.cl">equipo1@duocuc.cl</a>.
      </p>

      <Form onSubmit={detenerEnvio} className="mt-4" style={{ maxWidth: '600px' }}>
        <Row className="g-3">
          <Col xs={12} md={6}>
            <Form.Group controlId="contactoNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="contactoCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="tu@correo.cl" />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group controlId="contactoAsunto">
              <Form.Label>Asunto</Form.Label>
              <Form.Select defaultValue="">
                <option value="" disabled>Elige una opción</option>
                <option value="consulta">Consulta general</option>
                <option value="pedido">Estado de un pedido</option>
                <option value="reclamo">Reclamo</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group controlId="contactoMensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Cuéntanos en qué te podemos ayudar…"
              />
              <Form.Text className="text-muted">
                No compartas datos sensibles por este medio.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group controlId="contactoCondiciones">
              <Form.Check
                type="checkbox"
                label="Acepto que me contacten por correo."
              />
            </Form.Group>
          </Col>

          <Col xs={12} className="d-flex gap-2">
            <Button type="submit" variant="primary">Enviar</Button>
            <Button type="reset" variant="outline-secondary">Limpiar</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}