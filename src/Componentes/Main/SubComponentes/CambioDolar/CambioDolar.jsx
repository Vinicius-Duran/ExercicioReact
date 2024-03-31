import "./CambioDolar.css"
import React from "react";

const CambioDolar = () => {
    const [real, setReal] = React.useState(0);
    const [dolar, setDolar] = React.useState(0);
  
    const calcularDolar = () => {
      setDolar(real / 5); // 1 real = 1/5 dólar
    };
  
    const calcularReal = () => {
      setReal(dolar * 5); // 1 dólar = 5 reais
    };
  
    return (
      <div className="cambio">
        <input type="number" value={real} onChange={(e) => setReal(+e.target.value)} />
        <button onClick={calcularDolar}>Calcular Dólar</button>
        <input type="number" value={dolar} onChange={(e) => setDolar(+e.target.value)} />
        <button onClick={calcularReal}>Calcular Real</button>
      </div>
    );
  };

  export default CambioDolar;