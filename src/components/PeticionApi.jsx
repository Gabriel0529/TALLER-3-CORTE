import React from 'react'
import { useState } from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes] = useState([])
    const [paginacion, setPaginacion] = useState(1)

    const traerPersonajes = async(next) =>{
        
        try{
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
            const respuesta = await res.json()
            const auxPersonajes =   respuesta.results
            setPersonajes(auxPersonajes)
           
        }catch(error){
            console.log(error)
        }
    }

    const traer = () =>{
        setPaginacion(paginacion+1)
        console.log(paginacion)
        traerPersonajes(paginacion)
    }

    const siguiente = () =>{
        setPaginacion(paginacion+1)
        console.log(paginacion)
        traerPersonajes(paginacion)
    }

    const atras = () =>{
        setPaginacion(paginacion-1)
        console.log(paginacion)
        traerPersonajes(paginacion)
    }

  return (
    
    <div>
        <h1>PETICIÓN AL API DE RICK AND MORTY</h1>
        <button onClick={traer}>Traer Personajes</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={atras}>Atrás</button>
        {
            personajes.map((aux) => (
                <div key={aux.id}>
                    <h4>{aux.name}</h4>
                    <img src={aux.image} alt={aux.name} />
                </div>
            ))
        }
    </div>
  )
}

export default PeticionApi