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

      <ExibirDados
        agenciaA = {dados.length>0 ? dados[0].abbrev : "Sem dados"}
        agenciaB = {dados.length>0 ? dados[1].abbrev : "Sem dados"}
        agenciaC = {dados.length>0 ? dados[2].abbrev : "Sem dados"}
        agenciaD = {dados.length>0 ? dados[3].abbrev : "Sem dados"}
        agenciaE = {dados.length>0 ? dados[4].abbrev : "Sem dados"}
        agenciaF = {dados.length>0 ? dados[5].abbrev : "Sem dados"}
        agenciaG = {dados.length>0 ? dados[6].abbrev : "Sem dados"}
        agenciaH = {dados.length>0 ? dados[7].abbrev : "Sem dados"}
        agenciaI = {dados.length>0 ? dados[8].abbrev : "Sem dados"}
        agenciaJ = {dados.length>0 ? dados[9].abbrev : "Sem dados"}
      />

    </div>
  );
}

export default App;
