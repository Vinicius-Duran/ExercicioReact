import "./RemoverNome.css";
import React from "react";

const RemoverNome = () => {
  const [nomes, setNomes] = React.useState([
    "Junin dos cria",
    "Kleitin Fúba",
    "Matheus Amgolano",
  ]);

  const removerNome = (index) => {
    const novosNomes = [...nomes];
    novosNomes.splice(index, 1);
    setNomes(novosNomes);
  };

  return (
    <div className="remove">
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>
            {nome} <button onClick={() => removerNome(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemoverNome;
