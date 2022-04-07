import useLetras from '../hooks/useLetras'
import { Alerta } from './Alerta'
import { Formulario } from './Formulario'
import { Letra } from './Letra'

export const AppLetras = () => {
  const { alerta, letra, cargando } = useLetras()

  return (
    <>
      <header>Búsqueda de letra de Canciones</header>

      <Formulario />

      <main>
        {alerta
          ? <Alerta>{alerta}</Alerta>
          : letra
            ? <Letra />
            : cargando
              ? 'Cargando...'
              : <p className='text-center'>Busca letras de tus artistas favoritos</p>}
      </main>
    </>
  )
}
