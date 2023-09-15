import DigaMeuNome from './components/digaMeuNome';
import OlaMundo from './components/olaMundo';
import './App.css';
import OpaAmigo from './components/opaAmigo';

function App() {
  return (
    <div className="container">
      <h1> Olá mundo</h1>
      <OlaMundo/>
      <OpaAmigo/>
      <DigaMeuNome nome="Kauan Lopes" profissao="Policial" idade="16 anos" sonho="namorada"/>
    </div>
  );
}

export default App;
