import axios from "axios";
import { useEffect, useState } from "react";

import './Estilos/Global.css'

function App() {

  const [pagina, setPagina] = useState(0)
  const [dados, setDados] = useState([])

  useEffect(() => {
    IncrementarDados()
  }, [])

  const IncrementarDados = () => {
    setPagina(pagina + 10)
    axios.get("https://spacelaunchnow.me/api/ll/2.1.0/agencies/?offset=" + pagina)
      .then(res => {
        setDados(res.data.results)
      })
  }

  const DecrementarDados = () => {
    setPagina(pagina - 10)
    axios.get("https://spacelaunchnow.me/api/ll/2.1.0/agencies/?offset=" + pagina)
      .then(res => {
        setDados(res.data.results)
      })
  }

  console.log(dados)

  return (
    <div className="App">
      <button onClick={() => IncrementarDados()}>Página+</button>
      <button onClick={() => DecrementarDados()}>Página-</button>
      <div className="container">

        {
          dados.length > 0 ?
            dados.map((item, i) => {
              return [
                <div className='card'>
                  <span>{dados[i].abbrev}</span>
                  <span>{dados[i].url}</span>
                  <span>{dados[i].name}</span>
                  <span>{dados[i].type}</span>
                  <span>{dados[i].country_code}</span>
                  <span>{dados[i].description}</span>
                  <span>{dados[i].administrator}</span>
                  <span>{dados[i].founding_year}</span>
                  <span>{dados[i].launchers}</span>
                  <span>{dados[i].spacecraft}</span>
                  <span>{dados[i].image_url}</span>
                </div>
              ]
            })
            :
            "Oi"
        }
      </div>


    </div>
  );
}

export default App;
