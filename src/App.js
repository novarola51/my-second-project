import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Murat's space. Visit my Linkedin summary through the link below.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/murat-yavuzturk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
