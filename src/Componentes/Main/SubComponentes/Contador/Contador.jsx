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
      <div>
        <button onClick={decrementar}>-</button>
        <span>{valor}</span>
        <button onClick={incrementar}>+</button>
      </div>
    );
  };

  export default Contador;