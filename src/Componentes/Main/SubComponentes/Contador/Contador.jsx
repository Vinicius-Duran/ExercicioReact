import "./Contador.css"
import React from "react";

const Contador = () => {
    const [valor, setValor] = React.useState(0);
  
    const incrementar = () => {
      setValor(valor + 1);
    };
  
    const decrementar = () => {
      setValor(valor - 1);
    };
  
    return (
      <div className="contador">
        <div className="btn">
          <button onClick={decrementar} className="bt1">-</button>
          <span className="spa">{valor}</span>
          <button onClick={incrementar} className="bt2">+</button>
        </div>
      </div>
    );
  };

  export default Contador;