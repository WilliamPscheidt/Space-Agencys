import React from 'react'

const ExibirDados = (props) => {
  return (
    <>
        <div className='card'>
            <span>{props.agencia[0].abbrev}</span>
        </div>

        <div className='card'>
            <span>{props.agencia[1].abbrev}</span>
        </div>

        <div className='card'>
            <span>{props.agenciaC}</span>
        </div>

        <div className='card'>
            <span>{props.agenciaD}</span>
        </div>

        <div className='card'>
            <span>{props.agenciaE}</span>
        </div>

        <div className='card'>
            <span>{props.agenciaF}</span>
        </div>

        <div className='card'>
            <span>{props.agenciaG}</span>
        </div>

        <div className='card'>
            <span>{props.agenciaH}</span>
        </div>

        <div className='card'>
            <span>{props.agenciaI}</span>
        </div>
        
        <div className='card'>
            <span>{props.agenciaJ}</span>
        </div>
    </>
  )
}

export default ExibirDados