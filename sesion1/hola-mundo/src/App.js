import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx */}
        {/* <Greeting name="Anabel"></Greeting> */}
        {/* <GreetingF name="Anabel"></GreetingF> */}

        {/* <TaskListComponent></TaskListComponent> */}

        <GreetingStyled name="Franky"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
