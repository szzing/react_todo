import { useRef, useState } from 'react';

const InputTodo = () => {
  const todoInputRef = useRef();
  const [enteredTodo, setEnteredTodo] = useState('');
  const [enteredTodoIsValid, setEnteredTodoIsValid] = useState(false);
  const [enteredTodoToched, setEnteredTodoToched] = useState(false);

  const todoInputChangeHandler = event => {
    setEnteredTodo(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredTodoToched(true);

    if(enteredTodo.trim()==="") {
      setEnteredTodoIsValid(false);
      return;
    }

    setEnteredTodoIsValid(true);

    const enteredValue = todoInputRef.current.value;
  }
  const todoInputIsInvalid = !enteredTodoIsValid && enteredTodoToched;
  const todoInputClasses = todoInputIsInvalid?'form-control invalid' : 'form-control';

  return (
    <div className={todoInputClasses} inputItem={enteredTodo}>
      <form onSubmit={formSubmissionHandler}>
        <input ref={todoInputRef} type="text" id="todo" placeholder='일정을 입력하세요.' onChange={todoInputChangeHandler}/>
        <input type="submit" value="Submit" className='btn'/>
      </form>
      {todoInputIsInvalid && <p className='error-text'>최소 한 글자 이상 입력하세요.</p>}
    </div>
  );
}


export default InputTodo;