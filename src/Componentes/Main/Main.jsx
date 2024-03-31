import "./Main.css";
import BotaoContador from "./SubComponentes/BotaoContador/BotaoContador";
import Contador from "./SubComponentes/Contador/Contador";
import MostrarTela from "./SubComponentes/MostrarTela/MostrarTela";
import Somar from "./SubComponentes/Somar/Somar";
import Diminuir from "./SubComponentes/Diminuir/Diminuir";
import Multiplicar from "./SubComponentes/Multiplicar/Multiplicar";
import Dividir from "./SubComponentes/Dividir/Dividir";
import CambioDolar from "./SubComponentes/CambioDolar/CambioDolar";
import CambioEuro from "./SubComponentes/CambioEuro/CambioEuro";
import CalculoIMC from "./SubComponentes/CalculoIMC/CalculoIMC";
import AdicionarNome from "./SubComponentes/AdicionarNome/AdicionarNome";
import RemoverNome from "./SubComponentes/RemoverNome/RemoverNome";
import ReAdd from "./SubComponentes/ReAdd/ReAdd";


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
      <CambioDolar/>
      <CambioEuro/>
      <CalculoIMC/> 
      <AdicionarNome/>
      <RemoverNome/>
      <ReAdd/>
    </main>
  );
};

export default Main;
