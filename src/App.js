import macarons from './image/ok.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={macarons} className="App-logo" alt="macarons" />

        <h1>Nuestra historia</h1>
                    <p>En el año 2019 nace un sueño. El sueño de una emprendedora que querían ofrecer algo diferente, un concepto distinto en pastelería. Nuestro objetivo es ofrecer un producto de alta calidad, excelente presentación, pero con el sabor de
                        lo casero.</p>
                    <p>En la actualidad, desarrollamos, elaboramos y comercializamos productos de pastelería y panificados.</p>
                    <p>Los invitamos a descubrir las delicias de nuestra carta.</p><br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
