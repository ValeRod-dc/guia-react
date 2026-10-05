import { Route, Routes } from 'react-router'
import Layout from './componentes/Layout.jsx'
import Inicio from './paginas/Inicio.jsx'
import Catalogo from './paginas/Catalogo.jsx'
import DetalleProducto from './paginas/DetalleProducto.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import NotFound from './paginas/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path='catalogo' element={<Catalogo />} />
        <Route path="producto/:id" element={<DetalleProducto />} />
        <Route path='nosotros' element={<Nosotros />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

