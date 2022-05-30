import axios from "axios";
import { useEffect, useState } from "react";

import ExibirDados from "./Componentes/ExibirDados";

import './Estilos/Global.css'

function App() {
  
  const [pagina, setPagina] = useState(0)
  const [dados, setDados] = useState([])

  useEffect(() => {
    IncrementarDados()
  }, [])

  const IncrementarDados = () => {
    setPagina(pagina+10)
    axios.get("https://spacelaunchnow.me/api/ll/2.1.0/agencies/?offset="+pagina)
    .then(res => {
      setDados(res.data.results)
    })
  }

  const DecrementarDados = () => {
    setPagina(pagina-10)
    axios.get("https://spacelaunchnow.me/api/ll/2.1.0/agencies/?offset="+pagina)
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

        <ExibirDados
          agencia = {dados.length>0 ? dados : "Sem dados"}
        />
      </div>


    </div>
  );
}

export default App;
