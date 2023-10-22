import './App.css';
import Area_Cartao_Credito from './componentes/Area_Cartao_Credito';
import Area_ExemploAPP from './componentes/Area_ExemploAPP';
import Area_Vantagens from './componentes/Area_Vantagens';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Slogan from './componentes/Slogan';

function App() {
  return (
    <main>
        <Header/>
        <Slogan/>
        <Area_Cartao_Credito/>
        <Area_Vantagens/>
        <Area_ExemploAPP/>
        <Footer/>
    </main>
  );
}

export default App;
