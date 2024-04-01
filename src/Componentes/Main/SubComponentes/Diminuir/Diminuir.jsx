import "./Diminuir.css";
import React from "react";

const Diminuir = () => {
  const [valor1, setValor1] = React.useState(0);
  const [valor2, setValor2] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  const diminuirValores = () => {
    setResultado(valor1 - valor2);
  };

  return (
    <div className="diminuir">
      <input
        type="number"
        value={valor1}
        onChange={(e) => setValor1(+e.target.value)}
      />
      <input
        type="number"
        value={valor2}
        onChange={(e) => setValor2(+e.target.value)}
      />
      <button onClick={diminuirValores}>Diminuir</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
};

export default Diminuir;
