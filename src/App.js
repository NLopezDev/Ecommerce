import macarons from './image/ok.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#ini">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#nosot">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#prod">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#cont" tabindex="-1" aria-disabled="true">Contacto</a>
                    </li>
                </ul>
            </nav>

        <img src={macarons} className="App-logo" alt="macarons" />
        
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
