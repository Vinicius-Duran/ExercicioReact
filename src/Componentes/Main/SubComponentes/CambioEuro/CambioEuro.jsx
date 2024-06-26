import "./CambioEuro.css";
import React from "react";

const CambioEuro = () => {
  const [real, setReal] = React.useState(0);
  const [euro, setEuro] = React.useState(0);

  const calcularEuro = () => {
    setEuro(real / 5.5);
  };

  const calcularReal = () => {
    setReal(euro * 5.5);
  };

  return (
    <div className="euro">
      <input
        type="number"
        value={real}
        onChange={(e) => setReal(+e.target.value)}
      />
      <button onClick={calcularEuro}>Calcular Euro</button>
      <input
        type="number"
        value={euro}
        onChange={(e) => setEuro(+e.target.value)}
      />
      <button onClick={calcularReal}>Calcular Real</button>
    </div>
  );
};

export default CambioEuro;
