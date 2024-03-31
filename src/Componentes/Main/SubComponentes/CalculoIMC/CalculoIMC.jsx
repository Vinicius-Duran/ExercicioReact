import "./CalculoIMC.css"
import React from "react";

const CalculoIMC = () => {
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);
    const [status, setStatus] = React.useState("");
  
    const calcularIMC = () => {
      const imc = peso / (altura * altura);
      setResultado(imc);
      if (imc < 18.5) {
        setStatus("Abaixo do peso");
      } else if (imc < 25) {
        setStatus("Peso normal");
      } else if (imc < 30) {
        setStatus("Sobrepeso");
      } else {
        setStatus("Obeso");
      }
    };
  
    return (
      <div className="imc">
        <input type="number" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(+e.target.value)} />
        <input type="number" placeholder="Altura (m)" value={altura} onChange={(e) => setAltura(+e.target.value)} />
        <button onClick={calcularIMC}>Calcular IMC</button>
        <p>IMC: {resultado.toFixed(2)}</p>
        <p>Status: {status}</p>
      </div>
    );
  };
  
  // Componente AdicionarNome
  const AdicionarNome = () => {
    const [nome, setNome] = React.useState("");
    const [nomes, setNomes] = React.useState([]);
  
    const adicionarNome = () => {
      setNomes([...nomes, nome]);
      setNome("");
    };
  
    return (
      <div className="imc">
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <button onClick={adicionarNome}>Adicionar</button>
        <ul>
          {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default CalculoIMC;