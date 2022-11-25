import './App.css';
import Todos from './components/Todos';
import TodosItem from './components/TodosItem';
import TodosList from './components/TodosList';

function App() {
  return (
    <div className="App">
    <Todos/>
    <TodosList/>
    </div>
  );
}

export default App;
