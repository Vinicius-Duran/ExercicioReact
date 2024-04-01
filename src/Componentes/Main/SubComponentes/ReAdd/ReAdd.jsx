import "./ReAdd.css";
import React from "react";

const ListaNomes = () => {
  const [nome, setNome] = React.useState("");
  const [nomes, setNomes] = React.useState([""]);

  const adicionarNome = () => {
    setNomes([...nomes, nome]);
    setNome("");
  };

  const removerNome = (index) => {
    const novosNomes = [...nomes];
    novosNomes.splice(index, 1);
    setNomes(novosNomes);
  };

  return (
    <div className="readd">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={adicionarNome}>Adicionar</button>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index} className="addre">
            {nome} <button onClick={() => removerNome(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaNomes;
