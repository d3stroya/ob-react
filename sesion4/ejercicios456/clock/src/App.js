import logo from './logo.svg';
import './App.css';
import ClockComponent from './components/hooks/clockComponent';
// import Clock from './components/pure/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clock></Clock> */}
        <ClockComponent></ClockComponent>
      </header>
    </div>
  );
}

export default App;
