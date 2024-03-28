import React from "react";

const BotaoContador = () => {
    const [contador, setContador] = React.useState(0);
  
    const incrementarContador = () => {
      setContador(contador + 1);
    };
  
    return (
      <div>
        <button onClick={incrementarContador}>Contador é: {contador}</button>
      </div>
    );
  };

  export default BotaoContador;