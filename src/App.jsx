import './App.css';
import Foo from './components/Foo';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hello, DevLab!</h1>
        <p>Welcome to React Quickstart</p>
      </header>

      <div>
        <p>
          Using the <code>Foo</code> component: 
        </p>
        <Foo text="Killer is dead" />
        <br />

        <p>
          GitHub repo:{' '}
          <a href="https://github.com/bwolanczyk87/react-quickstart" target="_blank" rel="noopener noreferrer">
            bwolanczyk87/react-quickstart
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
