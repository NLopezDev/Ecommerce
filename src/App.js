import macarons from './image/ok.png';
import './App.css';
eventos
import NavBar from './Components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import react from 'react';
import {BrowserRouter,Swtich, Router} from 'react-router-dom';
import components from './components';
main


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Swtich>
      <Route exact path="/src/Components/NavBar.js">
      <NavBar/>
      </Route>
      <Route exact path="/src/Components/ItemListContainer.js">
      <ItemListContainer/>
      </Route>
      
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
        </Swtich>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
