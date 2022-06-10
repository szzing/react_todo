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
    console.log(enteredValue);
  }
  const todoInputIsInvalid = !enteredTodoIsValid && enteredTodoToched;
  const todoInputClasses = todoInputIsInvalid?'form-control invalid' : 'form-control';

  return (
    <div className={todoInputClasses}>
      <form onSubmit={formSubmissionHandler}>
        <input ref={todoInputRef} type="text" id="todo" placeholder='What to do?' onChange={todoInputChangeHandler}/>
        <input type="submit" value="Submit" className='btn'/>
      </form>
      {todoInputIsInvalid && <p className='error-text'>Todo must not be empty.</p>}
    </div>
  );
}


export default InputTodo;