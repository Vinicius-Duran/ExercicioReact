import './App.css';
import Header from './Componentes/Header/Header';
import Aside from './Componentes/Aside/Aside';
import Main from './Componentes/Main/Main';
import Footer from './Componentes/Footer/Footer';


function App() {
  console.log('App render...');

  return (
    <>
      <Header />
      <Aside />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
