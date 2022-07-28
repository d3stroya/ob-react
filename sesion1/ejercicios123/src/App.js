/**
 * TODO: Renderizado de componentes en la solución: El Componente A debe ser renderizado dentro del componenet App.js del proyecto. El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente
 */

import logo from './logo.svg';
import './App.css';
import ContactList from './components/container/contactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
