import "./AdicionarNome.css";
import React from "react";

const AdicionarNome = () => {
  const [nome, setNome] = React.useState("");
  const [nomes, setNomes] = React.useState([]);

  const adicionarNome = () => {
    setNomes([...nomes, nome]);
    setNome("");
  };

  return (
    <div className="add">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={adicionarNome}>Adicionar</button>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdicionarNome;
