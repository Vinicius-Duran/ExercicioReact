import React from "react";
import "./MostrarTela.css";
import ImagemTela1 from './Lula.jpg'; // Importe a imagem para a tela 1
import ImagemTela2 from './Bob.jpg'; // Importe a imagem para a tela 2
import ImagemTela3 from './Patrick.jpg'; // Importe a imagem para a tela 3

const MostrarTela = () => {
  const [tela, setTela] = React.useState("");
  const [imagem, setImagem] = React.useState(null);

  const mostrarTexto = (texto) => {
    setTela(texto);
    definirImagem(texto); // Atualiza a imagem ao mudar de tela
  };

  const definirImagem = (texto) => {
    // Define a imagem com base no texto da tela
    switch (texto) {
      case "Tela I":
        setImagem(ImagemTela1);
        break;
      case "Tela II":
        setImagem(ImagemTela2);
        break;
      case "Tela III":
        setImagem(ImagemTela3);
        break;
      default:
        setImagem(null);
    }
  };

  return (
    <div className="mostrar">
      {imagem && <img src={imagem} alt="Imagem da tela" />} {/* Exibe a imagem se estiver definida */}
      <button onClick={() => mostrarTexto("Tela I")} className="butao">
        Tela I 
      </button>
      <button onClick={() => mostrarTexto("Tela II")} className="butao">
        Tela II
      </button>
      <button onClick={() => mostrarTexto("Tela III")} className="butao">
        Tela III
      </button>
      <p>{tela}</p>
    </div>
  );
};

export default MostrarTela;
