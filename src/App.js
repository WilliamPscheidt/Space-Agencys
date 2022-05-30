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
      <div className="container-btns">
        <button className="btnPagina" onClick={() => DecrementarDados()}>Page -</button>
        <button className="btnPagina" onClick={() => IncrementarDados()}>Page +</button>
      </div>
      <div className="container">

        {
          dados.length > 0 ?
            dados.map((item, i) => {
              return [
                <div className='card'>
                  <div className="container-card">
                    <div className="card-titulo">
                      <p className="abreviatura">Agency: {dados[i].abbrev}</p>
                    </div>

                    <div className="container-dados">
                      {dados[i].url && <p className="texto"><span className="tag">URL</span>{dados[i].url}</p>}
                      {dados[i].name && <p className="texto"><span className="tag">Name</span>{dados[i].name}</p>}
                      {dados[i].type && <p className="texto"><span className="tag">Type</span>{dados[i].type}</p>}
                      {dados[i].country_code && <p className="texto"><span className="tag">Country</span>{dados[i].country_code}</p>}
                      {dados[i].description && <p className="texto"><span className="tag">Description</span>{dados[i].description}</p>}
                      {dados[i].administrator && <p className="texto"><span className="tag">Administrator</span>{dados[i].administrator}</p>}
                      {dados[i].founding_year && <p className="texto"><span className="tag">Founding Year</span>{dados[i].founding_year}</p>}
                      {dados[i].launchers && <p className="texto"><span className="tag">Launchers</span>{dados[i].launchers}</p>}
                      {dados[i].spacecraft && <p className="texto"><span className="tag">Spacecraft</span>{dados[i].spacecraft}</p>}
                    </div>
                  </div>
                </div>
              ]
            })
            :
            "Loading.."
        }
      </div>


    </div>
  );
}

export default App;
