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
                  <div className="container-card">
                    <p className="texto">{dados[i].abbrev}</p>
                    <p className="texto">{dados[i].url}</p>
                    <p className="texto">{dados[i].name}</p>
                    <p className="texto">{dados[i].type}</p>
                    <p className="texto">{dados[i].country_code}</p>
                    <p className="texto">{dados[i].description}</p>
                    <p className="texto">{dados[i].administrator}</p>
                    <p className="texto">{dados[i].founding_year}</p>
                    <p className="texto">{dados[i].launchers}</p>
                    <p className="texto">{dados[i].spacecraft}</p>
                    <p className="texto">{dados[i].image_url}</p>
                  </div>
                </div>
              ]
            })
            :
            "Carregando os dados.."
        }
      </div>


    </div>
  );
}

export default App;
