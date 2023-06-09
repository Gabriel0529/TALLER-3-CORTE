import React from 'react'
import { useState } from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes] = useState([])
    const [paginacion, setPaginacion] = useState(1)

    const traerPersonajes = async(next) =>{
        
        try{
            const res = await fetch(`https://digimon-api.vercel.app/api/digimon?page=${next}`)
            const respuesta = await res.json()
            const auxPersonajes =   respuesta.slice(
                (paginacion - 1)*10,
                paginacion * 10
            )
            setPersonajes(auxPersonajes)
           
        }   catch(error){
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
        <h1>PETICIÓN AL API DE DIGIMON</h1>
        <button onClick={traer}>Traer Personajes</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={atras}>Atrás</button>
        {
            personajes.map((aux) => (
                <div key={aux.name}>
                    <h4>{aux.name}</h4>
                    <img src={aux.img} alt={aux.name} />
                </div>
            ))
        }
    </div>
  )
}

export default PeticionApi