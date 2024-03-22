import "./Main.css";
import DiaAtual from "./SubComponentes/DiaAtual/DiaAtual";
import MesAtual from "./SubComponentes/MesAtual/MesAtual";
import OlaMundo from "./SubComponentes/OlaMundo/OlaMundo";

const Main = () => {
  return (
    <main>
      <OlaMundo/>
      <DiaAtual/>
      <MesAtual/>
    </main>
  );
};

export default Main;
