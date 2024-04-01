import "./BotaoContador.css";
import React from "react";

const BotaoContador = () => {
  const [contador, setContador] = React.useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="divcontador">
      <button onClick={incrementarContador} className="btcontador">
        Contador é: {contador}
      </button>
    </div>
  );
};

export default BotaoContador;
