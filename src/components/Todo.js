import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todos(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function deleteHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  function confirmDeleteHandler() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <div className='card'>
        <h2>{props.title}</h2>
          <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
          </div>
      </div>

      {isModalOpen && <Modal onCancle={closeModalHandler} onConfirm={confirmDeleteHandler}/>}
      {isModalOpen && <Backdrop onCancle={closeModalHandler}/>}

    </div>
  );
}

export default Todos;