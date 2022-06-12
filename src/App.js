import InputTodo from './components/InputTodo';
import Todos from './components/Todo';



function App(props) {
  return (
    <div>
      <h1>My Todos</h1>
      <InputTodo/>
      <div id="todos">
      <Todos title='hello'/>
      </div>
    </div>
  );
}



export default App;
