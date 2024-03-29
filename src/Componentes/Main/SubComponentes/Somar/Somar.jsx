import "./Somar.css"
import React from "react";

const Somar = () => {
    const [valor1, setValor1] = React.useState(0);
    const [valor2, setValor2] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);
  
    const somarValores = () => {
      setResultado(valor1 + valor2);
    };
  
    return (
      <div className="somar">
        <input type="number" value={valor1} onChange={(e) => setValor1(+e.target.value)} />
        <input type="number" value={valor2} onChange={(e) => setValor2(+e.target.value)} />
        <button onClick={somarValores}>Somar</button>
        <p>Resultado: {resultado}</p>
      </div>
    );
  };

  export default Somar;