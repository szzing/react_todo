import InputTodo from './components/InputTodo';
import Todos from './components/Todo';



function App(props) {
  return (
    <div>
      <h1>일정 목록</h1>
      <InputTodo/>
      <div id="todos">
      <Todos title='나의 일정 001'/>
      <Todos title='나의 일정 002'/>
      </div>
    </div>
  );
}



export default App;
