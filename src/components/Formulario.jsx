import { useState } from 'react'

export const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  })

  return (
    <form>
      <legend>Busca por Artista y Canción</legend>

      <div className='form-grid'>
        <div>
          <label>Artista</label>
          <input
            type='text' name='artista' placeholder='Nombre Artista' value={busqueda.artista} onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value
            })}
          />
        </div>

        <div>
          <label>Canción</label>
          <input
            type='text' name='cancion' placeholder='Nombre Canción' value={busqueda.cancion} onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value
            })}
          />
        </div>

        <input type='submit' value='Buscar' />
      </div>
    </form>
  )
}
