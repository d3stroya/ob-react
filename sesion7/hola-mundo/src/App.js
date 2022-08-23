// import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
// import GreetingStyled from './components/pure/greetingStyled';
// import Father from './components/container/father';

function App() {
  return (
    <div className="App">
        <TaskListComponent></TaskListComponent>

        { /** Gestión de eventos */}
        {/* <Father></Father> */}
    </div>
  );
}

export default App;
