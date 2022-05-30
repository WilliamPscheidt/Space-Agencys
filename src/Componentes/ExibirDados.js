import React from 'react'

const ExibirDados = (props) => {
  return (
    <>

        {
            props.agencia.map((item, i) => {
                console.log(i)
            })
        }
        <div className='card'>
            <span>{props.agencia[0].abbrev}</span>
            <span>{props.agencia[0].url}</span>
            <span>{props.agencia[0].name}</span>
            <span>{props.agencia[0].type}</span>
            <span>{props.agencia[0].country_code}</span>
            <span>{props.agencia[0].description}</span>
            <span>{props.agencia[0].administrator}</span>
            <span>{props.agencia[0].founding_year}</span>
            <span>{props.agencia[0].launchers}</span>
            <span>{props.agencia[0].spacecraft}</span>
            <span>{props.agencia[0].image_url}</span>
        </div>
    </>
  )
}

export default ExibirDados