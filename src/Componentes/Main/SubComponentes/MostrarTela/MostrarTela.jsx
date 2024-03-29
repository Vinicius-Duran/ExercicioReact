import "./MostrarTela.css"
import React from "react";

const MostrarTela = () => {
    const [tela, setTela] = React.useState("");
  
    const mostrarTexto = (texto) => {
      setTela(texto);
    };
  
    return (
      <div className="mostrar">
        <button onClick={() => mostrarTexto("Tela I")} className="butao">Tela I</button>
        <button onClick={() => mostrarTexto("Tela II")} className="butao">Tela II</button>
        <button onClick={() => mostrarTexto("Tela III")} className="butao">Tela III</button>
        <p>{tela}</p>
      </div>
    );
  };

  export default MostrarTela;