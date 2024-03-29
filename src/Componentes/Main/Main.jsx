import "./Main.css";
import BotaoContador from "./SubComponentes/BotaoContador/BotaoContador";
import Contador from "./SubComponentes/Contador/Contador";
import MostrarTela from "./SubComponentes/MostrarTela/MostrarTela";
import Somar from "./SubComponentes/Somar/Somar";
import Diminuir from "./SubComponentes/Diminuir/Diminuir";
import Multiplicar from "./SubComponentes/Multiplicar/Multiplicar";
import Dividir from "./SubComponentes/Dividir/Dividir";


const Main = () => {
  return (
    <main>
      <BotaoContador />
      <Contador />
      <MostrarTela />
      <Somar />
      <Diminuir />
      <Multiplicar />
      <Dividir />
      
    </main>
  );
};

export default Main;
