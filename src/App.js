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
                    <div className="card-titulo">
                      <p className="abreviatura">Abbrev: {dados[i].abbrev}</p>
                    </div>

                    <div className="container-dados">
                      <p className="texto"><span className="tag">URL</span>{dados[i].url}</p>
                      <p className="texto"><span className="tag">Name</span>{dados[i].name}</p>
                      <p className="texto"><span className="tag">Type</span>{dados[i].type}</p>
                      <p className="texto"><span className="tag">Country Code</span>{dados[i].country_code}</p>
                      <p className="texto"><span className="tag">Description</span>{dados[i].description}</p>
                      <p className="texto"><span className="tag">Administrator</span>{dados[i].administrator}</p>
                      <p className="texto"><span className="tag">Founding Year</span>{dados[i].founding_year}</p>
                      <p className="texto"><span className="tag">Launchers</span>{dados[i].launchers}</p>
                      <p className="texto"><span className="tag">Spacecraft</span>{dados[i].spacecraft}</p>
                    </div>
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
